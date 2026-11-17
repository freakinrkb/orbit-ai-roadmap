"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function OrbitalRings() {
  const reduced = useReducedMotion();
  return (
    <div className="orbital-rings" aria-hidden>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <g className={reduced ? "" : "ring-slow"}>
          <circle className="ring" cx="500" cy="500" r="420" />
          <circle className="ring" cx="500" cy="500" r="300" strokeDasharray="2 6" />
          <circle className="ring" cx="500" cy="500" r="180" />
        </g>
        <g className={reduced ? "" : "ring-rev"}>
          <ellipse className="ring" cx="500" cy="500" rx="460" ry="260" />
          <ellipse className="ring" cx="500" cy="500" rx="320" ry="180" />
        </g>
      </svg>
    </div>
  );
}