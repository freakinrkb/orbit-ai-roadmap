import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Reveal } from "@/components/primitives/Reveal";
import { ProjectDossier } from "@/components/domain/ProjectDossier";
import { projects, portfolioRules, portfolioRuleNote } from "@/lib/roadmap";
import { Chip } from "@/components/primitives/Chip";

export const metadata = {
  title: "Projects · ORBIT",
  description: "The three portfolio projects of the applied AI programme.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Portfolio"
            title="Three projects. No half-finished platforms."
            description="At this time budget, three projects are enough. A small, well-engineered RAG system beats an unfinished enterprise platform."
          />
          <div className="space-y-8">
            {projects.map((p) => (
              <ProjectDossier key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading
              eyebrow="Portfolio rules"
              title="What makes a project count"
            />
            <ul className="space-y-2">
              {portfolioRules.map((r) => (
                <Reveal key={r}>
                  <li className="body text-mist-dim flex gap-2"><span className="text-accent">›</span> {r}</li>
                </Reveal>
              ))}
            </ul>
            <p className="body-sm text-mist-faint mt-6">{portfolioRuleNote}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Deliverables" title="Every project ships with" />
            <div className="flex flex-wrap gap-2">
              {["Working demo", "Architecture diagram", "README", "Testing instructions", "Trade-off notes", "Evaluation results"].map((d) => (
                <Chip key={d} tone="teal">{d}</Chip>
              ))}
            </div>
            <GlassCard className="mt-6">
              <p className="eyebrow mb-2">A useful portfolio rule</p>
              <p className="body text-mist-dim">
                Every project must have a working demo, architecture diagram, README, testing instructions and a clear
                explanation of engineering trade-offs. A beautiful UI alone is not evidence of AI engineering ability.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}