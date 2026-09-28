import { ArrowUpRight, Code2, Globe, Mail } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type ContactLink = {
  label: string
  value: string
  href: string
  icon: LucideIcon
  external?: boolean
}

const links: ContactLink[] = [
  {
    label: 'Email',
    value: 'kehkashadumasia98@gmail.com',
    href: 'mailto:kehkashadumasia98@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/kehkashaf',
    href: 'https://github.com/kehkashaf',
    icon: Code2,
    external: true,
  },
  {
    label: 'Website',
    value: 'kehkashaf.github.io',
    href: 'https://kehkashaf.github.io',
    icon: Globe,
    external: true,
  },
]

export function ContactLinks() {
  return (
    <section aria-labelledby="contact-heading" className="flex flex-col gap-4 border-t pt-8">
      <h2
        id="contact-heading"
        className="text-xs font-semibold uppercase tracking-widest text-accent-foreground"
      >
        How to reach me
      </h2>

      <a
        href="mailto:kehkashadumasia98@gmail.com"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-fit"
      >
        <Mail className="size-4" aria-hidden="true" />
        Say hello
      </a>

      <ul className="flex flex-col divide-y rounded-lg border">
        {links.map(({ label, value, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-accent focus-visible:bg-accent focus-visible:outline-none"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="text-xs text-muted-foreground">{label}</span>
                <span className="break-all text-sm font-medium">{value}</span>
              </span>
              <ArrowUpRight
                className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-accent-foreground"
                aria-hidden="true"
              />
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
