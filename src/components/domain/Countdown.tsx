"use client";
import { useEffect, useState } from "react";
import { countdownTo } from "@/lib/dates";

export function Countdown({ to, label }: { to: string; label?: string }) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });
  useEffect(() => {
    const update = () => setT(countdownTo(to));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [to]);
  if (t.done) return <span className="font-mono text-xs text-mist-dim">{label ?? "Reached"}</span>;
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-mist-dim">
      {label && <span className="text-mist-faint">{label}</span>}
      <span className="text-mist">{t.days}d</span>
      <span>{pad(t.hours)}h</span>
      <span>{pad(t.minutes)}m</span>
      <span>{pad(t.seconds)}s</span>
    </div>
  );
}