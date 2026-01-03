import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Building2, 
  Banknote, 
  Sparkles, 
  Target, 
  Scale, 
  DollarSign, 
  LayoutDashboard,
  CheckCircle2,
  AlertCircle,
  Circle
} from "lucide-react";

type InputNode = 'identity' | 'registry' | 'deposits';
type ActiveNode = InputNode | null;
type TabType = 'above' | 'layer' | 'below';

// Live output data based on active node
const liveOutputs: Record<InputNode, {
  metrics: { label: string; value: string; status: 'good' | 'warning' | 'neutral' }[];
  action: string;
  actionType: 'approve' | 'review' | 'continue';
  confidence: number;
  reasons: string[];
}> = {
  deposits: {
    metrics: [
      { label: "Stability proxy", value: "Strong", status: 'good' },
      { label: "ACH returns", value: "None detected", status: 'good' },
      { label: "Deposit rhythm", value: "Consistent", status: 'good' },
    ],
    action: "Approve",
    actionType: 'approve',
    confidence: 0.91,
    reasons: ["Stable rhythm", "No bounces", "ACH healthy"]
  },
  identity: {
    metrics: [
      { label: "Ownership", value: "Verified", status: 'good' },
      { label: "Address/phone", value: "Consistent", status: 'good' },
      { label: "Fraud risk", value: "Low", status: 'good' },
    ],
    action: "Continue",
    actionType: 'continue',
    confidence: 0.87,
    reasons: ["SSN match", "Address verified", "No flags"]
  },
  registry: {
    metrics: [
      { label: "Entity status", value: "Active", status: 'good' },
      { label: "Filing status", value: "Current", status: 'good' },
      { label: "State match", value: "Verified", status: 'neutral' },
    ],
    action: "Review",
    actionType: 'review',
    confidence: 0.72,
    reasons: ["Entity active", "Filing current", "Recent changes"]
  }
};

// Node button component
const NodeButton = ({ 
  id, 
  label, 
  icon: Icon, 
  isActive, 
  onClick 
}: { 
  id: InputNode; 
  label: string; 
  icon: React.ElementType;
  isActive: boolean; 
  onClick: () => void;
}) => (
  <Button
    variant="ghost"
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2.5 h-auto rounded-full border transition-all duration-300 w-full justify-start
      ${isActive 
        ? 'bg-white/15 border-white/30 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]' 
        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20'
      }
    `}
  >
    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-white/50'}`} />
    <span className="text-sm font-medium">{label}</span>
  </Button>
);

