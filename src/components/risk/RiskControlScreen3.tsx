import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FileText, Clock, ChevronRight, CheckCircle, Activity, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const reasonCodes = [
  { 
    code: "RC-001", 
    description: "Consistent deposit pattern observed", 
    weight: 0.85, 
    status: "positive",
    tooltip: "Regular, predictable deposit behavior indicates operational consistency. This is a strong positive signal for business health."
  },
  { 
    code: "RC-002", 
    description: "Business registry verified", 
    weight: 0.72, 
    status: "positive",
    tooltip: "Official business registration confirmed through government registry. Validates legitimate business operation."
  },
  { 
    code: "RC-003", 
    description: "Revenue milestone reached", 
    weight: 0.68, 
    status: "positive",
    tooltip: "Business has achieved the revenue threshold for current stage. This milestone unlocks progression eligibility."
  },
  { 
    code: "RC-004", 
    description: "Stage 3 behavior maintained", 
    weight: 0.54, 
    status: "neutral",
    tooltip: "Applicant has maintained expected behaviors for current stage. Continued observation required before advancement."
  },
  { 
    code: "RC-005", 
    description: "Review trigger: manual check", 
    weight: 0.32, 
    status: "review",
    tooltip: "Automated checks flagged this for human review. No automatic escalation — requires explicit approval to proceed."
  },
];

const auditEntries = [
  { time: "14:32:01", event: "Stage advanced → 04", tooltip: "Applicant met all Stage 3 milestones and was advanced to Stage 4." },
  { time: "14:28:15", event: "Milestone verified", tooltip: "Revenue milestone verification completed via connected data source." },
  { time: "14:15:22", event: "Signal refresh complete", tooltip: "All behavioral signals updated with latest observation data." },
];

const stageMarkers = [
  { stage: "01", tooltip: "Entry stage. Minimal exposure. Initial behavior observation begins." },
  { stage: "02", tooltip: "Early stage. Basic signals collected. Identity verification complete." },
  { stage: "03", tooltip: "Development stage. Behavioral patterns forming. Registry checks complete." },
  { stage: "04", tooltip: "Established stage. Consistent behavior demonstrated. Revenue milestones met." },
  { stage: "05", tooltip: "Advanced stage. Strong readiness signals. Approaching credit eligibility." },
  { stage: "06", tooltip: "Readiness stage. Full observability complete. Ready for credit decision." },
];

const tabs = [
  { key: "reason", label: "Reason Codes", tooltip: "View all reason codes that contributed to the current decision. Each code is sponsor-readable and auditable." },
  { key: "policy", label: "Policy Checks", tooltip: "See which sponsor policy rules were checked and their pass/fail status." },
  { key: "history", label: "History", tooltip: "Complete audit trail of all events and state changes for this applicant." },
];

