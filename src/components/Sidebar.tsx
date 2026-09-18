import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Sidebar() {
  return (
    <>
      <div className="hidden lg:flex fixed bottom-0 left-6 xl:left-10 z-40 flex-col items-center gap-6">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-fg-dim hover:text-accent hover:-translate-y-1 transition-all duration-200"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-fg-dim hover:text-accent hover:-translate-y-1 transition-all duration-200"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <span className="w-px h-24 bg-border" />
      </div>

      <div className="hidden lg:flex fixed bottom-0 right-6 xl:right-10 z-40 flex-col items-center gap-6">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-widest text-fg-dim hover:text-accent hover:-translate-y-1 transition-all duration-200"
          style={{ writingMode: "vertical-rl" }}
        >
          {site.email}
        </a>
        <span className="w-px h-24 bg-border" />
      </div>
    </>
  );
}
