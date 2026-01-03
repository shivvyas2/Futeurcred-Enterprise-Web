export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 bg-black -mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tight mb-6 text-white">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-white/70">Last updated: December 30, 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                FUTEURCREDX™ ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including the LUMIQ AI™ platform and related products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and company information when you register or contact us.</li>
                <li><strong className="text-foreground">Business Data:</strong> Credit-related information, financial data, and business metrics you provide or authorize us to access.</li>
                <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our platform, including log data, device information, and analytics.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use collected information to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, updates, and marketing communications</li>
                <li>Improve our products and services through analytics</li>
                <li>Protect against fraud and unauthorized access</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-leading security measures to protect your data. All information is encrypted in transit and at rest. We regularly audit our security practices and maintain compliance with relevant data protection regulations. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">We don't sell your data.</strong> We may share information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>With service providers who assist in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Third-Party Services</h2>
              <p className="text-muted-foreground">
                Our platform may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong className="text-foreground">Email:</strong> privacy@futeurcredx.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
