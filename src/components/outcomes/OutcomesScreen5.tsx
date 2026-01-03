import { motion, useReducedMotion, useInView, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Users, DollarSign, Clock, Shield, FileText, ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

const kpiTiles = [
  { 
    label: "Declines retained", 
    microline: "Lifecycle extends",
    icon: Users,
    value: 73,
    suffix: "%",
    prefix: "+",
  },
  { 
    label: "CAC amortized", 
    microline: "Efficiency improves",
    icon: DollarSign,
    value: 2.4,
    suffix: "x",
    prefix: "",
    decimals: 1,
  },
  { 
    label: "Earlier monetization", 
    microline: "New revenue surfaces",
    icon: Clock,
    value: 6,
    suffix: " mo",
    prefix: "",
  },
  { 
    label: "Approval confidence", 
    microline: "Better downstream demand",
    icon: TrendingUp,
    value: 91,
    suffix: "%",
    prefix: "",
  },
];

function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "", 
  decimals = 0,
  shouldAnimate = true 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string; 
  decimals?: number;
  shouldAnimate?: boolean;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current && shouldAnimate) {
      hasAnimated.current = true;
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => {
          setDisplayValue(latest);
        },
      });
      return () => controls.stop();
    } else if (!shouldAnimate) {
      setDisplayValue(value);
    }
  }, [isInView, value, shouldAnimate]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue)}{suffix}
    </span>
  );
}

const economicsRows = [
  { metric: "Declined applicants retained", shift: "Lifecycle extends" },
  { metric: "CAC amortized", shift: "Efficiency improves" },
  { metric: "Earlier monetization", shift: "New revenue surfaces" },
  { metric: "Approval confidence increases", shift: "Better downstream demand" },
];

