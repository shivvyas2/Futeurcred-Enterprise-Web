"use client"

import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Plus, Minus, AlertCircle, TrendingDown } from "lucide-react"

const accordionItems = [
  {
    id: "revenue",
    icon: AlertCircle,
    title: "Revenue Dependence",
    tag: "Broken logic",
    description: "Static revenue gates reject promising SMBs before they can prove stability through behavior.",
    bullets: [
      "No revenue = auto reject",
      "No evolution in limits",
      "No early behavior signals"
    ],
    screenshot: "/screenshots/revenue-gate-screenshot.jpg"
  },
  {
    id: "ltv",
    icon: TrendingDown,
    title: "LTV Leak",
    tag: "Value loss",
    description: "Early denial forces users off-platform, where competitors capture the lifetime value you built.",
    bullets: [
      "Users churn to competitors",
      "Forced to leave for insights",
      "Graduates funded off-platform"
    ],
    screenshot: "/fintech Assets/Brex-denial.jpg"
  }
]

export function LegacyUnderwritingSection() {
  const [activeId, setActiveId] = useState<string | null>("revenue")
  const shouldReduceMotion = useReducedMotion()

  const activeItem = accordionItems.find(item => item.id === activeId)

  return (
    <section className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h2 className="text-[28px] md:text-[38px] font-bold text-slate-900 tracking-tight mb-3">
            Legacy underwriting rejects too early.
          </h2>
          <p className="text-[15px] md:text-[17px] text-slate-500">
            Revenue-only rules leak LTV.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Expandable Accordion Cards */}
          <motion.div
            className="space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {accordionItems.map((item, index) => {
              const isActive = activeId === item.id
              const Icon = item.icon
              
              return (
                <div 
                  key={item.id}
                  className={`border-b border-slate-200 ${index === 0 ? 'border-t' : ''}`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setActiveId(isActive ? null : item.id)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                        ${isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[17px] font-semibold transition-colors
                        ${isActive ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`}>
                        {item.title}
                      </span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors
                      ${isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'}`}>
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  
                  {/* Accordion Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pl-12">
                          <p className="text-[15px] text-slate-600 mb-4 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="space-y-2 mb-4">
                            {item.bullets.map((bullet, i) => (
                              <div key={i} className="flex items-center gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-[14px] text-slate-600">{bullet}</span>
                              </div>
                            ))}
                          </div>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium">
                            {item.tag}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
            
            {/* Kill Line */}
            <motion.p 
              className="text-slate-900 font-semibold text-[16px] pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Early denial kills leads and loses lifetime value.
            </motion.p>
          </motion.div>
          
          {/* Right: Screenshot Placeholder Area */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {/* Gradient background blob */}
            <div 
              className="absolute -top-10 -right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(59,130,246,0.05) 50%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            
            {/* Main Screenshot Container */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
              {/* Browser Frame Header */}
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="flex-1 mx-4">
                  <div className="h-5 bg-slate-100 rounded-full max-w-[200px]" />
                </div>
              </div>
              
              {/* Screenshot Content Area */}
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId || "default"}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    {activeItem?.screenshot ? (
                      <img 
                        src={activeItem.screenshot} 
                        alt={activeItem.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center p-6">
                        <div className="w-full h-full rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center bg-slate-50/50">
                          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                            {activeItem ? (
                              <activeItem.icon className="w-8 h-8 text-slate-400" />
                            ) : (
                              <AlertCircle className="w-8 h-8 text-slate-400" />
                            )}
                          </div>
                          <p className="text-slate-400 text-sm font-medium">
                            {activeItem?.title || "Screenshot"}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg shadow-slate-200/60 border border-slate-100 p-4 w-[160px]"
              animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-[11px] text-slate-500 uppercase tracking-wide">Status</span>
              </div>
              <p className="text-slate-900 font-semibold text-sm">Rejected Early</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
