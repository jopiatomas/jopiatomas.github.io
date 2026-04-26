import { useState, useEffect } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Contact"];

const SKILLS = {
  Frontend: ["Angular", "React.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Backend: ["Java", "Spring Boot", "Node.js", "REST APIs"],
  Tools: ["MySQL", "Git", "Docker", "Postman", "Jira", "Linux"],
};

const PROJECTS = [
  {
    title: "Quickish",
    description:
      "Full-stack delivery app replicating real-world ordering systems. Built as a final degree project featuring authentication, product catalog, and order management.",
    tags: ["Angular", "Spring Boot", "MySQL", "REST API"],
    live: "https://quickish-frontend.vercel.app/login",
    code: "https://github.com/jopiatomas",
    accent: "from-blue-500/10 to-blue-600/5",
    dot: "bg-blue-500",
  },
  {
    title: "Boxing Club Platform",
    description:
      "Web platform to centralize training and fight videos for a boxing gym, solving real content loss from WhatsApp. Used by ~50 weekly active users.",
    tags: ["React.js", "Responsive UI", "50 active users"],
    live: "https://pikiteam.vercel.app/",
    code: "https://github.com/jopiatomas",
    accent: "from-emerald-500/10 to-emerald-600/5",
    dot: "bg-emerald-500",
  },
];

export default function App() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-['DM_Sans',sans-serif]">
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');
        html { scroll-behavior: smooth; }
        ::selection { background: #3b82f6; color: #fff; }
        .tag-pill { font-family: 'DM Mono', monospace; }
      `}</style>

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur border-b border-white/5" : ""}`}
      >
        <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-sm font-medium tracking-tight text-neutral-400">
            tj<span className="text-white">.</span>
          </span>
          <div className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-sm transition-colors duration-200 ${
                  active === link
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="max-w-4xl mx-auto px-6 pt-40 pb-28">
        <div className="flex flex-col md:flex-row md:items-end gap-10">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-2xl font-medium tracking-tight select-none">
              TJ
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="tag-pill text-xs text-emerald-400 tracking-wide">
                Open to work · Remote LATAM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-4 tracking-tight">
              Tomás Jopia
              <br />
              <span className="text-neutral-500">Full Stack Developer</span>
            </h1>
            <p className="text-neutral-400 text-base leading-relaxed max-w-lg mb-8">
              Frontend-focused developer specialized in{" "}
              <span className="text-neutral-200">Angular</span> and{" "}
              <span className="text-neutral-200">React</span>, with solid
              backend experience using{" "}
              <span className="text-neutral-200">Java</span> and{" "}
              <span className="text-neutral-200">Spring Boot</span>. Recently
              graduated from UTN with hands-on projects used by real users.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:tomasjopiaf@gmail.com"
                className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Contact me
              </a>
              <a
                href="https://github.com/jopiatomas"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-white/10 text-sm text-neutral-300 rounded-lg hover:border-white/20 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/tomas-jopia/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 border border-white/10 text-sm text-neutral-300 rounded-lg hover:border-white/20 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* Skills */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20">
        <p className="tag-pill text-xs text-neutral-600 uppercase tracking-widest mb-10">
          Skills
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs text-neutral-600 mb-4 font-medium">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="tag-pill text-xs px-3 py-1.5 rounded-md bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <p className="tag-pill text-xs text-neutral-600 uppercase tracking-widest mb-10">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-2xl border border-white/5 p-7 bg-gradient-to-br ${p.accent} hover:border-white/10 transition-colors group`}
            >
              <div className="flex justify-between items-start mb-5">
                <span
                  className={`w-2.5 h-2.5 rounded-full mt-1 ${p.dot}`}
                ></span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-pill text-xs px-3 py-1.5 rounded-md bg-white/10 text-neutral-300 hover:bg-white/15 transition-colors"
                  >
                    Live ↗
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="tag-pill text-xs px-3 py-1.5 rounded-md bg-white/10 text-neutral-300 hover:bg-white/15 transition-colors"
                  >
                    Code ↗
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-medium mb-2">{p.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag-pill text-xs px-2.5 py-1 rounded-md bg-white/5 text-neutral-500 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* Education */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <p className="tag-pill text-xs text-neutral-600 uppercase tracking-widest mb-10">
          Education
        </p>
        <div className="flex gap-6 items-start">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-sm font-medium text-neutral-400">
            UTN
          </div>
          <div>
            <p className="text-base font-medium mb-1">
              Technical Degree in Programming
            </p>
            <p className="text-sm text-neutral-500 mb-3">
              Universidad Tecnológica Nacional · Mar del Plata · Graduated March
              2026
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Full Stack oriented. GPA: 8.29/10. Coursework: Data Structures,
              Database Systems, Web Development (Angular), Backend Development
              (Spring Boot), OOP (Java, C).
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-white/5" />
      </div>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <p className="tag-pill text-xs text-neutral-600 uppercase tracking-widest mb-6">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
          Let's work together
        </h2>
        <p className="text-neutral-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
          Looking for remote opportunities in LATAM. Open to Junior and Trainee
          roles in Frontend or Full Stack development.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <a
            href="mailto:tomasjopiaf@gmail.com"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            tomasjopiaf@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/tomas-jopia/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/10 text-sm text-neutral-300 rounded-lg hover:border-white/20 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jopiatomas"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/10 text-sm text-neutral-300 rounded-lg hover:border-white/20 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 pb-10 text-center">
        <p className="text-xs text-neutral-700">
          Built with React + Tailwind · {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
