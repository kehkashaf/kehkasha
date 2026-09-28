export function AboutSection() {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-3 border-t pt-8">
      <h2
        id="about-heading"
        className="text-xs font-semibold uppercase tracking-widest text-accent"
      >
        A little more
      </h2>
      <p className="text-pretty leading-relaxed">
        {"I'm learning web development by shipping real projects rather than only following tutorials. In September 2026 I hand-coded and published my first website using HTML, CSS and JavaScript at "}
        <a
          href="https://kehkashaf.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        >
          kehkashaf.github.io
        </a>
        {', and its code is public on '}
        <a
          href="https://github.com/kehkashaf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
        >
          GitHub
        </a>
        {'.'}
      </p>
    </section>
  )
}
