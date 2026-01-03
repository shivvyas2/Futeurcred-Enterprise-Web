import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Eye, 
  Brain, 
  Scale, 
  TrendingUp, 
  Award, 
  GraduationCap,
  User,
  Building2,
  Sparkles,
  Target,
  CheckCircle,
  Gauge,
  LayoutDashboard
} from "lucide-react";

// Stage data with expanded details
const stages = [
  {
    id: 1,
    title: "Visibility",
    bullets: ["Establish credit context", "Baseline readiness check"],
    icon: Eye,
    details: {
      observe: ["Identity + entity signals", "Credit file presence"],
      output: ["Visibility status", "Next required step"],
      unlocks: "Eligible for progression",
      expanded: {
        visibilityStatus: "Whether the applicant has verifiable identity and basic credit footprint",
        nextStep: "System identifies exact gaps preventing approval readiness",
        insight: "Most declines happen here — not from risk, but from missing data. Visibility converts unknowns into addressable gaps."
      }
    }
  },
  {
    id: 2,
    title: "Contextual Understanding",
    bullets: ["Structure over judgment", "Factor-based assessment"],
    icon: Brain,
    details: {
      observe: ["Registry + consistency", "Early stability markers"],
      output: ["Confidence score", "Risk tier hint"],
      unlocks: "Safer early decisions",
      expanded: {
        confidenceScore: "0-100 score measuring data completeness and consistency across sources",
        riskTier: "Early indicator of where applicant likely lands (Tier A/B/C) before full underwriting",
        insight: "Context removes guesswork. You see patterns, not just data points."
      }
    }
  },
  {
    id: 3,
    title: "Measured Opportunity",
    bullets: ["Capped exposure first", "Conditions define access"],
    icon: Scale,
    details: {
      observe: ["Deposit rhythm trends", "Early warning flags"],
      output: ["Suggested limit band", "Conditions to advance"],
      unlocks: "Controlled initial access",
      expanded: {
        limitBand: "Recommended starting limit range based on observed stability signals",
        conditions: "Specific milestones required before limit increases (e.g., 3 on-time payments)",
        insight: "Small, safe exposure lets you learn about customers without blind risk."
      }
    }
  },
  {
    id: 4,
    title: "Observable Progression",
    bullets: ["Milestones tracked", "Behavior becomes signal"],
    icon: TrendingUp,
    details: {
      observe: ["Payment behavior", "Stability over time"],
      output: ["Progress meter", "Earned status update"],
      unlocks: "Higher limits safely",
      expanded: {
        progressMeter: "Visual indicator showing % completion toward next tier or limit increase",
        earnedStatus: "Dynamic label (Building → Established → Trusted) based on observed behavior",
        insight: "Customers see their own progress. Engagement increases when the path is visible."
      }
    }
  },
  {
    id: 5,
    title: "Earned Escalation",
    bullets: ["Limits expand safely", "Products unlock logically"],
    icon: Award,
    details: {
      observe: ["Reliability signals", "Sustained stability"],
      output: ["Escalation recommendation", "Reason codes list"],
      unlocks: "Next product tier",
      expanded: {
        escalationRec: "System-generated suggestion to increase limits or unlock new products",
        reasonCodes: "Auditable codes explaining why escalation is safe (e.g., RC-07: No distress signals)",
        insight: "Every escalation has a paper trail. Sponsors see exactly why limits grew."
      }
    }
  },
  {
    id: 6,
    title: "Graduation Into Your Products",
    bullets: ["Ready customers convert", "Lower sponsor risk"],
    icon: GraduationCap,
    details: {
      observe: ["Full progression history", "Sponsor-aligned profile"],
      output: ["Graduation status", "Offer timing signal"],
      unlocks: "Prime cross-sell moment",
      expanded: {
        gradStatus: "Binary flag: Ready or Not Ready for full product access based on complete journey",
        offerTiming: "Optimal moment indicator for presenting premium products (based on stability + engagement)",
        insight: "Graduation means the customer proved themselves inside your platform — not somewhere else."
      }
    }
  },
];

// Signal mapping data
const signalData = [
  { signal: "Identity match", interpretation: "Verified ownership", use: "Approve", highlight: true },
  { signal: "Registry active", interpretation: "Entity legitimacy", use: "Gate + Onboard", highlight: false },
  { signal: "Business tradelines", interpretation: "Business maturity", use: "Escalate Limits", highlight: false },
  { signal: "Payment trend", interpretation: "Reliability", use: "Escalate", highlight: false },
  { signal: "Personal credit snapshot", interpretation: "Owner risk tier", use: "Decision Support", highlight: false },
  { signal: "Deposit frequency", interpretation: "Stability proxy", use: "Approve Early", highlight: true },
  { signal: "Avg balance stability", interpretation: "Runway signal", use: "Size Limits", highlight: false },
  { signal: "ACH returns/bounces", interpretation: "Distress flag", use: "Review", highlight: false },
  { signal: "Address/phone consistency", interpretation: "Integrity signal", use: "Increase Confidence", highlight: false },
];


