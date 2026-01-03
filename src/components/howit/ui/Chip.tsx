import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "accent" | "muted";
  className?: string;
  icon?: ReactNode;
}

const variantStyles = {
  default: "bg-white/[0.04] border-white/10 text-white/70",
  accent: "bg-white/[0.08] border-white/15 text-white/90",
  muted: "bg-white/[0.02] border-white/8 text-white/50",
};

export default function Chip({ 
  children, 
  variant = "default",
  className = "",
  icon,
}: ChipProps) {
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
      variantStyles[variant],
      className
    )}>
      {icon}
      {children}
    </span>
  );
}
