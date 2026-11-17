"use client";
import { studyBlocks } from "@/lib/roadmap";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";

export function StudyRitual() {
  const colors = ["var(--teal)", "var(--violet)", "var(--amber)", "var(--rose)"];
  // cumulative arc lengths for 20,20,40,10 minutes out of 90
  const segments = [20, 20, 40, 10];
  const total = 90;
  let acc = 0;
  const arcs = segments.map((s, i) => {
    const start = acc / total;
    acc += s;
    const end = acc / total;
    return { start, end, color: colors[i], label: studyBlocks[i] };
  });
  const R = 70;
  const C = 2 * Math.PI * R;
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-80 md:h-80">
          <circle cx="100" cy="100" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="14" />
          {arcs.map((a, i) => {
            const len = (a.end - a.start) * C;
            const offset = a.start * C;
            return (
              <circle
                key={i}
                cx="100" cy="100" r={R}
                fill="none"
                stroke={a.color}
                strokeWidth="14"
                strokeDasharray={`${len} ${C - len}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
                style={{ filter: "drop-shadow(0 0 6px currentColor)" }}
              />
            );
          })}
          <text x="100" y="96" textAnchor="middle" className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: 26, fill: "var(--mist)" }}>90</text>
          <text x="100" y="116" textAnchor="middle" style={{ fontFamily: "var(--font-mono)", fontSize: 9, fill: "var(--mist-dim)", letterSpacing: 2 }}>MINUTES</text>
        </svg>
      </div>
      <div className="space-y-3">
        {studyBlocks.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08}>
            <GlassCard className="flex gap-4 items-start">
              <span className="font-mono text-sm text-accent shrink-0 w-12">{b.minutes}</span>
              <div>
                <p className="font-display text-xl text-mist">{b.title}</p>
                <p className="body-sm text-mist-dim">{b.body}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}