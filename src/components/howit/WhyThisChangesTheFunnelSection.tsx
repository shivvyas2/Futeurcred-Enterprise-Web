import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { XCircle, CheckCircle, Clock, Users } from "lucide-react";
import PremiumSectionShell from "./ui/PremiumSectionShell";
import GlassCard from "./ui/GlassCard";

const funnelWithout = [
  { title: "Declined applicants disappear", sub: "Lost opportunity, no recovery path" },
  { title: "Future revenue is lost upstream", sub: "Potential customers never return" },
  { title: "Platforms compete downstream for survivors", sub: "Race to the bottom for qualified leads" },
];

const funnelWith = [
  { title: "Declined applicants become progression pipelines", sub: "Transformation from rejection to opportunity" },
  { title: "Readiness is cultivated, not guessed", sub: "Data-driven development of creditworthiness" },
  { title: "Future revenue is created inside your platform", sub: "Revenue generation, not just revenue capture" },
];

const funnelStages = [
  { label: "Applicants", withWidth: "100%", withoutWidth: "100%" },
  { label: "Decisions", withWidth: "75%", withoutWidth: "40%" },
  { label: "Retained", withWidth: "60%", withoutWidth: "20%" },
];

export default function WhyThisChangesTheFunnelSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"with" | "without">("with");

  const currentData = activeTab === "with" ? funnelWith : funnelWithout;
  const currentWidths = funnelStages.map(s => activeTab === "with" ? s.withWidth : s.withoutWidth);

  return (
    <PremiumSectionShell accent="amber">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
          Why This Changes the Funnel
        </h2>
      </motion.div>

      {/* Toggle */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex justify-center mb-8"
      >
        <div className="inline-flex bg-white/[0.04] border border-white/10 rounded-2xl p-1">
          <button
            onClick={() => setActiveTab("without")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "without"
                ? "bg-white/[0.1] text-white shadow-sm"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            <span className="flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Without LumiqAI
            </span>
          </button>
          <button
            onClick={() => setActiveTab("with")}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === "with"
                ? "bg-white/[0.1] text-white shadow-sm"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              With LumiqAI
            </span>
          </button>
        </div>
      </motion.div>

      {/* Main Funnel Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.65 }}
      >
        <GlassCard className="p-6 md:p-8">
          {/* Funnel Visualization */}
          <div className="mb-8">
            <div className="flex items-end justify-center gap-4 md:gap-8 h-[120px] md:h-[160px]">
              {funnelStages.map((stage, i) => {
                const isApplicants = stage.label === "Applicants";
                const isDecisions = stage.label === "Decisions";
                const isRetained = stage.label === "Retained";
                const showLogo = isApplicants || isDecisions || isRetained;
                
                // Get the appropriate SVG image for each stage
                let svgPath = "";
                if (isApplicants) {
                  svgPath = "/male-applicants-for-a-job-svgrepo-com.svg";
                } else if (isDecisions) {
                  svgPath = "/man-with-business-graphic-svgrepo-com.svg";
                } else if (isRetained) {
                  svgPath = "/presenter-talking-about-people-on-a-screen-svgrepo-com.svg";
                }
                
                return (
                  <div key={stage.label} className="flex flex-col items-center gap-2 flex-1 max-w-[160px]">
                    <motion.div
                      animate={{ 
                        width: "100%",
                        backgroundColor: activeTab === "with" 
                          ? "rgba(255,255,255,0.12)" 
                          : "rgba(255,255,255,0.05)"
                      }}
                      transition={{ 
                        type: shouldReduceMotion ? "tween" : "spring", 
                        stiffness: 120, 
                        damping: 20 
                      }}
                      className="h-16 md:h-24 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center"
                      style={{ minWidth: "40px" }}
                    >
                      {/* Inner bar showing the actual percentage */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-full rounded-xl"
                        animate={{ 
                          width: currentWidths[i],
                          backgroundColor: activeTab === "with" 
                            ? "rgba(255,255,255,0.15)" 
                            : "rgba(255,255,255,0.08)"
                        }}
                        transition={{ 
                          type: shouldReduceMotion ? "tween" : "spring", 
                          stiffness: 120, 
                          damping: 20 
                        }}
                      />
                      {/* SVG image inside the bar */}
                      {showLogo && svgPath && (
                        <div className="absolute inset-0 flex items-center justify-center z-10 p-2">
                          <img 
                            src={svgPath} 
                            alt={stage.label}
                            className="w-full h-full object-contain opacity-70 filter brightness-0 invert"
                            style={{ maxWidth: "80%", maxHeight: "80%" }}
                          />
                        </div>
                      )}
                      
                      {/* Progress bar overlay showing comparison */}
                      {showLogo && activeTab === "with" && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400/60 rounded-b-xl z-0"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Progress comparison indicator */}
                    {showLogo && (
                      <div className="w-full mt-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-[9px] text-white/40">Without</span>
                          <span className="text-[9px] text-white/40">With</span>
                        </div>
                        <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="absolute left-0 top-0 bottom-0 bg-white/20 rounded-full"
                            style={{ width: stage.withoutWidth }}
                          />
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-emerald-400/60 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: activeTab === "with" ? stage.withWidth : "0%" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <span className="text-[11px] md:text-xs text-white/60 font-medium uppercase tracking-wider">
                      {stage.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Animated connector line */}
            <div className="relative h-4 mt-4 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line 
                  x1="10%" y1="50%" x2="90%" y2="50%" 
                  stroke="rgba(255,255,255,0.1)" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                  className={!shouldReduceMotion ? "animate-[funnelFlow_10s_linear_infinite]" : ""}
                />
              </svg>
            </div>
          </div>

          {/* Impact Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {currentData.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`p-4 rounded-xl border transition-all duration-200 hover:bg-white/[0.04] ${
                    activeTab === "with"
                      ? "bg-white/[0.04] border-white/12"
                      : "bg-white/[0.02] border-white/8"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {activeTab === "with" ? (
                      <CheckCircle className="w-4 h-4 text-white/70 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`text-sm font-semibold ${activeTab === "with" ? "text-white" : "text-white/70"}`}>
                        {item.title}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${activeTab === "with" ? "text-white/60" : "text-white/40"}`}>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </motion.div>

      {/* Callout Card */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <div className="relative inline-block">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-400/5 to-amber-500/10 blur-xl opacity-60" />
          
          <div className="relative bg-white/[0.04] border border-white/12 rounded-2xl px-8 py-6 text-center">
            <p className="text-base md:text-lg font-bold text-white mb-1">
              Nothing downstream changes. Everything upstream improves.
            </p>
            <p className="text-sm text-white/60">
              LumiqAI transforms your funnel by converting rejections into opportunities.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Loophole Statement */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex justify-center"
      >
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 text-center">
          <p className="text-lg font-bold text-white">It is not a loophole.</p>
          <p className="text-base font-semibold text-white/75 mt-1">It is a defensible operating layer.</p>
        </div>
      </motion.div>

      <style>{`
        @keyframes funnelFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -80; }
        }
      `}</style>
    </PremiumSectionShell>
  );
}
