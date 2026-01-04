import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Icon from "@/components/Icon"

interface FintechData {
  id: string
  name: string
  logo: string
  arr: string
  currentMetric: string
  currentValue: string
  projectedValue: string
  improvement: string
  additionalARR: string
  arrNote: string
  currentSignals: string[]
  addedSignals: string[]
  kpis: {
    dropoff: { from: number; to: number }
    approval: { from: number; to: number }
    speed: { from: string; to: string }
  }
}

const fintechData: FintechData[] = [
  {
    id: "brex",
    name: "Brex",
    logo: "/fintech-logos/Brex.png",
    arr: "$300M ARR",
    currentMetric: "Application Conversion",
    currentValue: "12%",
    projectedValue: "19%",
    improvement: "+58%",
    additionalARR: "$174M",
    arrNote: "Based on credit visibility impact",
    currentSignals: ["FICO", "Revenue", "Manual Review"],
    addedSignals: ["Business Credit", "Deposit Stability", "Behavior Signals"],
    kpis: {
      dropoff: { from: 67, to: 9 },
      approval: { from: 12, to: 42 },
      speed: { from: "14 days", to: "2-6 sec" }
    }
  },
  {
    id: "ramp",
    name: "Ramp",
    logo: "/fintech-logos/Ramp.jpeg",
    arr: "$200M ARR",
    currentMetric: "Underwriting Approval",
    currentValue: "15%",
    projectedValue: "24%",
    improvement: "+60%",
    additionalARR: "$120M",
    arrNote: "With enhanced credit intelligence",
    currentSignals: ["FICO", "Revenue", "Manual Review"],
    addedSignals: ["Business Credit", "Deposit Stability", "Behavior Signals"],
    kpis: {
      dropoff: { from: 62, to: 11 },
      approval: { from: 15, to: 48 },
      speed: { from: "10 days", to: "3-8 sec" }
    }
  },
  {
    id: "mercury",
    name: "Mercury",
    logo: "/fintech-logos/mercury.png",
    arr: "$120M ARR",
    currentMetric: "Lending Product Uptake",
    currentValue: "8%",
    projectedValue: "14%",
    improvement: "+75%",
    additionalARR: "$90M",
    arrNote: "Through credit journey integration",
    currentSignals: ["FICO", "Revenue", "Manual Review"],
    addedSignals: ["Business Credit", "Deposit Stability", "Behavior Signals"],
    kpis: {
      dropoff: { from: 71, to: 8 },
      approval: { from: 8, to: 38 },
      speed: { from: "21 days", to: "4-10 sec" }
    }
  }
]

const underwritingDepthItems = [
  { label: "Owner FICO", description: "Base signal" },
  { label: "Business Credit File", description: "Tradelines + limits" },
  { label: "Deposit Stability", description: "6–12 mo trend" },
  { label: "Banking Behavior", description: "Bounced ACH + avg balance" },
  { label: "Unlock Path AI", description: "Fastest qualification route" }
]

const kpiTooltips = {
  dropoff: "Users don't abandon when approval odds are visible upfront",
  approval: "We increase certainty without rewriting underwriting models",
  speed: "Signals resolve first. Decisions resolve faster"
}

