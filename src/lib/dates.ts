export const PROGRAMME_START = new Date("2026-11-10T00:00:00");
export const PROGRAMME_END = new Date("2027-05-09T23:59:59");
export const TOTAL_DAYS = 180;

export function dayOfProgramme(now: Date = new Date()): number {
  const ms = now.getTime() - PROGRAMME_START.getTime();
  const days = Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(0, Math.min(TOTAL_DAYS, days));
}

export function currentWeek(now: Date = new Date()): number {
  const days = dayOfProgramme(now);
  if (days <= 0) return 0;
  if (days > TOTAL_DAYS) return 27;
  return Math.min(26, Math.ceil(days / 7));
}

export function countdownTo(target: Date | string, now: Date = new Date()) {
  const t = typeof target === "string" ? new Date(target) : target;
  const ms = t.getTime() - now.getTime();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds, done: false };
}

export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export function formatShort(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}