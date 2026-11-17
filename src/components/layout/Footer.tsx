import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-hairline mt-24">
      <div className="container-x py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.24em] text-mist-dim">ORBIT · APPLIED AI ENGINEERING</p>
          <p className="text-sm text-mist-faint mt-2 max-w-md">
            A six-month field guide. 180 days. 1–2 hours a day. Built around a life that doesn&apos;t pause.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-mist-dim">
          <Link href="https://github.com/freakinrkb/orbit-ai-roadmap" target="_blank" rel="noopener noreferrer" className="hover:text-mist flex items-center gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.18-.02-2.14-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg> Source
          </Link>
          <span className="text-mist-faint">·</span>
          <span className="font-mono text-xs">Next.js · Tailwind · Motion</span>
        </div>
      </div>
    </footer>
  );
}