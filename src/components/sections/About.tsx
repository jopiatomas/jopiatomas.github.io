import { about } from "@/data/site";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";

export default function About() {
  return (
    <section id="sobre-mi" className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
      <FadeIn>
        <SectionHeading number="01" title="Sobre mí" />
      </FadeIn>

      <div className="grid sm:grid-cols-[1fr_auto] gap-10 items-start">
        <div>
          {about.paragraphs.map((paragraph, i) => (
            <FadeIn key={paragraph.slice(0, 12)} delay={i * 80}>
              <p className="text-fg-dim text-base leading-relaxed max-w-2xl mb-5 last:mb-0">
                {paragraph}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn delay={200}>
        <div className="mt-10 rounded-lg border border-border bg-bg-elevated p-6">
          <p className="font-mono text-xs text-fg-dimmer uppercase tracking-widest mb-3">
            Formación
          </p>
          <p className="text-fg font-medium mb-1">{about.education.degree}</p>
          <p className="text-sm text-fg-dim mb-3">
            {about.education.institution} · {about.education.period}
          </p>
          <p className="text-sm text-fg-dim leading-relaxed">
            {about.education.detail}
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
