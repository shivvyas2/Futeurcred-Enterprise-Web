import Icon from "@/components/Icon";
import HeroBackground from "@/components/HeroBackground";
import OutcomesScreen1 from "@/components/outcomes/OutcomesScreen1";
import OutcomesScreen2 from "@/components/outcomes/OutcomesScreen2";
import OutcomesScreen3 from "@/components/outcomes/OutcomesScreen3";
import OutcomesScreen4 from "@/components/outcomes/OutcomesScreen4";
import OutcomesScreen5 from "@/components/outcomes/OutcomesScreen5";
import { Button } from "@/components/ui/button";
import { Rocket, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function OutcomesPage() {
  return (
    <div className="min-h-screen bg-[#070A10] text-white">
      {/* Hero Section */}
      <HeroBackground imagePath="/hero-bg/outcomes-bg.jpg">
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full mb-8 border border-white/20">
          <Icon name="trophy.svg" className="h-5 w-5" width={20} height={20} />
          <span className="font-medium text-white text-sm uppercase tracking-tight">Outcomes</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 leading-tight tracking-tight">
          What Changes When You
          <br />
          <span className="text-white">Stop Rejecting Potential</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-white/90 font-medium">
              Most fintech platforms measure success at the moment of approval.
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg font-bold text-white">
              LumiqAI shifts the center of gravity upstream — to the moment before approval, where most value is silently destroyed.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-[#0B1020] font-semibold shadow-xl hover:shadow-2xl uppercase tracking-wide hover:bg-white/90"
            asChild
          >
            <Link to="/request-pilot" className="flex items-center gap-2.5">
              <Rocket className="h-5 w-5 flex-shrink-0" />
              <span>Request Private Pilot</span>
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white font-semibold uppercase tracking-wide hover:bg-white/10 hover:border-white/40 bg-white/5 shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
              <FileText className="h-5 w-5 flex-shrink-0" />
              <span>View API Docs</span>
            </a>
          </Button>
        </div>
      </HeroBackground>

      {/* Screen 1 - Funnel Compounds Upstream (Light Band) */}
      <OutcomesScreen1 />

      {/* Screen 2 - Retention Becomes Gravity (Dark Band) */}
      <OutcomesScreen2 />

      {/* Screen 3 - Revenue Moves Upstream (Light Band) */}
      <OutcomesScreen3 />

      {/* Screen 4 - Architecture + Time-Based Moat (Dark Band) */}
      <OutcomesScreen4 />

      {/* Screen 5 - Economics + Artifacts + CTA (Light Band) */}
      <OutcomesScreen5 />
    </div>
  );
}
