import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Listen",
  description:
    "A podcast from Arabella Grace is in production. Subscribe to the weekly letter to hear it first.",
};

/*
 * LISTEN — PODCAST SECTION (PLACEHOLDER / ARCHITECTED FOR THE FUTURE)
 * ------------------------------------------------------------------
 * This route is intentionally a stub. The podcast section has been
 * architected (route + nav-ready) but is NOT yet built.
 *
 * Future build notes:
 *   - Episode list (title, date, duration, show notes) — mirror lib/content.ts
 *     with an `episodes` array and an EpisodeCard component.
 *   - An /listen/[slug] detail page with an audio player + transcript.
 *   - Add { href: "/listen", label: "Listen" } to the links array in
 *     components/Nav.tsx once episodes exist.
 */
export default function ListenPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-2xl px-6 pb-32 pt-32 text-center">
        <p className="kicker">Coming Soon</p>
        <h1 className="mt-8 font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
          Listen
        </h1>
        <p className="mx-auto mt-7 max-w-md text-pretty text-lg leading-relaxed text-ivory-dim">
          A podcast — the same sensibility, read aloud and unhurried — is in
          quiet production. Subscribe to the weekly letter and you will be the
          first to hear it.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/subscribe"
            className="rounded-sm border border-gold/60 bg-gold/10 px-7 py-3 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            NOTIFY ME
          </Link>
        </div>
      </div>
    </section>
  );
}
