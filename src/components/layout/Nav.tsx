"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Orbit } from "lucide-react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/primitives/Button";

const links = [
  { href: "/roadmap", label: "Orbit" },
  { href: "/projects", label: "Projects" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/career", label: "Career" },
  { href: "/tracker", label: "Tracker" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-4">
        <div className="glass flex items-center justify-between px-4 md:px-6 py-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-hairline-strong">
              <Orbit className="h-4 w-4 text-accent transition-transform group-hover:rotate-90" />
            </span>
            <span className="font-mono text-sm tracking-[0.2em] text-mist">ORBIT</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-full transition-colors",
                  pathname === l.href || pathname.startsWith(l.href + "/")
                    ? "text-mist bg-glass-strong"
                    : "text-mist-dim hover:text-mist"
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="/roadmap" variant="primary" className="text-xs">Begin</Button>
          </div>
          <button className="md:hidden text-mist" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden glass mt-2 p-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 text-mist-dim hover:text-mist">
                {l.label}
              </Link>
            ))}
            <Button href="/roadmap" variant="primary" className="mt-2">Begin</Button>
          </div>
        )}
      </div>
    </header>
  );
}