import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Input validation schema
const PilotRequestSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50, 'First name too long').trim(),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name too long').trim(),
  companyName: z.string().min(1, 'Company name is required').max(100, 'Company name too long').trim(),
  companyEmail: z.string().email('Invalid email format').max(100, 'Email too long'),
  phone: z.string().max(20, 'Phone number too long').optional().or(z.literal('')),
  useCase: z.enum(
    ['credit-decisioning', 'pre-qualification', 'risk-assessment', 'revenue-optimization', 'other'],
    { errorMap: () => ({ message: 'Invalid use case selected' }) }
  ),
  message: z.string().min(1, 'Message is required').max(2000, 'Message too long').trim(),
  // Honeypot field - should always be empty if submitted by a human
  website: z.string().max(0, 'Bot detected').optional().or(z.literal('')),
});

// Simple in-memory rate limiting (resets on function restart)
// For production, consider using Upstash Redis for persistent rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    // First request or window expired - reset
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (record.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment count
  record.count++;
  return { allowed: true };
}

// Clean up old entries periodically to prevent memory leaks
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}

// Helper to escape HTML to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown';

    // Check rate limit
    const rateLimit = checkRateLimit(clientIP);
    if (!rateLimit.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({
          error: 'Too many requests. Please try again later.',
          retryAfter: rateLimit.retryAfter,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimit.retryAfter),
            ...corsHeaders,
          },
        }
      );
    }

    // Parse request body
    let rawData: unknown;
    try {
      rawData = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    // Validate input data
    const validationResult = PilotRequestSchema.safeParse(rawData);
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      }));
      console.warn('Validation failed:', errors);
      return new Response(JSON.stringify({ error: 'Validation failed', details: errors }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const data = validationResult.data;

    // Check honeypot - if filled, it's likely a bot
    if (data.website && data.website.length > 0) {
      console.warn(`Honeypot triggered by IP: ${clientIP}`);
      // Return success to not alert the bot, but don't actually send email
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    console.log('Received validated pilot request:', {
      name: `${data.firstName} ${data.lastName}`,
      company: data.companyName,
      email: data.companyEmail,
      useCase: data.useCase,
      ip: clientIP,
    });

    // Escape HTML in user-provided content for email safety
    const safeFirstName = escapeHtml(data.firstName);
    const safeLastName = escapeHtml(data.lastName);
    const safeCompanyName = escapeHtml(data.companyName);
    const safeCompanyEmail = escapeHtml(data.companyEmail);
    const safePhone = data.phone ? escapeHtml(data.phone) : null;
    const safeUseCase = escapeHtml(data.useCase);
    const safeMessage = escapeHtml(data.message);

    // Send notification email to Sean
    const notificationEmail = await resend.emails.send({
      from: 'LumiqAI <onboarding@resend.dev>',
      to: ['sean@futeurcredx.com'],
      subject: `New Pilot Request from ${safeCompanyName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Pilot Request</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${safeFirstName} ${safeLastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Company:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${safeCompanyName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">
                  <a href="mailto:${data.companyEmail}" style="color: #2563eb;">${safeCompanyEmail}</a>
                </td>
              </tr>
              ${safePhone ? `
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Phone:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${safePhone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Use Case:</td>
                <td style="padding: 8px 0; color: #1e293b; font-weight: 500;">${safeUseCase}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 12px;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px;">Message</h2>
            <p style="color: #475569; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin-top: 24px;">
            This email was sent from the LumiqAI Request Pilot form.
          </p>
        </div>
      `,
    });

    console.log('Notification email sent:', notificationEmail);

    // Send confirmation email to the requester
    const confirmationEmail = await resend.emails.send({
      from: 'LumiqAI <onboarding@resend.dev>',
      to: [data.companyEmail],
      subject: 'We received your pilot request - LumiqAI',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #0a1628 0%, #1a2b4a 100%); padding: 30px; border-radius: 12px; margin-bottom: 24px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank You, ${safeFirstName}!</h1>
          </div>
          
          <p style="color: #475569; line-height: 1.6; font-size: 16px;">
            We've received your request for a private pilot of LumiqAI. Our team is reviewing your submission and will be in touch within 24-48 hours.
          </p>
          
          <div style="background: #f8fafc; padding: 24px; border-radius: 12px; margin: 24px 0;">
            <h2 style="color: #1e293b; margin: 0 0 16px 0; font-size: 18px;">What happens next?</h2>
            <ol style="color: #475569; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>Our team reviews your request</li>
              <li>We schedule a discovery call to understand your needs</li>
              <li>You receive a customized pilot proposal</li>
            </ol>
          </div>
          
          <p style="color: #475569; line-height: 1.6; font-size: 16px;">
            In the meantime, feel free to explore our <a href="https://lumiqai.com/docs" style="color: #2563eb;">API documentation</a> to learn more about our capabilities.
          </p>
          
          <p style="color: #475569; line-height: 1.6; font-size: 16px; margin-top: 24px;">
            Best regards,<br>
            <strong>The LumiqAI Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;">
          
          <p style="color: #94a3b8; font-size: 12px; text-align: center;">
            Powered by FuteurCredX • SOC 2 • ISO 27001 Compliant
          </p>
        </div>
      `,
    });

    console.log('Confirmation email sent:', confirmationEmail);

    // Periodically clean up old rate limit entries
    cleanupRateLimitMap();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (error: any) {
    console.error('Error in send-pilot-request function:', error);
    // Return generic error to client (don't leak internal details)
    return new Response(JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
}