// Output node (non-interactive)
const OutputNode = ({ 
  label, 
  icon: Icon, 
  isHighlighted 
}: { 
  label: string; 
  icon: React.ElementType; 
  isHighlighted: boolean;
}) => (
  <div className={`
    flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300
    ${isHighlighted 
      ? 'bg-white/12 border-white/25 text-white' 
      : 'bg-white/[0.04] border-white/8 text-white/50'
    }
  `}>
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

// Center layer node
const LayerNode = ({ 
  label, 
  icon: Icon, 
  isActive 
}: { 
  label: string; 
  icon: React.ElementType; 
  isActive: boolean;
}) => (
  <div className={`
    flex items-center justify-center gap-2 px-5 py-4 rounded-2xl border transition-all duration-300
    ${isActive 
      ? 'bg-white/15 border-white/25 text-white shadow-[0_0_30px_rgba(255,255,255,0.1)]' 
      : 'bg-white/[0.06] border-white/12 text-white/60'
    }
  `}>
    <Icon className="w-5 h-5" />
    <span className="text-sm font-semibold">{label}</span>
  </div>
);

export default function StackFlowSimulator() {
  const shouldReduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<ActiveNode>('deposits');
  const [activeTab, setActiveTab] = useState<TabType>('layer');
  const [showShimmer, setShowShimmer] = useState(false);

  // Shimmer effect every 16s
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setShowShimmer(true);
      setTimeout(() => setShowShimmer(false), 1500);
    }, 16000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const currentOutput = activeNode ? liveOutputs[activeNode] : null;

  // Path animation based on active node
  const getPathOpacity = (path: 'identity' | 'registry' | 'deposits' | 'output') => {
    if (!activeNode) return 0.15;
    if (path === activeNode) return 0.7;
    if (path === 'output' && activeNode) return 0.6;
    return 0.1;
  };

  const getPathStroke = (path: 'identity' | 'registry' | 'deposits' | 'output') => {
    if (!activeNode) return 1.5;
    if (path === activeNode || path === 'output') return 2.5;
    return 1;
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Section backdrop spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.14) 0%, transparent 70%)',
        }}
      />
      
      {/* Accent gradient for separation */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none opacity-[0.08]"
        style={{
          background: 'linear-gradient(to top, rgba(100,150,255,0.2), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Where LumiqAI Sits
          </h2>
          <p className="text-lg text-white/70 font-medium">
            LumiqAI lives between application and capital.
          </p>
        </motion.div>

        {/* Two-Panel Layout */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-6">
          
          {/* LEFT: Stack Position Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="relative rounded-3xl border border-white/10 bg-black/55 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Grid glow backdrop */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px',
                }}
              />
              
              {/* Radial orbs */}
              <div className="absolute top-1/4 left-1/6 w-48 h-48 rounded-full bg-white/[0.08] blur-[80px] pointer-events-none" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white/[0.1] blur-[60px] pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white/[0.06] blur-[100px] pointer-events-none" />
              
              {/* Shimmer sweep */}
              <AnimatePresence>
                {showShimmer && (
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '200%', opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-20"
                  />
                )}
              </AnimatePresence>

              <div className="relative z-10 p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">Stack Position</span>
                  <span className="rounded-full text-[11px] px-3 py-1.5 border border-white/15 text-white/50 bg-white/5">
                    API + Embedded UI
                  </span>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-3 bg-white/5 rounded-xl p-1 mb-8">
                  {(['above', 'layer', 'below'] as TabType[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        rounded-lg text-xs py-2.5 px-4 font-medium transition-all duration-200 uppercase
                        ${activeTab === tab 
                          ? 'bg-white/12 text-white' 
                          : 'text-white/40 hover:text-white/60'
                        }
                      `}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'above' && (
                    <motion.div
                      key="above"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-3 justify-center py-12"
                    >
                      {['Banking products', 'Lending products', 'Revenue-based financing'].map((product) => (
                        <span key={product} className="px-5 py-2.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-sm font-medium">
                          {product}
                        </span>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'layer' && (
                    <motion.div
                      key="layer"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="relative"
                    >
                      {/* SVG Connector Lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '280px' }}>
                        <defs>
                          <filter id="connectorGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="3" result="blur"/>
                            <feMerge>
                              <feMergeNode in="blur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>
                        
                        {/* Identity -> Layer */}
                        <motion.path
                          d="M 25% 20% Q 38% 18%, 48% 32%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode === 'identity' ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('identity')})`,
                            strokeWidth: getPathStroke('identity'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />
                        
                        {/* Registry -> Layer */}
                        <motion.path
                          d="M 25% 50% Q 38% 48%, 48% 45%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode === 'registry' ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('registry')})`,
                            strokeWidth: getPathStroke('registry'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />
                        
                        {/* Deposits -> Layer */}
                        <motion.path
                          d="M 25% 80% Q 38% 75%, 48% 58%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode === 'deposits' ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('deposits')})`,
                            strokeWidth: getPathStroke('deposits'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />

                        {/* Layer -> Outputs (multiple) */}
                        <motion.path
                          d="M 58% 45% Q 68% 35%, 78% 22%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('output')})`,
                            strokeWidth: getPathStroke('output'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />
                        <motion.path
                          d="M 58% 55% Q 68% 52%, 78% 50%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('output')})`,
                            strokeWidth: getPathStroke('output'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />
                        <motion.path
                          d="M 58% 65% Q 68% 70%, 78% 78%"
                          fill="none"
                          strokeDasharray="6 4"
                          filter={activeNode ? 'url(#connectorGlow)' : undefined}
                          animate={{
                            stroke: `rgba(255,255,255,${getPathOpacity('output')})`,
                            strokeWidth: getPathStroke('output'),
                            strokeDashoffset: shouldReduceMotion ? 0 : [0, -20],
                          }}
                          transition={{
                            stroke: { duration: 0.4 },
                            strokeWidth: { duration: 0.4 },
                            strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: 'linear' },
                          }}
                        />
                      </svg>

                      {/* 3-Column Grid */}
                      <div className="grid grid-cols-3 gap-4 md:gap-6 relative z-10 min-h-[280px]">
                        {/* Column 1: Inputs */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block text-center mb-4">
                            Applicant / SMB
                          </span>
                          <NodeButton
                            id="identity"
                            label="Identity"
                            icon={User}
                            isActive={activeNode === 'identity'}
                            onClick={() => setActiveNode('identity')}
                          />
                          <NodeButton
                            id="registry"
                            label="Registry"
                            icon={Building2}
                            isActive={activeNode === 'registry'}
                            onClick={() => setActiveNode('registry')}
                          />
                          <NodeButton
                            id="deposits"
                            label="Deposits + ACH"
                            icon={Banknote}
                            isActive={activeNode === 'deposits'}
                            onClick={() => setActiveNode('deposits')}
                          />
                        </div>

                        {/* Column 2: Layer */}
                        <div className="space-y-3 flex flex-col justify-center">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block text-center mb-4">
                            LumiqAI Layer
                          </span>
                          <LayerNode label="Signal Enrichment" icon={Sparkles} isActive={!!activeNode} />
                          <LayerNode label="Readiness Output" icon={Target} isActive={!!activeNode} />
                        </div>

                        {/* Column 3: Outputs */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-white/40 block text-center mb-4">
                            Underwriting
                          </span>
                          <OutputNode label="Decisioning" icon={Scale} isHighlighted={!!activeNode} />
                          <OutputNode label="Limit / Pricing" icon={DollarSign} isHighlighted={!!activeNode} />
                          <OutputNode label="Dashboards" icon={LayoutDashboard} isHighlighted={!!activeNode} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'below' && (
                    <motion.div
                      key="below"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-wrap gap-3 justify-center py-12"
                    >
                      {['Core underwriting logic', 'Sponsor bank policies', 'Approval authority'].map((item) => (
                        <span key={item} className="px-5 py-2.5 rounded-full bg-white/8 border border-white/12 text-white/70 text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT: Live Output + Screenshot Slot */}
          <div className="space-y-5">
            {/* Live Output Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Card className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md p-5">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">Live Output</span>
                  <div className="flex items-center gap-1.5">
                    <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-emerald-400 font-medium">Live</span>
                  </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {currentOutput ? (
                    <motion.div
                      key={activeNode}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Metrics */}
                      <div className="space-y-2">
                        {currentOutput.metrics.map((metric) => (
                          <div key={metric.label} className="flex items-center justify-between py-1.5">
                            <span className="text-xs text-white/50">{metric.label}</span>
                            <span className={`text-xs font-semibold ${
                              metric.status === 'good' ? 'text-emerald-400' : 
                              metric.status === 'warning' ? 'text-amber-400' : 'text-white/70'
                            }`}>
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="h-px bg-white/10" />

                      {/* Action + Confidence */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {currentOutput.actionType === 'approve' ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : currentOutput.actionType === 'review' ? (
                            <AlertCircle className="w-4 h-4 text-amber-400" />
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-blue-400" />
                          )}
                          <span className={`text-sm font-bold ${
                            currentOutput.actionType === 'approve' ? 'text-emerald-400' :
                            currentOutput.actionType === 'review' ? 'text-amber-400' : 'text-blue-400'
                          }`}>
                            {currentOutput.action}
                          </span>
                        </div>
                        <span className="text-sm font-mono text-white/70">{currentOutput.confidence.toFixed(2)}</span>
                      </div>

                      {/* Reason codes */}
                      <div>
                        <span className="text-[10px] text-white/40 block mb-2">Reason codes</span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentOutput.reasons.map((reason) => (
                            <span key={reason} className="text-[10px] px-2 py-1 rounded-full bg-white/8 border border-white/10 text-white/60">
                              {reason}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="py-8 text-center"
                    >
                      <span className="text-xs text-white/30">Select an input to see output</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>

            {/* Screenshot Slot */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <Card className="rounded-2xl border border-white/10 bg-black/50 overflow-hidden">
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/8 bg-white/[0.03]">
                  <span className="text-[11px] font-bold text-white/60">Embedded Dashboard Panel</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">
                    Live Preview
                  </span>
                </div>
                
                {/* Screenshot frame */}
                <div className="p-4">
                  <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/30">
                    <img 
                      src="/screenshots/credit-intelligence-dashboard.jpg" 
                      alt="Credit Intelligence Dashboard"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
