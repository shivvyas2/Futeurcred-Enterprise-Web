"use client"

import { motion } from "framer-motion"

interface ConnectorLinesProps {
  hoveredCard: string | null
  shouldReduceMotion: boolean
}

export function ConnectorLines({ hoveredCard, shouldReduceMotion }: ConnectorLinesProps) {
  const getLineOpacity = (connectedCards: string[]) => {
    if (!hoveredCard) return 0.25
    return connectedCards.includes(hoveredCard) ? 0.5 : 0.1
  }

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
      viewBox="0 0 500 580"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
      </defs>

      {/* Line 1: Decisioning (top center) → Credit Intelligence (left) */}
      <motion.path
        d="M 200 120 Q 120 180 80 230"
        fill="none"
        stroke="url(#lineGradient1)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity={getLineOpacity(["decisioning", "credit"])}
        strokeDasharray={shouldReduceMotion ? "0" : "6 4"}
        animate={shouldReduceMotion ? {} : {
          strokeDashoffset: [0, -20],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Line 2: Decisioning (top center) → Approval Readiness (right) */}
      <motion.path
        d="M 300 120 Q 380 180 420 220"
        fill="none"
        stroke="url(#lineGradient2)"
        strokeWidth="1"
        strokeLinecap="round"
        opacity={getLineOpacity(["decisioning", "approval"])}
        strokeDasharray={shouldReduceMotion ? "0" : "6 4"}
        animate={shouldReduceMotion ? {} : {
          strokeDashoffset: [0, -20],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Connection dots */}
      <motion.circle 
        cx="200" cy="120" r="2" 
        fill="rgba(255,255,255,0.3)"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.circle 
        cx="300" cy="120" r="2" 
        fill="rgba(255,255,255,0.3)"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
    </svg>
  )
}
