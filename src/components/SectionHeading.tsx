type SectionHeadingProps = {
  number: string;
  title: string;
};

export default function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <h2 className="font-mono text-sm sm:text-base text-fg-dim mb-10 flex items-baseline gap-2">
      <span className="text-fg-dimmer select-none">{"//"}</span>
      <span>
        <span className="text-accent">{number}.</span> {title}
      </span>
      <span className="h-px flex-1 bg-border ml-2 hidden sm:block" />
    </h2>
  );
}
