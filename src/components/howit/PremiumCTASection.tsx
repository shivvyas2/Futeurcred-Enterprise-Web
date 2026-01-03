import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PremiumCTASection() {
  return (
    <section className="py-24 md:py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
              Ready to get started
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Build credit readiness
            <br />
            <span className="text-white/70">into your product</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            LumiqAI helps fintechs turn declines into progression pipelines—without relaxing policy or adding risk.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl"
              asChild
            >
              <Link to="/request-pilot" className="flex items-center gap-2.5">
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/30 font-medium shadow-lg hover:shadow-xl"
              asChild
            >
              <a href="https://docs.futeurcredx.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
                <span>View Documentation</span>
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-6 mt-12 text-sm text-white/40">
            <span>SOC 2 Compliant</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>No credit decisions</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Sponsor-safe</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
