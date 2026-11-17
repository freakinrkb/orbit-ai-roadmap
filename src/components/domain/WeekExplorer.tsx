"use client";
import { useMemo, useState } from "react";
import { phases } from "@/lib/roadmap";
import { useCurrentWeek } from "@/hooks/useCurrentWeek";
import { Accordion } from "@/components/primitives/Accordion";
import { Chip } from "@/components/primitives/Chip";
import { cn } from "@/lib/cn";

export function WeekExplorer() {
  const { week: currentWeek } = useCurrentWeek();
  const [phaseFilter, setPhaseFilter] = useState<string>("all");
  const [query, setQuery] = useState("");

  const filteredWeeks = useMemo(() => {
    const out: { phase: string; week: (typeof phases)[0]["weeksList"][0] }[] = [];
    phases.forEach((ph) => {
      if (phaseFilter !== "all" && ph.id !== phaseFilter) return;
      ph.weeksList.forEach((w) => {
        const haystack = [w.title, ...w.topics, w.output].join(" ").toLowerCase();
        if (query && !haystack.includes(query.toLowerCase())) return;
        out.push({ phase: ph.name, week: w });
      });
    });
    return out;
  }, [phaseFilter, query]);

  const items = filteredWeeks.map(({ phase, week: w }) => ({
    id: `w${w.number}`,
    trigger: (
      <span className="flex items-center gap-3 flex-wrap">
        <span className="font-mono text-xs text-accent">WEEK {w.number}</span>
        <span>{w.title}</span>
        {currentWeek === w.number && <Chip tone="teal">YOU ARE HERE</Chip>}
        <span className="ml-auto hidden md:inline text-xs text-mist-faint font-mono">{phase}</span>
      </span>
    ),
    content: (
      <div className="space-y-3">
        <p className="body-sm text-mist-dim">
          <span className="text-mist-faint font-mono text-xs">OUTPUT · </span>
          {w.output}
        </p>
        <ul className="space-y-1.5">
          {w.topics.map((t) => (
            <li key={t} className="body-sm text-mist-dim flex gap-2">
              <span className="text-accent">›</span> {t}
            </li>
          ))}
        </ul>
        {w.links.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {w.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.65rem] text-mist-faint hover:text-accent underline-offset-2 hover:underline">
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    ),
  }));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setPhaseFilter("all")}
            className={cn("px-3 py-1.5 rounded-full text-xs font-mono border", phaseFilter === "all" ? "border-accent text-accent" : "border-hairline text-mist-dim hover:text-mist")}
          >
            ALL
          </button>
          {phases.map((ph) => (
            <button
              key={ph.id}
              onClick={() => setPhaseFilter(ph.id)}
              className={cn("px-3 py-1.5 rounded-full text-xs font-mono border", phaseFilter === ph.id ? "border-accent text-accent" : "border-hairline text-mist-dim hover:text-mist")}
            >
              {ph.number} {ph.name.toUpperCase()}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search topics…"
          className="glass px-4 py-2 text-sm text-mist placeholder:text-mist-faint outline-none focus:border-accent w-full md:w-64"
        />
      </div>
      {items.length === 0 ? (
        <p className="text-mist-dim body-sm">No weeks match your filter.</p>
      ) : (
        <Accordion items={items} />
      )}
    </div>
  );
}