import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  ClipboardList, 
  TrendingUp, 
  Building, 
  Target,
  Ban,
  CreditCard,
  ShieldOff,
  Database,
  AlertTriangle,
  Eye,
  XCircle
} from "lucide-react";

const observesData = [
  { icon: Activity, label: "Consistency", title: "Consistency of behavior", micro: "Pattern stability over time" },
  { icon: ClipboardList, label: "Reporting", title: "Reporting discipline", micro: "Timely, accurate submissions" },
  { icon: TrendingUp, label: "Cashflow", title: "Cashflow patterns", micro: "Where applicable to context" },
  { icon: Building, label: "Readiness", title: "Structural readiness", micro: "Operational maturity signals" },
  { icon: Target, label: "Milestones", title: "Progression vs milestones", micro: "Goal achievement tracking" },
];

const doesNotData = [
  { icon: Ban, label: "No movement", title: "Move funds", micro: "No transaction execution" },
  { icon: CreditCard, label: "No solo approval", title: "Approve credit alone", micro: "Always requires sponsor" },
  { icon: ShieldOff, label: "No override", title: "Override sponsor rules", micro: "Your policies stay intact" },
  { icon: Database, label: "No replace", title: "Replace risk models", micro: "Augments, never substitutes" },
  { icon: AlertTriangle, label: "No force", title: "Force blind exposure", micro: "No unsanctioned increases" },
];

