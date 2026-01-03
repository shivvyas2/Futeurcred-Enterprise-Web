import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Monitor, AlertTriangle, Pause, Eye, RotateCcw, Users, Activity, Shield, Power, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const kpiPills = [
  { label: "Review Queue", value: "3", icon: Users, tooltip: "Number of applicants currently awaiting manual review. Each requires human approval before escalation." },
  { label: "Exposure", value: "42%", icon: Activity, tooltip: "Current aggregate exposure across all active progressions. Measured against total available exposure capacity." },
  { label: "Anomalies", value: "0", icon: AlertTriangle, tooltip: "Count of detected behavioral anomalies requiring attention. Zero means all progressions are within expected parameters." },
  { label: "Overrides", value: "Disabled", icon: Shield, muted: true, tooltip: "Override capability is disabled by design. No user or system can bypass sponsor policy rules." },
];

const tableRows = [
  { id: "APP-2847", stage: "04", flag: "Normal", action: "Route to Review", tooltip: "Applicant progressing normally. Ready for optional manual review before stage advancement." },
  { id: "APP-2846", stage: "03", flag: "Watch", action: "Hold Escalation", tooltip: "Behavioral pattern flagged for observation. Escalation paused until pattern stabilizes." },
  { id: "APP-2845", stage: "05", flag: "Normal", action: "Require Step", tooltip: "Applicant must complete a specific milestone before further progression. Action required from applicant." },
  { id: "APP-2844", stage: "02", flag: "Pause", action: "Pause Pipeline", tooltip: "Progression paused pending investigation or sponsor directive. No automatic advancement until resolved." },
];

const killSwitchItems = [
  { label: "Freeze escalation", icon: Pause, tooltip: "Immediately stop all stage advancements across the portfolio. Nothing progresses until manually released." },
  { label: "Force manual review", icon: Eye, tooltip: "Require human approval for every progression, regardless of automated signals. Maximum control mode." },
];

const actionTooltips: Record<string, string> = {
  "Route to Review": "Send this applicant to the manual review queue. A human reviewer will assess before any action is taken.",
  "Hold Escalation": "Prevent this applicant from advancing to the next stage. Hold in place for observation or investigation.",
  "Require Step": "Mark that a specific action or milestone is required from this applicant before progression can continue.",
  "Pause Pipeline": "Completely pause this applicant's progression. Use for investigations or compliance holds.",
};

