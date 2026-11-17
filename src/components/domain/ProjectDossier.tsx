"use client";
import { Project } from "@/lib/roadmap";
import { TiltCard } from "@/components/primitives/TiltCard";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Chip } from "@/components/primitives/Chip";
import { Reveal } from "@/components/primitives/Reveal";

export function ProjectDossier({ project }: { project: Project }) {
  return (
    <Reveal>
      <TiltCard>
        <GlassCard className="h-full" strong>
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <p className="eyebrow">PROJECT 0{project.index} · {project.window}</p>
              <h3 className="display-m text-mist mt-2">{project.title}</h3>
            </div>
            <span className="font-mono text-4xl text-mist-faint/30">0{project.index}</span>
          </div>
          <p className="body text-mist-dim mb-6">{project.problem}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="eyebrow mb-3">WHAT YOU BUILD</p>
              <ul className="space-y-1.5">
                {project.build.map((b) => (
                  <li key={b} className="body-sm text-mist-dim flex gap-2">
                    <span className="text-accent">›</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <p className="eyebrow mb-2">DEMONSTRATES</p>
                <div className="flex flex-wrap gap-2">
                  {project.demonstrates.map((d) => <Chip key={d} tone="teal">{d}</Chip>)}
                </div>
              </div>
              <div>
                <p className="eyebrow mb-1">TIME BUDGET</p>
                <p className="body-sm text-mist">{project.timeBudget}</p>
              </div>
              <div>
                <p className="eyebrow mb-1">COMPLETION CONDITION</p>
                <p className="body-sm text-mist-dim">{project.completion}</p>
              </div>
              {project.stretch && project.stretch.length > 0 && (
                <div>
                  <p className="eyebrow mb-1">STRETCH (IF TIME PERMITS)</p>
                  <p className="body-sm text-mist-faint">{project.stretch.join(" · ")}</p>
                </div>
              )}
            </div>
          </div>
        </GlassCard>
      </TiltCard>
    </Reveal>
  );
}