import Link from "next/link";
import { essays } from "@/lib/content";
import EssayCard from "@/components/EssayCard";
import Subscribe from "@/components/Subscribe";
import Reveal from "@/components/Reveal";

export default function Home() {
  const featured = essays[0];
  const recent = essays.slice(1, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-6 pb-24 pt-24 text-center sm:pt-32">
          <Reveal>
            <p className="kicker">Essays · Notes · A Weekly Letter</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mx-auto mt-8 max-w-4xl text-balance font-serif text-5xl font-light leading-[1.05] tracking-tight text-ivory sm:text-6xl md:text-7xl">
              Writing on culture, attention, and the{" "}
              <span className="italic text-gold-soft">examined life.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-xl text-pretty text-lg leading-relaxed text-ivory-dim">
              A cultural-media studio of one. Long-form essays delivered every
              Friday, shorter notes between — for readers who prefer one
              considered thing to a thousand urgent ones.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/essays"
                className="rounded-sm border border-gold/60 bg-gold/10 px-7 py-3 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
              >
                READ THE ESSAYS
              </Link>
              <Link
                href="/subscribe"
                className="rounded-sm border border-ink-line px-7 py-3 text-sm font-medium tracking-luxe text-ivory-dim transition-colors hover:border-ivory/40 hover:text-ivory"
              >
                THE WEEKLY LETTER
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-6xl px-6">
          <div className="rule-gold" />
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="flex items-baseline justify-between">
            <p className="kicker">This Week</p>
            <Link
              href="/essays"
              className="text-xs tracking-luxe text-ivory-dim transition-colors hover:text-gold"
            >
              ALL ESSAYS &rarr;
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <Link href={`/essays/${featured.slug}`} className="group mt-6 block">
            <article className="rounded-sm border border-ink-line/70 bg-ink-2/40 p-8 transition-colors hover:border-gold/30 sm:p-12">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-luxe text-ivory-dim/70">
                <span className="text-gold/80">{featured.issue}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.date}>{featured.displayDate}</time>
                <span aria-hidden="true">·</span>
                <span>{featured.readingTime}</span>
              </div>
              <h2 className="mt-5 max-w-3xl text-balance font-serif text-4xl leading-tight text-ivory transition-colors group-hover:text-gold-soft sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ivory-dim">
                {featured.dek}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-xs tracking-luxe text-gold">
                READ THE ESSAY
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </article>
          </Link>
        </Reveal>
      </section>

      {/* RECENT */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <p className="kicker">Recently</p>
        </Reveal>
        <div className="mt-6">
          {recent.map((essay, i) => (
            <Reveal key={essay.slug} delay={i * 0.05}>
              <EssayCard essay={essay} linked />
            </Reveal>
          ))}
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section className="border-t border-ink-line/70 bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Subscribe variant="panel" id="subscribe" />
        </div>
      </section>
    </>
  );
}
