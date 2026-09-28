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
          Kehkasha <span className="text-primary">Dumasia</span>
        </h1>
        <div className="h-0.5 w-12 rounded-full bg-highlight" aria-hidden="true" />
        <p className="text-pretty text-lg leading-relaxed text-foreground">
          {"I'm a research scholar at IIT Kharagpur who builds things for the web and a data analyst."}
        </p>
      </div>
      <p className="w-fit rounded-full bg-highlight px-3 py-1 text-sm font-medium text-highlight-foreground">
        Open to internships and collaboration
      </p>
    </header>
  )
}
