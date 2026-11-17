"use client";
import { useEffect } from "react";

export function useInViewPhase() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-phase-section]");
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const p = e.target.getAttribute("data-phase-section");
            if (p) document.body.setAttribute("data-phase", p);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
}