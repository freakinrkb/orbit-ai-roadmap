import { SectionHeading } from "@/components/primitives/SectionHeading";
import { GlassCard } from "@/components/primitives/GlassCard";
import { CareerRunway } from "@/components/domain/CareerRunway";

export const metadata = {
  title: "Career · ORBIT",
  description: "The application runway from November 2026 to May 2027.",
};

export default function CareerPage() {
  return (
    <div className="pt-28">
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Career runway"
            title="Don't wait until May 2027 to start applying."
            description="Gradually enter the market while learning. Research job descriptions in November, publish your first project in January, start applying in February."
          />
          <CareerRunway />
        </div>
      </section>

      <section className="section border-t border-hairline">
        <div className="container-x">
          <SectionHeading
            eyebrow="Narrative"
            title="From evaluating AI outputs to engineering reliable applications"
            description="For your previous LLM evaluation experience, you can build a credible career narrative around moving from evaluating AI outputs to engineering applications that make AI more reliable."
          />
          <GlassCard>
            <p className="body text-mist-dim">
              Forward Deployed Engineering also requires strong communication, customer discovery and the ability to
              understand business problems. Learning LangGraph alone doesn&apos;t prepare you for that job. Pair every
              technical milestone with a small career habit: 20 minutes a week reviewing 5–10 relevant job descriptions,
              a spreadsheet of recurring requirements, and a monthly portfolio comparison.
            </p>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}