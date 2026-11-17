import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function GradientText({ children, className, warm }: { children: ReactNode; className?: string; warm?: boolean }) {
  return <span className={cn(warm ? "gradient-text-warm" : "gradient-text", className)}>{children}</span>;
}