import { useState } from "react";
import { Send, Rocket, Building2, Mail, User, MessageSquare, Phone, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBackground from "@/components/HeroBackground";

export default function RequestPilot() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    phone: "",
    useCase: "",
    message: "",
    website: "", // Honeypot field - should remain empty
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/send-pilot-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit your request");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Failed to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#070A10] text-white">
        <HeroBackground imagePath="/hero-bg/outcomes-bg.jpg">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Send className="w-10 h-10 text-emerald-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 tracking-tight">
              Request Received
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Thank you for your interest in LumiqAI. Our team will review your request and reach out within 24-48 hours.
            </p>
            <Button
              onClick={() => window.history.back()}
              className="bg-white text-[#0B1020] px-8 py-4 text-base font-semibold rounded-full shadow-lg uppercase hover:bg-white/90 transition-colors"
            >
              Go Back
            </Button>
          </div>
        </HeroBackground>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070A10] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-[#0a1628] to-[#070A10] -mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
            <Rocket className="h-5 w-5" />
            <span className="font-medium text-white text-sm uppercase tracking-tight">Request Private Pilot</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Ready to Build the Future <br />
            <span className="text-white/90">of Digital Finance?</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Reach out to our team and we'll be in touch to discuss how LumiqAI can transform your credit operations.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users, catches bots */}
                <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                  <label htmlFor="website">Website (leave empty)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">First name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/80">Last name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Company name</label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                      placeholder="Acme Financial"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Company email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                      placeholder="john@acmefinancial.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Phone number (optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">Primary use case</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                    <select
                      value={formData.useCase}
                      onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white appearance-none"
                      required
                    >
                      <option value="" className="bg-[#0B1020]">Select a use case</option>
                      <option value="credit-decisioning" className="bg-[#0B1020]">Credit Decisioning</option>
                      <option value="pre-qualification" className="bg-[#0B1020]">Pre-Qualification Engine</option>
                      <option value="risk-assessment" className="bg-[#0B1020]">Risk Assessment</option>
                      <option value="revenue-optimization" className="bg-[#0B1020]">Revenue Optimization</option>
                      <option value="other" className="bg-[#0B1020]">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-white/80">
                    What are you building, and in what countries? Details are helpful!
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white placeholder-white/40 min-h-[140px] resize-none"
                      placeholder="Tell us about your project, current challenges, and goals..."
                      required
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-8 py-5 bg-white text-[#0B1020] rounded-xl font-semibold text-lg uppercase hover:bg-white/90 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <Send className="w-5 h-5" />
                </Button>

                <p className="text-sm text-white/50 text-center">
                  By submitting this form, I confirm that I have read and understood LumiqAI's{" "}
                  <a href="/privacy-policy" className="text-white/70 hover:text-white underline">
                    Privacy Statement
                  </a>
                  .
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-lg mb-3">What happens next?</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">1</span>
                    </div>
                    <span>Our team reviews your request within 24-48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">2</span>
                    </div>
                    <span>We schedule a discovery call to understand your needs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold">3</span>
                    </div>
                    <span>You receive a customized pilot proposal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <h3 className="font-bold text-lg mb-3">Enterprise Ready</h3>
                <p className="text-white/70 text-sm mb-4">
                  LumiqAI is built for regulated financial institutions with enterprise-grade security and compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">SOC 2</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">ISO 27001</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