// Expanded Detail Row Component
const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1 py-2 border-b border-black/5 last:border-b-0">
    <span className="text-[10px] uppercase tracking-wider text-black/40 font-medium">{label}</span>
    <span className="text-sm text-black/80">{value}</span>
  </div>
);

// Stage Card Component
const StageCard = ({
  stage,
  index,
  isActive,
  hasActiveStage,
  onClick,
  shouldReduceMotion,
}: {
  stage: typeof stages[0];
  index: number;
  isActive: boolean;
  hasActiveStage: boolean;
  onClick: () => void;
  shouldReduceMotion: boolean | null;
}) => {
  const Icon = stage.icon;
  const isDimmed = hasActiveStage && !isActive;

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={onClick}
      className={`
        relative w-full text-left p-4 md:p-5 rounded-2xl border bg-white
        transition-all duration-300 cursor-pointer
        ${isActive 
          ? 'border-black/20 shadow-md scale-[1.02]' 
          : 'border-black/10 hover:border-black/15 hover:shadow-sm'
        }
        ${isDimmed ? 'opacity-70' : 'opacity-100'}
      `}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-4 bottom-4 w-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-black/70' : 'bg-black/5'}`} />

      {/* Stage pill - top right */}
      <div className="absolute top-3 right-3">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-black text-white/90 text-[10px] font-medium">
          Stage 0{stage.id}
        </span>
      </div>

      {/* Icon */}
      <div className="w-8 h-8 rounded-xl bg-black/5 border border-black/10 flex items-center justify-center mb-3 ml-2">
        <Icon className="w-4 h-4 text-black/60" />
      </div>

      {/* Content */}
      <div className="ml-2">
        <h4 className="text-lg font-semibold text-black mb-2">{stage.title}</h4>
        <ul className="space-y-1">
          {stage.bullets.map((bullet, i) => (
            <li key={i} className="text-sm text-black/60 flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-black/30 flex-shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>

        {/* Active indicator */}
        {isActive && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-black/40 mt-2 block"
          >
            View details →
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

// Detail Panel Component
const DetailPanel = ({
  stage,
  shouldReduceMotion,
}: {
  stage: typeof stages[0];
  shouldReduceMotion: boolean | null;
}) => {
  const expandedKeys = Object.keys(stage.details.expanded);
  const expandedLabels: Record<string, string> = {
    visibilityStatus: "Visibility Status",
    nextStep: "Next Required Step",
    confidenceScore: "Confidence Score",
    riskTier: "Risk Tier Hint",
    limitBand: "Suggested Limit Band",
    conditions: "Conditions to Advance",
    progressMeter: "Progress Meter",
    earnedStatus: "Earned Status",
    escalationRec: "Escalation Recommendation",
    reasonCodes: "Reason Codes",
    gradStatus: "Graduation Status",
    offerTiming: "Offer Timing Signal",
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.25 }}
        className="space-y-4"
      >
        {/* What we observe */}
        <div>
          <h5 className="text-xs uppercase tracking-wider text-black/40 font-medium mb-2">What We Observe</h5>
          <div className="flex flex-wrap gap-2">
            {stage.details.observe.map((item, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/70 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* What we output */}
        <div>
          <h5 className="text-xs uppercase tracking-wider text-black/40 font-medium mb-2">What We Output</h5>
          <div className="flex flex-wrap gap-2">
            {stage.details.output.map((item, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/70 text-sm">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* What it unlocks */}
        <div>
          <h5 className="text-xs uppercase tracking-wider text-black/40 font-medium mb-1">What It Unlocks</h5>
          <p className="text-base font-medium text-black">{stage.details.unlocks}</p>
        </div>

        {/* Expanded Details - replaces screenshot slot */}
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 mt-4">
          <h5 className="text-xs uppercase tracking-wider text-black/50 font-medium mb-3">Deep Dive</h5>
          <div className="space-y-0">
            {expandedKeys.filter(k => k !== "insight").map((key) => {
              const value = stage.details.expanded[key as keyof typeof stage.details.expanded];
              if (!value || key === "insight") return null;
              return (
                <DetailRow 
                  key={key} 
                  label={expandedLabels[key] || key} 
                  value={value} 
                />
              );
            })}
          </div>
          
          {/* Sharp one-liner insight */}
          <div className="mt-4 pt-3 border-t border-black/10">
            <p className="text-sm text-black/70 italic leading-relaxed">
              {stage.details.expanded.insight}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Simple connector line between stages
const StageConnector = ({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
    <motion.path
      d="M 17 17 L 50 17 L 83 17 L 83 50 L 83 83 L 50 83 L 17 83 L 17 50 Z"
      fill="none"
      stroke="rgba(0,0,0,0.2)"
      strokeWidth="0.3"
      strokeDasharray="2 2"
      animate={!shouldReduceMotion ? { strokeDashoffset: [0, -8] } : {}}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

// Diagram Circle Node
const DiagramNode = ({ label, icon: Icon, delay }: { label: string; icon: React.ElementType; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.1, duration: 0.4 }}
    className="flex flex-col items-center gap-2"
  >
    <div className="w-16 h-16 rounded-2xl bg-black/5 border border-black/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-black/70" />
    </div>
    <span className="text-sm text-black/60 text-center font-medium">{label}</span>
  </motion.div>
);

// Arrow connector for diagram
const DiagramArrows = ({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" preserveAspectRatio="none">
    {/* Arrow 1 */}
    <motion.line x1="32%" y1="50%" x2="38%" y2="50%" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" strokeDasharray="4 4"
      animate={!shouldReduceMotion ? { strokeDashoffset: [0, -16] } : {}}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
    {/* Arrow 2 */}
    <motion.line x1="62%" y1="50%" x2="68%" y2="50%" stroke="rgba(0,0,0,0.18)" strokeWidth="1.5" strokeDasharray="4 4"
      animate={!shouldReduceMotion ? { strokeDashoffset: [0, -16] } : {}}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
    />
  </svg>
);

export default function OperatingLoopSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState<number>(1);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  
  const activeStageData = stages.find(s => s.id === activeStage)!;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Canvas Island Container */}
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="relative rounded-[32px] border border-black/10 bg-white/90 backdrop-blur-md shadow-[0_30px_120px_rgba(0,0,0,0.35)] p-8 md:p-12 overflow-hidden">
            {/* Grid pattern overlay */}
            <div 
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight uppercase">
                  The Operating Loop
                </h2>
                <p className="text-black/60 mt-3 text-base md:text-lg">
                  LumiqAI runs as a continuous, observable loop
                </p>
                
                {/* Chip row */}
                <div className="flex flex-wrap justify-center gap-2 mt-5">
                  {["Observable", "Auditable", "Stage-based"].map((chip) => (
                    <span key={chip} className="inline-flex items-center px-3 py-1 rounded-full bg-black/5 text-black/70 border border-black/10 text-xs font-medium">
                      {chip}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* ROW 1: Loop Map + Detail Panel */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch mb-8"
              >
                {/* Loop Map Card */}
                <Card className="relative rounded-3xl border border-black/10 bg-white shadow-sm p-6 md:p-8 overflow-hidden">
                  {/* Spotlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_50%_30%,rgba(0,0,0,0.04),transparent_70%)] pointer-events-none" />
                  
                  {/* Connector line */}
                  <StageConnector shouldReduceMotion={shouldReduceMotion} />
                  
                  {/* Clean 3x2 Grid for all screen sizes */}
                  <div className="relative z-10 grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {stages.map((stage, index) => (
                      <StageCard
                        key={stage.id}
                        stage={stage}
                        index={index}
                        isActive={activeStage === stage.id}
                        hasActiveStage={activeStage !== null}
                        onClick={() => setActiveStage(stage.id)}
                        shouldReduceMotion={shouldReduceMotion}
                      />
                    ))}
                  </div>
                </Card>

                {/* Detail Panel Card */}
                <Card className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 md:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-black/50 font-medium">Stage Details</h4>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black text-white text-xs font-medium">
                      Stage 0{activeStage}
                    </span>
                  </div>
                  
                  <DetailPanel stage={activeStageData} shouldReduceMotion={shouldReduceMotion} />
                </Card>
              </motion.div>

              {/* ROW 2: Diagram Card */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.24, duration: 0.6 }}
                className="mb-8"
              >
                <Card className="rounded-3xl border border-black/10 bg-white shadow-sm p-8 md:p-10 relative overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-semibold text-black text-center">
                    Underwriting Starts With Signals
                  </h3>

                  {/* Diagram */}
                  <div className="relative mt-8">
                    <DiagramArrows shouldReduceMotion={shouldReduceMotion} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
                      {/* Column 1: SMB / Applicant */}
                      <div className="flex flex-col items-center">
                        <span className="text-black/50 text-xs tracking-widest uppercase mb-4">SMB / Applicant</span>
                        <div className="flex flex-col gap-4">
                          <DiagramNode label="Identity" icon={User} delay={1} />
                          <DiagramNode label="Registry" icon={Building2} delay={2} />
                        </div>
                      </div>

                      {/* Column 2: LumiqAI Signal Core */}
                      <div className="flex flex-col items-center">
                        <span className="text-black/50 text-xs tracking-widest uppercase mb-4">LumiqAI Core</span>
                        <div className="flex flex-col gap-4">
                          <DiagramNode label="Signal Enrichment" icon={Sparkles} delay={3} />
                          <DiagramNode label="Readiness Output" icon={Target} delay={4} />
                        </div>
                      </div>

                      {/* Column 3: Fintech Outcomes */}
                      <div className="flex flex-col items-center">
                        <span className="text-black/50 text-xs tracking-widest uppercase mb-4">Outcomes</span>
                        <div className="flex flex-col gap-4">
                          <DiagramNode label="Approve" icon={CheckCircle} delay={5} />
                          <DiagramNode label="Size Limits" icon={Gauge} delay={6} />
                          <DiagramNode label="Show Readiness" icon={LayoutDashboard} delay={7} />
                        </div>
                      </div>
                    </div>
                  </div>

                </Card>
              </motion.div>

              {/* ROW 3: Signal Mapping Table + Underwriting UI */}
              <motion.div
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.36, duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-6 mb-8"
              >
                {/* Table Card */}
                <Card className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
                    Signals → Interpretation → Underwriting Use
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[480px]">
                      <thead>
                        <tr className="sticky top-0 bg-white/95 backdrop-blur border-b border-black/10">
                          <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-black/50">Signal</th>
                          <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-black/50">Interpretation</th>
                          <th className="text-left py-3 px-3 text-xs font-semibold uppercase tracking-wider text-black/50">Use</th>
                        </tr>
                      </thead>
                      <tbody>
                        {signalData.map((row, index) => (
                          <tr
                            key={index}
                            onMouseEnter={() => setHoveredRow(index)}
                            onMouseLeave={() => setHoveredRow(null)}
                            className={`border-b border-black/5 last:border-b-0 transition-colors duration-200 ${hoveredRow === index ? 'bg-black/[0.03]' : ''}`}
                          >
                            <td className={`py-3 px-3 text-sm text-black/80 ${hoveredRow === index ? 'underline decoration-black/30' : ''}`}>
                              {row.signal}
                            </td>
                            <td className="py-3 px-3 text-sm text-black/60">{row.interpretation}</td>
                            <td className="py-3 px-3">
                              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border ${row.highlight ? 'bg-black text-white border-black' : 'bg-black/5 text-black/70 border-black/10'}`}>
                                {row.use}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>

                {/* Underwriting UI Result Slot Card */}
                <Card className="rounded-3xl border border-black/10 bg-white shadow-sm p-6 md:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm uppercase tracking-wider text-black/50 font-medium">Underwriting UI Output</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-black/5 text-black/60 border border-black/10 text-[10px] font-medium">
                      Embedded UI Slot
                    </span>
                  </div>

                  {/* Mock mini panel */}
                  <div className="space-y-4 mb-4">
                    {/* Confidence bar */}
                    <div>
                      <div className="flex justify-between text-xs text-black/50 mb-1">
                        <span>Confidence</span>
                        <span>87%</span>
                      </div>
                      <div className="h-2 bg-black/5 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-black/70 rounded-full" />
                      </div>
                    </div>

                    {/* Reason code chips */}
                    <div>
                      <span className="text-xs text-black/50 block mb-2">Reason Codes</span>
                      <div className="flex flex-wrap gap-1.5">
                        {["R01", "R03", "R07"].map((code) => (
                          <span key={code} className="inline-flex items-center px-2 py-0.5 rounded bg-black/5 border border-black/10 text-black/60 text-[10px] font-medium">
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Readiness meter */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="3" />
                          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="3" strokeDasharray="88" strokeDashoffset="22" strokeLinecap="round" />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-black/70">75%</span>
                      </div>
                      <span className="text-xs text-black/50">Readiness Meter</span>
                    </div>
                  </div>

                  {/* Insight panel - replaces screenshot slot */}
                  <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-4 mt-4">
                    <p className="text-sm text-black/70 italic leading-relaxed">
                      This embedded panel shows real-time underwriting outputs: confidence scores, reason codes, and readiness meters that update as the customer progresses through your platform.
                    </p>
                  </div>
                </Card>
              </motion.div>

              {/* Kill Line */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.48 }}
                className="text-center text-sm text-black/55 mt-8"
              >
                Deny less. Approve more. Retain in-app.
              </motion.p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
