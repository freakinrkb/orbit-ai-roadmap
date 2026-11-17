import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { Chip } from "@/components/primitives/Chip";
import { Reveal } from "@/components/primitives/Reveal";
import { ResourceList } from "@/components/domain/ResourceList";
import { priorityTiers, primaryStack, budgetRows, finalRules } from "@/lib/roadmap";

export const metadata = {
  title: "Toolkit · ORBIT",
  description: "Stack, priority tiers, curated resources and budget for the applied AI programme.",
};

export default function ToolkitPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Toolkit"
            title="The tools, references and rules"
            description="Near-zero-cost setup. Free documentation first. Buy a course only when free material leaves a specific gap."
          />

          <div className="mb-12">
            <p className="eyebrow mb-4">PRIORITY TIERS</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {priorityTiers.map((t) => (
                <Reveal key={t.tier}>
                  <GlassCard className="h-full">
                    <p className="eyebrow mb-3">{t.tier.toUpperCase()}</p>
                    <ul className="space-y-2">
                      {t.items.map((it) => (
                        <li key={it} className="body-sm text-mist-dim flex gap-2"><span className="text-accent">›</span> {it}</li>
                      ))}
                    </ul>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <p className="eyebrow mb-4">PRIMARY STACK</p>
            <div className="flex flex-wrap gap-2">
              {primaryStack.map((s) => <Chip key={s} tone="teal">{s}</Chip>)}
            </div>
          </div>

          <ResourceList />
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x grid md:grid-cols-2 gap-8">
          <div>
            <SectionHeading eyebrow="Budget" title="What to spend" description="Start near-zero. No GPU, no expensive cloud subscription." />
            <GlassCard>
              <table className="w-full text-sm">
                <tbody>
                  {budgetRows.map((b) => (
                    <tr key={b.requirement} className="border-b border-hairline last:border-0">
                      <td className="py-2 pr-4 font-mono text-xs text-mist-faint">{b.requirement.toUpperCase()}</td>
                      <td className="py-2 text-mist-dim">{b.approach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
            <p className="body-sm text-mist-faint mt-4">Use mock model responses for automated tests so you don&apos;t consume API credits every run.</p>
          </div>
          <div>
            <SectionHeading eyebrow="Rules" title="Five rules to follow" />
            <ul className="space-y-2">
              {finalRules.map((r, i) => (
                <Reveal key={r}>
                  <li className="body text-mist-dim flex gap-3">
                    <span className="font-mono text-accent shrink-0">0{i + 1}</span> {r}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}