// Mobile tabs component
function MobileTabs({ activeTab, setActiveTab }: { activeTab: 'does' | 'doesnt'; setActiveTab: (tab: 'does' | 'doesnt') => void }) {
  return (
    <div className="md:hidden mb-6">
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-1 flex">
        <button
          onClick={() => setActiveTab('does')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'does' 
              ? 'bg-white/[0.08] text-white' 
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          Does
        </button>
        <button
          onClick={() => setActiveTab('doesnt')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
            activeTab === 'doesnt' 
              ? 'bg-white/[0.08] text-white' 
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          Doesn&apos;t
        </button>
      </div>
    </div>
  );
}

// Boundary rail component
function BoundaryRail({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center gap-4 py-8">
      {/* Top endpoint */}
      <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
        Signals in
      </span>
      
      {/* Vertical line with shimmer */}
      <div className="relative w-[2px] flex-1 min-h-[200px] bg-gradient-to-b from-white/0 via-white/18 to-white/0 rounded-full overflow-hidden">
        {!shouldReduceMotion && (
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent animate-[railSweep_10s_linear_infinite]"
          />
        )}
      </div>
      
      {/* Center label */}
      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] tracking-widest text-white/55 font-medium uppercase">
        Control Layer
      </span>
      
      {/* Bottom line segment */}
      <div className="relative w-[2px] flex-1 min-h-[200px] bg-gradient-to-b from-white/0 via-white/18 to-white/0 rounded-full overflow-hidden">
        {!shouldReduceMotion && (
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/25 to-transparent animate-[railSweep_10s_linear_infinite]"
            style={{ animationDelay: '5s' }}
          />
        )}
      </div>
      
      {/* Bottom endpoint */}
      <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium text-center leading-tight">
        Decisions<br />remain yours
      </span>
    </div>
  );
}

// Card components
function ObservesCard({ isHovered, onHover, shouldReduceMotion }: { isHovered: boolean; onHover: (h: boolean) => void; shouldReduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`transition-all duration-300 ${!shouldReduceMotion ? 'hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.65)]' : ''}`}
    >
      <Card className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] p-7 md:p-8 relative overflow-hidden">
        {/* Top accent strip - cool */}
        <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-blue-400/60 via-cyan-300/30 to-transparent" />
        
        {/* Internal glow orb */}
        <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        
        {/* Title with icon */}
        <div className="relative flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
            <Eye className="w-5 h-5 text-white/70" />
          </div>
          <h3 className="text-xl font-bold text-white">What LumiqAI Observes</h3>
        </div>

        {/* Chip row with icons */}
        <div className="relative flex flex-wrap gap-2 mb-5">
          {observesData.map(({ icon: Icon, label }) => (
            <span 
              key={label}
              className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-wider text-white/70 inline-flex items-center gap-2 hover:border-white/25 hover:bg-white/[0.06] hover:text-white/90 transition cursor-default"
            >
              <Icon className="w-3 h-3" />
              {label}
            </span>
          ))}
        </div>

        {/* Feature tiles grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          {observesData.map(({ title, micro }) => (
            <div 
              key={title}
              className="rounded-2xl border border-white/10 bg-black/30 p-3.5"
            >
              <div className="text-[12px] font-semibold text-white/85">{title}</div>
              <div className="text-[11px] text-white/55 mt-0.5">{micro}</div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="relative text-[12px] text-white/55 mt-6">
          These signals inform progression and reduce uncertainty.
        </p>
      </Card>
    </motion.div>
  );
}

function DoesntCard({ isHovered, onHover, shouldReduceMotion }: { isHovered: boolean; onHover: (h: boolean) => void; shouldReduceMotion: boolean | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.12 }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      className={`transition-all duration-300 ${!shouldReduceMotion ? 'hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.65)]' : ''}`}
    >
      <Card className="h-full rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.55)] p-7 md:p-8 relative overflow-hidden">
        {/* Top accent strip - warm */}
        <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-amber-300/50 via-rose-300/25 to-transparent" />
        
        {/* Internal glow orb */}
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-amber-500/12 blur-3xl pointer-events-none" />
        
        {/* Title with icon */}
        <div className="relative flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center">
            <XCircle className="w-5 h-5 text-white/70" />
          </div>
          <h3 className="text-xl font-bold text-white">What LumiqAI Does Not Do</h3>
        </div>

        {/* Guardrail chips */}
        <div className="relative flex flex-wrap gap-2 mb-5">
          {doesNotData.map(({ icon: Icon, label }) => (
            <span 
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] uppercase tracking-wider text-white/60 inline-flex items-center gap-2 hover:border-white/20 hover:text-white/80 transition cursor-default"
            >
              <Icon className="w-3 h-3" />
              {label}
            </span>
          ))}
        </div>

        {/* Guardrails tiles grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
          {doesNotData.map(({ title, micro }) => (
            <div 
              key={title}
              className="rounded-2xl border border-white/10 bg-black/25 p-3.5"
            >
              <div className="text-[12px] font-semibold text-white/85">{title}</div>
              <div className="text-[11px] text-white/55 mt-0.5">{micro}</div>
            </div>
          ))}
        </div>

        {/* Callout bar */}
        <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/35 px-4 py-3">
          <p className="text-[12px] text-white/60">
            LumiqAI is a control layer, not a risk engine.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function DoesAndDoesntSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'does' | 'doesnt'>('does');
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden bg-[#070A0F]">
      {/* Mesh gradient overlay */}
      <div 
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(80,120,255,0.18), transparent 55%),
            radial-gradient(circle at 70% 20%, rgba(255,190,120,0.10), transparent 60%),
            radial-gradient(circle at 50% 80%, rgba(120,255,210,0.08), transparent 60%)
          `
        }}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '18px 18px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            What LumiqAI Does — and Doesn&apos;t Do
          </h2>
          <p className="text-[13px] text-white/60 mt-3">
            Observability layer vs decisioning engine.
          </p>
        </motion.div>

        {/* Mobile Tabs */}
        <MobileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Desktop: 12-column grid | Mobile: show active tab card only */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          {/* Left card (Does) - Desktop always visible, Mobile conditional */}
          <div className={`col-span-12 md:col-span-5 ${activeTab !== 'does' ? 'hidden md:block' : ''} transition-opacity duration-300 ${rightHovered ? 'md:opacity-80' : ''}`}>
            <ObservesCard 
              isHovered={leftHovered} 
              onHover={setLeftHovered} 
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>

          {/* Center boundary rail - Desktop only */}
          <BoundaryRail shouldReduceMotion={shouldReduceMotion} />

          {/* Right card (Doesn't) - Desktop always visible, Mobile conditional */}
          <div className={`col-span-12 md:col-span-5 ${activeTab !== 'doesnt' ? 'hidden md:block' : ''} transition-opacity duration-300 ${leftHovered ? 'md:opacity-80' : ''}`}>
            <DoesntCard 
              isHovered={rightHovered} 
              onHover={setRightHovered} 
              shouldReduceMotion={shouldReduceMotion}
            />
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* CSS for rail shimmer animation */}
      <style>{`
        @keyframes railSweep {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(120%); }
        }
      `}</style>
    </section>
  );
}
