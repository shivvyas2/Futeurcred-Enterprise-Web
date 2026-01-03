import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: "blue" | "violet" | "amber" | "none";
  hasWindowBar?: boolean;
  windowLabel?: string;
}

const accentGradients = {
  blue: "from-blue-400/40 via-cyan-300/25 to-transparent",
  violet: "from-violet-400/40 via-purple-300/25 to-transparent",
  amber: "from-amber-400/40 via-orange-300/25 to-transparent",
  none: "",
};

export default function GlassCard({ 
  children, 
  className = "",
  accentColor = "none",
  hasWindowBar = false,
  windowLabel,
}: GlassCardProps) {
  return (
    <Card className={cn(
      "relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_70px_rgba(0,0,0,0.45)] overflow-hidden",
      className
    )}>
      {/* Top accent strip */}
      {accentColor !== "none" && (
        <div className={cn(
          "absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r",
          accentGradients[accentColor]
        )} />
      )}

      {/* Window bar */}
      {hasWindowBar && (
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          {windowLabel && (
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
              {windowLabel}
            </span>
          )}
        </div>
      )}

      {children}
    </Card>
  );
}
