"use client";
import { useEffect, useState } from "react";
import { dayOfProgramme, PROGRAMME_END } from "@/lib/dates";

export function DayCounter() {
  const [day, setDay] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const update = () => {
      setDay(dayOfProgramme());
      setDone(new Date() > PROGRAMME_END);
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  if (done) return <span className="font-mono text-xs tracking-widest text-mist-dim">ORBIT COMPLETE</span>;
  if (day <= 0) return <span className="font-mono text-xs tracking-widest text-mist-dim">ORBIT NOT YET BEGUN</span>;
  return (
    <span className="font-mono text-xs tracking-widest text-mist-dim">
      DAY <span className="text-accent">{day}</span> / 180
    </span>
  );
}