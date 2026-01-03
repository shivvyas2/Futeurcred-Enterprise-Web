import { motion, useReducedMotion } from "framer-motion";
import { FileText, ShieldCheck, TrendingUp, ClipboardList, Scale, Eye, Milestone } from "lucide-react";
import PremiumSectionShell from "./ui/PremiumSectionShell";
import GlassCard from "./ui/GlassCard";
import Chip from "./ui/Chip";
import MockFrame from "./ui/MockFrame";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const sponsorCards = [
  {
    id: "auditability",
    title: "Auditability",
    icon: FileText,
    accentColor: "blue" as const,
    chips: [
      { text: "Reason codes explained", icon: ClipboardList },
      { text: "Full history auditable", icon: FileText },
    ],
  },
  {
    id: "policy",
    title: "Policy Alignment",
    icon: ShieldCheck,
    accentColor: "violet" as const,
    chips: [
      { text: "Sponsor rule compliance", icon: Scale },
      { text: "No risk override", icon: ShieldCheck },
    ],
  },
  {
    id: "progression",
    title: "Transparent Progression",
    icon: TrendingUp,
    accentColor: "amber" as const,
    chips: [
      { text: "Explainable access increase", icon: Eye },
      { text: "Milestones visible", icon: Milestone },
    ],
  },
];

export default function DesignedForSponsorsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <PremiumSectionShell accent="violet">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
          Designed for Sponsors, Not Around Them
        </h2>
        <p className="text-base text-white/60 font-medium mt-4 max-w-2xl mx-auto">
          LumiqAI is built to respect sponsor bank constraints, align with compliance frameworks, produce auditable decision trails, and allow immediate intervention if needed.
        </p>
      </motion.div>

      {/* Sponsor Confidence Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
        {sponsorCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.65 }}
              whileHover={!shouldReduceMotion ? { y: -3, boxShadow: "0 30px 80px rgba(0,0,0,0.5)" } : {}}
              className="transition-all duration-300"
            >
              <GlassCard accentColor={card.accentColor} className="p-6 h-full">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2">
                  {card.chips.map((chip, i) => {
                    const ChipIcon = chip.icon;
                    return (
                      <Chip key={i} icon={<ChipIcon className="w-3 h-3" />}>
                        {chip.text}
                      </Chip>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Reason Codes Dashboard Mock */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.65 }}
        whileHover={!shouldReduceMotion ? { y: -2, scale: 1.01 } : {}}
        className="mt-10 transition-transform duration-300"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden shadow-2xl">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">
                Reason Codes Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-emerald-400/80 ${!shouldReduceMotion ? 'animate-[ledPulse_3s_ease-in-out_infinite]' : ''}`} />
              <span className="text-[10px] text-white/40">Live Preview</span>
            </div>
          </div>
          
          {/* Screenshot */}
          <img 
            src="/screenshots/reason-codes-dashboard.jpg" 
            alt="Reason Codes Dashboard" 
            className="w-full h-auto object-cover"
          />
        </div>

        <p className="text-center text-[12px] text-white/50 mt-4">
          Every decision produces auditable reason codes visible to sponsors.
        </p>
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.65 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
      >
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl"
          asChild
        >
          <Link to="/request-pilot">
            Start Pilot
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white bg-transparent font-medium shadow-lg hover:shadow-xl"
          asChild
        >
          <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-white">
            View Docs
          </a>
        </Button>
      </motion.div>

      <style>{`
        @keyframes ledPulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </PremiumSectionShell>
  );
}
