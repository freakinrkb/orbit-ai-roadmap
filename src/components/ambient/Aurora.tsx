"use client";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Aurora() {
  const reduced = useReducedMotion();
  return <div className={`aurora ${reduced ? "opacity-60" : ""}`} aria-hidden />;
}