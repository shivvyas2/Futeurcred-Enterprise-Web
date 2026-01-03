import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, TrendingUp, Users, DollarSign, Clock, Ban, Eye, Layers, GraduationCap } from "lucide-react";

const traditionalFunnel = [
  { label: "Apply", icon: Users, desc: "Applicants enter" },
  { label: "Binary Decision", icon: ArrowDown, desc: "Yes or No" },
  { label: "Approve", icon: TrendingUp, desc: "Compete downstream", highlight: false },
  { label: "Decline", icon: Ban, desc: "Lost forever", negative: true },
];

const lumiqFunnel = [
  { label: "Apply", icon: Users, desc: "Applicants enter" },
  { label: "Visibility", icon: Eye, desc: "Observe signals" },
  { label: "Progression", icon: Layers, desc: "Staged readiness" },
  { label: "Graduation", icon: GraduationCap, desc: "Then products", highlight: true },
];

const kpiChips = [
  { label: "Declines retained", direction: "↑", icon: Users },
  { label: "CAC amortized", direction: "↑", icon: DollarSign },
  { label: "Earlier monetization", direction: "↑", icon: Clock },
];

export default function OutcomesScreen1() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"traditional" | "lumiq">("lumiq");

  const currentFunnel = activeTab === "traditional" ? traditionalFunnel : lumiqFunnel;

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Light band background */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.92)]" />
      <div className="absolute inset-0 border-y border-[rgba(10,15,25,0.08)]" />
      
      {/* Subtle grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(10,15,25,0.15) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(10,15,25,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Section edge glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(100,180,255,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left copy block */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0B1020]/5 px-4 py-2 rounded-full mb-6 border border-[#0B1020]/10">
              <TrendingUp className="h-4 w-4 text-[#0B1020]/70" />
              <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Funnel Mechanics</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight leading-tight">
              Funnel Compounds
              <br />
              Upstream
            </h2>
            
            <p className="text-lg text-[#0B1020]/70 max-w-md mb-6">
              Your funnel stops ending early. It starts compounding upstream.
            </p>
          </motion.div>

          {/* Right visual module */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true }}
          >
            {/* Funnel diagram card */}
            <div className="bg-white rounded-3xl border border-[#0B1020]/8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-[#0B1020]/8">
                <button
                  onClick={() => setActiveTab("traditional")}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
                    activeTab === "traditional" 
                      ? 'bg-[#0B1020]/5 text-[#0B1020] border-b-2 border-[#0B1020]' 
                      : 'text-[#0B1020]/50 hover:text-[#0B1020]/70 hover:bg-[#0B1020]/[0.02]'
                  }`}
                >
                  Traditional Funnel
                </button>
                <button
                  onClick={() => setActiveTab("lumiq")}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
                    activeTab === "lumiq" 
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600' 
                      : 'text-[#0B1020]/50 hover:text-[#0B1020]/70 hover:bg-[#0B1020]/[0.02]'
                  }`}
                >
                  LumiqAI Funnel
                </button>
              </div>

              {/* Funnel visualization */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: activeTab === "lumiq" ? 8 : -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: activeTab === "lumiq" ? -8 : 8 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {activeTab === "traditional" ? (
                      <>
                        {/* Traditional funnel - vertical with split at end */}
                        <div className="flex flex-col items-center space-y-3">
                          {traditionalFunnel.slice(0, 2).map((step, idx) => {
                            const Icon = step.icon;
                            return (
                              <motion.div
                                key={step.label}
                                className="w-full max-w-md"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                              >
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1020]/[0.03] border border-[#0B1020]/10">
                                  <div className="w-10 h-10 rounded-lg bg-[#0B1020]/10 flex items-center justify-center">
                                    <Icon className="h-5 w-5 text-[#0B1020]/60" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-[#0B1020]">{step.label}</div>
                                    <div className="text-xs text-[#0B1020]/50">{step.desc}</div>
                                  </div>
                                </div>
                                {idx < 1 && (
                                  <div className="flex justify-center py-2">
                                    <ArrowDown className="h-4 w-4 text-[#0B1020]/30" />
                                  </div>
                                )}
                              </motion.div>
                            );
                          })}
                          
                          {/* Split */}
                          <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-2">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="p-4 rounded-xl bg-emerald-50 border border-emerald-200"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <TrendingUp className="h-4 w-4 text-emerald-600" />
                                <span className="text-sm font-semibold text-emerald-700">Approve</span>
                              </div>
                              <span className="text-xs text-emerald-600/70">Compete downstream</span>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                              className="p-4 rounded-xl bg-red-50 border border-red-200"
                            >
                              <div className="flex items-center gap-2 mb-1">
                                <Ban className="h-4 w-4 text-red-500" />
                                <span className="text-sm font-semibold text-red-600">Decline</span>
                              </div>
                              <span className="text-xs text-red-500/70">Lost forever</span>
                            </motion.div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* LumiqAI funnel - continuous progression */}
                        <div className="flex flex-col items-center space-y-3">
                          {lumiqFunnel.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                              <motion.div
                                key={step.label}
                                className="w-full max-w-md"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx }}
                              >
                                <div className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                                  step.highlight 
                                    ? 'bg-blue-50 border-2 border-blue-300' 
                                    : 'bg-blue-50/50 border border-blue-200/50'
                                }`}>
                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                    step.highlight ? 'bg-blue-500 text-white' : 'bg-blue-100'
                                  }`}>
                                    <Icon className={`h-5 w-5 ${step.highlight ? 'text-white' : 'text-blue-600'}`} />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-[#0B1020]">{step.label}</div>
                                    <div className="text-xs text-[#0B1020]/50">{step.desc}</div>
                                  </div>
                                  {step.highlight && (
                                    <span className="ml-auto text-[10px] px-2 py-1 rounded-full bg-blue-500 text-white font-medium">
                                      Then products
                                    </span>
                                  )}
                                </div>
                                {idx < lumiqFunnel.length - 1 && (
                                  <div className="flex justify-center py-2">
                                    <ArrowDown className="h-4 w-4 text-blue-400" />
                                  </div>
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* KPI Chips */}
                <div className="flex flex-wrap justify-center gap-3 mt-8 pt-6 border-t border-[#0B1020]/8">
                  {kpiChips.map((kpi, idx) => {
                    const Icon = kpi.icon;
                    return (
                      <motion.div
                        key={kpi.label}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }}
                        viewport={{ once: true }}
                      >
                        <Icon className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-xs font-medium text-emerald-700">{kpi.label}</span>
                        <span className="text-sm font-bold text-emerald-600">{kpi.direction}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Key insight panel - changes based on tab */}
              <div className="px-8 pb-8">
                <AnimatePresence mode="wait">
                  {activeTab === "traditional" ? (
                    <motion.div 
                      key="traditional-stats"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-50/50 border border-red-200/50">
                        <div className="text-2xl font-bold text-red-500 mb-1">40-60%</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">of declines were just bad timing</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-amber-50/50 border border-amber-200/50">
                        <div className="text-2xl font-bold text-amber-600 mb-1">Lost</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">every "not yet" applicant forever</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50/50 border border-slate-200/50">
                        <div className="text-2xl font-bold text-slate-500 mb-1">$0</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">revenue until approval day</div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="lumiq-stats"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-50/50 border border-blue-200/50">
                        <div className="text-2xl font-bold text-blue-600 mb-1">40-60%</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">of declines recovered upstream</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-50/50 border border-emerald-200/50">
                        <div className="text-2xl font-bold text-emerald-600 mb-1">Zero</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">applicants lost to "not yet"</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-50/50 border border-violet-200/50">
                        <div className="text-2xl font-bold text-violet-600 mb-1">Day 1</div>
                        <div className="text-xs text-[#0B1020]/60 font-medium">revenue starts, not approval day</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
