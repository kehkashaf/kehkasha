import { ProfileHeader } from '@/components/profile-header'
import { AboutSection } from '@/components/about-section'
import { ContactLinks } from '@/components/contact-links'

export default function Page() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-secondary px-4 py-12 sm:py-20">
      <article className="w-full max-w-xl overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="h-2 bg-primary" aria-hidden="true" />
        <div className="flex flex-col gap-8 p-6 sm:p-10">
          <ProfileHeader />
          <AboutSection />
          <ContactLinks />
        </div>
      </article>
    </main>
  )
}
