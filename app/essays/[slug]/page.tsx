import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { essays } from "@/lib/content";
import Subscribe from "@/components/Subscribe";

export function generateStaticParams() {
  return essays.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) return { title: "Essay Not Found" };
  return {
    title: essay.title,
    description: essay.dek,
    openGraph: { title: essay.title, description: essay.dek, type: "article" },
  };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essays.find((e) => e.slug === slug);
  if (!essay) notFound();

  return (
    <article>
      {/* Header on the dark surface */}
      <header className="mx-auto max-w-3xl px-6 pb-14 pt-24 text-center sm:pt-28">
        <p className="kicker">{essay.issue} · The Weekly Letter</p>
        <h1 className="mt-8 text-balance font-serif text-4xl font-light leading-[1.08] text-ivory sm:text-5xl md:text-6xl">
          {essay.title}
        </h1>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs tracking-luxe text-ivory-dim/70">
          <time dateTime={essay.date}>{essay.displayDate}</time>
          <span aria-hidden="true">·</span>
          <span>{essay.readingTime}</span>
          <span aria-hidden="true">·</span>
          <span>By Arabella Grace</span>
        </div>
        <div className="rule-gold mx-auto mt-10 max-w-xs" />
      </header>

      {/* Ivory reading surface */}
      <div className="bg-ivory">
        <div className="prose-luxe mx-auto max-w-reading px-6 py-20 sm:py-24">
          <p>
            There is a particular quality to a morning given over entirely to
            one thing. Not the frantic productivity we have learned to perform,
            but its opposite: a single task held long enough that it begins to
            give something back. I have come to believe this is the last true
            luxury — not money, not space, but the undivided attention we are
            increasingly unwilling to grant anything at all.
          </p>
          <p>
            We speak of attention as though it were a resource to be spent, and
            in the language of the marketplace that is exactly what it has
            become. But attention is also a way of loving the world. To attend
            to something is to declare, however briefly, that it is worthy of
            us. When we withdraw it — flicking to the next thing, the next
            feed, the next small dopaminergic promise — we are not merely
            distracted. We are, in some quiet way, withholding affection from
            our own lives.
          </p>
          <blockquote>
            The cure for distraction is not discipline. It is desire — wanting
            one thing badly enough that the thousand others fall silent.
          </blockquote>
          <h2>The economics of noticing</h2>
          <p>
            Consider what we lose in the trade. The infinite scroll offers
            abundance, and abundance, we assume, is generous. But abundance
            without edges is merely noise wearing the costume of plenty. A
            library of ten thousand unread books is not wealth; it is a kind of
            anxiety with a Dewey decimal system. The reader who finishes one
            book — slowly, completely, with marginalia and second thoughts — is
            richer than the collector of unopened spines.
          </p>
          <p>
            The same is true of rooms, of meals, of conversations. The
            difference between consuming an experience and actually having one
            is almost entirely a matter of attention. We have built an entire
            economy on the premise that more is better, faster is kinder, and
            newer is truer. None of these are reliably so. The deepest
            pleasures are almost always the ones we returned to: the
            re-read, the re-heard, the re-seen.
          </p>
          <h2>An aesthetics of enough</h2>
          <p>
            I am not arguing for asceticism. Restraint, practised joylessly, is
            just another performance — a hairshirt worn for an audience. What I
            am describing is closer to elegance: the confidence to choose less
            because less, chosen well, is more. The empty hour. The single
            flower. The sentence read four times not from difficulty but from
            rightness. These are not sacrifices. They are the whole point.
          </p>
          <p>
            So this is the small, unglamorous discipline I keep returning to:
            to attend. To let one thing be enough for the length of an
            afternoon. To resist, gently and repeatedly, the seduction of the
            next thing. It changes nothing about the world and everything about
            how I live inside it — which, in the end, may be the only change
            available to any of us.
          </p>
        </div>

        {/* Subscribe under every essay */}
        <div className="border-t border-black/10">
          <div className="mx-auto max-w-reading px-6 py-16 text-center">
            <p className="text-xs tracking-luxe text-gold">THE WEEKLY LETTER</p>
            <h2 className="mt-4 font-serif text-3xl text-[#1a1714]">
              Read the next one first.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[#4a443c]">
              Every Friday, one essay like this — delivered before it appears
              anywhere else.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/subscribe"
                className="rounded-sm border border-gold bg-gold px-7 py-3 text-sm font-medium tracking-luxe text-ink transition-opacity hover:opacity-90"
              >
                SUBSCRIBE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back + subscribe (dark) */}
      <section className="border-t border-ink-line/70 bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Link
            href="/essays"
            className="text-xs tracking-luxe text-ivory-dim transition-colors hover:text-gold"
          >
            &larr; ALL ESSAYS
          </Link>
          <div className="mt-12">
            <Subscribe variant="panel" />
          </div>
        </div>
      </section>
    </article>
  );
}
