export default function Footer() {
  return (
    <footer className="max-w-4xl mx-auto px-6 sm:px-10 pb-10 text-center">
      <p className="font-mono text-xs text-fg-dimmer">
        {"// hecho con Next.js + Tailwind · "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
