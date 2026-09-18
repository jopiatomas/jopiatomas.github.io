"use client";

import { useEffect, useState } from "react";
import { nav } from "@/data/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>(nav[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollTo("inicio")}
          className="font-mono text-sm text-fg-dim hover:text-accent transition-colors"
        >
          tj<span className="text-accent">.</span>dev
        </button>

        <button
          className="sm:hidden font-mono text-xs text-fg-dim border border-border rounded px-3 py-1.5"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Abrir menú de navegación"
        >
          {menuOpen ? "cerrar" : "menu"}
        </button>

        <ul className="hidden sm:flex items-center gap-6 font-mono text-xs">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`transition-colors duration-200 ${
                  active === item.id
                    ? "text-accent"
                    : "text-fg-dim hover:text-fg"
                }`}
              >
                <span className="text-fg-dimmer">{item.number}.</span>{" "}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-5 font-mono text-sm bg-bg/95 backdrop-blur-md border-b border-border">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left py-2 transition-colors ${
                  active === item.id ? "text-accent" : "text-fg-dim"
                }`}
              >
                <span className="text-fg-dimmer">{item.number}.</span>{" "}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
