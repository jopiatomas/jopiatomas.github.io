import { hero, site } from "@/data/site";
import FadeIn from "../FadeIn";
import RoleRotator from "../RoleRotator";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="max-w-4xl mx-auto px-6 sm:px-10 pt-36 sm:pt-44 pb-24"
    >
      <FadeIn>
        <p className="font-mono text-xs sm:text-sm text-accent mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          {site.status}
        </p>
      </FadeIn>

      <FadeIn delay={140}>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-fg mb-3">
          {site.name}
        </h1>
      </FadeIn>

      <FadeIn delay={200}>
        <h2 className="font-mono text-lg sm:text-2xl text-accent mb-8">
          <RoleRotator roles={site.roles} />
          <span className="inline-block w-[0.6ch] h-[1em] bg-accent ml-1 align-middle animate-blink" />
        </h2>
      </FadeIn>

      <FadeIn delay={260}>
        <p className="text-fg-dim text-base sm:text-lg leading-relaxed max-w-xl mb-10">
          {hero.intro}
        </p>
      </FadeIn>

      <FadeIn delay={320}>
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md bg-accent text-bg font-medium hover:brightness-110 transition"
        >
          {hero.cta}
          <span aria-hidden="true">→</span>
        </a>
      </FadeIn>
    </section>
  );
}
