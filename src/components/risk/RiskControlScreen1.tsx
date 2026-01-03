import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Shield, Eye, FileCheck, Settings, Ban, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const sponsorItems = [
  { 
    label: "Approval authority", 
    icon: Shield,
    tooltip: "Final credit decisions remain with your institution. LumiqAI never approves or declines — that authority stays with your underwriting team."
  },
  { 
    label: "Policy rules", 
    icon: FileCheck,
    tooltip: "Your sponsor bank's policy constraints are enforced at every stage. No progression can violate established rules."
  },
  { 
    label: "Risk models", 
    icon: Settings,
    tooltip: "Your existing credit models continue to make final decisions. LumiqAI provides upstream signals, not model replacement."
  },
  { 
    label: "Compliance gates", 
    icon: Shield,
    tooltip: "All regulatory and compliance requirements remain intact. LumiqAI operates within your existing compliance framework."
  },
];

const lumiqItems = [
  { 
    label: "Visibility", 
    icon: Eye,
    tooltip: "See applicant behavior and readiness signals before making credit decisions. Replace blind rejection with informed observation."
  },
  { 
    label: "Progression steps", 
    icon: ArrowRight,
    tooltip: "Structured stages that applicants move through as they demonstrate readiness. Each step is milestone-gated and reversible."
  },
  { 
    label: "Reason codes", 
    icon: FileCheck,
    tooltip: "Every decision produces sponsor-readable explanations. Full transparency for auditors, regulators, and sponsors."
  },
  { 
    label: "Readiness outputs", 
    icon: Settings,
    tooltip: "Quantified readiness signals that feed into your existing decisioning. Augment your models with behavioral data."
  },
];

const arrowLabels = [
  { label: "No policy override", tooltip: "LumiqAI cannot bypass or modify sponsor-defined policy rules. Your policies are enforced exactly as written." },
  { label: "No funds movement", tooltip: "LumiqAI never moves, approves, or authorizes any capital. It operates entirely upstream of credit decisions." },
  { label: "No model replacement", tooltip: "Your existing risk models remain the decision-makers. LumiqAI provides signals, not substitutions." },
];

export default function RiskControlScreen1() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <TooltipProvider delayDuration={200}>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Light band background */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.92)]" />
        <div className="absolute inset-0 border-y border-[rgba(10,15,25,0.08)]" />
        
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(10,15,25,0.15) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(10,15,25,0.15) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Section edge glow - blue */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(120,190,255,0.10),transparent_55%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left copy block (40%) */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#0B1020]/5 px-4 py-2 rounded-full mb-6 border border-[#0B1020]/10">
                <Shield className="h-4 w-4 text-[#0B1020]/70" />
                <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Sponsor-Safe Positioning</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight leading-tight">
                What Stays the Same.
                <br />
                What Changes.
              </h2>
              
              <p className="text-lg text-[#0B1020]/70 max-w-md">
                Sponsor rules remain source of truth. LumiqAI adds upstream observability — never override.
              </p>
            </motion.div>

            {/* Right diagram (60%) */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl border border-[#0B1020]/8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 relative overflow-hidden">
                {/* Two-lane diagram */}
                <div className="grid md:grid-cols-2 gap-8 relative">
                  {/* Lane A - Sponsor stays */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-2 w-2 rounded-full bg-[#0B1020]/40" />
                      <h3 className="text-sm font-bold text-[#0B1020]/80 uppercase tracking-wide">
                        Sponsor Underwriting Stays
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {sponsorItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            viewport={{ once: true }}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#0B1020]/[0.03] border border-[#0B1020]/10 cursor-pointer transition-all duration-200 hover:bg-[#0B1020]/[0.06] hover:border-[#0B1020]/20 hover:-translate-y-0.5 hover:shadow-md group">
                                  <Icon className="h-4 w-4 text-[#0B1020]/50 group-hover:text-[#0B1020]/70 transition-colors" />
                                  <span className="text-sm font-medium text-[#0B1020]/80">{item.label}</span>
                                  <Info className="h-3 w-3 text-[#0B1020]/30 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent variant="light" side="right">
                                {item.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Center arrows (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 z-10">
                    {arrowLabels.map((item, idx) => (
                      <Tooltip key={idx}>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2 cursor-pointer group">
                            <div className="flex items-center gap-1">
                              <div className="w-6 h-px bg-[#0B1020]/20 group-hover:bg-[#0B1020]/40 transition-colors" />
                              <Ban className="h-3 w-3 text-[#0B1020]/40 group-hover:text-red-500/70 transition-colors" />
                              <div className="w-6 h-px bg-[#0B1020]/20 group-hover:bg-[#0B1020]/40 transition-colors" />
                            </div>
                            <span className="text-[10px] text-[#0B1020]/50 font-medium whitespace-nowrap group-hover:text-[#0B1020]/80 transition-colors">{item.label}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent variant="light" side="bottom">
                          {item.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>

                  {/* Lane B - LumiqAI adds */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-2 w-2 rounded-full bg-blue-500/60" />
                      <h3 className="text-sm font-bold text-[#0B1020]/80 uppercase tracking-wide">
                        LumiqAI Adds Upstream
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {lumiqItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * idx + 0.2 }}
                            viewport={{ once: true }}
                          >
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-200/50 cursor-pointer transition-all duration-200 hover:bg-blue-50 hover:border-blue-300/60 hover:-translate-y-0.5 hover:shadow-md group">
                                  <Icon className="h-4 w-4 text-blue-600/60 group-hover:text-blue-600 transition-colors" />
                                  <span className="text-sm font-medium text-[#0B1020]/80">{item.label}</span>
                                  <Info className="h-3 w-3 text-blue-400/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent variant="light" side="left">
                                {item.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Mobile arrows */}
                <div className="flex md:hidden flex-wrap gap-2 mt-6 pt-6 border-t border-[#0B1020]/10 justify-center">
                  {arrowLabels.map((item, idx) => (
                    <Tooltip key={idx}>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0B1020]/5 border border-[#0B1020]/10 cursor-pointer hover:bg-[#0B1020]/10 transition-colors">
                          <Ban className="h-3 w-3 text-[#0B1020]/40" />
                          <span className="text-[10px] text-[#0B1020]/60 font-medium">{item.label}</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        {item.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
