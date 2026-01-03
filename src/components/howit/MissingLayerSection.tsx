import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import HeroBackground from "@/components/HeroBackground";

interface SignalRowProps {
  label: string;
  value: string;
  isHighlighted: boolean;
}

const SignalRow = ({ label, value, isHighlighted }: SignalRowProps) => (
  <div className={`
    flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-300
    ${isHighlighted ? 'bg-white/10' : 'bg-white/[0.03]'}
  `}>
    <span className={`
      text-sm font-medium transition-all duration-300
      ${isHighlighted ? 'text-white' : 'text-white/70'}
    `}>
      {label}
    </span>
    <span className={`
      text-xs font-medium px-2 py-0.5 rounded-full transition-all duration-300
      ${isHighlighted ? 'bg-white/20 text-white' : 'bg-white/5 text-white/50'}
    `}>
      {value}
    </span>
  </div>
);

export default function MissingLayerHero() {
  const shouldReduceMotion = useReducedMotion();
  const [isApiHovered, setIsApiHovered] = useState(false);
  const [hoveredComparison, setHoveredComparison] = useState<'legacy' | 'lumiq' | null>(null);
  const [apiVisible, setApiVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setApiVisible(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroBackground imagePath="/hero-bg/how-it-works-bg.jpg" className="min-h-screen">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase tracking-tight mb-6">
                Revenue is late.
                <br />
                <span className="text-white/90">Signals are early.</span>
              </h1>
              {/* Shimmer underline */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  style={{ width: '100%' }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              )}
            </div>
            <p className="text-lg md:text-xl text-white/80 font-medium mt-6 max-w-xl mx-auto lg:mx-0">
              LumiqAI feeds Brex-style underwriting with identity, registry, deposit + ACH behavior, and in-app credit readiness.
            </p>

            {/* Kill Line - on left side for desktop */}
            <motion.p
              className="mt-10 text-lg md:text-xl font-bold text-white/70 hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              You can't underwrite invisible. LumiqAI adds sight.
            </motion.p>
          </motion.div>

          {/* Right: Visual Module */}
          <div className="relative min-h-[480px] md:min-h-[520px]">
            {/* Comparison Stack - Behind */}
            <motion.div
              className="absolute top-4 left-0 md:left-4 z-0"
              initial={{ opacity: 0, x: -20, rotate: -7 }}
              animate={{ opacity: 1, x: 0, rotate: -7 }}
              transition={{
                default: { duration: 0.5, delay: 0.3 },
                rotate: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.03, rotate: -7 }}
              onHoverStart={() => setHoveredComparison('legacy')}
              onHoverEnd={() => setHoveredComparison(null)}
              style={{ transformOrigin: 'center center' }}
            >
              <Card className="w-44 md:w-52 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm cursor-pointer">
                <h4 className="text-sm font-bold text-white/60 mb-3">Legacy</h4>
                <ul className="space-y-2 text-xs text-white/50">
                  <li>• Auto rejects thin files</li>
                  <li>• No path visibility</li>
                </ul>
                <div className={`
                  mt-3 inline-block px-2 py-1 rounded-full text-[10px] font-medium border transition-all duration-300
                  ${isApiHovered ? 'border-white/40 text-white/80 bg-white/10' : 'border-white/10 text-white/40'}
                `}>
                  Churn risk
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="absolute top-12 right-0 md:right-4 z-0"
              initial={{ opacity: 0, x: 20, rotate: 7 }}
              animate={{ opacity: 1, x: 0, rotate: 7 }}
              transition={{
                default: { duration: 0.5, delay: 0.4 },
                rotate: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
              }}
              whileHover={{ scale: 1.03, rotate: 7 }}
              onHoverStart={() => setHoveredComparison('lumiq')}
              onHoverEnd={() => setHoveredComparison(null)}
              style={{ transformOrigin: 'center center' }}
            >
              <Card className="w-44 md:w-52 p-4 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-sm cursor-pointer">
                <h4 className="text-sm font-bold text-white/80 mb-3">LumiqAI</h4>
                <ul className="space-y-2 text-xs text-white/70">
                  <li>• Approves identity-first</li>
                  <li>• Shows readiness path</li>
                </ul>
                <div className={`
                  mt-3 inline-block px-2 py-1 rounded-full text-[10px] font-medium border transition-all duration-300
                  ${isApiHovered ? 'border-white/50 text-white bg-white/15' : 'border-white/20 text-white/60'}
                `}>
                  LTV lift
                </div>
              </Card>
            </motion.div>

            {/* Big Feature Card - Front */}
            <motion.div
              className="relative z-10 mt-28 md:mt-24 mx-auto max-w-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                default: { duration: 0.6, delay: 0.2 },
                y: { duration: 8.5, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <Card className={`
                relative p-5 md:p-6 rounded-3xl border bg-black/60 backdrop-blur-md overflow-hidden
                transition-all duration-300
                ${isApiHovered ? 'border-white/30' : 'border-white/15'}
              `}>
                {/* Animated border glow */}
                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: '0 0 20px 2px rgba(255,255,255,0.1)',
                    }}
                    animate={{
                      opacity: [0.1, 0.18, 0.1],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base md:text-lg font-bold text-white">Signal Intake (Pre-Revenue)</h3>
                  <span className="px-2 py-1 rounded-full text-[9px] md:text-[10px] font-semibold text-white/70 bg-white/10 border border-white/15">
                    Upstream Layer
                  </span>
                </div>

                <div className="space-y-2">
                  <SignalRow 
                    label="Identity match" 
                    value="verified owner" 
                    isHighlighted={isApiHovered}
                  />
                  <SignalRow 
                    label="Registry proof" 
                    value="active filings" 
                    isHighlighted={isApiHovered}
                  />
                  <SignalRow 
                    label="Deposit rhythm" 
                    value="stability proxy" 
                    isHighlighted={isApiHovered}
                  />
                  <SignalRow 
                    label="ACH health" 
                    value="blind risk prevention" 
                    isHighlighted={isApiHovered}
                  />
                </div>
              </Card>
            </motion.div>

            {/* Mini API Response Card */}
            <motion.div
              className="absolute bottom-4 right-0 md:right-4 z-20"
              initial={{ opacity: 0, y: 40 }}
              animate={apiVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ y: -2 }}
              onHoverStart={() => setIsApiHovered(true)}
              onHoverEnd={() => setIsApiHovered(false)}
            >
              <Card className={`
                p-3 md:p-4 rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-300
                ${isApiHovered ? 'border-white/30 bg-black/80' : 'border-white/15 bg-black/60'}
              `}>
                <pre className="text-[9px] md:text-[10px] font-mono text-white/80 leading-relaxed">
{`{
  "identity": "verified",
  "registry": "active",
  "deposits": "stable",
  "ACH": "healthy",
  "decision_support": "review_or_approve",
  "readiness": 0.74
}`}
                </pre>
                <p className="mt-2 text-[9px] md:text-[10px] text-white/50 font-medium">
                  Embeddable in your risk rules.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Kill Line - Mobile only (centered) */}
        <motion.p
          className="text-center mt-8 text-lg font-bold text-white/70 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          You can't underwrite invisible. LumiqAI adds sight.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <Link to="/request-pilot">
            <Button
              size="lg"
              className="bg-white text-[#0B1020] px-8 py-4 text-base font-semibold rounded-full shadow-lg uppercase hover:bg-white/90 transition-colors"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Request Private Pilot
            </Button>
          </Link>
          <a href="https://docs.futeurcredx.com" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white px-8 py-4 text-base font-semibold rounded-full uppercase hover:bg-white/10 transition-colors bg-white/5"
            >
              <FileText className="mr-2 h-5 w-5" />
              View API Docs
            </Button>
          </a>
        </motion.div>
      </div>
    </HeroBackground>
  );
}
