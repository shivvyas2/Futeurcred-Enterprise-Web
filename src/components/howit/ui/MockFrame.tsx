import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MockFrameProps {
  children?: ReactNode;
  label?: string;
  className?: string;
  hasShimmer?: boolean;
  shouldReduceMotion?: boolean | null;
}

export default function MockFrame({ 
  children,
  label,
  className = "",
  hasShimmer = false,
  shouldReduceMotion = false,
}: MockFrameProps) {
  return (
    <div className={cn(
      "relative rounded-2xl border border-white/[0.08] bg-black/60 overflow-hidden",
      className
    )}>
      {/* Shimmer sweep */}
      {hasShimmer && !shouldReduceMotion && (
        <div 
          className="absolute inset-y-0 -left-[30%] w-[30%] bg-gradient-to-r from-transparent via-white/8 to-transparent blur-sm opacity-60 z-10"
          style={{
            animation: 'mockShimmer 12s linear infinite',
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-0">
        {children}
      </div>

      {/* Center label overlay */}
      {label && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <span className="text-[12px] text-white/40 bg-black/70 px-4 py-2 rounded-lg text-center">
            {label}
          </span>
        </div>
      )}

      <style>{`
        @keyframes mockShimmer {
          0% { transform: translateX(0); }
          100% { transform: translateX(600%); }
        }
      `}</style>
    </div>
  );
}
