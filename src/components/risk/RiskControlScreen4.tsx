import { motion, useReducedMotion } from "framer-motion";
import { Database, Lock, ArrowRight, Shield, Eye, FileOutput, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

const inputChips = [
  { label: "Identity", optional: false, tooltip: "Business owner identity verification. Used to validate legitimate business ownership and prevent fraud." },
  { label: "Registry", optional: false, tooltip: "Official business registration data. Confirms the business exists and is properly registered with authorities." },
  { label: "Business credit", optional: false, tooltip: "Commercial credit bureau data. Provides credit history and existing obligations of the business entity." },
  { label: "Banking signals", optional: true, tooltip: "Transaction patterns and cash flow data (when available). Provides behavioral signals about business health. Not required for all stages." },
];

const outputChips = [
  { label: "Readiness state", tooltip: "Current stage in the progression journey. Indicates how close the applicant is to credit eligibility." },
  { label: "Reason codes", tooltip: "Sponsor-readable explanation codes. Every output includes clear reasons that can be audited and explained." },
  { label: "Next step", tooltip: "Recommended next milestone for the applicant. Provides clear guidance on what's needed to progress." },
  { label: "Confidence", tooltip: "Quantified confidence score for current readiness. Helps sponsors understand signal quality." },
];

const securityNotes = [
  { label: "PII handling", value: "minimized", tooltip: "Only essential personal information is processed. Data minimization principles are applied at every stage." },
  { label: "Retention", value: "configurable", tooltip: "Data retention periods are configurable per sponsor requirements. Default to minimum necessary retention." },
  { label: "Access", value: "role-based", tooltip: "All data access is role-based and logged. Only authorized personnel can view specific data types." },
  { label: "Exports", value: "sponsor-readable artifacts", tooltip: "All exports are formatted for sponsor consumption. No raw data is exposed in exports." },
];

const complianceChips = [
  { label: "Minimized data", tooltip: "Only data necessary for readiness assessment is collected and processed. No unnecessary data retention." },
  { label: "Scoped retention", tooltip: "Data retention is limited to the minimum period required for the specific use case. Configurable by sponsor." },
  { label: "Sponsor visibility", tooltip: "Sponsors have full visibility into what data is processed and how. No hidden processing or black boxes." },
];

const processingBoxes = [
  { label: "Signal normalization", tooltip: "Raw inputs are normalized into standardized signals. This ensures consistent processing regardless of data source format." },
  { label: "Readiness scoring", tooltip: "Normalized signals are combined into readiness scores. No raw data is exposed — only processed, aggregated outputs." },
];

export default function RiskControlScreen4() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <TooltipProvider delayDuration={200}>
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        {/* Dark band background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#070A12] to-[#05060B]" />
        
        {/* Radial highlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)] pointer-events-none" />
        
        {/* Section edge glow - warm amber */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,180,100,0.06),transparent_55%)] pointer-events-none" />
        
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
                <Database className="h-4 w-4 text-white/60" />
                <span className="text-xs font-medium text-white/60 uppercase tracking-wide">Data Governance & Security</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
                What Data.
                <br />
                How Protected.
              </h2>
              
              <p className="text-lg text-white/60 max-w-md">
                Minimized inputs. Scoped retention. Sponsor-visible outputs. No raw data exposed.
              </p>
            </motion.div>

            {/* Right panel - Data Boundary Diagram */}
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.12 }}
              viewport={{ once: true }}
            >
              {/* 3-Zone Diagram */}
              <div className="bg-[rgba(10,12,18,0.78)] rounded-3xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-8 mb-6">
                <div className="grid md:grid-cols-3 gap-6 items-stretch">
                  {/* Zone 1 - Inputs */}
                  <motion.div
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 mb-4 cursor-pointer group">
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-blue-400" />
                          </div>
                          <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Inputs</span>
                          <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        Data sources used for readiness assessment. All inputs are minimized to only what's necessary.
                      </TooltipContent>
                    </Tooltip>
                    <div className="flex flex-wrap gap-2">
                      {inputChips.map((chip, idx) => (
                        <Tooltip key={chip.label}>
                          <TooltipTrigger asChild>
                            <motion.span
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all hover:scale-105 ${
                                chip.optional 
                                  ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20' 
                                  : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                              }`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.05 * idx }}
                              viewport={{ once: true }}
                            >
                              {chip.label}
                              {chip.optional && (
                                <span className="text-[9px] px-1 py-0.5 rounded bg-amber-500/20 text-amber-400">Optional</span>
                              )}
                            </motion.span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[250px]">
                            {chip.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </motion.div>

                  {/* Zone 2 - Processing (center) */}
                  <motion.div
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/12 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 mb-4 cursor-pointer group">
                          <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center">
                            <Lock className="h-3 w-3 text-violet-400" />
                          </div>
                          <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Processing</span>
                          <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        Secure processing layer. Raw data is never exposed — only normalized, aggregated signals are output.
                      </TooltipContent>
                    </Tooltip>
                    <div className="space-y-3">
                      {processingBoxes.map((box, idx) => (
                        <Tooltip key={box.label}>
                          <TooltipTrigger asChild>
                            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 cursor-pointer hover:bg-white/[0.08] transition-colors group">
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-white/80">{box.label}</span>
                                <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                              </div>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[250px]">
                            {box.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                    
                    {/* Lock badge */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-violet-500/20 border border-violet-500/30 cursor-pointer hover:bg-violet-500/30 transition-colors">
                          <Lock className="h-3 w-3 text-violet-400" />
                          <span className="text-[9px] text-violet-300 font-medium">No raw data exposed</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        All processing happens in a secure environment. Raw inputs are never exposed in outputs or logs.
                      </TooltipContent>
                    </Tooltip>
                  </motion.div>

                  {/* Zone 3 - Outputs */}
                  <motion.div
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/8 hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 mb-4 cursor-pointer group">
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <FileOutput className="h-3 w-3 text-emerald-400" />
                          </div>
                          <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Outputs</span>
                          <Info className="h-3 w-3 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        Sponsor-readable outputs. All outputs are aggregated signals — never raw data.
                      </TooltipContent>
                    </Tooltip>
                    <div className="flex flex-wrap gap-2">
                      {outputChips.map((chip, idx) => (
                        <Tooltip key={chip.label}>
                          <TooltipTrigger asChild>
                            <motion.span
                              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 cursor-pointer hover:bg-emerald-500/20 hover:scale-105 transition-all"
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.05 * idx }}
                              viewport={{ once: true }}
                            >
                              {chip.label}
                            </motion.span>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-[250px]">
                            {chip.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Flow arrows (desktop) */}
                <div className="hidden md:flex justify-center gap-24 mt-6">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
                        <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Data flows from inputs into the processing layer. Raw data never exits this stage.
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-2 cursor-pointer group">
                        <div className="w-8 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
                        <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-white/60 transition-colors" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      Only processed, aggregated signals exit as outputs. No raw data is ever exposed.
                    </TooltipContent>
                  </Tooltip>
                </div>

                {/* Compliance chips */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 pt-6 border-t border-white/8">
                  {complianceChips.map((chip, idx) => (
                    <Tooltip key={chip.label}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * idx }}
                          viewport={{ once: true }}
                        >
                          <Shield className="h-3 w-3 text-white/50 group-hover:text-white/70 transition-colors" />
                          <span className="text-xs text-white/70 font-medium">{chip.label}</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[250px]">
                        {chip.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>

              {/* Security Notes Panel */}
              <motion.div
                className="bg-[rgba(10,12,18,0.78)] rounded-2xl border border-white/8 p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="h-4 w-4 text-white/50" />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">Security Notes</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {securityNotes.map((note, idx) => (
                    <Tooltip key={note.label}>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/8 cursor-pointer hover:bg-white/[0.06] transition-colors group"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.05 * idx }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-1 mb-1">
                            <div className="text-[10px] text-white/40 uppercase tracking-wide">{note.label}</div>
                            <Info className="h-2.5 w-2.5 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-xs text-white/80 font-medium">{note.value}</div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[250px]">
                        {note.tooltip}
                      </TooltipContent>
                    </Tooltip>
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
