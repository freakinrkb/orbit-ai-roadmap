"use client";
import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ProgressRing({ value, max = 12, size = 120, label }: { value: number; max?: number; size?: number; label?: string }) {
  const reduced = useReducedMotion();
  const r = (size - 12) / 2;
  const c = 2 * Math.PI * r;
  const pct = max === 0 ? 0 : value / max;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          stroke="var(--accent)" strokeWidth="6" fill="none" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - pct) }}
          transition={{ duration: reduced ? 0 : 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-3xl text-mist">{value}</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-mist-dim">/ {max}</span>
        {label && <span className="font-mono text-[0.6rem] text-mist-faint mt-1">{label}</span>}
      </div>
    </div>
  );
}