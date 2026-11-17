import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GlassCard({ children, className, strong }: { children: ReactNode; className?: string; strong?: boolean }) {
  return <div className={cn(strong ? "glass-strong" : "glass", "p-6 md:p-8", className)}>{children}</div>;
}