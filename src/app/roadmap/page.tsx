import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";
import { Countdown } from "@/components/domain/Countdown";
import { PhaseTimeline } from "@/components/domain/PhaseTimeline";
import { WeekExplorer } from "@/components/domain/WeekExplorer";
import { milestones } from "@/lib/roadmap";
import { formatDate } from "@/lib/dates";

export const metadata = {
  title: "Orbit · Roadmap",
  description: "The full 26-week applied AI engineering syllabus: 7 phases, 25 numbered weeks, milestones.",
};

export default function RoadmapPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="The orbit"
            title="Seven phases. Twenty-five weeks. One assessment at a time."
            description="Phase 0 stays light for your December 6 Infosys assessment. After that, the proper programme begins. Click any phase to expand its weeks."
          />
          {/* calendar table */}
          <Reveal>
            <GlassCard className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="py-2 pr-4 font-mono text-xs text-mist-faint">PHASE</th>
                    <th className="py-2 pr-4 font-mono text-xs text-mist-faint">DATES</th>
                    <th className="py-2 pr-4 font-mono text-xs text-mist-faint">LOAD</th>
                    <th className="py-2 font-mono text-xs text-mist-faint">FOCUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { n: "0", d: "Nov 10 – Dec 6", l: "4–5 h/week", f: "Light foundation" },
                    { n: "1", d: "Dec 7 – Jan 3", l: "7–9 h/week", f: "LLM engineering" },
                    { n: "2", d: "Jan 4 – Jan 31", l: "7–9 h/week", f: "RAG engineering" },
                    { n: "3", d: "Feb 1 – Feb 28", l: "7–9 h/week", f: "Agent engineering" },
                    { n: "4", d: "Mar 1 – Mar 28", l: "7–9 h/week", f: "MCP & automation" },
                    { n: "5", d: "Mar 29 – Apr 25", l: "7–9 h/week", f: "Production engineering" },
                    { n: "6", d: "Apr 26 – May 9", l: "7–9 h/week", f: "Career sprint" },
                  ].map((r) => (
                    <tr key={r.n} className="border-t border-hairline">
                      <td className="py-2 pr-4 font-mono text-accent">0{r.n}</td>
                      <td className="py-2 pr-4 text-mist-dim">{r.d}</td>
                      <td className="py-2 pr-4 text-mist-dim">{r.l}</td>
                      <td className="py-2 text-mist">{r.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <PhaseTimeline />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Week-by-week syllabus"
            title="The master plan"
            description="Each week has a defined scope, practical output and completion condition. Filter by phase or search topics."
          />
          <WeekExplorer />
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x">
          <SectionHeading
            eyebrow="Milestones"
            title="Countdowns"
            description="Live countdowns to each phase boundary."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {milestones.map((m) => (
              <Reveal key={m.id}>
                <GlassCard className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-display text-lg text-mist">{m.label}</p>
                    <p className="font-mono text-xs text-mist-faint">{formatDate(m.date)}</p>
                  </div>
                  <Countdown to={m.date} />
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}