export default function OutcomesScreen5() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(120,180,255,0.08),transparent_55%)] pointer-events-none" />

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
            <TrendingUp className="h-4 w-4 text-[#0B1020]/70" />
            <span className="text-xs font-medium text-[#0B1020]/70 uppercase tracking-wide">Directional Economics</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1020] mb-4 uppercase tracking-tight">
            Economics + Artifacts
          </h2>
        </motion.div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {kpiTiles.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.label}
                className="bg-white rounded-2xl border border-[#0B1020]/8 shadow-sm p-5 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * idx }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-[#0B1020]/50" />
                  <span className="text-xs font-semibold text-[#0B1020]/80">{tile.label}</span>
                </div>
                
                {/* Animated counter */}
                <div className="text-2xl md:text-3xl font-bold text-[#0B1020] mb-1">
                  <AnimatedCounter 
                    value={tile.value} 
                    suffix={tile.suffix} 
                    prefix={tile.prefix}
                    decimals={tile.decimals || 0}
                    shouldAnimate={!shouldReduceMotion}
                  />
                </div>
                
                <p className="text-xs text-[#0B1020]/50 mb-3">{tile.microline}</p>
                
                {/* Mini sparkline placeholder */}
                <div className="h-5 rounded bg-[#0B1020]/[0.03] border border-[#0B1020]/8 flex items-end justify-between px-1 pb-1">
                  <div className="w-1 h-1.5 bg-emerald-400/40 rounded-sm" />
                  <div className="w-1 h-2.5 bg-emerald-400/50 rounded-sm" />
                  <div className="w-1 h-1.5 bg-emerald-400/40 rounded-sm" />
                  <div className="w-1 h-3 bg-emerald-400/60 rounded-sm" />
                  <div className="w-1 h-2.5 bg-emerald-400/50 rounded-sm" />
                  <div className="w-1 h-4 bg-emerald-500 rounded-sm" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Economics Table Card */}
        <motion.div
          className="bg-white rounded-3xl border border-[#0B1020]/8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="px-8 py-5 border-b border-[#0B1020]/8 bg-[#0B1020]/[0.02]">
            <h3 className="text-sm font-semibold text-[#0B1020]/80">Directional Economics (Observed Shifts)</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#0B1020]/8">
                  <th className="px-8 py-4 text-left text-xs font-semibold text-[#0B1020]/50 uppercase tracking-wide">Metric</th>
                  <th className="px-8 py-4 text-left text-xs font-semibold text-[#0B1020]/50 uppercase tracking-wide">Observed Shift</th>
                </tr>
              </thead>
              <tbody>
                {economicsRows.map((row, idx) => (
                  <motion.tr
                    key={row.metric}
                    className="border-b border-[#0B1020]/5 hover:bg-[#0B1020]/[0.01] transition-colors"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    viewport={{ once: true }}
                  >
                    <td className="px-8 py-4 text-sm text-[#0B1020]/80">{row.metric}</td>
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-2">
                        <ArrowRight className="h-3 w-3 text-emerald-500" />
                        <span className="text-sm text-emerald-600 font-medium">{row.shift}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Artifact Preview Frame */}
        <motion.div
          className="bg-white rounded-2xl border border-[#0B1020]/8 shadow-sm p-6 mb-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-[#0B1020]/50" />
            <span className="text-xs font-semibold text-[#0B1020]/60 uppercase tracking-wide">Artifact Preview</span>
          </div>
          
          {/* Mock artifact frame with real content */}
          <div className="rounded-xl bg-[#0B1020]/[0.03] border border-[#0B1020]/10 overflow-hidden mb-4">
            {/* Header bar */}
            <div className="px-4 py-2 bg-[#0B1020]/[0.04] border-b border-[#0B1020]/8 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-[#0B1020]/50 uppercase tracking-wide">Decisioning Artifact</span>
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded bg-emerald-100 text-[9px] font-bold text-emerald-700">APPROVED</div>
                <span className="text-[10px] text-[#0B1020]/40">ID: SMB-2847</span>
              </div>
            </div>
            {/* Content rows */}
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-[#0B1020]/5">
                <span className="text-xs text-[#0B1020]/50">Reason Code</span>
                <span className="text-xs font-medium text-[#0B1020]/80">RC-201: Strong revenue trajectory</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[#0B1020]/5">
                <span className="text-xs text-[#0B1020]/50">Progression</span>
                <div className="flex items-center gap-1">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1020]/5 text-[#0B1020]/60">Stage 2</span>
                  <ArrowRight className="h-3 w-3 text-[#0B1020]/30" />
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1020]/5 text-[#0B1020]/60">Stage 4</span>
                  <ArrowRight className="h-3 w-3 text-[#0B1020]/30" />
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-medium">Graduated</span>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-xs text-[#0B1020]/50">Time to Graduation</span>
                <span className="text-xs font-medium text-[#0B1020]/80">47 days (avg: 62)</span>
              </div>
            </div>
          </div>
          
          {/* Link chip */}
          <div className="flex justify-center">
            <Link 
              to="/risk-and-control" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium hover:bg-blue-100 transition-colors"
            >
              <Shield className="h-3.5 w-3.5" />
              See Risk & Control
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>

        {/* Premium CTA Container */}
        <motion.div
          className="relative bg-gradient-to-b from-[#0B1020] to-[#070A12] rounded-3xl border border-white/10 p-10 md:p-12 overflow-hidden"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,150,255,0.08),transparent_60%)] pointer-events-none" />
          
          <div className="relative text-center">
            {/* In One Sentence */}
            <p className="text-2xl md:text-3xl font-bold text-white mb-2">
              LumiqAI doesn't help you win approvals.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-white/80 mb-8">
              It helps you win before approvals exist.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Button
                size="lg"
                className="bg-white text-[#0B1020] px-8 py-3 text-base font-semibold rounded-full shadow-lg hover:bg-white/90 transition-colors"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Request a Private Pilot
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white/70 px-8 py-3 text-base font-semibold rounded-full hover:bg-white/5 hover:text-white transition-colors"
              >
                Documentation
              </Button>
            </div>
            
            {/* Microcopy */}
            <p className="text-sm text-white/50">
              We work with one platform per category.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
