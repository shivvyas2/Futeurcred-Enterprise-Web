"use client"

import { motion, useReducedMotion } from "framer-motion"
import { TrendingUp, Shield, Activity, BarChart3, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const valuePoints = [
  {
    icon: TrendingUp,
    title: "Underwrite potential before revenue exists",
    desc: "Progressive signals replace binary gates"
  },
  {
    icon: Shield,
    title: "Track risk signals in real time",
    desc: "Deposit + ACH behavior as proof"
  },
  {
    icon: Activity,
    title: "Scale limits without blind exposure",
    desc: "Earned trust compounds over time"
  }
]

// Visual card elements for the right side grid
const visualCards: Array<{
  id: number
  type: "score" | "stat" | "highlight" | "avatar" | "milestone"
  value: string | null
  label: string
  badge: string | null
  size: "sm" | "md" | "lg"
}> = [
  { id: 1, type: "score", value: "72", label: "Business Credit", badge: null, size: "md" },
  { id: 2, type: "stat", value: "8", label: "Active Tradelines", badge: "stable", size: "sm" },
  { id: 3, type: "highlight", value: null, label: "1 credit-building signal", badge: "NEW", size: "md" },
  { id: 4, type: "avatar", value: null, label: "Verified Owner", badge: null, size: "lg" },
  { id: 5, type: "score", value: "695", label: "Personal Score", badge: null, size: "md" },
  { id: 6, type: "stat", value: "3", label: "Deposit patterns", badge: null, size: "sm" },
  { id: 7, type: "highlight", value: null, label: "2 stability markers", badge: "NEW", size: "sm" },
  { id: 8, type: "stat", value: "$12K", label: "Avg balance", badge: "stable", size: "sm" },
  { id: 9, type: "milestone", value: "Build", label: "Current Stage", badge: null, size: "md" },
]

function VisualCard({ card, index }: { card: typeof visualCards[0]; index: number }) {
  const shouldReduceMotion = useReducedMotion()
  
  const sizeClasses = {
    sm: "w-[130px] h-[100px]",
    md: "w-[160px] h-[120px]",
    lg: "w-[180px] h-[160px]"
  }

  const getCardContent = () => {
    switch (card.type) {
      case "score":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-3xl font-bold text-slate-800">{card.value}</span>
            <span className="text-[11px] text-slate-500 mt-1 text-center">{card.label}</span>
          </div>
        )
      case "stat":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <span className="text-2xl font-semibold text-slate-700">{card.value}</span>
            <span className="text-[10px] text-slate-500 mt-1 text-center px-2">{card.label}</span>
          </div>
        )
      case "highlight":
        return (
          <div className="flex flex-col items-center justify-center h-full p-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 mb-2" />
            <span className="text-[11px] text-slate-700 font-medium text-center">{card.label}</span>
          </div>
        )
      case "avatar":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 mb-2 flex items-center justify-center">
              <Users className="w-7 h-7 text-slate-500" />
            </div>
            <span className="text-[11px] text-slate-600 font-medium">{card.label}</span>
          </div>
        )
      case "milestone":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-lg font-bold text-slate-800">{card.value}</span>
            <span className="text-[10px] text-slate-500">{card.label}</span>
          </div>
        )
      default:
        return null
    }
  }

  // Position cards in a scattered grid pattern
  const positions = [
    { top: "0%", left: "0%" },
    { top: "5%", left: "45%" },
    { top: "0%", left: "75%" },
    { top: "30%", left: "20%" },
    { top: "35%", left: "55%" },
    { top: "55%", left: "0%" },
    { top: "60%", left: "40%" },
    { top: "55%", left: "75%" },
    { top: "80%", left: "25%" },
  ]

  const pos = positions[index % positions.length]

  return (
    <motion.div
      className={`absolute ${sizeClasses[card.size]} rounded-2xl bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer overflow-hidden`}
      style={{ top: pos.top, left: pos.left }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      animate={shouldReduceMotion ? {} : {
        y: [0, -3, 0],
      }}
    >
      {/* Badge */}
      {card.badge && (
        <div className="absolute top-2 right-2">
          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full
            ${card.badge === "NEW" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
            {card.badge}
          </span>
        </div>
      )}
      
      {/* Status dot */}
      <div className="absolute top-2 left-2">
        <div className={`w-2 h-2 rounded-full ${
          index % 3 === 0 ? "bg-emerald-400" : index % 3 === 1 ? "bg-blue-400" : "bg-amber-400"
        }`} />
      </div>
      
      {getCardContent()}
    </motion.div>
  )
}

export function ProgressEngineSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[13px] uppercase tracking-[2px] text-slate-500 font-semibold mb-4 block">
              Progressive Underwriting
            </span>
            
            <h2 className="text-[32px] md:text-[42px] font-bold text-slate-900 leading-[1.15] mb-5">
              Approve more SMBs, earlier, without guessing risk.
            </h2>
            
            <p className="text-[17px] text-slate-600 mb-10 max-w-lg">
              Progressive underwriting that scales limits with proof. Turn thin-file applicants into qualified borrowers.
            </p>
            
            {/* Value Points */}
            <div className="space-y-6 mb-10">
              {valuePoints.map((point, i) => (
                <motion.div 
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-slate-900 mb-0.5">
                      {point.title}
                    </h4>
                    <p className="text-[14px] text-slate-500">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="bg-slate-900 text-white px-7 py-3 text-[15px] font-semibold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20"
              >
                Request Private Pilot
              </Button>
              <button className="flex items-center gap-2 text-slate-700 font-medium text-[15px] hover:text-slate-900 transition-colors group">
                <span className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center group-hover:border-slate-400 transition-colors">
                  <BarChart3 className="w-4 h-4" />
                </span>
                View API Docs
              </button>
            </motion.div>
          </motion.div>
          
          {/* Right: Visual Card Grid */}
          <div className="relative h-[500px] md:h-[600px] hidden lg:block">
            {/* Background gradient orbs */}
            <div 
              className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            
            {/* Cards */}
            {visualCards.map((card, i) => (
              <VisualCard key={card.id} card={card} index={i} />
            ))}
          </div>
          
          {/* Mobile: Simplified visual */}
          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {visualCards.slice(0, 4).map((card, i) => (
                <motion.div
                  key={card.id}
                  className="rounded-2xl bg-white border border-slate-200 shadow-md p-4 text-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  {card.badge && (
                    <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full mb-2 inline-block
                      ${card.badge === "NEW" ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>
                      {card.badge}
                    </span>
                  )}
                  {card.value && <div className="text-2xl font-bold text-slate-800">{card.value}</div>}
                  <div className="text-[11px] text-slate-500 mt-1">{card.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