function FintechCard({ data, index }: { data: FintechData; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [certainty, setCertainty] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const isAnimatingRef = useRef(false)
  const certaintyIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const animateCertainty = () => {
    // Clear any existing interval
    if (certaintyIntervalRef.current) {
      clearInterval(certaintyIntervalRef.current)
    }
    
    let current = 0
    const target = 78 + index * 5
    certaintyIntervalRef.current = setInterval(() => {
      current += 2
      if (current >= target) {
        setCertainty(target)
        if (certaintyIntervalRef.current) {
          clearInterval(certaintyIntervalRef.current)
          certaintyIntervalRef.current = null
        }
      } else {
        setCertainty(current)
      }
    }, 20)
  }

  const handleMouseEnter = () => {
    if (isAnimatingRef.current || isExpanded) return
    
    isAnimatingRef.current = true
    setIsExpanded(true)
    setIsHovered(true)
    animateCertainty()
    
    // Allow animation to complete
    setTimeout(() => {
      isAnimatingRef.current = false
    }, 450)
  }

  const handleMouseLeave = () => {
    if (isAnimatingRef.current || !isExpanded) return
    
    isAnimatingRef.current = true
    setIsExpanded(false)
    setIsHovered(false)
    setCertainty(0)
    
    // Clear certainty animation
    if (certaintyIntervalRef.current) {
      clearInterval(certaintyIntervalRef.current)
      certaintyIntervalRef.current = null
    }
    
    // Allow animation to complete
    setTimeout(() => {
      isAnimatingRef.current = false
    }, 450)
  }

  const handleClick = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      animateCertainty()
    } else {
      setCertainty(0)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Stable hover area wrapper - maintains consistent size */}
      <div
        className="relative w-full"
        style={{ minHeight: "650px" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card container with flip capability */}
        <motion.div
          className={`relative w-full ${isExpanded ? "min-h-[600px] md:min-h-[650px]" : "min-h-[380px]"}`}
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
          animate={{ rotateY: isExpanded ? 180 : 0 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
        >
          {/* Front Face - Layer A & B */}
          <motion.div
            className={`absolute inset-0 rounded-2xl overflow-hidden transition-all duration-300 ${
              isHovered ? "border-white/30" : "border-white/10"
            } border`}
            style={{ 
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(12px)",
              boxShadow: isHovered 
                ? "0 40px 90px -20px rgba(255,255,255,0.1)" 
                : "0 20px 60px -20px rgba(0,0,0,0.5)"
            }}
            onClick={handleClick}
          >
          {/* Noise grain overlay */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none z-0"
            style={{ 
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
            }}
          />
          
          {/* Light streak gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={isInView ? {
              background: [
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 20%, transparent 40%)",
                "linear-gradient(90deg, transparent 60%, rgba(255,255,255,0.03) 80%, transparent 100%)"
              ]
            } : {}}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Breathing glow border on hover */}
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{ 
                boxShadow: [
                  "inset 0 0 20px rgba(255,255,255,0.05)",
                  "inset 0 0 40px rgba(255,255,255,0.1)",
                  "inset 0 0 20px rgba(255,255,255,0.05)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}

          <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col">
            {/* Logo in glass pill */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="relative bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                animate={isHovered ? { 
                  boxShadow: [
                    "0 0 0 0 rgba(255,255,255,0)",
                    "0 0 20px 2px rgba(255,255,255,0.2)",
                    "0 0 0 0 rgba(255,255,255,0)"
                  ]
                } : {}}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
              >
                <img src={data.logo} alt={`${data.name} logo`} className="h-10 w-auto" />
              </motion.div>
              <div>
                <h3 className="font-bold text-xl text-white">{data.name}</h3>
                <div className="text-white/70 font-medium">{data.arr}</div>
              </div>
            </div>

            {/* Layer A - Current Underwriting Inputs */}
            <div className="mb-4">
              <div className="text-white/50 text-xs uppercase tracking-wider mb-2">Current Underwriting</div>
              <div className="flex flex-wrap gap-2">
                {data.currentSignals.map((signal, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs">
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            {/* Layer B - Hover Reveal */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mb-4"
                >
                  <div className="text-emerald-400/80 text-xs uppercase tracking-wider mb-2">+ With LumiqAI</div>
                  <div className="flex flex-wrap gap-2">
                    {data.addedSignals.map((signal, i) => (
                      <motion.span 
                        key={i} 
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {signal}
                      </motion.span>
                    ))}
                  </div>
                  {/* Signal dots animation */}
                  <div className="flex items-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-emerald-400"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, delay: i * 0.15, repeat: Infinity }}
                      />
                    ))}
                    <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent ml-2" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Metrics */}
            <div className="space-y-3 mt-auto">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">{data.currentMetric}</span>
                  <span className="text-white font-bold">{data.currentValue} → {data.projectedValue}</span>
                </div>
                <div className="text-emerald-400 text-sm font-medium mt-1">{data.improvement} improvement</div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-white">{data.additionalARR}</div>
                <div className="text-white/50 text-sm">additional ARR potential</div>
              </div>
            </div>

            {/* Click hint */}
            <motion.div 
              className="text-center mt-4 text-white/40 text-xs"
              animate={{ opacity: isHovered ? 1 : 0.5 }}
            >
              Click to inspect underwriting depth
            </motion.div>
          </div>
        </motion.div>

        {/* Back Face - Layer C (Console Mode) */}
        <motion.div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(0,0,0,0.9) 100%)",
            backdropFilter: "blur(12px)"
          }}
          onClick={handleClick}
        >
          <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col pb-10 sm:pb-12">
            {/* Console header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs uppercase tracking-wider font-bold">
                  Underwriting Depth Upgrade
                </span>
              </div>
              <img src={data.logo} alt={data.name} className="h-6 w-auto opacity-50" />
            </div>

            {/* Depth items */}
            <div className="space-y-2 mb-4">
              {underwritingDepthItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium flex-1 min-w-0">{item.label}</span>
                  <span className="text-white/50 text-[10px] sm:text-xs ml-auto flex-shrink-0">→ {item.description}</span>
                </motion.div>
              ))}
            </div>

            {/* Certainty Dial */}
            <div className="relative flex items-center justify-center mb-3">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                  />
                  <motion.circle
                    cx="50" cy="50" r="40"
                    fill="none"
                    stroke="rgb(16,185,129)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${certainty * 2.51} 251`}
                    initial={{ strokeDasharray: "0 251" }}
                    animate={{ strokeDasharray: `${certainty * 2.51} 251` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold text-white">{certainty}%</span>
                  <span className="text-white/50 text-[10px]">CERTAINTY</span>
                </div>
              </div>
            </div>

            {/* KPI Bars */}
            <div className="space-y-2.5 mt-auto">
              {/* Drop-off Reduction */}
              <div className="group relative">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-white/60 cursor-help" title={kpiTooltips.dropoff}>Drop-off Reduction</span>
                  <span className="text-emerald-400">{data.kpis.dropoff.from}% → {data.kpis.dropoff.to}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-500 to-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={isExpanded ? { width: `${100 - (data.kpis.dropoff.to / data.kpis.dropoff.from) * 100}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/20 rounded-lg text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {kpiTooltips.dropoff}
                </div>
              </div>

              {/* Approval Retention */}
              <div className="group relative">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-white/60 cursor-help" title={kpiTooltips.approval}>Approval Retention</span>
                  <span className="text-emerald-400">{data.kpis.approval.from}% → {data.kpis.approval.to}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={isExpanded ? { width: `${data.kpis.approval.to}%` } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/20 rounded-lg text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {kpiTooltips.approval}
                </div>
              </div>

              {/* Decision Speed */}
              <div className="group relative">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-white/60 cursor-help" title={kpiTooltips.speed}>Decision Speed</span>
                  <span className="text-emerald-400">{data.kpis.speed.from} → {data.kpis.speed.to}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={isExpanded ? { width: "95%" } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  />
                </div>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 border border-white/20 rounded-lg text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                  {kpiTooltips.speed}
                </div>
              </div>
            </div>

            <div className="text-center mt-4 text-white/40 text-xs">
              Click to flip back
            </div>
          </div>
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default function FintechScoreboardSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [isHoveringSection, setIsHoveringSection] = useState(false)

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
      onMouseEnter={() => setIsHoveringSection(true)}
      onMouseLeave={() => setIsHoveringSection(false)}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vignette that increases on scroll */}
        <motion.div
          className="absolute inset-0"
          animate={isInView ? {
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)"
          } : {
            background: "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.3) 100%)"
          }}
          transition={{ duration: 1 }}
        />
        
        {/* Signal beam traveling left to right */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 h-px w-full"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2) 50%, transparent)"
          }}
          initial={{ x: "-100%" }}
          animate={isInView ? { x: "100%" } : { x: "-100%" }}
          transition={{ duration: 3, delay: 0.5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Interaction strip above cards */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
            <span className="text-white/60 text-xs uppercase tracking-wider font-medium">
              Fintechs lose applicants because signals are shallow. We make signals deep + decisions fast.
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-400"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Your Revenue Potential with Credit Intelligence
          </h2>
          <p className="text-lg text-white/70">
            Conservative projections based on proven fintech implementations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {fintechData.map((data, index) => (
            <FintechCard key={data.id} data={data} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
