"use client";
import { useState } from "react";
import { resources, Resource } from "@/lib/roadmap";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/primitives/Reveal";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Chip } from "@/components/primitives/Chip";

const tierLabel: Record<string, string> = { A: "Primary curriculum", B: "Technical reference", C: "Research & engineering" };
const tierDesc: Record<string, string> = {
  A: "Form the backbone of your learning.",
  B: "Consult when you implement something.",
  C: "Read selectively, when the topic appears in your syllabus.",
};

export function ResourceList() {
  const [tier, setTier] = useState<"A" | "B" | "C">("A");
  const [area, setArea] = useState<string>("all");
  const filtered = resources.filter((r) => r.tier === tier && (area === "all" || r.area === area));
  const areas = Array.from(new Set(resources.filter((r) => r.tier === tier).map((r) => r.area)));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {(["A", "B", "C"] as const).map((t) => (
          <button
            key={t}
            onClick={() => { setTier(t); setArea("all"); }}
            className={cn(
              "px-4 py-2 rounded-full text-xs font-mono border transition-colors",
              tier === t ? "border-accent text-accent bg-accent/10" : "border-hairline text-mist-dim hover:text-mist"
            )}
          >
            LEVEL {t} · {tierLabel[t].toUpperCase()}
          </button>
        ))}
      </div>
      <p className="body-sm text-mist-dim">{tierDesc[tier]}</p>
      {tier === "B" && (
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setArea("all")} className={cn("px-3 py-1 rounded-full text-[0.65rem] font-mono border", area === "all" ? "border-accent text-accent" : "border-hairline text-mist-faint")}>ALL</button>
          {areas.map((a) => (
            <button key={a} onClick={() => setArea(a)} className={cn("px-3 py-1 rounded-full text-[0.65rem] font-mono border", area === a ? "border-accent text-accent" : "border-hairline text-mist-faint")}>{a.toUpperCase()}</button>
          ))}
        </div>
      )}
      <div className={cn("grid gap-4", tier === "B" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1")}>
        {filtered.map((r: Resource) => (
          <Reveal key={r.id}>
            <GlassCard className="h-full">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-display text-xl text-mist">{r.title}</h4>
                <Chip tone="default">{r.area}</Chip>
              </div>
              <p className="body-sm text-mist-dim mb-3">{r.note}</p>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:underline underline-offset-2">
                Open resource ↗
              </a>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}