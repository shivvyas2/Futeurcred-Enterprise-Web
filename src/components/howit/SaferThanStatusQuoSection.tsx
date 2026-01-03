import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle, ArrowRight, X } from "lucide-react";
import PremiumSectionShell from "./ui/PremiumSectionShell";
import GlassCard from "./ui/GlassCard";
import Chip from "./ui/Chip";

const contrastRows = [
  { 
    left: "Owner FICO", 
    leftSub: "Single point of failure", 
    right: "Visibility", 
    rightSub: "Full context revealed",
    whyBlind: "Relies on one data point that misses operational context.",
    whatAdds: "Continuous observation of behavior, not just a snapshot score.",
  },
  { 
    left: "Hard revenue thresholds", 
    leftSub: "Binary gatekeeping", 
    right: "Staged exposure", 
    rightSub: "Controlled progression",
    whyBlind: "Arbitrary cutoffs ignore trajectory and momentum.",
    whatAdds: "Gradual access increases based on demonstrated consistency.",
  },
  { 
    left: "Binary rejection", 
    leftSub: "No path forward", 
    right: "Documented progression", 
    rightSub: "Auditable trail",
    whyBlind: "Rejects provide no feedback or improvement path.",
    whatAdds: "Every decision produces reason codes and next-step guidance.",
  },
  { 
    left: "Blind outcomes", 
    leftSub: "No explanation", 
    right: "Explainable outcomes", 
    rightSub: "Clear reasoning",
    whyBlind: "Decisions happen without transparency to anyone.",
    whatAdds: "Full audit trail visible to platforms, sponsors, and users.",
  },
];

export default function SaferThanStatusQuoSection() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedRow, setSelectedRow] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(true);

  return (
    <PremiumSectionShell accent="blue">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
          Why This Is Safer Than the Status Quo
        </h2>
        <p className="text-lg text-white/70 font-medium mt-4">
          When uncertainty appears, most systems default to blind decisions.
        </p>
      </motion.div>

      {/* Main Compare Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.65 }}
      >
        <GlassCard 
          hasWindowBar 
          windowLabel="Policy-safe transformation"
          className="p-0"
        >
          <div className="p-6 md:p-8">
            {/* Column Headers */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,60px,1fr] gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-white/50" />
                </div>
                <span className="text-sm font-bold text-white/80 uppercase tracking-wide">
                  Status Quo Defaults
                </span>
              </div>
              <div className="hidden md:block" />
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white/80" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  LumiqAI Replaces With
                </span>
              </div>
            </div>

            {/* Animated signal trace line */}
            <div className="relative mb-6">
              <svg className="absolute inset-x-0 top-0 w-full h-1 overflow-visible" preserveAspectRatio="none">
                <line 
                  x1="0" y1="0" x2="100%" y2="0" 
                  stroke="rgba(255,255,255,0.08)" 
                  strokeWidth="1" 
                  strokeDasharray="6 4"
                  className={!shouldReduceMotion ? "animate-[traceLine_14s_linear_infinite]" : ""}
                />
              </svg>
            </div>

            {/* Main content: Rows + Detail Drawer */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
              {/* Rows */}
              <div className="space-y-1">
                {contrastRows.map((row, i) => (
                  <motion.button
                    key={i}
                    onClick={() => { setSelectedRow(i); setDrawerOpen(true); }}
                    whileHover={!shouldReduceMotion ? { scale: 1.01 } : {}}
                    className={`w-full text-left grid grid-cols-1 md:grid-cols-[1fr,40px,1fr] gap-3 md:gap-4 py-4 px-4 rounded-2xl transition-all duration-200 border ${
                      selectedRow === i 
                        ? "bg-white/[0.06] border-white/15 shadow-lg" 
                        : "bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/8"
                    }`}
                  >
                    {/* Left */}
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-white/70 block">{row.left}</span>
                        <span className="text-[11px] text-white/40">{row.leftSub}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center justify-center">
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full transition-all ${
                        selectedRow === i 
                          ? "bg-white/15 border border-white/20" 
                          : "bg-white/5 border border-white/10"
                      }`}>
                        <ArrowRight className="w-3.5 h-3.5 text-white/60" />
                      </span>
                    </div>

                    {/* Right */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-white block">{row.right}</span>
                        <span className="text-[11px] text-white/55">{row.rightSub}</span>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Detail Drawer */}
              <AnimatePresence mode="wait">
                {drawerOpen && (
                  <motion.div
                    key={selectedRow}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -12 }}
                    transition={{ duration: 0.25 }}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <button 
                      onClick={() => setDrawerOpen(false)}
                      className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors lg:hidden"
                    >
                      <X className="w-3 h-3 text-white/50" />
                    </button>

                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                          Why it's blind
                        </span>
                        <p className="text-sm text-white/70 mt-1">
                          {contrastRows[selectedRow].whyBlind}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
                          What LumiqAI adds
                        </span>
                        <p className="text-sm text-white/90 mt-1">
                          {contrastRows[selectedRow].whatAdds}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Proof Chips */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 mt-8"
      >
        <Chip variant="muted">These are blind decisions.</Chip>
        <Chip variant="accent">Risk does not increase. It becomes observable.</Chip>
      </motion.div>

      <style>{`
        @keyframes traceLine {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -100; }
        }
      `}</style>
    </PremiumSectionShell>
  );
}
