"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const useCaseBullets = [
  "Extends underwriting beyond revenue-only gates",
  "Adds business + personal credit visibility in-app",
  "Uses bureau credit scoring for business legitimacy",
  "Uses ACH + deposit stability markers when missing",
  "Maps readiness to product eligibility unlocks"
]

const screenshotFrames = [
  {
    id: 1,
    title: "Business Credit Snapshot",
    rotation: -6,
    content: {
      type: "business",
      score: 72,
      tradelines: 8,
      trend: "Improving",
      registryActive: true
    }
  },
  {
    id: 2,
    title: "Personal Credit Snapshot",
    rotation: -2,
    content: {
      type: "personal",
      score: 695,
      utilization: 28,
      inquiries: 2
    }
  },
  {
    id: 3,
    title: "Deposit + ACH Stability",
    rotation: 2,
    content: {
      type: "deposit",
      avgBalance: "$12.4K",
      frequency: "Bi-weekly",
      bounceFlags: 0,
      riskSignals: []
    }
  },
  {
    id: 4,
    title: "Product Readiness Meter",
    rotation: 6,
    content: {
      type: "readiness",
      milestones: ["Verify", "Stabilize", "Build", "Qualify", "Unlock"],
      currentStep: 3,
      nextUnlock: "Card/LOC",
      status: "On Track"
    }
  }
]

function ScoreDial({ score, max, size = 80 }: { score: number; max: number; size?: number }) {
  const percentage = (score / max) * 100
  const radius = (size - 8) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference * 0.75

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-135">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="6"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg">{score}</span>
      </div>
    </div>
  )
}

function BusinessCreditFrame() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <ScoreDial score={72} max={100} size={70} />
        <div className="text-right space-y-1">
          <div className="text-[11px] text-white/40 uppercase">Tradelines</div>
          <div className="text-white/90 font-semibold text-sm">8 Active</div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <div>
          <div className="text-[10px] text-white/40 uppercase">Payment Trend</div>
          <div className="text-white/80 text-xs font-medium">↑ Improving</div>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] text-white/60">
          Registry Active
        </span>
      </div>
    </div>
  )
}

function PersonalCreditFrame() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <ScoreDial score={695} max={850} size={70} />
        <div className="text-right space-y-1">
          <div className="text-[11px] text-white/40 uppercase">Utilization</div>
          <div className="text-white/90 font-semibold text-sm">28%</div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-2 border-t border-white/10">
        <div>
          <div className="text-[10px] text-white/40 uppercase">Inquiries (12mo)</div>
          <div className="text-white/80 text-xs font-medium">2</div>
        </div>
        <div className="h-2 w-16 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[28%] bg-white/50 rounded-full" />
        </div>
      </div>
    </div>
  )
}

function DepositACHFrame() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] text-white/40 uppercase">Avg Balance</div>
          <div className="text-white/90 font-bold text-lg">$12.4K</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-white/40 uppercase">Frequency</div>
          <div className="text-white/80 text-xs font-medium">Bi-weekly</div>
        </div>
      </div>
      {/* Mini line chart placeholder */}
      <div className="h-8 flex items-end gap-0.5">
        {[40, 55, 48, 62, 58, 70, 65, 72, 68, 75].map((h, i) => (
          <div key={i} className="flex-1 bg-white/20 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="flex items-center gap-2 pt-1">
        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] text-white/50">
          0 Bounces
        </span>
        <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] text-white/50">
          No Risk Flags
        </span>
      </div>
    </div>
  )
}

