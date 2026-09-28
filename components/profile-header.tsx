export function ProfileHeader() {
  return (
    <header className="flex flex-col gap-5">
      <div
        className="flex size-16 items-center justify-center rounded-full bg-primary text-xl font-semibold text-primary-foreground"
        aria-hidden="true"
      >
        KD
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Kehkasha Dumasia
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {"I'm a research scholar at IIT Kharagpur who builds things for the web and a data analyst."}
        </p>
      </div>
      <p className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
        <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
        Open to internships and collaboration
      </p>
    </header>
  )
}
