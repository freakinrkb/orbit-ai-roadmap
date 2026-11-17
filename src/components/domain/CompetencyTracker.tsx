"use client";
import { useCallback, useState } from "react";
import { competencies } from "@/lib/roadmap";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProgressRing } from "@/components/primitives/ProgressRing";
import { Reveal } from "@/components/primitives/Reveal";
import { Check, Copy, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";

export function CompetencyTracker() {
  const { value: checked, setValue: setChecked, reset } = useLocalStorage<Record<string, boolean>>("orbit:competencies", {});
  const [copied, setCopied] = useState(false);

  const completed = competencies.filter((c) => checked[c.id]).length;

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const copySummary = useCallback(async () => {
    const lines = ["# ORBIT · Competency tracker", "", `Progress: ${completed}/${competencies.length}`, ""];
    competencies.forEach((c) => {
      lines.push(`- [${checked[c.id] ? "x" : " "}] ${c.title} — ${c.description}`);
    });
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }, [checked, completed]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <ProgressRing value={completed} max={competencies.length} size={150} label="COMPLETE" />
        <div className="flex-1">
          <p className="eyebrow mb-2">PROGRESS</p>
          <p className="display-m text-mist">{completed} of {competencies.length}</p>
          <p className="body text-mist-dim mt-2">Your actual completion should be supported by working code and demonstrations, not just reading.</p>
          <div className="flex gap-3 mt-4">
            <button onClick={copySummary} className="btn text-xs">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy checklist"}
            </button>
            <button onClick={reset} className="btn text-xs">
              <RotateCcw className="h-4 w-4" /> Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {competencies.map((c, i) => {
          const isOn = !!checked[c.id];
          return (
            <Reveal key={c.id} delay={i * 0.03}>
              <button
                onClick={() => toggle(c.id)}
                className={cn(
                  "w-full text-left glass p-4 transition-all hover:border-accent/40",
                  isOn && "border-accent/60 bg-accent/5"
                )}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors",
                      isOn ? "border-accent bg-accent text-ink" : "border-hairline-strong text-transparent"
                    )}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className={cn("font-display text-lg", isOn ? "text-mist" : "text-mist-dim")}>{c.title}</p>
                    <p className="body-sm text-mist-faint">{c.description}</p>
                  </div>
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}