import { useEffect, useRef, useState } from "react";
import { Info } from "lucide-react";

// Upstream Impact tiles
interface UpstreamTile {
  label: string;
  value: string;
  subtext: string;
  sourcePill: string;
  tooltipPill: string;
}

const upstreamTiles: UpstreamTile[] = [
  {
    label: "ARR Potential",
    value: "$384M+",
    subtext: "Additional ARR potential",
    sourcePill: "Upstream",
    tooltipPill: "Before approval",
  },
  {
    label: "Conversion Lift",
    value: "47%",
    subtext: "Average conversion increase",
    sourcePill: "Stage Engine",
    tooltipPill: "Sponsor-safe gating",
  },
  {
    label: "Satisfaction",
    value: "90%",
    subtext: "Customer satisfaction boost",
    sourcePill: "Progress",
    tooltipPill: "No 'black box'",
  },
  {
    label: "Decision Confidence",
    value: "92%",
    subtext: "Sponsor-safe funnel accuracy",
    sourcePill: "Audit",
    tooltipPill: "Audit-aligned",
  },
];

// ROI tiles
interface ROITile {
  label: string;
  value: string;
  subtext: string;
  fillPercent: number;
  defaultLine: string;
  hoverLine: string;
  isMiddle?: boolean;
}

const roiTiles: ROITile[] = [
  {
    label: "Year-1 ROI",
    value: "580%",
    subtext: "ROI in first year",
    fillPercent: 85,
    defaultLine: "Driven by higher approvals + retention.",
    hoverLine: "Stays sponsor-aligned—no override.",
  },
  {
    label: "Revenue / 10K MAU",
    value: "$2.4M",
    subtext: "Additional revenue per 10K MAU",
    fillPercent: 70,
    defaultLine: "Monetization happens before approval.",
    hoverLine: "Pipeline converts 'decline' to progression.",
    isMiddle: true,
  },
  {
    label: "Time to Break-Even",
    value: "4 weeks",
    subtext: "Time to break even",
    fillPercent: 60,
    defaultLine: "Shortens due to visible progress.",
    hoverLine: "Less churn + faster repeat attempts.",
  },
];

function BarTicks({ isHovered }: { isHovered: boolean }) {
  const heights = [6, 10, 8, 14, 9, 12, 7, 15, 10, 8, 13, 11];
  return (
    <div className="mt-4 flex items-end gap-1 h-10 opacity-80">
      {heights.map((h, i) => (
        <div
          key={i}
          className={`
            w-[6px] rounded-full transition-colors duration-200
            ${isHovered ? "bg-white/30" : "bg-white/[0.18]"}
          `}
          style={{ height: `${h * 2.5}px` }}
        />
      ))}
    </div>
  );
}

function MeterStrip({ fillPercent, isHovered }: { fillPercent: number; isHovered: boolean }) {
  return (
    <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
      <div
        className={`
          h-full rounded-full transition-all duration-300
          ${isHovered ? "bg-white/35" : "bg-white/25"}
        `}
        style={{ width: `${fillPercent}%` }}
      />
    </div>
  );
}

function UpstreamKPITile({ tile, index, isVisible }: { tile: UpstreamTile; index: number; isVisible: boolean }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`
        group relative rounded-2xl border border-white/10 bg-black/45 p-5 overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-white/[0.18] hover:bg-black/55
        focus-within:outline focus-within:outline-1 focus-within:outline-white/25
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${!prefersReducedMotion && !isVisible ? "translate-y-2" : "translate-y-0"}
      `}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : "0ms" }}
      tabIndex={0}
    >
      {/* Corner blob */}
      <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-white/[0.06] blur-2xl opacity-70 pointer-events-none" />
      {/* Bottom inner line */}
      <div className="absolute inset-x-6 bottom-0 h-px bg-white/10 pointer-events-none" />

      {/* Tooltip pill - appears on hover */}
      <div
        className="
          absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full
          bg-white/[0.08] border border-white/10 text-white/70
          opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-200
        "
      >
        {tile.tooltipPill}
      </div>

      {/* Top row: label + source pill */}
      <div className="flex items-center justify-between relative z-10">
        <span className="text-[10px] uppercase tracking-wider text-white/60">
          {tile.label}
        </span>
        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-white/55">
          {tile.sourcePill}
        </span>
      </div>

      {/* Value */}
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2 relative z-10">
        {tile.value}
      </div>

      {/* Subtext */}
      <div className="text-xs text-white/70 mt-1.5 relative z-10">{tile.subtext}</div>

      {/* Bar ticks */}
      <BarTicks isHovered={false} />
    </div>
  );
}

