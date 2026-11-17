"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { phases } from "@/lib/roadmap";
import { formatDate } from "@/lib/dates";
import { cn } from "@/lib/cn";
import { useInViewPhase } from "@/hooks/useInViewPhase";

export function PhaseTimeline() {
  useInViewPhase();
  const [active, setActive] = useState(0);
  const p = phases[active];
  return (
    <section data-phase-section={String(active)} className="section">
      <div className="container-x">
        {/* timeline track */}
        <div className="relative">
          <div className="absolute top-6 left-0 right-0 h-px bg-hairline" />
          <div className="flex gap-2 overflow-x-auto pb-4 snap-x">
            {phases.map((ph, i) => (
              <button
                key={ph.id}
                onClick={() => setActive(i)}
                data-phase-section={String(i)}
                className={cn(
                  "group relative snap-start shrink-0 flex flex-col items-center gap-3 px-3 py-2 min-w-[120px]",
                )}
              >
                <span
                  className={cn(
                    "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border transition-all",
                    i === active
                      ? "border-accent bg-accent text-ink shadow-[0_0_30px_var(--accent-glow)]"
                      : "border-hairline-strong bg-ink-2 text-mist-dim hover:border-accent/50"
                  )}
                >
                  <span className="font-mono text-sm">{ph.number}</span>
                </span>
                <span className={cn("text-xs font-mono tracking-wider", i === active ? "text-mist" : "text-mist-faint")}>
                  {ph.name.toUpperCase()}
                </span>
                <span className="text-[0.65rem] text-mist-faint">{formatDate(ph.start)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 glass-strong p-6 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <p className="eyebrow mb-2">PHASE {p.number} · {p.weeks}</p>
                <h3 className="display-m text-mist">{p.name}</h3>
                <p className="body text-mist-dim mt-2">{p.goal}</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <div className="glass px-4 py-2 text-center">
                  <p className="font-mono text-[0.6rem] text-mist-faint">HOURS/WK</p>
                  <p className="font-display text-lg text-mist">{p.hoursPerWeek}</p>
                </div>
                <div className="glass px-4 py-2 text-center">
                  <p className="font-mono text-[0.6rem] text-mist-faint">WINDOW</p>
                  <p className="font-display text-lg text-mist">{formatDate(p.start)} → {formatDate(p.end)}</p>
                </div>
              </div>
            </div>
            <p className="body text-mist-dim mb-6 max-w-3xl">{p.summary}</p>
            {p.deliverable && (
              <div className="glass p-4 mb-6 border-l-2 border-accent">
                <p className="eyebrow mb-1">DELIVERABLE</p>
                <p className="body-sm text-mist">{p.deliverable}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {p.weeksList.map((w) => (
                <div key={w.number} className="glass p-4">
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-accent">WEEK {w.number}</span>
                    <span className="text-xs text-mist-faint text-right">{w.output}</span>
                  </div>
                  <p className="font-display text-lg text-mist mb-2">{w.title}</p>
                  <ul className="space-y-1">
                    {w.topics.map((t) => (
                      <li key={t} className="body-sm text-mist-dim flex gap-2">
                        <span className="text-accent">›</span> {t}
                      </li>
                    ))}
                  </ul>
                  {w.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {w.links.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.65rem] text-mist-faint hover:text-accent underline-offset-2 hover:underline">
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}