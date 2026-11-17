# ORBIT · Applied AI Engineering

A surreal six-month field guide from backend engineer to applied AI engineer. 180 days, 1–2 hours a day, three projects, one orbit.

**Live demo:** https://orbit-ai-roadmap.vercel.app

## What this is

The full "Applied AI Engineering — The realistic six-month programme" roadmap, turned into an immersive, interactive website:

- A breathing signal orb with seven orbiting phase markers
- Scroll narrative that shifts from deep-space ink to aurora to warm dawn
- Live day counter, countdowns to every milestone, current-week auto-highlight
- Full 26-week syllabus with phase filters and search
- Three project dossiers
- Curated Level A/B/C resource library
- Budget, study method, weekly rhythm, five-question understanding test
- Interactive 12-competency tracker persisted in the browser

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · Motion · Lenis · lucide-react

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/          # routes: /, /roadmap, /projects, /toolkit, /career, /tracker
  components/   # layout, ambient, primitives, domain
  hooks/        # reduced motion, local storage, current week, in-view phase
  lib/          # roadmap data (single source of truth), dates, cn
```

## Deployment

Deployed on Vercel. Source on GitHub: https://github.com/freakinrkb/orbit-ai-roadmap

## Credits

Roadmap content derived from the "Applied AI Engineering — The realistic six-month programme" curriculum. Built with Next.js.