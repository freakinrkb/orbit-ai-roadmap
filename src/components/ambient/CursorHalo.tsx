"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorHalo() {
  const reduced = useReducedMotion();
  const fine = useMediaQuery("(pointer: fine)");
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced || !fine) return;
    const move = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseleave", leave); };
  }, [reduced, fine]);

  if (reduced || !fine) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[60] transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_70%)] blur-2xl" />
    </div>
  );
}