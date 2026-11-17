import { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow, title, description, align = "left", className,
}: { eyebrow?: string; title: ReactNode; description?: ReactNode; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto max-w-3xl", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="display-l text-mist">{title}</h2>
      {description && <p className="body-lg text-mist-dim mt-5 max-w-2xl">{description}</p>}
    </div>
  );
}