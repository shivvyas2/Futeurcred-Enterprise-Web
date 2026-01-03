"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { CheckCircle2, TrendingUp, Target } from "lucide-react"

const easeOut = [0.4, 0, 0.2, 1] as const

export function WhatIsItHeroCards() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  }

  const getCardOpacity = (cardId: string) => {
    if (!hoveredCard) return 1
    return hoveredCard === cardId ? 1 : 0.85
  }

  const getCardZIndex = (cardId: string, baseZ: number) => {
    if (hoveredCard === cardId) return 50
    return baseZ
  }

  const getLineOpacity = (connectedCards: string[]) => {
    if (!hoveredCard) return 0.35
    return connectedCards.includes(hoveredCard) ? 0.6 : 0.15
  }

  return (
    <motion.div 
      className="relative w-full h-[420px] md:h-[480px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle radial gradient behind cards */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Animated Connector Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
        viewBox="0 0 500 480"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="whatLineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>
          <linearGradient id="whatLineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>
        </defs>

        {/* Line 1: Decisioning → Credit Intel */}
        <motion.path
          d="M 200 100 Q 100 180 90 240"
          fill="none"
          stroke="url(#whatLineGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={getLineOpacity(["decisioning", "credit"])}
          strokeDasharray={shouldReduceMotion ? "0" : "8 6"}
          animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, -28] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />

        {/* Line 2: Credit Intel → Readiness */}
        <motion.path
          d="M 300 100 Q 400 180 410 230"
          fill="none"
          stroke="url(#whatLineGradient2)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={getLineOpacity(["credit", "readiness"])}
          strokeDasharray={shouldReduceMotion ? "0" : "8 6"}
          animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, -28] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Card 1: Decisioning (front/top) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-0"
        style={{ zIndex: getCardZIndex("decisioning", 30), opacity: getCardOpacity("decisioning") }}
        variants={cardVariants}
        animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setHoveredCard("decisioning")}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)" }}
      >
        <div className="w-[260px] bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white/80" />
              </div>
              <span className="text-white font-semibold text-sm">Decisioning</span>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/80 text-xs">Identity verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/80 text-xs">Registry active</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/80 text-xs">Stable behavior</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 px-2.5 py-1 rounded-full">
            <span className="text-green-400 text-xs font-medium">Approve earlier</span>
          </div>
        </div>
      </motion.div>

      {/* Card 2: Credit Intel (middle-left) */}
      <motion.div
        className="absolute left-4 md:left-8 top-[140px]"
        style={{ zIndex: getCardZIndex("credit", 20), opacity: getCardOpacity("credit") }}
        variants={cardVariants}
        animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setHoveredCard("credit")}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)" }}
      >
        <div className="w-[240px] bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white font-semibold text-sm">Credit Intel</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-white/80 text-xs">Biz credit in-app</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-white/80 text-xs">Personal credit in-app</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-white/80 text-xs">No redirect, no churn</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 px-2.5 py-1 rounded-full">
            <span className="text-blue-400 text-xs font-medium">Retention lift</span>
          </div>
        </div>
      </motion.div>

      {/* Card 3: Readiness (back-right) */}
      <motion.div
        className="absolute right-4 md:right-8 top-[160px]"
        style={{ zIndex: getCardZIndex("readiness", 10), opacity: getCardOpacity("readiness") }}
        variants={cardVariants}
        animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setHoveredCard("readiness")}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ y: -4, scale: 1.02, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.4)" }}
      >
        <div className="w-[240px] bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white font-semibold text-sm">Readiness</span>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white/80 text-xs">Track approval progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white/80 text-xs">Know next eligibility unlock</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white/80 text-xs">Limits grow with proof</span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-purple-500/20 border border-purple-500/30 px-2.5 py-1 rounded-full">
            <span className="text-purple-400 text-xs font-medium">Earned limits</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
