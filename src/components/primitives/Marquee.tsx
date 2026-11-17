import { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {children}
        {children}
      </div>
    </div>
  );
}