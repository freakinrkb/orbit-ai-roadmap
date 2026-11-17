"use client";
import { motion } from "motion/react";
import { phases } from "@/lib/roadmap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function PhaseOrbit() {
  const reduced = useReducedMotion();
  const n = phases.length;
  const radius = 46; // % of container
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" strokeDasharray="1 2" />
        <circle cx="50" cy="50" r="22" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
      </svg>
      {/* central orb */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 md:h-36 md:w-36 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, var(--accent), var(--violet) 60%, transparent 75%)",
          boxShadow: "0 0 80px var(--accent-glow), inset 0 0 40px rgba(255,255,255,0.15)",
        }}
        animate={reduced ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.3em] text-mist/70">
        SIGNAL
      </div>
      {/* orbiting nodes */}
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {phases.map((p, i) => {
          const angle = (i / n) * Math.PI * 2 - Math.PI / 2;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          return (
            <div
              key={p.id}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-hairline-strong bg-ink-2/80 backdrop-blur"
                whileHover={{ scale: 1.25 }}
              >
                <span className="font-mono text-[0.6rem] text-mist-dim group-hover:text-accent">{p.number}</span>
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[0.55rem] tracking-widest text-mist-faint opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.name.toUpperCase()}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}