export default function RiskControlScreen3() {
  const shouldReduceMotion = useReducedMotion();
  const [expandedCode, setExpandedCode] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("reason");

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
        
        {/* Section edge glow - cool blue */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(100,180,255,0.08),transparent_55%)] pointer-events-none" />

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
                <FileText className="h-4 w-4 text-[#0B1020]/70" />
                <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Auditability + Reason Codes</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight leading-tight">
                Every Decision
                <br />
                Is Explainable.
              </h2>
              
              <p className="text-lg text-[#0B1020]/70 max-w-md">
                Sponsor-readable artifacts. Complete audit trail. No black boxes.
              </p>
            </motion.div>

            {/* Right panel - Dashboard Mock */}
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
                      <Activity className="h-5 w-5 text-[#0B1020]/50" />
                      {/* Pulsing LED */}
                      {!shouldReduceMotion && (
                        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#0B1020]/80">Decisioning Summary</span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer hover:bg-emerald-100 transition-colors">
                        Confidence: 0.91
                      </div>
                    </TooltipTrigger>
                    <TooltipContent variant="light">
                      Overall confidence score combining all reason codes. 0.91 indicates high readiness for the current stage.
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-[#0B1020]/8">
                  {tabs.map((tab) => (
                    <Tooltip key={tab.key}>
                      <TooltipTrigger asChild>
                        <button
                          onClick={() => setActiveTab(tab.key)}
                          className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                            activeTab === tab.key 
                              ? 'border-[#0B1020] text-[#0B1020]' 
                              : 'border-transparent text-[#0B1020]/50 hover:text-[#0B1020]/70'
                          }`}
                        >
                          {tab.label}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent variant="light">
                        {tab.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>

                <div className="flex">
                  {/* Main panel - Reason codes */}
                  <div className="flex-1 p-6 border-r border-[#0B1020]/8">
                    <AnimatePresence mode="wait">
                      {activeTab === "reason" && (
                        <motion.div
                          key="reason"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {reasonCodes.map((rc, idx) => (
                            <Tooltip key={rc.code}>
                              <TooltipTrigger asChild>
                                <motion.div
                                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer group ${
                                    expandedCode === rc.code 
                                      ? 'bg-blue-50/50 border-blue-200' 
                                      : 'bg-[#0B1020]/[0.02] border-[#0B1020]/8 hover:bg-[#0B1020]/[0.04] hover:-translate-y-0.5'
                                  }`}
                                  onClick={() => setExpandedCode(expandedCode === rc.code ? null : rc.code)}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <span className={`px-2 py-1 rounded text-[10px] font-mono font-medium ${
                                        rc.status === 'positive' ? 'bg-emerald-100 text-emerald-700' :
                                        rc.status === 'review' ? 'bg-amber-100 text-amber-700' :
                                        'bg-gray-100 text-gray-600'
                                      }`}>
                                        {rc.code}
                                      </span>
                                      <span className="text-sm text-[#0B1020]/80">{rc.description}</span>
                                      <Info className="h-3 w-3 text-[#0B1020]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                      {/* Weight bar */}
                                      <div className="w-16 h-1.5 bg-[#0B1020]/10 rounded-full overflow-hidden hidden sm:block">
                                        <div 
                                          className={`h-full rounded-full ${
                                            rc.status === 'positive' ? 'bg-emerald-500' :
                                            rc.status === 'review' ? 'bg-amber-500' :
                                            'bg-gray-400'
                                          }`}
                                          style={{ width: `${rc.weight * 100}%` }}
                                        />
                                      </div>
                                      <CheckCircle className={`h-4 w-4 ${
                                        rc.status === 'positive' ? 'text-emerald-500' :
                                        rc.status === 'review' ? 'text-amber-500' :
                                        'text-gray-400'
                                      }`} />
                                    </div>
                                  </div>
                                  
                                  {/* Expanded content */}
                                  <AnimatePresence>
                                    {expandedCode === rc.code && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="pt-3 mt-3 border-t border-[#0B1020]/10 text-xs text-[#0B1020]/60">
                                          <span className="font-medium text-[#0B1020]/70">Why it matters: </span>
                                          {rc.tooltip}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent variant="light" side="left" className="max-w-[280px]">
                                {rc.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </motion.div>
                      )}
                      
                      {activeTab === "policy" && (
                        <motion.div
                          key="policy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {["Sponsor rules verified", "Exposure cap respected", "No override triggered", "Manual review not required"].map((check, idx) => (
                            <Tooltip key={idx}>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-50/50 border border-emerald-200/50 cursor-pointer hover:bg-emerald-50 transition-colors group">
                                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                                  <span className="text-sm text-[#0B1020]/80">{check}</span>
                                  <Info className="h-3 w-3 text-emerald-400/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent variant="light">
                                Policy check passed. This rule was validated before the decision was made.
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </motion.div>
                      )}
                      
                      {activeTab === "history" && (
                        <motion.div
                          key="history"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-3"
                        >
                          {auditEntries.map((entry, idx) => (
                            <Tooltip key={idx}>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0B1020]/[0.02] border border-[#0B1020]/8 cursor-pointer hover:bg-[#0B1020]/[0.04] transition-colors group">
                                  <Clock className="h-4 w-4 text-[#0B1020]/40" />
                                  <span className="text-xs font-mono text-[#0B1020]/50">{entry.time}</span>
                                  <span className="text-sm text-[#0B1020]/80">{entry.event}</span>
                                  <Info className="h-3 w-3 text-[#0B1020]/20 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent variant="light">
                                {entry.tooltip}
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Right mini panel - Audit Trail */}
                  <div className="w-56 p-4 hidden lg:block">
                    <div className="text-xs font-semibold text-[#0B1020]/60 uppercase tracking-wide mb-4">Audit Trail</div>
                    <div className="space-y-3">
                      {auditEntries.map((entry, idx) => (
                        <Tooltip key={idx}>
                          <TooltipTrigger asChild>
                            <motion.div 
                              className="text-xs cursor-pointer hover:bg-[#0B1020]/[0.02] p-2 rounded-lg transition-colors"
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * idx }}
                              viewport={{ once: true }}
                            >
                              <div className="text-[#0B1020]/40 font-mono">{entry.time}</div>
                              <div className="text-[#0B1020]/70">{entry.event}</div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent variant="light" side="left">
                            {entry.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-6 py-4 border-t border-[#0B1020]/8 bg-[#0B1020]/[0.01]">
                  <p className="text-xs text-[#0B1020]/50 text-center">
                    Every decision produces sponsor-readable artifacts.
                  </p>
                </div>
              </div>

              {/* Audit Trail Timeline */}
              <motion.div 
                className="mt-6 p-4 bg-white rounded-2xl border border-[#0B1020]/8 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between">
                  {stageMarkers.map((marker, idx) => (
                    <div key={marker.stage} className="flex items-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className={`flex flex-col items-center cursor-pointer ${idx <= 3 ? 'opacity-100' : 'opacity-40'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all hover:scale-110 ${
                              idx <= 3 ? 'bg-blue-100 text-blue-700 border-2 border-blue-300 hover:bg-blue-200' : 'bg-[#0B1020]/5 text-[#0B1020]/40 border border-[#0B1020]/10 hover:bg-[#0B1020]/10'
                            }`}>
                              {marker.stage}
                            </div>
                            <span className="text-[9px] text-[#0B1020]/50 mt-1">
                              {idx <= 3 ? 'Observed' : 'Pending'}
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent variant="light">
                          <strong>Stage {marker.stage}</strong>: {marker.tooltip}
                        </TooltipContent>
                      </Tooltip>
                      {idx < stageMarkers.length - 1 && (
                        <div className={`w-8 md:w-12 h-px mx-1 ${idx < 3 ? 'bg-blue-300' : 'bg-[#0B1020]/10'}`} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}
