"use client"

import { motion, useReducedMotion } from "framer-motion"
import { CheckCircle2, TrendingUp, Target } from "lucide-react"

const easeOut = [0.4, 0, 0.2, 1] as const

export function WhatIsItMobileCards() {
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
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
  }

  return (
    <motion.div 
      className="flex flex-col items-center gap-4 py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Card 1: Decisioning */}
      <motion.div variants={cardVariants} className="w-full max-w-[280px]">
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white font-semibold text-sm">Decisioning</span>
          </div>
          <div className="space-y-2 mb-3">
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

      {/* Card 2: Credit Intel */}
      <motion.div variants={cardVariants} className="w-full max-w-[280px]">
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white font-semibold text-sm">Credit Intel</span>
          </div>
          <div className="space-y-2 mb-3">
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

      {/* Card 3: Readiness */}
      <motion.div variants={cardVariants} className="w-full max-w-[280px]">
        <div className="bg-gray-900/95 backdrop-blur-sm border border-white/15 rounded-2xl p-5 shadow-xl shadow-black/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
              <Target className="w-4 h-4 text-white/80" />
            </div>
            <span className="text-white font-semibold text-sm">Readiness</span>
          </div>
          <div className="space-y-2 mb-3">
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