export default function RiskControlScreen5() {
  const shouldReduceMotion = useReducedMotion();
  const [highlightedRow, setHighlightedRow] = useState(0);

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
        
        {/* Section edge glow - green */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(100,200,150,0.08),transparent_55%)] pointer-events-none" />

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
              <div className="inline-flex items-center gap-2 bg-[#0B1020]/5 px-4 py-2 rounded-full mb-6 border border-[#0B1020]/10">
                <Monitor className="h-4 w-4 text-[#0B1020]/70" />
                <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Monitoring + Intervention</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight leading-tight">
                Humans Can
                <br />
                Always Intervene.
              </h2>
              
              <p className="text-lg text-[#0B1020]/70 max-w-md mb-8">
                Risk doesn't silently expand. Every escalation requires human approval.
              </p>

              {/* Kill-switch mini card */}
              <motion.div
                className="p-5 rounded-2xl bg-white border border-red-200/50 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 mb-4 cursor-pointer group">
                      <Power className="h-4 w-4 text-red-500" />
                      <span className="text-xs font-bold text-[#0B1020]/80 uppercase tracking-wide">Sponsor Kill-Switch (Instant)</span>
                      <Info className="h-3 w-3 text-red-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent variant="light" className="max-w-[280px]">
                    Emergency controls that take effect immediately. Use when you need to halt all activity instantly.
                  </TooltipContent>
                </Tooltip>
                <div className="space-y-2 mb-4">
                  {killSwitchItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <Tooltip key={idx}>
                        <TooltipTrigger asChild>
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50/50 border border-red-200/30 cursor-pointer hover:bg-red-100/50 transition-colors group">
                            <Icon className="h-3 w-3 text-red-500/70" />
                            <span className="text-xs text-[#0B1020]/70">{item.label}</span>
                            <Info className="h-2.5 w-2.5 text-red-300 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent variant="light" className="max-w-[250px]">
                          {item.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>
                <p className="text-[11px] text-[#0B1020]/50 text-center">
                  Sponsor always retains control.
                </p>
              </motion.div>
            </motion.div>

            {/* Right panel - Live Monitoring Console */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl border border-[#0B1020]/8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#0B1020]/8 bg-[#0B1020]/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Monitor className="h-5 w-5 text-[#0B1020]/50" />
                      {/* Pulsing LED */}
                      {!shouldReduceMotion && (
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#0B1020]/80">Live Monitoring</span>
                    {!shouldReduceMotion && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium animate-pulse cursor-pointer">
                            LIVE
                          </span>
                        </TooltipTrigger>
                        <TooltipContent variant="light">
                          This dashboard updates in real-time. Data reflects current system state.
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                </div>

                {/* KPI Pills */}
                <div className="flex flex-wrap gap-3 p-4 border-b border-[#0B1020]/8">
                  {kpiPills.map((kpi, idx) => {
                    const Icon = kpi.icon;
                    return (
                      <Tooltip key={kpi.label}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all hover:scale-105 group ${
                              kpi.muted 
                                ? 'bg-[#0B1020]/[0.02] border-[#0B1020]/8 text-[#0B1020]/50' 
                                : 'bg-white border-[#0B1020]/10 hover:bg-[#0B1020]/[0.02]'
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 * idx }}
                            viewport={{ once: true }}
                          >
                            <Icon className={`h-4 w-4 ${kpi.muted ? 'text-[#0B1020]/40' : 'text-[#0B1020]/60'}`} />
                            <span className="text-xs text-[#0B1020]/60">{kpi.label}</span>
                            <span className={`text-sm font-semibold ${kpi.muted ? 'text-[#0B1020]/40' : 'text-[#0B1020]/80'}`}>{kpi.value}</span>
                            <Info className="h-3 w-3 text-[#0B1020]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent variant="light" className="max-w-[280px]">
                          {kpi.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </div>

                {/* Table */}
                <div className="p-4">
                  {/* Table header */}
                  <div className="grid grid-cols-4 gap-4 px-4 py-2 text-[10px] font-semibold text-[#0B1020]/50 uppercase tracking-wide border-b border-[#0B1020]/8">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-pointer hover:text-[#0B1020]/70 transition-colors">Applicant ID</span>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        Unique identifier for each applicant in the progression pipeline.
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-pointer hover:text-[#0B1020]/70 transition-colors">Stage</span>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        Current progression stage (01-06). Higher stages indicate greater readiness.
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-pointer hover:text-[#0B1020]/70 transition-colors">Flag</span>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        Status indicator: Normal (on track), Watch (monitoring), Pause (held for review).
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-pointer hover:text-[#0B1020]/70 transition-colors">Action</span>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        Available intervention actions. Click to apply to this applicant.
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  {/* Table rows */}
                  <div className="divide-y divide-[#0B1020]/5">
                    {tableRows.map((row, idx) => (
                      <Tooltip key={row.id}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className={`grid grid-cols-4 gap-4 px-4 py-3 transition-all duration-200 cursor-pointer hover:bg-[#0B1020]/[0.02] group ${
                              highlightedRow === idx && !shouldReduceMotion ? 'bg-blue-50/50' : ''
                            }`}
                            onMouseEnter={() => setHighlightedRow(idx)}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.08 * idx }}
                            viewport={{ once: true }}
                          >
                            <span className="text-xs font-mono text-[#0B1020]/70">{row.id}</span>
                            <span className="text-xs">
                              <span className="px-2 py-0.5 rounded bg-[#0B1020]/5 text-[#0B1020]/70 font-medium">{row.stage}</span>
                            </span>
                            <span className="text-xs">
                              <span className={`px-2 py-0.5 rounded font-medium ${
                                row.flag === 'Normal' ? 'bg-emerald-100 text-emerald-700' :
                                row.flag === 'Watch' ? 'bg-amber-100 text-amber-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {row.flag}
                              </span>
                            </span>
                            <span>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button className={`text-xs px-3 py-1 rounded-lg font-medium transition-colors ${
                                    row.action === 'Pause Pipeline' 
                                      ? 'bg-red-50 text-red-600 border border-red-200 hover:bg-red-100' 
                                      : 'bg-[#0B1020]/5 text-[#0B1020]/70 border border-[#0B1020]/10 hover:bg-[#0B1020]/10'
                                  }`}>
                                    {row.action}
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent variant="light" className="max-w-[250px]">
                                  {actionTooltips[row.action]}
                                </TooltipContent>
                              </Tooltip>
                            </span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent variant="light" side="left" className="max-w-[280px]">
                          {row.tooltip}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>

                {/* Footer note */}
                <div className="px-6 py-4 border-t border-[#0B1020]/8 bg-[#0B1020]/[0.01]">
                  <p className="text-xs text-[#0B1020]/50 text-center">
                    Every escalation requires human approval. Nothing auto-escalates.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
