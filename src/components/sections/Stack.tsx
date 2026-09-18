import { stack } from "@/data/site";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";

export default function Stack() {
  return (
    <section id="stack" className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
      <FadeIn>
        <SectionHeading number="02" title="Stack & Herramientas" />
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-8">
        {Object.entries(stack).map(([category, items], i) => (
          <FadeIn key={category} delay={i * 80}>
            <div className="rounded-lg border border-border bg-bg-elevated p-6 h-full">
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg text-fg-dim border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
