"use client"

import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { Shield, Activity, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const valueItems = [
  { icon: Shield, text: "Underwriting lift without blind risk" },
  { icon: Activity, text: "Deposit + ACH stability signals" },
  { icon: Eye, text: "In-app credit + readiness visibility" }
]

const integrationPills = [
  "Underwriting Engine",
  "Risk Rules",
  "KYB/KYC",
  "Bank Data",
  "Business Credit",
  "Personal Credit",
  "Decisioning",
  "Dashboard UI"
]

const milestones = ["Verify", "Stabilize", "Build", "Qualify", "Unlock"]

function SuperCard() {
  const [mode, setMode] = useState<"before" | "with">("before")
  const shouldReduceMotion = useReducedMotion()

  const progress = mode === "before" ? 20 : 70
  const status = mode === "before" 
    ? "Denied: insufficient signals" 
    : "On track: signals detected"

  return (
    <motion.div
      className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-8 lg:p-10 overflow-hidden w-full max-w-full"
      style={{
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 18px 70px rgba(0,0,0,0.45)",
      }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          padding: "1px",
          background: shouldReduceMotion 
            ? "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))"
            : undefined,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        {!shouldReduceMotion && (
          <div 
            className="absolute inset-0 rounded-3xl animate-border-rotate"
            style={{
              background: "conic-gradient(from 0deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05), rgba(255,255,255,0.15), rgba(255,255,255,0.05), rgba(255,255,255,0.25))",
            }}
          />
        )}
      </div>
      
      {/* Noise overlay */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />
      
      <div className="relative z-10 w-full min-w-0">
        <h2 className="text-xl sm:text-2xl md:text-[26px] lg:text-[32px] font-bold text-white tracking-tight mb-3 break-words">
          Approve earlier. Retain longer. Scale safely.
        </h2>
        <p className="text-sm sm:text-[15px] text-white/55 mb-6 sm:mb-8 break-words">
          LumiqAI enriches thin-file SMB decisions and keeps users in-app.
        </p>
        
        {/* Value list */}
        <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {valueItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/70" />
              </div>
              <span className="text-white/90 text-sm sm:text-[15px] leading-snug">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-white text-black font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link to="/request-pilot">
              Request Private Pilot
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-white/20 text-white !text-white font-medium hover:bg-white/10 hover:border-white/30 hover:!text-white bg-transparent shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-white">
              View API Docs
            </a>
          </Button>
        </div>
        
        {/* Micro Demo */}
        <div 
          className="rounded-2xl p-4 sm:p-5 border border-white/[0.06]"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <span className="text-[11px] sm:text-[12px] uppercase tracking-[1.5px] text-white/45 font-medium">
            Readiness Preview
          </span>
          
          {/* Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4 mb-4 sm:mb-5">
            <button
              onClick={() => setMode("before")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all ${
                mode === "before" 
                  ? "bg-white/15 text-white border border-white/20" 
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setMode("with")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all ${
                mode === "with" 
                  ? "bg-white/15 text-white border border-white/20" 
                  : "text-white/50 hover:text-white/70"
              }`}
            >
              With LumiqAI
            </button>
          </div>
          
          {/* Milestone steps */}
          <div className="flex items-center justify-between mb-3 gap-0.5 sm:gap-1 md:gap-0 overflow-x-auto -mx-1 px-1">
            {milestones.map((m, i) => {
              const stepProgress = (i / (milestones.length - 1)) * 100
              const isActive = stepProgress <= progress
              return (
                <div key={m} className="flex flex-col items-center gap-0.5 sm:gap-1 flex-1 min-w-[50px] sm:min-w-0 flex-shrink-0">
                  <motion.div 
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold transition-colors duration-300 flex-shrink-0
                      ${isActive ? 'bg-white/60 text-black' : 'bg-white/10 text-white/40'}`}
                    animate={{ scale: isActive ? 1 : 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i + 1}
                  </motion.div>
                  <span className={`text-[7px] sm:text-[8px] md:text-[9px] uppercase transition-colors duration-300 text-center leading-tight whitespace-nowrap ${isActive ? 'text-white/70' : 'text-white/30'}`}>
                    {m}
                  </span>
                </div>
              )
            })}
          </div>
          
          {/* Progress bar */}
          <div className="h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mb-3 sm:mb-4">
            <motion.div 
              className="h-full bg-white/50 rounded-full"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          {/* Status */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0"
            >
              <span className={`text-xs sm:text-[13px] font-medium ${mode === "before" ? "text-white/50" : "text-white/80"}`}>
                {status}
              </span>
              {mode === "with" && (
                <span className="text-[10px] sm:text-[11px] text-white/50 px-2 py-1 rounded-full border border-white/10 whitespace-nowrap">
                  Next unlock: Card/LOC
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

function IntegrationStrip() {
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || isPaused || !scrollRef.current) return
    
    const container = scrollRef.current
    let animationId: number
    let position = 0
    const speed = 0.4

    const animate = () => {
      position += speed
      if (position >= container.scrollWidth / 2) {
        position = 0
      }
      container.scrollLeft = position
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, shouldReduceMotion])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.15 }}
    >
      <h3 className="text-white/80 text-sm sm:text-[16px] font-medium mb-4 sm:mb-5">
        Integrates with your stack.
      </h3>
      
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Shimmer overlay */}
        {!shouldReduceMotion && (
          <div 
            className="absolute inset-0 pointer-events-none z-10 animate-shimmer-sweep"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
        )}
        
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide -mx-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-2 sm:gap-3 py-2" style={{ width: 'max-content' }}>
            {[...integrationPills, ...integrationPills].map((pill, i) => (
              <div
                key={`${pill}-${i}`}
                className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 text-white/70 text-xs sm:text-[13px] font-medium transition-all hover:bg-white/10"
                style={{ background: "rgba(0,0,0,0.40)" }}
              >
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProofTiles() {
  const tiles = [
    {
      title: "For Risk Teams",
      bullets: ["Approve earlier with more signals", "Reduce manual review load"]
    },
    {
      title: "For Product Teams",
      bullets: ["Embed credit + readiness panels", "Retain users instead of churn"]
    }
  ]

  return (
    <motion.div 
      className="grid gap-3 sm:gap-4"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {tiles.map((tile, i) => (
        <div
          key={tile.title}
          className="rounded-2xl p-4 sm:p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "rgba(255,255,255,0.03)",
            borderLeft: "2px solid rgba(255,255,255,0.2)",
          }}
        >
          <h4 className="text-white font-semibold text-sm sm:text-[16px] mb-2.5 sm:mb-3">{tile.title}</h4>
          <div className="space-y-1.5 sm:space-y-2">
            {tile.bullets.map((bullet, j) => (
              <div key={j} className="flex items-start gap-2 sm:gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-[5px] sm:mt-[6px] flex-shrink-0" />
                <span className="text-white/75 text-xs sm:text-[14px] leading-relaxed">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export function EnterpriseCloseSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 bg-black relative overflow-hidden">
      {/* Spotlight background */}
      <div 
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.08) 0%, transparent 60%)",
          filter: "blur(1px)",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      <style>{`
        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-border-rotate {
          animation: border-rotate 14s linear infinite;
        }
        @keyframes shimmer-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer-sweep {
          animation: shimmer-sweep 9s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 lg:gap-14 items-start">
          {/* Left: SuperCard */}
          <div className="w-full min-w-0">
            <SuperCard />
          </div>
          
          {/* Right: Integration Strip + Proof Tiles */}
          <div className="space-y-6 sm:space-y-8 w-full min-w-0">
            <IntegrationStrip />
            <ProofTiles />
          </div>
        </div>
      </div>
    </section>
  )
}
