import { careerMonths, jobRoles, careerHabits } from "@/lib/roadmap";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";
import { Stagger, StaggerItem } from "@/components/primitives/Stagger";

export function CareerRunway() {
  return (
    <div className="space-y-12">
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-hairline" />
        <div className="space-y-8">
          {careerMonths.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.06}>
              <div className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className="md:text-right">
                  <p className="eyebrow">{m.window}</p>
                  <h4 className="font-display text-2xl text-mist mt-1">{m.month}</h4>
                  <p className="body-sm text-accent mt-1">{m.focus}</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <GlassCard>
                    <ul className="space-y-1.5">
                      {m.actions.map((a) => (
                        <li key={a} className="body-sm text-mist-dim flex gap-2">
                          <span className="text-accent">›</span> {a}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
                <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_var(--accent-glow)]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow mb-4">ROLES TO TARGET</p>
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {jobRoles.map((r) => (
            <StaggerItem key={r.title}>
              <GlassCard className="h-full">
                <p className="font-display text-lg text-mist">{r.title}</p>
                <p className="body-sm text-mist-dim mt-1">{r.why}</p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div>
        <p className="eyebrow mb-4">THREE SMALL CAREER HABITS</p>
        <div className="grid gap-3">
          {careerHabits.map((h) => (
            <GlassCard key={h} className="py-4">
              <p className="body-sm text-mist-dim flex gap-2"><span className="text-accent">›</span> {h}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}