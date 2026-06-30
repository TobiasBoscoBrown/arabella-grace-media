import type { Metadata } from "next";
import Subscribe from "@/components/Subscribe";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Subscribe",
  description:
    "Join the weekly letter from Arabella Grace — one long-form essay, every Friday, and nothing else.",
};

export default function SubscribePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 pb-28 pt-24 text-center sm:pt-32">
        <Reveal>
          <p className="kicker">The Weekly Letter</p>
          <h1 className="mt-8 text-balance font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
            One essay. Every Friday.
            <span className="block italic text-gold-soft">Nothing else.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ivory-dim">
            No noise, no upsells, no tracking theatre. Just a single considered
            piece of writing, delivered to your inbox while the rest of the
            internet shouts. Unsubscribe anytime, with no hard feelings.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="mt-12">
            <Subscribe variant="compact" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mx-auto mt-16 grid max-w-lg gap-px overflow-hidden rounded-sm border border-ink-line/70 text-left sm:grid-cols-3">
            {[
              { k: "Weekly", v: "A new essay each Friday" },
              { k: "Private", v: "Your email, never shared" },
              { k: "Free", v: "Always, for now and likely forever" },
            ].map((item) => (
              <li key={item.k} className="bg-ink-2/50 p-6">
                <p className="text-xs tracking-luxe text-gold">{item.k}</p>
                <p className="mt-2 text-sm text-ivory-dim">{item.v}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
