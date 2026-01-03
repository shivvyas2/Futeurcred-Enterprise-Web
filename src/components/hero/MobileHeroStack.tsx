"use client"

import { motion, useReducedMotion, type Easing } from "framer-motion"
import { DecisioningCard } from "./cards/DecisioningCard"
import { CreditIntelligenceCard } from "./cards/CreditIntelligenceCard"
import { ApprovalReadinessCard } from "./cards/ApprovalReadinessCard"
import { APIResponseCard } from "./cards/APIResponseCard"

const easeOut: Easing = [0.4, 0, 0.2, 1]

export function MobileHeroStack() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
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
        duration: 0.4,
        ease: easeOut,
      },
    },
  }

  return (
    <motion.div 
      className="flex flex-col items-center gap-4 py-8 scale-90"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={cardVariants} className="transform scale-90">
        <DecisioningCard />
      </motion.div>
      <motion.div variants={cardVariants} className="transform scale-90">
        <CreditIntelligenceCard />
      </motion.div>
      <motion.div variants={cardVariants} className="transform scale-90">
        <ApprovalReadinessCard />
      </motion.div>
      <motion.div variants={cardVariants} className="transform scale-85">
        <APIResponseCard />
      </motion.div>
    </motion.div>
  )
}
