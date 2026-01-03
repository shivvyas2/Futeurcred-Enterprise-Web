import { motion, useReducedMotion } from "framer-motion";
import { DollarSign, Layers, GraduationCap, CreditCard, ArrowRight, CheckCircle, XCircle } from "lucide-react";

const revenueSurfaces = [
  { 
    label: "Pre-credit subscriptions", 
    icon: CreditCard,
    chips: ["Tooling access", "Progress tracking"],
  },
  { 
    label: "Readiness-linked tooling", 
    icon: Layers,
    chips: ["Stage unlocks", "Premium features"],
  },
  { 
    label: "Graduated product tiers", 
    icon: GraduationCap,
    chips: ["Milestone rewards", "Tier advancement"],
  },
];

const beforeItems = [
  "Thin snapshot",
  "Binary score",
  "Cold application",
];

const afterItems = [
  "Longitudinal behavior",
  "Documented progression",
  "Explainable readiness",
  "Reduced uncertainty",
];

export default function OutcomesScreen3() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Light band background */}
      <div className="absolute inset-0 bg-[rgba(255,255,255,0.92)]" />
      <div className="absolute inset-0 border-y border-[rgba(10,15,25,0.08)]" />
      
      {/* Grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(10,15,25,0.15) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(10,15,25,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Section edge glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(100,200,150,0.08),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-[#0B1020]/5 px-4 py-2 rounded-full mb-6 border border-[#0B1020]/10">
            <DollarSign className="h-4 w-4 text-[#0B1020]/70" />
            <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Revenue Mechanics</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight">
            Revenue Moves Upstream
          </h2>
          <p className="text-lg text-[#0B1020]/60 max-w-2xl mx-auto">
            Without taking more risk.
          </p>
        </motion.div>

        {/* Revenue Surfaces Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {revenueSurfaces.map((surface, idx) => {
            const Icon = surface.icon;
            return (
              <motion.div
                key={surface.label}
                className="bg-white rounded-2xl border border-[#0B1020]/8 shadow-sm p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium uppercase tracking-wide">
                    Revenue surface
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#0B1020] mb-3">{surface.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {surface.chips.map((chip, chipIdx) => (
                    <span key={chipIdx} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#0B1020]/[0.03] text-[#0B1020]/70 border border-[#0B1020]/8">
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Signal Quality Proof Card */}
        <motion.div
          className="bg-white rounded-3xl border border-[#0B1020]/8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="px-8 py-5 border-b border-[#0B1020]/8 bg-[#0B1020]/[0.02]">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-[#0B1020]/80">Signal Quality ↑</span>
              <ArrowRight className="h-4 w-4 text-[#0B1020]/40" />
              <span className="text-sm font-semibold text-[#0B1020]/80">Defaults stabilize</span>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before column - muted, problem state */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <XCircle className="h-3.5 w-3.5 text-red-400" />
                  </div>
                  <span className="text-xs font-semibold text-red-500/80 uppercase tracking-wide">Without LumiqAI</span>
                </div>
                <div className="space-y-2 opacity-75">
                  {beforeItems.map((item, idx) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-3 p-3 rounded-xl bg-red-50/50 border border-red-200/40"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * idx }}
                      viewport={{ once: true }}
                    >
                      <XCircle className="h-4 w-4 text-red-300" />
                      <span className="text-sm text-[#0B1020]/50 line-through decoration-red-300/50">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* Faded overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/40 pointer-events-none rounded-xl" />
              </div>

              {/* After column - vibrant, LumiqAI state */}
              <div className="relative">
                {/* Glow effect behind */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-100/50 via-emerald-100/30 to-violet-100/50 rounded-2xl blur-xl opacity-60" />
                
                <div className="relative bg-white rounded-xl p-4 border-2 border-emerald-300 shadow-lg shadow-emerald-100">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center shadow-md">
                      <CheckCircle className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">With LumiqAI</span>
                    <span className="ml-auto px-2 py-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-[9px] font-bold text-white">
                      UPGRADED
                    </span>
                  </div>
                  <div className="space-y-2">
                    {afterItems.map((item, idx) => (
                      <motion.div
                        key={item}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50/50 border border-emerald-200"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 * idx }}
                        viewport={{ once: true }}
                      >
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm font-medium text-[#0B1020]/90">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Conservative microtext */}
            <div className="mt-8 pt-6 border-t border-[#0B1020]/8 text-center">
              <p className="text-sm text-[#0B1020]/60">
                Approval rates improve. Defaults stabilize or fall — because signal quality rises.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
