"use client";
import { useEffect, useState } from "react";
import { currentWeek, dayOfProgramme } from "@/lib/dates";

export function useCurrentWeek() {
  const [week, setWeek] = useState(() => (typeof window === "undefined" ? 0 : currentWeek()));
  const [day, setDay] = useState(() => (typeof window === "undefined" ? 0 : dayOfProgramme()));
  useEffect(() => {
    const update = () => { setWeek(currentWeek()); setDay(dayOfProgramme()); };
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);
  return { week, day };
}