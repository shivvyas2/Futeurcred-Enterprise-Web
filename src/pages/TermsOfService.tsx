export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-[#07124A] -mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
            Terms of <span className="text-blue-400">Service</span>
          </h1>
          <p className="text-white/70">Last updated: December 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using FUTEURCREDX™ services, including the LUMIQ AI™ platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground">
                FUTEURCREDX provides business credit monitoring, AI-powered credit intelligence, lending optimization tools, and related services for businesses and financial institutions. Our LUMIQ AI™ engine powers intelligent credit decisioning and analytics.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground mb-4">To use our services, you may need to create an account. You agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Acceptable Use</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use our services for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the integrity of our services</li>
                <li>Transmit viruses, malware, or other harmful code</li>
                <li>Resell or redistribute our services without authorization</li>
                <li>Use our data for purposes other than those expressly permitted</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, features, and functionality of our services, including but not limited to LUMIQ AI™, are owned by FUTEURCREDX and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Data and Privacy</h2>
              <p className="text-muted-foreground">
                Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of information as described in our Privacy Policy. You retain ownership of your data, and we process it only to provide our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Payment Terms</h2>
              <p className="text-muted-foreground">
                Certain services require payment. You agree to pay all applicable fees and charges. All payments are non-refundable unless otherwise specified. We reserve the right to modify pricing with reasonable notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not warrant that services will be uninterrupted, secure, or error-free. Credit scores and recommendations are for informational purposes and should not be the sole basis for financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, FUTEURCREDX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate your access to our services at any time for violation of these terms or for any other reason at our discretion. Upon termination, your right to use our services will immediately cease.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated terms on our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">13. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Email:</strong> legal@futeurcredx.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
