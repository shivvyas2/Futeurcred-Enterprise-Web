import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Shield, Eye, Layers, GraduationCap, Heart, ChevronDown, Clock, Database, ArrowRight } from "lucide-react";

const moatData = [
  { 
    key: "retention",
    label: "Retention",
    title: "Progress stays visible",
    subtitle: "Switching costs rise naturally",
    description: "When users can see their progression toward approval, leaving means losing visible progress. The platform becomes identity, not just utility.",
    metrics: [
      { label: "Avg. session length", withLumiq: "4.2 min", without: "45 sec" },
      { label: "Return rate (7d)", withLumiq: "68%", without: "12%" },
      { label: "Churn after decline", withLumiq: "-47%", without: "baseline" },
    ],
    icon: Eye,
  },
  { 
    key: "data",
    label: "Data",
    title: "Behavioral signals compound",
    subtitle: "Observation depth grows over time",
    description: "Every session adds signal. Revenue trends, login patterns, feature usage — all feed into a richer decisioning layer that competitors can't replicate.",
    metrics: [
      { label: "Signals per user", withLumiq: "340+", without: "8-12" },
      { label: "Decision confidence", withLumiq: "92%", without: "61%" },
      { label: "False positive rate", withLumiq: "3.1%", without: "18%" },
    ],
    icon: Layers,
  },
  { 
    key: "graduation",
    label: "Graduation",
    title: "Internal customers first",
    subtitle: "Loyalty is pre-built before approval",
    description: "Approved users aren't strangers — they've been in your ecosystem for months. First-party relationship, not third-party lead.",
    metrics: [
      { label: "Time to first product", withLumiq: "Day 1", without: "14+ days" },
      { label: "LTV (12mo)", withLumiq: "+2.4x", without: "baseline" },
      { label: "Cross-sell rate", withLumiq: "38%", without: "9%" },
    ],
    icon: GraduationCap,
  },
];

const journeySteps = [
  { label: "Visibility", desc: "User sees where they stand", icon: Eye },
  { label: "Progression", desc: "Clear path to next milestone", icon: Layers },
  { label: "Graduation", desc: "Approval when ready", icon: GraduationCap },
  { label: "Loyalty", desc: "Relationship compounds", icon: Heart },
];

const signalTable = [
  { signal: "Revenue trend", interpretation: "Readiness trajectory", use: "Progression scoring" },
  { signal: "Bank balance", interpretation: "Stability indicator", use: "Risk threshold" },
  { signal: "Time in funnel", interpretation: "Engagement depth", use: "Graduation timing" },
  { signal: "Return frequency", interpretation: "Intent signal", use: "Retention prediction" },
];

export default function OutcomesScreen4() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedMoat, setExpandedMoat] = useState<string | null>("retention");

  const toggleMoat = (key: string) => {
    setExpandedMoat(expandedMoat === key ? null : key);
  };

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle warm highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.04] px-4 py-2 rounded-full mb-6 border border-white/[0.06]">
            <Shield className="h-4 w-4 text-white/50" />
            <span className="text-xs font-medium text-white/50 uppercase tracking-wide">Competitive Position</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
            Moat by Time, Not Capital
          </h2>
          
          <p className="text-white/50 max-w-xl mx-auto">
            Three compounding advantages that grow stronger with each user interaction.
          </p>
        </motion.div>

        {/* Accordion Cards */}
        <div className="space-y-3 mb-16">
          {moatData.map((moat, idx) => {
            const Icon = moat.icon;
            const isExpanded = expandedMoat === moat.key;
            
            return (
              <motion.div
                key={moat.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleMoat(moat.key)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isExpanded 
                      ? 'bg-white/[0.04] border-white/[0.12]' 
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.08]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {/* Number indicator */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                      isExpanded ? 'bg-white/10 text-white' : 'bg-white/[0.04] text-white/40'
                    }`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-semibold uppercase tracking-wide ${
                          isExpanded ? 'text-white/70' : 'text-white/40'
                        }`}>
                          {moat.label}
                        </span>
                      </div>
                      <h3 className={`text-lg font-semibold transition-colors ${
                        isExpanded ? 'text-white' : 'text-white/70'
                      }`}>
                        {moat.title}
                      </h3>
                    </div>
                    
                    <Icon className={`h-5 w-5 transition-colors ${
                      isExpanded ? 'text-white/60' : 'text-white/30'
                    }`} />
                    
                    <ChevronDown className={`h-5 w-5 transition-all duration-300 ${
                      isExpanded ? 'text-white/60 rotate-180' : 'text-white/30'
                    }`} />
                  </div>
                </button>
                
                {/* Accordion Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-1">
                        <div className="p-6 bg-white/[0.02] border border-white/[0.06] border-t-0 rounded-b-xl">
                          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">
                            {moat.description}
                          </p>
                          
                          {/* Metrics comparison */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {moat.metrics.map((metric, mIdx) => (
                              <div 
                                key={mIdx}
                                className="p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                              >
                                <div className="text-[10px] text-white/40 uppercase tracking-wide mb-3 font-medium">
                                  {metric.label}
                                </div>
                                <div className="flex items-end justify-between gap-4">
                                  <div>
                                    <div className="text-[9px] text-white/30 uppercase mb-1">With</div>
                                    <div className="text-lg font-bold text-white">{metric.withLumiq}</div>
                                  </div>
                                  <div className="text-white/20 text-xs">vs</div>
                                  <div className="text-right">
                                    <div className="text-[9px] text-white/30 uppercase mb-1">Without</div>
                                    <div className="text-sm font-medium text-white/40">{metric.without}</div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Journey Flow */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-6 text-center">
            The Compounding Journey
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
            {journeySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                    <div className="w-8 h-8 rounded-md bg-white/[0.05] flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white/50" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80">{step.label}</div>
                      <div className="text-[10px] text-white/40">{step.desc}</div>
                    </div>
                  </div>
                  {idx < journeySteps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-white/20 mx-2 hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>


        {/* Signal Mapping Table */}
        <motion.div
          className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-5">Signal Mapping</div>
          
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-left min-w-[400px]">
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-[10px] font-semibold text-white/50 uppercase tracking-wide py-3 px-4">Signal</th>
                  <th className="text-[10px] font-semibold text-white/50 uppercase tracking-wide py-3 px-4">Interpretation</th>
                  <th className="text-[10px] font-semibold text-white/50 uppercase tracking-wide py-3 px-4">Use</th>
                </tr>
              </thead>
              <tbody>
                {signalTable.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/[0.04] last:border-0">
                    <td className="text-sm text-white/70 py-3 px-4 font-medium">{row.signal}</td>
                    <td className="text-sm text-white/50 py-3 px-4">{row.interpretation}</td>
                    <td className="text-sm text-white/50 py-3 px-4">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl font-semibold text-white/60 italic">
            "Readiness ownership compounds by time, not capital."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
