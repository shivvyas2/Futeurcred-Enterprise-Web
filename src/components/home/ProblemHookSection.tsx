import { useState, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"
import Icon from "@/components/Icon"
import { Button } from "@/components/ui/button"

// Signal taxonomy data
const signals = [
  {
    id: "identity",
    label: "Identity",
    tag: "REQUIRED",
    tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description: "Verified corporate separation + EIN match confidence.",
    icon: "Access.svg"
  },
  {
    id: "registry",
    label: "Registry",
    tag: "REQUIRED",
    tagColor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description: "DUNS + UEI + business file presence.",
    icon: "document.svg"
  },
  {
    id: "banking",
    label: "Banking Behavior",
    tag: "OPTIONAL / CONDITIONAL",
    tagColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    description: "ACH history, average balances, payroll flags, bounced ACH risk markers.",
    icon: "Bank.svg"
  },
  {
    id: "credit",
    label: "Business Credit File",
    tag: "ELIGIBLE",
    tagColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description: "Bureau tradelines + spending + repayment behavior.",
    icon: "chart.svg"
  },
  {
    id: "deposit",
    label: "Deposit Stability",
    tag: "OPTIONAL",
    tagColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    description: "6–12 month deposit trend + volatility score + stability index.",
    icon: "safe box.svg"
  },
  {
    id: "flags",
    label: "Missing Signal Flags",
    tag: "AUTOMATED DETECTION",
    tagColor: "bg-red-500/20 text-red-400 border-red-500/30",
    description: "Risk markers, reason codes, and decline explainability output.",
    icon: "flag.svg",
    hidden: true
  }
]

// Ladder nodes
const ladderNodes = [
  { label: "Identity + Registry", tag: "Required", icon: "Access.svg" },
  { label: "Banking + Deposit Behavior", tag: "Optional / Conditional", icon: "Bank.svg" },
  { label: "Business Credit + Bureau File", tag: "Eligible", icon: "chart.svg" },
  { label: "Fundability Output", tag: "Realtime % + Reason Codes", icon: "target.svg" }
]

// Explainability bullets
const explainabilityBullets = [
  "Decline reason codes generated in real-time",
  "Unlock path shown instantly in-app",
  "No underwriting model rewrite needed",
  "More approvals retained over time",
  "Revenue signals enriched when missing"
]

export default function ProblemHookSection() {
  const shouldReduceMotion = useReducedMotion()
  const [isAdvantageMode, setIsAdvantageMode] = useState(false)
  const [expandedSignal, setExpandedSignal] = useState<string | null>(null)
  const [hoveredSignal, setHoveredSignal] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsAdvantageMode(!isAdvantageMode)
  }

  const handleSignalClick = (id: string) => {
    setExpandedSignal(expandedSignal === id ? null : id)
  }

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Underwriting Starts With Signals
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-normal">
            Real-time fundability visibility + explainable approval paths powered by deeper business signals.
          </p>
        </motion.div>

        {/* Main Content Grid - 70/30 split */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
          {/* Left Column - 70% */}
          <div className="space-y-10">
            {/* Toggle Component */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="flex items-stretch rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm cursor-pointer"
                onClick={handleToggle}
              >
                {/* Status Quo Side */}
                <div 
                  className={`flex-1 p-6 transition-all duration-500 ${
                    !isAdvantageMode 
                      ? "bg-white/5" 
                      : "opacity-50 blur-[1px]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      !isAdvantageMode ? "bg-red-400" : "bg-white/30"
                    }`} />
                    <span className={`font-bold text-lg transition-colors duration-300 ${
                      !isAdvantageMode ? "text-white" : "text-white/50"
                    }`}>Status Quo</span>
                  </div>
                  <p className="text-white/50 text-sm pl-6">Revenue + Owner FICO only</p>
                </div>

                {/* Divider */}
                <div className="w-px bg-white/10 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: isAdvantageMode ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Advantage Side */}
                <div 
                  className={`flex-1 p-6 transition-all duration-500 ${
                    isAdvantageMode 
                      ? "bg-emerald-500/10" 
                      : "opacity-50 blur-[1px]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      isAdvantageMode ? "bg-emerald-400" : "bg-white/30"
                    }`} />
                    <span className={`font-bold text-lg transition-colors duration-300 ${
                      isAdvantageMode ? "text-white" : "text-white/50"
                    }`}>LumiqAI + FuteurCredX Edge</span>
                  </div>
                  <p className="text-white/50 text-sm pl-6">Expanded Business Trust Signals + Instant Unlock Gravity</p>
                </div>
              </div>
              <p className="text-center text-white/40 text-xs mt-3">Click to toggle view</p>
            </motion.div>

            {/* Signal Taxonomy Row */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {signals.map((signal, index) => {
                  const isActive = isAdvantageMode || hoveredSignal === signal.id
                  const isExpanded = expandedSignal === signal.id
                  const isHiddenSignal = signal.hidden
                  
                  return (
                    <motion.div
                      key={signal.id}
                      className={`relative ${isHiddenSignal && !hoveredSignal ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: isAdvantageMode ? 1 : (hoveredSignal === signal.id || !isHiddenSignal ? 1 : 0),
                        scale: 1 
                      }}
                      transition={{ delay: isAdvantageMode ? index * 0.1 : 0, duration: 0.3 }}
                      onMouseEnter={() => setHoveredSignal(signal.id)}
                      onMouseLeave={() => setHoveredSignal(null)}
                      onClick={() => handleSignalClick(signal.id)}
                    >
                      <div 
                        className={`relative flex flex-col items-center p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? "bg-white/10 border-white/20" 
                            : "bg-white/5 border-white/10 grayscale"
                        } hover:border-white/30`}
                      >
                        {/* Pulse dot */}
                        <motion.div
                          className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400"
                          animate={{ 
                            opacity: isActive ? [0.3, 1, 0.3] : 0,
                            scale: isActive ? [1, 1.2, 1] : 1
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 transition-all duration-300 ${
                          isActive ? "bg-white/10" : "bg-white/5"
                        }`}>
                          <Icon 
                            name={signal.icon} 
                            className={`h-5 w-5 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`} 
                            width={20} 
                            height={20} 
                          />
                        </div>
                        <span className={`text-xs font-medium text-center transition-opacity duration-300 ${
                          isActive ? "text-white" : "text-white/40"
                        }`}>
                          {signal.label}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 mt-2 rounded-full border transition-opacity duration-300 ${
                          isActive ? signal.tagColor : "bg-white/5 text-white/30 border-white/10"
                        }`}>
                          {signal.tag}
                        </span>
                      </div>

                      {/* Expanded drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "auto" }}
                            exit={{ opacity: 0, y: -10, height: 0 }}
                            className="absolute top-full left-0 right-0 z-20 mt-2"
                          >
                            <div className="bg-gray-900 border border-white/20 rounded-lg p-3 text-xs text-white/80 shadow-xl">
                              {signal.description}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* KPI / Fundability Bars */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid md:grid-cols-3 gap-4">
                {/* Drop-off Bar */}
                <div className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Application Drop-off</span>
                    <span className="text-xs text-red-400">↓</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-red-500 to-emerald-500 rounded-full"
                      initial={{ width: "67%" }}
                      animate={{ width: isAdvantageMode ? "5%" : "67%" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-white/40">67%</span>
                    <span className={`transition-colors ${isAdvantageMode ? "text-emerald-400 font-bold" : "text-white/40"}`}>5%</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-xl p-3">
                    <p className="text-white/80 text-xs text-center">Users don't churn when they can see approval odds + unlock paths upfront.</p>
                  </div>
                </div>

                {/* Fundability Bar */}
                <div className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Fundability</span>
                    <span className="text-xs text-emerald-400">↑</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: isAdvantageMode ? "40%" : "0%" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-white/40">0%</span>
                    <span className={`transition-colors ${isAdvantageMode ? "text-emerald-400 font-bold" : "text-white/40"}`}>40%+ retained</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-xl p-3">
                    <p className="text-white/80 text-xs text-center">Users don't churn when they can see approval odds + unlock paths upfront.</p>
                  </div>
                </div>

                {/* Decision Time Bar */}
                <div className="group relative bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Decision Time</span>
                    <span className="text-xs text-emerald-400">↓</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                      initial={{ width: "100%" }}
                      animate={{ width: isAdvantageMode ? "3%" : "100%" }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs">
                    <span className="text-white/40">Days</span>
                    <span className={`transition-colors ${isAdvantageMode ? "text-emerald-400 font-bold" : "text-white/40"}`}>Seconds</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 rounded-xl p-3">
                    <p className="text-white/80 text-xs text-center">Users don't churn when they can see approval odds + unlock paths upfront.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Explainability Panel */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-white">Explainability That Funds, Not Just Scores</h3>
                <div className="group relative cursor-help">
                  <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white/60 text-xs">i</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-900 border border-white/20 rounded-lg text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-30 shadow-xl">
                    We add signal depth. Fintech keeps their underwriting. Users keep their patience. You keep the customers.
                  </div>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {explainabilityBullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.4 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-xs">✓</span>
                    </div>
                    <span className="text-white/70 text-sm">{bullet}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right Column - Underwriting Ladder Diagram - 30% */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24 space-y-0">
              {ladderNodes.map((node, index) => (
                <div key={index} className="relative">
                  {/* Node */}
                  <motion.div
                    className={`relative z-10 flex items-center gap-3 px-5 py-4 rounded-full border transition-all duration-500 ${
                      isAdvantageMode 
                        ? "bg-emerald-500/10 border-emerald-500/30" 
                        : "bg-white/5 border-white/10"
                    }`}
                    style={{ width: 280 }}
                    initial={{ opacity: 0.5 }}
                    animate={{ 
                      opacity: isAdvantageMode ? 1 : 0.6,
                      boxShadow: isAdvantageMode 
                        ? `0 0 20px rgba(16, 185, 129, ${0.2 - index * 0.03})` 
                        : "none"
                    }}
                    transition={{ delay: isAdvantageMode ? index * 0.15 : 0, duration: 0.4 }}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isAdvantageMode ? "bg-emerald-500/20" : "bg-white/10"
                    }`}>
                      <Icon 
                        name={node.icon} 
                        className={`h-4 w-4 transition-opacity ${isAdvantageMode ? "opacity-100" : "opacity-50"}`} 
                        width={16} 
                        height={16} 
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium truncate transition-colors ${isAdvantageMode ? "text-white" : "text-white/70"}`}>
                        {node.label}
                      </p>
                      <p className={`text-xs transition-colors ${isAdvantageMode ? "text-emerald-400/80" : "text-white/40"}`}>
                        {node.tag}
                      </p>
                    </div>
                  </motion.div>

                  {/* Connector Line */}
                  {index < ladderNodes.length - 1 && (
                    <div className="relative h-8 flex justify-start pl-[22px]">
                      <svg className="w-2 h-8" viewBox="0 0 8 32">
                        <line 
                          x1="4" y1="0" x2="4" y2="32" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeDasharray="4 4"
                          className={`transition-colors duration-500 ${isAdvantageMode ? "text-emerald-500/50" : "text-white/20"}`}
                        />
                        {/* Animated pulse dot */}
                        <motion.circle
                          cx="4"
                          cy="4"
                          r="3"
                          className={`transition-colors duration-500 ${isAdvantageMode ? "fill-emerald-400" : "fill-white/30"}`}
                          animate={isAdvantageMode ? {
                            cy: [0, 32],
                            opacity: [1, 0]
                          } : {}}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeInOut"
                          }}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learn How It Works CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/how-it-works">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 px-8 py-4 text-base font-bold rounded-full"
            >
              Learn How It Works
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
