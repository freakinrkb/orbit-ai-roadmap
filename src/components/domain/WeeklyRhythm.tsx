import { weeklyRhythm } from "@/lib/roadmap";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";

export function WeeklyRhythm() {
  return (
    <div className="grid gap-2">
      {weeklyRhythm.map((d, i) => (
        <Reveal key={d.day} delay={i * 0.05}>
          <GlassCard className="flex items-center justify-between gap-4 py-4">
            <span className="font-mono text-sm text-accent w-24">{d.day.toUpperCase()}</span>
            <span className="body text-mist flex-1">{d.activity}</span>
            <span className="font-mono text-xs text-mist-dim">{d.time}</span>
          </GlassCard>
        </Reveal>
      ))}
    </div>
  );
}