import { contact, site } from "@/data/site";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import { GithubIcon, LinkedinIcon, MailIcon } from "../icons";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="max-w-4xl mx-auto px-6 sm:px-10 py-24 text-center"
    >
      <FadeIn>
        <SectionHeading number="04" title="Contacto" />
      </FadeIn>

      <FadeIn delay={80}>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-fg mb-4">
          {contact.heading}
        </h3>
      </FadeIn>

      <FadeIn delay={140}>
        <p className="text-fg-dim text-base leading-relaxed max-w-md mx-auto mb-10">
          {contact.text}
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md bg-accent text-bg font-medium hover:brightness-110 transition"
          >
            <MailIcon className="w-4 h-4" />
            {contact.cta}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md border border-border text-fg-dim hover:border-accent/40 hover:text-fg transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md border border-border text-fg-dim hover:border-accent/40 hover:text-fg transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={260}>
        <p className="font-mono text-xs text-fg-dimmer mt-10">{site.email}</p>
      </FadeIn>
    </section>
  );
}
