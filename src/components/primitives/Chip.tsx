import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Chip({ children, className, tone = "default" }: { children: ReactNode; className?: string; tone?: "default" | "teal" | "violet" | "amber" | "ember" }) {
  const tones: Record<string, string> = {
    default: "border-hairline text-mist-dim",
    teal: "border-teal/30 text-teal",
    violet: "border-violet/30 text-violet",
    amber: "border-amber/30 text-amber",
    ember: "border-ember/30 text-ember",
  };
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono tracking-wide", tones[tone], className)}>
      {children}
    </span>
  );
}