function ReadinessMeterFrame() {
  const milestones = ["Verify", "Stabilize", "Build", "Qualify", "Unlock"]
  const currentStep = 3

  return (
    <div className="space-y-4">
      {/* Milestone tracker */}
      <div className="flex items-center justify-between">
        {milestones.map((m, i) => (
          <div key={m} className="flex flex-col items-center gap-1">
            <div 
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold
                ${i < currentStep ? 'bg-white/60 text-black' : i === currentStep ? 'bg-white/30 text-white border border-white/40' : 'bg-white/10 text-white/40'}`}
            >
              {i + 1}
            </div>
            <span className={`text-[8px] uppercase ${i <= currentStep ? 'text-white/70' : 'text-white/30'}`}>
              {m}
            </span>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-white/50 rounded-full transition-all" style={{ width: `${(currentStep / (milestones.length - 1)) * 100}%` }} />
      </div>
      <div className="flex items-center justify-between pt-1">
        <div>
          <div className="text-[10px] text-white/40 uppercase">Next Unlock</div>
          <div className="text-white/80 text-xs font-medium">Card/LOC</div>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-white/15 border border-white/15 text-[11px] text-white/70 font-medium">
          On Track
        </span>
      </div>
    </div>
  )
}

function ScreenshotFrame({ frame, index }: { frame: typeof screenshotFrames[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion()
  const floatDuration = 12 + index * 2

  return (
    <motion.div
      className="flex-shrink-0 w-[260px] md:w-[300px] rounded-2xl p-5 backdrop-blur-sm
                 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(0,0,0,0.72)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        transform: `rotate(${frame.rotation}deg)`,
      }}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: 0.15 + index * 0.03 }}
      animate={shouldReduceMotion ? {} : {
        y: [0, -1.5, 0],
      }}
      whileHover={{
        boxShadow: "0 12px 40px rgba(0,0,0,0.32)",
        scale: 1.01,
      }}
    >
      {/* Frame header */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
        <span className="ml-2 text-[10px] text-white/40 uppercase tracking-wide">{frame.title}</span>
      </div>
      
      {/* Frame content */}
      {frame.content.type === "business" && <BusinessCreditFrame />}
      {frame.content.type === "personal" && <PersonalCreditFrame />}
      {frame.content.type === "deposit" && <DepositACHFrame />}
      {frame.content.type === "readiness" && <ReadinessMeterFrame />}
    </motion.div>
  )
}

function ScreenshotBand() {
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (shouldReduceMotion || isPaused || !scrollRef.current) return
    
    const container = scrollRef.current
    let animationId: number
    let position = 0
    const speed = 0.5

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
    <div className="mt-16">
      <h3 className="text-center text-white/60 text-[16px] uppercase tracking-widest mb-8">
        In-App Credit + Readiness UI
      </h3>
      
      <div 
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-5 px-4 py-4" style={{ width: 'max-content' }}>
          {/* Duplicate frames for seamless loop */}
          {[...screenshotFrames, ...screenshotFrames].map((frame, i) => (
            <ScreenshotFrame key={`${frame.id}-${i}`} frame={frame} index={i % 4} />
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductClaritySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-28 px-6 bg-black relative overflow-hidden">
      {/* Ambient background elements */}
      <div 
        className="absolute left-0 top-1/3 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
          filter: "blur(140px)",
          opacity: 0.18,
        }}
      />
      <div 
        className="absolute right-0 bottom-1/4 w-[500px] h-[200px] pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
          filter: "blur(180px)",
          opacity: 0.12,
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-[24px] md:text-[34px] font-bold text-white tracking-tight mb-3">
            LumiqAI = The Underwriting Augmentation + Credit Visibility Layer.
          </h2>
          <p className="text-[15px] text-white/55">
            Enrich decisions with identity, registry, bureau, and deposit behavior signals.
          </p>
        </motion.div>
        
        {/* Primary Explainer Card */}
        <motion.div
          className="max-w-[540px] mx-auto rounded-2xl p-7 backdrop-blur-sm mb-8"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.55)",
            boxShadow: "0 8px 36px rgba(0,0,0,0.28)",
          }}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.12 }}
          animate={shouldReduceMotion ? {} : {
            y: [0, -2, 0],
          }}
        >
          <span className="text-[12px] uppercase tracking-[1.7px] text-white/45 font-medium">
            The Use Case
          </span>
          <h3 className="text-[22px] md:text-[24px] font-bold text-white mt-3 mb-5">
            Approve More SMBs. Keep Them. Safely.
          </h3>
          <div className="space-y-3 mb-6">
            {useCaseBullets.map((bullet, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-[7px] flex-shrink-0" />
                <span className="text-white/90 text-[15px]">{bullet}</span>
              </div>
            ))}
          </div>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/10 text-white/50 text-xs font-medium">
            Enterprise API Layer
          </span>
        </motion.div>
        
        {/* Screenshot Showcase Band */}
        <ScreenshotBand />
        
        {/* Kill Line */}
        <motion.p 
          className="text-center text-white font-bold text-[22px] mt-16"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
        >
          Approve earlier. Retain longer. Scale safely.
        </motion.p>
      </div>
    </section>
  )
}
