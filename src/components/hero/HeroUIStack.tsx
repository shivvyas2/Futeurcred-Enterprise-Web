"use client"

import { motion, useReducedMotion, type Easing } from "framer-motion"
import { useState } from "react"
import { DecisioningCard } from "./cards/DecisioningCard"
import { CreditIntelligenceCard } from "./cards/CreditIntelligenceCard"
import { ApprovalReadinessCard } from "./cards/ApprovalReadinessCard"
import { APIResponseCard } from "./cards/APIResponseCard"
import { ConnectorLines } from "./ConnectorLines"

const easeOut: Easing = [0.4, 0, 0.2, 1]
const easeInOut: Easing = [0.4, 0, 0.6, 1]

export function HeroUIStack() {
  const shouldReduceMotion = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  }

  const getCardOpacity = (cardId: string) => {
    if (!hoveredCard) return 1
    return hoveredCard === cardId ? 1 : 0.8
  }

  const getCardScale = (cardId: string) => {
    if (!hoveredCard) return 1
    return hoveredCard === cardId ? 1.02 : 0.98
  }

  const getCardZIndex = (cardId: string, baseZ: number) => {
    if (hoveredCard === cardId) return 50
    return baseZ
  }

  return (
    <motion.div 
      className="relative w-full h-[580px] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle radial gradient background blob */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Connector Lines SVG */}
      <ConnectorLines 
        hoveredCard={hoveredCard} 
        shouldReduceMotion={shouldReduceMotion ?? false} 
      />

      {/* Card 1 (front/top): Decisioning Summary - top center */}
      <motion.div
        className="absolute cursor-pointer"
        style={{ 
          left: "50%", 
          top: "5%",
          transform: "translateX(-50%)",
          zIndex: getCardZIndex("decisioning", 30),
        }}
        variants={cardVariants}
        animate={{
          y: shouldReduceMotion ? 0 : [0, -4, 0],
          opacity: getCardOpacity("decisioning"),
          scale: getCardScale("decisioning"),
          transition: shouldReduceMotion ? undefined : {
            y: { duration: 6, repeat: Infinity, ease: easeInOut },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          },
        }}
        whileHover={shouldReduceMotion ? undefined : { 
          y: -6, 
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.2 },
        }}
        onMouseEnter={() => setHoveredCard("decisioning")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <DecisioningCard />
      </motion.div>

      {/* Card 2 (middle left): Credit Intelligence */}
      <motion.div
        className="absolute cursor-pointer"
        style={{ 
          left: "-5%", 
          top: "35%",
          zIndex: getCardZIndex("credit", 20),
        }}
        variants={cardVariants}
        animate={{
          y: shouldReduceMotion ? 0 : [0, -3, 0],
          opacity: getCardOpacity("credit"),
          scale: getCardScale("credit"),
          transition: shouldReduceMotion ? undefined : {
            y: { duration: 8, repeat: Infinity, ease: easeInOut },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          },
        }}
        whileHover={shouldReduceMotion ? undefined : { 
          y: -6, 
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.2 },
        }}
        onMouseEnter={() => setHoveredCard("credit")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <CreditIntelligenceCard />
      </motion.div>

      {/* Card 3 (right): Approval Readiness */}
      <motion.div
        className="absolute cursor-pointer"
        style={{ 
          right: "-5%", 
          top: "30%",
          zIndex: getCardZIndex("approval", 10),
        }}
        variants={cardVariants}
        animate={{
          y: shouldReduceMotion ? 0 : [0, -3, 0],
          opacity: getCardOpacity("approval"),
          scale: getCardScale("approval"),
          transition: shouldReduceMotion ? undefined : {
            y: { duration: 10, repeat: Infinity, ease: easeInOut },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          },
        }}
        whileHover={shouldReduceMotion ? undefined : { 
          y: -6, 
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.2 },
        }}
        onMouseEnter={() => setHoveredCard("approval")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <ApprovalReadinessCard />
      </motion.div>

      {/* API Response Card - bottom center */}
      <motion.div
        className="absolute cursor-pointer"
        style={{ 
          left: "50%", 
          bottom: "0%",
          transform: "translateX(-50%)",
          zIndex: getCardZIndex("api", 5),
        }}
        variants={cardVariants}
        animate={{
          y: shouldReduceMotion ? 0 : [0, -2, 0],
          opacity: getCardOpacity("api"),
          scale: getCardScale("api"),
          transition: shouldReduceMotion ? undefined : {
            y: { duration: 7, repeat: Infinity, ease: easeInOut },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          },
        }}
        whileHover={shouldReduceMotion ? undefined : { 
          y: -4, 
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transition: { duration: 0.2 },
        }}
        onMouseEnter={() => setHoveredCard("api")}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <APIResponseCard />
      </motion.div>
    </motion.div>
  )
}
