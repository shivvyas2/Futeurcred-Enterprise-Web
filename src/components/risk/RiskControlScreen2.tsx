import { motion, useReducedMotion } from "framer-motion";
import { Lock, Shield, Settings, AlertTriangle, Gauge, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const sidebarItems = [
  { label: "Policies", tooltip: "Configure and enforce sponsor-defined policy rules across all progression stages." },
  { label: "Exposure", tooltip: "Set maximum exposure caps per stage. Control how much risk is allowed at each level." },
  { label: "Overrides", tooltip: "Override capability is disabled by design. No automatic policy bypasses allowed." },
  { label: "Escalation", tooltip: "Configure manual review triggers and escalation paths. Nothing auto-escalates." },
];

const toggleRows = [
  { 
    label: "Sponsor rule enforcement", 
    status: "locked", 
    enabled: true,
    tooltip: "Sponsor-defined rules are enforced at every stage. This setting cannot be disabled — it's locked for compliance."
  },
  { 
    label: "Override capability", 
    status: "disabled", 
    enabled: false,
    tooltip: "Policy overrides are disabled by design. No user or system can bypass sponsor rules. This is intentional."
  },
  { 
    label: "Max exposure per stage", 
    status: "enabled", 
    enabled: true,
    tooltip: "Each progression stage has a configurable exposure cap. Applicants cannot exceed their stage limit."
  },
  { 
    label: "Manual review trigger", 
    status: "enabled", 
    enabled: true,
    tooltip: "Certain thresholds trigger mandatory human review. Escalations require explicit approval before proceeding."
  },
];

export default function RiskControlScreen2() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <TooltipProvider delayDuration={200}>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Dark band background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#070A12] to-[#05060B]" />
        
        {/* Radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)] pointer-events-none" />
        
        {/* Section edge glow - violet */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(160,140,255,0.08),transparent_60%)] pointer-events-none" />
        
        {/* Subtle grid texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Noise overlay simulation */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '3px 3px'
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left copy block */}
            <motion.div 
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10">
                <Lock className="h-4 w-4 text-white/60" />
                <span className="text-xs font-medium text-white/60 uppercase tracking-wide">Controls + Policy Locks</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
                Who Controls What.
                <br />
                And How.
              </h2>
              
              <p className="text-lg text-white/60 max-w-md mb-6">
                Controls are enforceable. Overrides are disabled by design.
              </p>
            </motion.div>

            {/* Right panel - Policy Lock UI */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true }}
            >
              <div className="bg-[rgba(10,12,18,0.78)] rounded-3xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden relative">
                {/* Shimmer sweep */}
                {!shouldReduceMotion && (
                  <div 
                    className="absolute inset-y-0 -left-[30%] w-[30%] bg-gradient-to-r from-transparent via-white/6 to-transparent blur-sm opacity-50 z-10"
                    style={{
                      animation: 'shimmerSweep 14s linear infinite',
                    }}
                  />
                )}

                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/8 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-white/50" />
                    <span className="text-sm font-semibold text-white/80">Policy Lock: Sponsor Rules Remain Source of Truth</span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <div className="px-2 py-1 rounded text-[10px] font-medium bg-white/10 text-white/60 border border-white/10 hover:bg-white/15 transition-colors">
                          Read-only
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      This panel shows current policy configuration. Changes require sponsor-level access.
                    </TooltipContent>
                  </Tooltip>
                </div>

                <div className="flex">
                  {/* Mini sidebar */}
                  <div className="w-40 border-r border-white/8 p-4 hidden md:block">
                    <div className="space-y-2">
                      {sidebarItems.map((item, idx) => (
                        <Tooltip key={item.label}>
                          <TooltipTrigger asChild>
                            <motion.div
                              className={`px-3 py-2 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                                idx === 0 ? 'bg-white/10 text-white/90' : 'text-white/40 hover:bg-white/5 hover:text-white/60'
                              }`}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: 0.1 * idx }}
                              viewport={{ once: true }}
                            >
                              {item.label}
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            {item.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>

                  {/* Main panel */}
                  <div className="flex-1 p-6">
                    {/* Toggle rows */}
                    <div className="space-y-4 mb-8">
                      {toggleRows.map((row, idx) => (
                        <Tooltip key={row.label}>
                          <TooltipTrigger asChild>
                            <motion.div
                              className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/8 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 cursor-pointer group"
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: 0.08 * idx + 0.2 }}
                              viewport={{ once: true }}
                            >
                              <div className="flex items-center gap-3">
                                {row.enabled ? (
                                  <div className="w-8 h-4 rounded-full bg-emerald-500/20 flex items-center justify-end px-0.5">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                  </div>
                                ) : (
                                  <div className="w-8 h-4 rounded-full bg-white/10 flex items-center px-0.5">
                                    <div className="w-3 h-3 rounded-full bg-white/30" />
                                  </div>
                                )}
                                <span className="text-sm text-white/80">{row.label}</span>
                                <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className={`px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wide ${
                                row.status === 'locked' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                row.status === 'disabled' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                                'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                              }`}>
                                {row.status === 'locked' ? '✓ Locked' : row.status === 'disabled' ? '✗ Disabled' : '✓ Enabled'}
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-[300px]">
                            {row.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>

                    {/* Slider row */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="p-4 rounded-xl bg-white/[0.02] border border-white/8 cursor-pointer hover:bg-white/[0.04] transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Gauge className="h-4 w-4 text-white/50" />
                              <span className="text-sm text-white/80">Stage exposure cap</span>
                              <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="text-xs text-white/40">Configurable per sponsor</span>
                          </div>
                          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-violet-500/60 to-violet-400/40 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-violet-500 shadow-lg" />
                          </div>
                          <div className="flex justify-between mt-2">
                            <span className="text-[10px] text-white/40">Stage 01</span>
                            <span className="text-[10px] text-white/40">Stage 06</span>
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px]">
                        Maximum exposure increases gradually across stages. Stage 01 has minimal exposure; Stage 06 approaches full readiness. Each stage cap is configurable by the sponsor.
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @keyframes shimmerSweep {
            0% { transform: translateX(0); }
            100% { transform: translateX(600%); }
          }
        `}</style>
      </section>
    </TooltipProvider>
  );
}
