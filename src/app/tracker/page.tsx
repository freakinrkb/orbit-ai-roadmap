import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";
import { StudyRitual } from "@/components/domain/StudyRitual";
import { WeeklyRhythm } from "@/components/domain/WeeklyRhythm";
import { CompetencyTracker } from "@/components/domain/CompetencyTracker";
import { fiveQuestions, ragExampleQuestions } from "@/lib/roadmap";

export const metadata = {
  title: "Tracker · ORBIT",
  description: "Study method, weekly rhythm, five-question test and 12-competency progress tracker.",
};

export default function TrackerPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Study method"
            title="The 90-minute learning method"
            description="Learn 20 · Understand 20 · Implement 40 · Recall 10. On a busy day, do 30–45 minutes of revision and don't compensate by sacrificing other preparation."
          />
          <StudyRitual />
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x">
          <SectionHeading eyebrow="Weekly rhythm" title="Your week at a glance" />
          <WeeklyRhythm />
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading eyebrow="Understanding test" title="Five questions for every topic" />
            <ul className="space-y-2">
              {fiveQuestions.map((q, i) => (
                <Reveal key={q}>
                  <li className="body text-mist-dim flex gap-3">
                    <span className="font-mono text-accent shrink-0">0{i + 1}</span> {q}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Example · RAG" title="If you cannot answer these, don't rush on" />
            <GlassCard>
              <ul className="space-y-2">
                {ragExampleQuestions.map((q) => (
                  <li key={q} className="body-sm text-mist-dim flex gap-2"><span className="text-accent">›</span> {q}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x">
          <SectionHeading
            eyebrow="Competency tracker"
            title="0/12 completed"
            description="Judge progress by what you can independently build and explain. Persisted in your browser."
          />
          <CompetencyTracker />
        </div>
      </section>
    </div>
  );
}