function ROIKPITile({ tile, index, isVisible }: { tile: ROITile; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className={`
        group relative rounded-2xl border bg-black/45 p-5 overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-white/[0.18] hover:bg-black/55
        focus-within:outline focus-within:outline-1 focus-within:outline-white/25
        ${tile.isMiddle ? "border-white/[0.16]" : "border-white/10"}
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${!prefersReducedMotion && !isVisible ? "translate-y-2" : "translate-y-0"}
      `}
      style={{ transitionDelay: isVisible ? `${(index + 4) * 70}ms` : "0ms" }}
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* Corner blob */}
      <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-white/[0.06] blur-2xl opacity-70 pointer-events-none" />
      {/* Bottom inner line */}
      <div className="absolute inset-x-6 bottom-0 h-px bg-white/10 pointer-events-none" />

      {/* Middle tile badge */}
      {tile.isMiddle && (
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <span className="text-[9px] px-2 py-0.5 rounded-b-lg bg-white/[0.08] border-x border-b border-white/10 text-white/55">
            Most common outcome
          </span>
        </div>
      )}

      {/* Label */}
      <div className={`relative z-10 ${tile.isMiddle ? "mt-3" : ""}`}>
        <span className="text-[10px] uppercase tracking-wider text-white/60">
          {tile.label}
        </span>
      </div>

      {/* Value */}
      <div className="text-3xl md:text-4xl font-semibold tracking-tight text-white mt-2 relative z-10">
        {tile.value}
      </div>

      {/* Subtext */}
      <div className="text-xs text-white/70 mt-1.5 relative z-10">{tile.subtext}</div>

      {/* Meter strip */}
      <MeterStrip fillPercent={tile.fillPercent} isHovered={isHovered} />

      {/* Details on hover */}
      <div className="mt-3 relative z-10">
        <p className="text-[11px] text-white/55">{tile.defaultLine}</p>
        <p
          className={`
            text-[11px] text-white/55 mt-1 transition-opacity duration-200
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
        >
          {tile.hoverLine}
        </p>
      </div>
    </div>
  );
}

export default function CombinedMarketImpactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showMethod, setShowMethod] = useState(false);

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`
        max-w-[1100px] mx-auto
        transition-all duration-500 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}
        ${!prefersReducedMotion && !isVisible ? "translate-y-2.5" : "translate-y-0"}
      `}
    >
      {/* Single Card container */}
      <div className="relative rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md shadow-2xl p-6 md:p-8 overflow-hidden">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] tracking-wider uppercase text-white/55">
                    UPSTREAM IMPACT
                  </span>
                </div>
                <span className="text-white/30">+</span>
                <div className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[10px] tracking-wider uppercase text-white/55">
                    POLICY-ALIGNED ROI
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mt-3">
                Combined Fintech Market Impact
              </h3>

              {/* Subhead */}
              <p className="text-sm text-white/65 mt-2 max-w-[60ch]">
                Lift generated before approval through readiness + staged exposure. ROI compounds when 'not yet' becomes guided progression.
              </p>
            </div>

            {/* Info toggle + Directional badge */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/55">
                DIRECTIONAL
              </span>
              <button
                onClick={() => setShowMethod(!showMethod)}
                className="
                  flex items-center gap-1.5 px-2.5 py-1 rounded-full
                  bg-white/5 border border-white/10 text-[11px] text-white/60
                  hover:border-white/[0.18] hover:text-white/70 transition-all duration-200
                  focus:outline focus:outline-1 focus:outline-white/20
                "
              >
                <Info className="h-3 w-3" />
                Method
              </button>
            </div>
          </div>

          {/* Method tooltip */}
          {showMethod && (
            <div className="mb-6 rounded-2xl bg-black/40 border border-white/10 p-4">
              <p className="text-[11px] text-white/60 leading-relaxed">
                Directional estimates based on observed funnel mechanics. Actual lift varies by sponsor policy + platform mix.
              </p>
            </div>
          )}

          {/* SECTION 1: Upstream Impact KPIs */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-wider text-white/40 px-2">Market Impact</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {upstreamTiles.map((tile, index) => (
                <UpstreamKPITile key={tile.label} tile={tile} index={index} isVisible={isVisible} />
              ))}
            </div>
            <p className="text-[11px] text-white/45 mt-4 text-center">
              Generated by turning declines into staged progression pipelines—not relaxed policy.
            </p>
          </div>

          {/* SECTION 2: ROI KPIs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-wider text-white/40 px-2">Typical ROI</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {roiTiles.map((tile, index) => (
                <ROIKPITile key={tile.label} tile={tile} index={index} isVisible={isVisible} />
              ))}
            </div>
            <p className="text-[11px] text-white/45 mt-4 text-center">
              Estimates are directional and depend on sponsor policy + platform mix.
            </p>
          </div>
        </div>
      </div>

      {/* Final micro CTA */}
      <p className="text-[14px] font-semibold text-white/[0.65] mt-6 text-center">
        Approve less by luck. Approve more by design.
      </p>
    </div>
  );
}
