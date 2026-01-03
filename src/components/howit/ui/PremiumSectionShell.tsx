import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface PremiumSectionShellProps {
  children: ReactNode;
  accent?: "blue" | "violet" | "amber";
  className?: string;
}

const accentColors = {
  blue: "rgba(120,190,255,0.10)",
  violet: "rgba(160,140,255,0.10)",
  amber: "rgba(255,210,120,0.10)",
};

export default function PremiumSectionShell({ 
  children, 
  accent = "blue",
  className = ""
}: PremiumSectionShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(to bottom, #0B1020, #070A12, #05060B)",
      }}
    >
      {/* Radial highlight at top */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(255,255,255,0.08), transparent 55%)",
        }}
      />

      {/* Accent glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% 20%, ${accentColors[accent]}, transparent 60%)`,
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Noise overlay (CSS simulated) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '14px 14px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  );
}
