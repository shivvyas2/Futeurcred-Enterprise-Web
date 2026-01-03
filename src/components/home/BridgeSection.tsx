import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, ChevronRight, ChevronDown, Info, ExternalLink } from "lucide-react";

const trustPills = [
  "SOC2 + SOC3 aligned",
  "ISO27001 roadmap",
  "Reason codes + reviewer trails",
  "Sponsor-safe exposure",
];

type TabId = "policy" | "audit" | "consent" | "integration";

const tabs: { id: TabId; label: string }[] = [
  { id: "policy", label: "Policy Guardrails" },
  { id: "audit", label: "Audit Trail" },
  { id: "consent", label: "Consent + Data" },
  { id: "integration", label: "Integration" },
];

// Policy Guardrails Tab Content
function PolicyGuardrailsTab() {
  const [expandedRule, setExpandedRule] = useState<number | null>(null);

  const stages = [
    { stage: 0, title: "Identity + Registry", constraint: "Required" },
    { stage: 1, title: "Banking Signals", constraint: "Optional" },
    { stage: 2, title: "Trade / Bureau Signals", constraint: "Conditional" },
    { stage: 3, title: "Sponsor-Safe Offer", constraint: "Eligible" },
  ];

  const rules = [
    {
      title: "Revenue Missing → Require Banking or Time-in-Business",
      body: "If stated revenue is missing, route to alternative signals. No override. Logged.",
    },
    {
      title: "Sponsor Policy Thresholds → Enforced at Every Stage",
      body: "Eligibility checks run per stage; failing moves applicant to guided unlock path.",
    },
    {
      title: "High-Risk Flags → Freeze Exposure + Request Unlock Actions",
      body: "Flags trigger staged hold + recommended actions. Reviewer can see why.",
    },
  ];

  return (
    <div className="space-y-5">
      {/* Staged Exposure Ladder */}
      <div>
        <div className="text-xs font-medium text-white/70 mb-3">Staged Exposure Ladder</div>
        <div className="space-y-0">
          {stages.map((s, i) => (
            <div key={s.stage} className="flex items-center gap-3">
              {/* Connector line */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[11px] font-semibold text-white/80">
                  {s.stage}
                </div>
                {i < stages.length - 1 && <div className="w-px h-4 bg-white/15" />}
              </div>
              {/* Content */}
              <div className="flex-1 flex items-center justify-between py-1.5">
                <span className="text-sm text-white/75">{s.title}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/55">
                  {s.constraint}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-white/55 mt-3">
          Exposure increases only when sponsor constraints are satisfied.
        </p>
      </div>

      {/* Guardrail Rules */}
      <div>
        <div className="text-xs font-medium text-white/70 mb-3">Guardrail Rules (examples)</div>
        <div className="space-y-2">
          {rules.map((rule, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-black/30 overflow-hidden"
            >
              <button
                onClick={() => setExpandedRule(expandedRule === i ? null : i)}
                className="w-full flex items-center justify-between p-3 text-left hover:bg-white/[0.03] transition-colors duration-200"
              >
                <span className="text-[12px] text-white/70 pr-2">{rule.title}</span>
                {expandedRule === i ? (
                  <ChevronDown className="h-3.5 w-3.5 text-white/40 flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-white/40 flex-shrink-0" />
                )}
              </button>
              {expandedRule === i && (
                <div className="px-3 pb-3 text-[11px] text-white/55 border-t border-white/[0.06] pt-2">
                  {rule.body}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Audit Trail Tab Content
function AuditTrailTab() {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const logs = [
    { time: "12:41:08", event: "Stage computed", result: "Stage 1", evidence: "Confidence 72%" },
    { time: "12:41:10", event: "Policy check", result: "Pass", evidence: "Sponsor rule set v3.2" },
    { time: "12:41:12", event: "Missing signal flagged", result: "Revenue missing", evidence: "Alternative path opened" },
    { time: "12:41:20", event: "Unlock action issued", result: "Bank connect requested", evidence: "User notified" },
    { time: "12:41:31", event: "Reviewer view generated", result: "Ready", evidence: "Export available" },
  ];

  const drawerContent = {
    reasons: ["Revenue signal absent", "Banking path available", "Time-in-business sufficient"],
    tokens: ["BANK_CONNECT", "TIB_VERIFIED", "STAGE_1_ELIGIBLE"],
  };

  return (
    <div className="flex gap-3">
      {/* Log table */}
      <div className={`${selectedRow !== null ? "flex-1" : "w-full"} transition-all duration-200`}>
        <div className="grid grid-cols-4 gap-2 text-[10px] text-white/50 uppercase tracking-wide mb-2 px-2">
          <span>Time</span>
          <span>Event</span>
          <span>Result</span>
          <span>Evidence</span>
        </div>
        <div className="space-y-1">
          {logs.map((log, i) => (
            <button
              key={i}
              onClick={() => setSelectedRow(selectedRow === i ? null : i)}
              className={`
                w-full grid grid-cols-4 gap-2 text-[11px] p-2 rounded-lg text-left
                transition-colors duration-150
                ${selectedRow === i ? "bg-white/10 border border-white/15" : "hover:bg-white/[0.06] border border-transparent"}
              `}
            >
              <span className="text-white/50 font-mono">{log.time}</span>
              <span className="text-white/70">{log.event}</span>
              <span className="text-white/60">{log.result}</span>
              <span className="text-white/50 flex items-center justify-between">
                <span className="truncate">{log.evidence}</span>
                <span className="text-[9px] text-white/40 ml-1 opacity-0 group-hover:opacity-100">View</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail drawer */}
      {selectedRow !== null && (
        <div className="w-44 rounded-xl border border-white/10 bg-black/40 p-3 flex-shrink-0">
          <div className="text-[11px] font-medium text-white/70 mb-2">Reason Codes</div>
          <ul className="space-y-1 mb-3">
            {drawerContent.reasons.map((r, i) => (
              <li key={i} className="text-[10px] text-white/55 flex items-start gap-1.5">
                <span className="text-white/40">•</span>{r}
              </li>
            ))}
          </ul>
          <div className="text-[11px] font-medium text-white/70 mb-2">Evidence Tokens</div>
          <div className="flex flex-wrap gap-1 mb-3">
            {drawerContent.tokens.map((t, i) => (
              <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.08] border border-white/10 text-white/55 font-mono">
                {t}
              </span>
            ))}
          </div>
          <button className="w-full text-[10px] text-white/50 py-1.5 rounded-lg border border-white/10 hover:border-white/20 hover:text-white/60 transition-colors duration-150">
            Export log
          </button>
        </div>
      )}
    </div>
  );
}

// Consent + Data Tab Content
function ConsentDataTab() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);

  const panels = [
    {
      id: "consent",
      title: "Consent Ledger",
      badge: "Consent captured",
      chips: ["Banking", "Bureau", "Registry"],
      tooltip: "Consent is captured per data type and logged with timestamp.",
    },
    {
      id: "minimization",
      title: "Data Minimization",
      items: ["Only required signals per stage", "Least privilege access"],
      tooltip: "Each stage requests only the signals needed for that exposure level.",
    },
    {
      id: "residency",
      title: "Residency + Encryption",
      items: ["Encrypted at rest + transit", "Key management ready"],
      tooltip: "Data residency follows sponsor policy; keys rotate automatically.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {panels.map((panel) => (
        <div
          key={panel.id}
          className="relative rounded-xl border border-white/10 bg-black/30 p-3"
          onMouseEnter={() => setHoveredPanel(panel.id)}
          onMouseLeave={() => setHoveredPanel(null)}
        >
          <div className="flex items-start justify-between mb-2">
            <span className="text-[11px] font-medium text-white/70">{panel.title}</span>
            <div className="relative">
              <Info className="h-3 w-3 text-white/40 cursor-help" />
              {hoveredPanel === panel.id && (
                <div className="absolute right-0 top-5 w-40 p-2 rounded-lg bg-black/90 border border-white/15 text-[10px] text-white/60 z-10 shadow-lg">
                  {panel.tooltip}
                </div>
              )}
            </div>
          </div>
          {panel.badge && (
            <div className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.08] border border-white/10 text-white/55 inline-block mb-2">
              {panel.badge}
            </div>
          )}
          {panel.chips && (
            <div className="flex flex-wrap gap-1">
              {panel.chips.map((chip) => (
                <span key={chip} className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.06] text-white/50">
                  {chip}
                </span>
              ))}
            </div>
          )}
          {panel.items && (
            <ul className="space-y-1">
              {panel.items.map((item, i) => (
                <li key={i} className="text-[10px] text-white/55 flex items-start gap-1.5">
                  <span className="text-white/40 mt-px">•</span>{item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Integration Tab Content
function IntegrationTab() {
  const [activeView, setActiveView] = useState<"payload" | "timeline" | null>(null);

  const endpoints = [
    { method: "POST", path: "/assess", desc: "returns stage + confidence + flags" },
    { method: "GET", path: "/reasons", desc: "returns reason codes + unlock actions" },
    { method: "POST", path: "/decision", desc: "returns sponsor-safe offer or guided path" },
  ];

  const samplePayload = `{
  "stage": 2,
  "confidence": 0.78,
  "flags": ["revenue_missing"],
  "unlock_actions": ["bank_connect"],
  "eligible": false
}`;

  const timeline = [
    { week: "Week 1", task: "API keys + sandbox access" },
    { week: "Week 2", task: "Integration + testing" },
    { week: "Week 3", task: "Production deploy + monitoring" },
  ];

  return (
    <div className="space-y-4">
      {/* Endpoints */}
      <div className="space-y-2">
        {endpoints.map((ep, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-black/30 border border-white/[0.08]">
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/70">
              {ep.method}
            </span>
            <span className="text-[11px] font-mono text-white/60">{ep.path}</span>
            <span className="text-[10px] text-white/45">→ {ep.desc}</span>
          </div>
        ))}
      </div>

      {/* Toggle buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setActiveView(activeView === "payload" ? null : "payload")}
          className={`
            text-[11px] px-3 py-1.5 rounded-lg border transition-colors duration-150
            ${activeView === "payload" ? "bg-white/10 border-white/20 text-white/80" : "border-white/10 text-white/55 hover:border-white/15"}
          `}
        >
          View sample payload
        </button>
        <button
          onClick={() => setActiveView(activeView === "timeline" ? null : "timeline")}
          className={`
            text-[11px] px-3 py-1.5 rounded-lg border transition-colors duration-150
            ${activeView === "timeline" ? "bg-white/10 border-white/20 text-white/80" : "border-white/10 text-white/55 hover:border-white/15"}
          `}
        >
          View integration timeline
        </button>
      </div>

      {/* Content area */}
      {activeView === "payload" && (
        <pre className="text-[10px] font-mono text-white/60 bg-black/40 border border-white/10 rounded-xl p-3 overflow-x-auto">
          {samplePayload}
        </pre>
      )}
      {activeView === "timeline" && (
        <div className="space-y-2">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-center gap-3 text-[11px]">
              <span className="text-white/50 font-medium w-16">{t.week}</span>
              <span className="text-white/60">{t.task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BridgeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("policy");

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case "policy":
        return <PolicyGuardrailsTab />;
      case "audit":
        return <AuditTrailTab />;
      case "consent":
        return <ConsentDataTab />;
      case "integration":
        return <IntegrationTab />;
    }
  };

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-20 relative">
      {/* Top divider */}
      <div className="max-w-[1100px] mx-auto h-px bg-white/[0.08] mb-14" />

      <div
        className={`
          max-w-[1100px] mx-auto px-6 md:px-8
          transition-all duration-500 ease-out
          ${isVisible ? "opacity-100" : "opacity-0"}
          ${!prefersReducedMotion && !isVisible ? "translate-y-2" : "translate-y-0"}
        `}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left column */}
          <div>
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <Shield className="h-3 w-3 text-white/70" />
              <span className="text-[11px] tracking-wider uppercase text-white/70">
                ENTERPRISE TRUST LAYER
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mt-4 leading-tight">
              Built for sponsor-constrained decisioning.
            </h2>

            {/* Subhead - tightened */}
            <p className="text-sm md:text-base text-white/65 mt-3 max-w-[42ch]">
              LumiqAI governs uncertainty before approval: stage + confidence, sponsor-aligned guardrails, and auditable decision trails.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {trustPills.map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1.5 rounded-full bg-black/30 border border-white/10 text-[12px] text-white/70"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Micro line */}
            <p className="text-xs text-white/45 mt-4">
              This is a control layer. Not an underwriting override.
            </p>
          </div>

          {/* Right column - Sponsor Governance Console */}
          <div
            className={`
              transition-all duration-500 ease-out
              ${isVisible ? "opacity-100" : "opacity-0"}
              ${!prefersReducedMotion && !isVisible ? "translate-y-2" : "translate-y-0"}
            `}
            style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}
          >
            <div className="relative rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Inner gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 p-5 md:p-6">
                {/* Title row */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold text-white/80">
                    Sponsor Governance Console
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
                    READY FOR REVIEW
                  </span>
                </div>

                {/* Subheader */}
                <p className="text-sm text-white/60 mb-4">
                  Click a tab to preview the artifacts procurement actually reviews.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        text-[11px] px-3 py-1.5 rounded-full border transition-all duration-200
                        ${
                          activeTab === tab.id
                            ? "bg-white/10 border-white/20 text-white"
                            : "bg-white/5 border-white/10 text-white/60 hover:bg-white/[0.08] hover:border-white/15"
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                <div
                  className={`
                    min-h-[280px] transition-all duration-[220ms] ease-out
                    ${!prefersReducedMotion ? "animate-fade-in" : ""}
                  `}
                  key={activeTab}
                >
                  {renderTabContent()}
                </div>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-5 border-t border-white/[0.08]">
                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="bg-white text-gray-900 hover:bg-white/90 px-5 py-2 text-sm font-semibold rounded-full"
                    >
                      <Link to="/request-pilot">Request a Pilot</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border border-white/20 text-white hover:bg-white/10 hover:text-white px-5 py-2 text-sm font-medium bg-transparent rounded-full"
                    >
                      <Link to="/docs">View Technical Docs</Link>
                    </Button>
                  </div>
                  <p className="text-xs text-white/45">
                    Typical integration: 1–2 weeks. No underwriting rewrite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-[1100px] mx-auto h-px bg-white/[0.08] mt-14" />
    </section>
  );
}
