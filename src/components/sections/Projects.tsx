import { projects } from "@/data/site";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import { CodeIcon, ExternalLinkIcon } from "../icons";

export default function Projects() {
  return (
    <section id="proyectos" className="max-w-4xl mx-auto px-6 sm:px-10 py-20">
      <FadeIn>
        <SectionHeading number="03" title="Proyectos" />
      </FadeIn>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <FadeIn
            key={project.title}
            delay={i * 100}
            className={project.featured ? "sm:col-span-2" : undefined}
          >
            <article
              className={`group relative h-full rounded-lg border p-6 transition-colors duration-200 flex flex-col ${
                project.featured
                  ? "border-accent/40 bg-gradient-to-br from-accent/10 via-bg-elevated to-bg-elevated hover:border-accent/60"
                  : "border-border bg-bg-elevated hover:border-accent/40"
              }`}
            >
              {project.featured && (
                <span className="absolute -top-3 left-6 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent text-bg font-semibold">
                  Featured
                </span>
              )}

              <div className="flex items-start justify-between mb-4 gap-4">
                <h3
                  className={`font-semibold text-fg ${
                    project.featured ? "text-xl" : "text-lg"
                  }`}
                >
                  {project.title}
                </h3>
                <div className="flex gap-3 shrink-0">
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Código de ${project.title}`}
                      className="text-fg-dim hover:text-accent transition-colors"
                    >
                      <CodeIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Demo de ${project.title}`}
                      className="text-fg-dim hover:text-accent transition-colors"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <p
                className={`text-sm text-fg-dim leading-relaxed flex-1 ${
                  project.cases ? "mb-4" : "mb-6"
                }`}
              >
                {project.description}
              </p>

              {project.cases && (
                <div className="mb-6">
                  <p className="font-mono text-[11px] text-fg-dimmer uppercase tracking-widest mb-2">
                    Casos incluidos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.cases.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg text-fg-dimmer border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
