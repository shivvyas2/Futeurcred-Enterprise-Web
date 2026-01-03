import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import HeroBackground from "@/components/HeroBackground";
import RiskControlScreen1 from "@/components/risk/RiskControlScreen1";
import RiskControlScreen2 from "@/components/risk/RiskControlScreen2";
import RiskControlScreen3 from "@/components/risk/RiskControlScreen3";
import RiskControlScreen4 from "@/components/risk/RiskControlScreen4";
import RiskControlScreen5 from "@/components/risk/RiskControlScreen5";
import { Rocket, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function RiskAndControlPage() {
  return (
    <div className="min-h-screen bg-[#070A10] text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/risk-control-bg.jpg">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="safe box.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">Risk & Control</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          Risk, Control, and
          <br />
          <span className="text-white">Sponsor Alignment</span>
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-medium">
          This Is How Uncertainty Is Governed — Not Avoided
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/90 font-medium">
              LumiqAI is not a lending product. It is not an underwriting shortcut. It is not a workaround for policy.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg font-bold text-white">
              LumiqAI is a Pre-Credit Operating System — a control layer that governs how uncertainty is handled before capital is ever placed at risk.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0B1020] px-8 py-4 text-base font-semibold rounded-full shadow-lg uppercase hover:bg-white/90 transition-colors"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Request Private Pilot
            </Button>
          </Link>
          <Link to="/docs">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white px-8 py-4 text-base font-semibold rounded-full uppercase hover:bg-white/10 transition-colors bg-white/5"
            >
              <FileText className="mr-2 h-5 w-5" />
              View API Docs
            </Button>
          </Link>
        </div>
      </HeroBackground>

      {/* Screen 1 - Sponsor-Safe Positioning (Light Band) */}
      <RiskControlScreen1 />

      {/* Screen 2 - Controls + Policy Locks (Dark Band) */}
      <RiskControlScreen2 />

      {/* Screen 3 - Auditability + Reason Codes (Light Band) */}
      <RiskControlScreen3 />

      {/* Screen 4 - Data Governance & Security (Dark Band) */}
      <RiskControlScreen4 />

      {/* Screen 5 - Monitoring + Intervention (Light Band) */}
      <RiskControlScreen5 />

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060B] via-[#070A12] to-[#0B1020]" />
        
        {/* Radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight uppercase">
            If Your Institution Values Control Over Comfort
          </h2>
          <Button
            size="lg"
            className="bg-white text-[#0B1020] px-10 py-4 text-lg font-semibold rounded-full shadow-lg uppercase hover:bg-white/90 transition-colors"
          >
            <Icon name="rocket.svg" className="mr-3 h-6 w-6" width={24} height={24} />
            Request a Private Pilot
          </Button>
          <p className="text-sm text-white/50 mt-6 font-medium">
            One platform per category.
          </p>
        </div>
      </section>
    </div>
  );
}
