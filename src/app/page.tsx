import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PhaseOrbit } from "@/components/domain/PhaseOrbit";
import { DayCounter } from "@/components/domain/DayCounter";
import { Countdown } from "@/components/domain/Countdown";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Chip } from "@/components/primitives/Chip";
import { Button } from "@/components/primitives/Button";
import { Reveal } from "@/components/primitives/Reveal";
import { GradientText } from "@/components/primitives/GradientText";
import { Stagger, StaggerItem } from "@/components/primitives/Stagger";
import { CountUp } from "@/components/primitives/CountUp";
import { Marquee } from "@/components/primitives/Marquee";
import { phases, priorityTiers, primaryStack, newRules, stats, projects } from "@/lib/roadmap";


export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section data-phase-section="0" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">APPLIED AI ENGINEERING · 180 DAYS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="display-xl text-mist">
                One orbit.<br />
                <GradientWord>From backend engineer</GradientWord><br />
                to applied AI engineer.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg text-mist-dim mt-6 max-w-xl">
                A programme designed for a life that doesn&apos;t pause. 1–2 hours a day, six months, three
                projects — and a realistic route to competing for applied AI roles without abandoning
                your existing software engineering preparation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Button href="/roadmap" variant="primary">
                  Begin the orbit <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/tracker">Track progress</Button>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <DayCounter />
                <Countdown to="2026-12-06" label="Dec 6 milestone" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <PhaseOrbit />
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-8 border-y border-hairline">
        <Marquee>
          <span className="font-display italic text-3xl text-mist-faint/40">LLM application engineering</span>
          <span className="font-display italic text-3xl text-mist-faint/40">·</span>
          <span className="font-display italic text-3xl text-mist-faint/40">RAG and knowledge systems</span>
          <span className="font-display italic text-3xl text-mist-faint/40">·</span>
          <span className="font-display italic text-3xl text-mist-faint/40">Agents and orchestration</span>
          <span className="font-display italic text-3xl text-mist-faint/40">·</span>
          <span className="font-display italic text-3xl text-mist-faint/40">MCP and integrations</span>
          <span className="font-display italic text-3xl text-mist-faint/40">·</span>
          <span className="font-display italic text-3xl text-mist-faint/40">Evaluation and production</span>
          <span className="font-display italic text-3xl text-mist-faint/40">·</span>
        </Marquee>
      </section>

      {/* MANIFESTO */}
      <section data-phase-section="1" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our new rules"
            title={<>The objective isn&apos;t to learn AI as quickly as possible.<br /><GradientText>It&apos;s to become someone who can actually engineer useful AI-powered software.</GradientText></>}
            description="At 1–2 hours a day, we don't try to turn you into an expert in every aspect of AI engineering. We aim to make you a capable junior Applied AI Engineer with strong backend skills."
          />
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {newRules.map((r) => (
              <StaggerItem key={r}>
                <GlassCard className="h-full py-4">
                  <p className="body-sm text-mist-dim flex gap-2"><span className="text-accent">›</span> {r}</p>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* STATS */}
      <section className="section border-y border-hairline">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="display-xl text-mist">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="eyebrow mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRIORITY STACK */}
      <section data-phase-section="2" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Priority order"
            title="The correct priority order"
            description="For someone with 1–2 hours a day, the order matters enormously. Don't learn two frameworks for the same problem simultaneously."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {priorityTiers.map((t) => (
              <Reveal key={t.tier}>
                <GlassCard className="h-full">
                  <p className="eyebrow mb-3">{t.tier.toUpperCase()}</p>
                  <ul className="space-y-2">
                    {t.items.map((it) => (
                      <li key={it} className="body text-mist-dim flex gap-2">
                        <span className="text-accent">›</span> {it}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <p className="eyebrow mb-3">PRIMARY STACK</p>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((s) => <Chip key={s} tone="teal">{s}</Chip>)}
            </div>
          </div>
        </div>
      </section>

      {/* PHASES PREVIEW */}
      <section data-phase-section="3" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="The six-month calendar"
            title="Seven phases. One orbit."
            description="November 2026 – May 2027. A light start for your December 6 assessment, then the proper programme."
          />
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {phases.map((p) => (
              <StaggerItem key={p.id}>
                <Link href="/roadmap" className="block h-full">
                  <GlassCard className="h-full hover:border-accent/40 transition-colors">
                    <p className="font-mono text-xs text-accent">PHASE {p.number}</p>
                    <p className="font-display text-xl text-mist mt-1">{p.name}</p>
                    <p className="body-sm text-mist-faint mt-2">{p.weeks} · {p.hoursPerWeek}</p>
                  </GlassCard>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-8">
            <Button href="/roadmap" variant="primary">Explore the full orbit <ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section data-phase-section="4" className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Three projects"
            title="What you will actually build"
            description="At this time budget, three projects are enough. Four or five half-finished projects would be counterproductive."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((p) => (
              <Reveal key={p.id}>
                <Link href="/projects" className="block h-full">
                  <GlassCard className="h-full hover:border-accent/40 transition-colors">
                    <p className="font-mono text-xs text-accent">PROJECT 0{p.index} · {p.window}</p>
                    <p className="font-display text-xl text-mist mt-2">{p.title}</p>
                    <p className="body-sm text-mist-dim mt-2">{p.problem}</p>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD TEASER */}
      <section data-phase-section="5" className="section border-y border-hairline">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="How to study"
              title="The 90-minute learning method"
              description="One primary topic at a time. No parallel courses. Every concept implemented. Revision is part of the syllabus."
            />
            <Button href="/tracker">Open the tracker <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="text-center">
            <p className="font-display text-8xl text-mist">90</p>
            <p className="eyebrow">MINUTES · LEARN 20 · UNDERSTAND 20 · IMPLEMENT 40 · RECALL 10</p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section data-phase-section="6" className="section">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal>
            <Sparkles className="h-8 w-8 text-accent mx-auto mb-6" />
            <h2 className="display-l text-mist">
              The objective isn&apos;t to learn AI as quickly as possible.
            </h2>
            <p className="display-m text-mist-dim mt-4">
              It&apos;s to become someone who can actually engineer useful AI-powered software.
            </p>
            <div className="flex justify-center gap-3 mt-8">
              <Button href="/roadmap" variant="primary">Begin the orbit</Button>
              <Button href="/career">Career runway</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function GradientWord({ children }: { children: React.ReactNode }) {
  return <span className="gradient-text">{children}</span>;
}