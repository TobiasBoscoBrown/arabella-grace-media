import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Arabella Grace is a writer and editor working at the intersection of culture, attention, and the examined life.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-reading px-6 pb-28 pt-24 sm:pt-28">
      <Reveal>
        <p className="kicker">About</p>
        <h1 className="mt-6 text-balance font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
          A studio of one.
        </h1>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mt-10 space-y-7 text-pretty text-lg leading-relaxed text-ivory-dim">
          <p>
            I am Arabella Grace — a writer and editor working at the
            intersection of culture, attention, and the examined life. For the
            past several years I have published a single thing each week: a
            long-form essay, delivered as a letter, written slowly and meant to
            be read the same way.
          </p>
          <p>
            This site is the home of that work. It is deliberately quiet. There
            are no advertisements, no trackers performing their elaborate
            theatre, no infinite anything. Just essays, a handful of shorter
            notes, and a way to subscribe if the writing finds you.
          </p>
          <p>
            My subjects are not fixed, but they tend to circle the same few
            preoccupations: how we spend our attention, what elegance asks of
            us, why some rooms and sentences refuse to leave. I write for
            readers who would rather have one considered thing than a thousand
            urgent ones — and there turn out to be more of us than the feed
            would have you believe.
          </p>
          <p>
            If you are a publication, brand, or fellow studio with work that
            shares these sensibilities, I take on a small number of editorial
            and writing commissions each season.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/work-with-me"
            className="rounded-sm border border-gold/60 bg-gold/10 px-7 py-3 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            WORK WITH ME
          </Link>
          <Link
            href="/subscribe"
            className="rounded-sm border border-ink-line px-7 py-3 text-sm font-medium tracking-luxe text-ivory-dim transition-colors hover:border-ivory/40 hover:text-ivory"
          >
            THE WEEKLY LETTER
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
