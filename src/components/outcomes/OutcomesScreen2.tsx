import { motion, useReducedMotion } from "framer-motion";
import { Magnet, Eye, Unlock, TrendingUp, RotateCw, MessageSquare, BarChart3, Home, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const gravityStack = [
  { 
    label: "Where they stand", 
    desc: "Readiness state badge", 
    icon: Eye,
    color: "blue"
  },
  { 
    label: "What unlocks next", 
    desc: "Next unlock pill + milestones", 
    icon: Unlock,
    color: "violet"
  },
  { 
    label: "Weekly progress", 
    desc: "Trend line visualization", 
    icon: TrendingUp,
    color: "emerald"
  },
];

const metricTiles = [
  { label: "Longer retention", value: "3.2x" },
  { label: "Return weekly", value: "68%" },
  { label: "Churn rate", value: "-47%" },
];

const churnLoop = [
  { label: "\"Not yet\"", desc: "Decline becomes a pause", icon: MessageSquare, position: "top" },
  { label: "Guided steps", desc: "Clear path forward", icon: BarChart3, position: "right" },
  { label: "Visible progress", desc: "User sees momentum", icon: TrendingUp, position: "bottom" },
  { label: "Stays in-app", desc: "No reason to leave", icon: Home, position: "left" },
];

export default function OutcomesScreen2() {
  const shouldReduceMotion = useReducedMotion();
  const [visibleRows, setVisibleRows] = useState<number[]>([]);
  const [visibleTiles, setVisibleTiles] = useState<number[]>([]);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setVisibleRows([0, 1, 2]);
      setVisibleTiles([0, 1, 2]);
      return;
    }

    const observers: IntersectionObserver[] = [];

    rowRefs.current.forEach((ref, idx) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleRows(prev => [...new Set([...prev, idx])]);
              }, idx * 120);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    tileRefs.current.forEach((ref, idx) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleTiles(prev => [...new Set([...prev, idx])]);
              }, idx * 120 + 360);
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, [shouldReduceMotion]);

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle top highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
      
      {/* Grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-[1000px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left copy block */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/10 w-fit">
              <Magnet className="h-4 w-4 text-white/60" />
              <span className="text-xs font-medium text-white/60 uppercase tracking-wide">Retention Mechanics</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">
              Retention Becomes
              <br />
              Gravity
            </h2>
            
            <p className="text-lg text-white/60 max-w-md mb-8">
              SMBs don't churn because they hate platforms. They churn because platforms go dark when the answer is "not yet."
            </p>

          </motion.div>

          {/* Shimmer divider - visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[70%] w-px animate-[pulseDivider_3s_ease-in-out_infinite] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* Right visual module - Console-style frame */}
          <motion.div 
            className={`relative bg-black/60 border border-white/10 rounded-3xl p-7 shadow-[0_0_18px_rgba(255,255,255,0.08)] ${
              shouldReduceMotion ? '' : 'animate-[floatCard_12s_ease-in-out_infinite]'
            }`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            viewport={{ once: true }}
          >
            {/* LIVE status chip */}
            <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-bold text-emerald-300 tracking-wide">LIVE</span>
            </div>

            <div className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-6">In-App Readiness Gravity Stack</div>
            
            {/* Gravity Stack Rows */}
            <div className="relative space-y-4">
              {gravityStack.map((card, idx) => {
                const Icon = card.icon;
                const isVisible = visibleRows.includes(idx);
                
                return (
                  <div
                    key={card.label}
                    ref={el => rowRefs.current[idx] = el}
                    className={`relative rounded-2xl border border-white/[0.08] bg-black/55 p-5 transition-all duration-[250ms] ease-out cursor-pointer
                      hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-black/65 hover:border-white/[0.14]
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[8px]'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                        <Icon className={`h-6 w-6 ${
                          card.color === 'blue' ? 'text-blue-400' :
                          card.color === 'violet' ? 'text-violet-400' : 'text-emerald-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-white mb-1">{card.label}</div>
                        <div className="text-xs text-white/50">{card.desc}</div>
                      </div>
                      
                      {/* Mini UI element */}
                      {card.color === "blue" && (
                        <div className="px-3 py-1.5 rounded-lg bg-blue-500/20 border border-blue-400/30">
                          <span className="text-[10px] font-bold text-blue-300">STAGE 4</span>
                        </div>
                      )}
                      {card.color === "violet" && (
                        <div className="px-3 py-1.5 rounded-lg bg-violet-500/20 border border-violet-400/30">
                          <span className="text-[10px] font-medium text-violet-300">+2 steps</span>
                        </div>
                      )}
                      {card.color === "emerald" && (
                        <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30">
                          <TrendingUp className="h-3 w-3 text-emerald-400" />
                          <span className="text-[10px] font-medium text-emerald-300">+12%</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Connector dot */}
                    {idx < gravityStack.length - 1 && (
                      <div className="absolute left-6 -bottom-4 flex flex-col items-center z-10">
                        <div className="w-px h-4 bg-gradient-to-b from-white/20 to-white/5" />
                        {!shouldReduceMotion && (
                          <div className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Metric Tiles */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {metricTiles.map((tile, idx) => {
                const isVisible = visibleTiles.includes(idx);
                
                return (
                  <div
                    key={tile.label}
                    ref={el => tileRefs.current[idx] = el}
                    className={`rounded-xl bg-black/55 border border-white/[0.06] p-4 transition-all duration-[250ms] cursor-pointer
                      hover:-translate-y-0.5 hover:scale-[1.02] hover:opacity-90
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[8px]'}
                    `}
                  >
                    <div className="text-[10px] text-white/40 font-medium uppercase tracking-wide mb-1">{tile.label}</div>
                    <div className="text-lg font-bold text-white">{tile.value}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Churn Prevention Loop - Two Column Layout */}
        <motion.div
          className="mt-12 bg-white/[0.02] rounded-2xl border border-white/[0.08] p-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Text content */}
            <div>
              <div className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
                Churn Prevention Loop
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Turn "not yet" into "stay engaged"
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">
                Traditional platforms lose users the moment they're declined. LumiqAI keeps them in a visible progression loop — showing exactly where they stand and what comes next.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                  <p className="text-sm text-white/60">Declines become pauses, not endpoints</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                  <p className="text-sm text-white/60">Users see their progress accumulate weekly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 shrink-0" />
                  <p className="text-sm text-white/60">No reason to leave when momentum is visible</p>
                </div>
              </div>
            </div>
            
            {/* Right - Compact Circular Diagram */}
            <div className="relative w-full max-w-[280px] mx-auto aspect-square">
            {/* Animated SVG connection lines */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 400"
              style={{ transform: 'rotate(-90deg)' }}
            >
              {/* Circular path for the animated flow */}
              <circle
                cx="200"
                cy="200"
                r="140"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="2"
              />
              
              {/* Animated flowing line */}
              {!shouldReduceMotion && (
                <>
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="url(#flowGradient)"
                    strokeWidth="2"
                    strokeDasharray="80 800"
                    strokeLinecap="round"
                    className="animate-[spin_6s_linear_infinite]"
                    style={{ transformOrigin: 'center' }}
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="url(#flowGradient2)"
                    strokeWidth="2"
                    strokeDasharray="60 820"
                    strokeLinecap="round"
                    className="animate-[spin_6s_linear_infinite]"
                    style={{ transformOrigin: 'center', animationDelay: '-3s' }}
                  />
                </>
              )}
              
              {/* Arrow markers at quadrant points */}
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.25)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Direction arrows on the path */}
            <div className="absolute inset-0">
              {/* Top-right arrow */}
              <div className="absolute top-[15%] right-[15%] w-4 h-4 rotate-45">
                <svg viewBox="0 0 16 16" className="w-full h-full text-white/30">
                  <path d="M4 12 L8 8 L4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Bottom-right arrow */}
              <div className="absolute bottom-[15%] right-[15%] w-4 h-4 rotate-[135deg]">
                <svg viewBox="0 0 16 16" className="w-full h-full text-white/30">
                  <path d="M4 12 L8 8 L4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Bottom-left arrow */}
              <div className="absolute bottom-[15%] left-[15%] w-4 h-4 rotate-[225deg]">
                <svg viewBox="0 0 16 16" className="w-full h-full text-white/30">
                  <path d="M4 12 L8 8 L4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {/* Top-left arrow */}
              <div className="absolute top-[15%] left-[15%] w-4 h-4 rotate-[-45deg]">
                <svg viewBox="0 0 16 16" className="w-full h-full text-white/30">
                  <path d="M4 12 L8 8 L4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Center icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-12 h-12 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <RotateCw className={`h-5 w-5 text-white/40 ${shouldReduceMotion ? '' : 'animate-[spin_8s_linear_infinite]'}`} />
              </div>
            </div>
            
            {/* Loop nodes positioned around the circle */}
            {churnLoop.map((node, idx) => {
              const Icon = node.icon;
              const positions = {
                top: "top-0 left-1/2 -translate-x-1/2",
                right: "right-0 top-1/2 -translate-y-1/2",
                bottom: "bottom-0 left-1/2 -translate-x-1/2",
                left: "left-0 top-1/2 -translate-y-1/2",
              };
              
              return (
                <motion.div
                  key={node.label}
                  className={`absolute ${positions[node.position as keyof typeof positions]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-default min-w-[70px]">
                    <div className="w-8 h-8 rounded-md bg-white/[0.05] flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white/60" />
                    </div>
                    <div className="text-center">
                      <div className="text-[10px] font-semibold text-white/80">{node.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>

          {/* Lock-in pill */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Lock className="h-3.5 w-3.5 text-white/50" />
              <span className="text-xs font-medium text-white/60">Identity lock-in: progress stays visible</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl"
            asChild
          >
            <Link to="/request-pilot">
              Start Pilot
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white bg-transparent font-medium shadow-lg hover:shadow-xl"
            asChild
          >
            <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer" className="text-white">
              View Docs
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
