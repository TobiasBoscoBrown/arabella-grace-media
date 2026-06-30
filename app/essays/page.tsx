import type { Metadata } from "next";
import { essays } from "@/lib/content";
import EssayCard from "@/components/EssayCard";
import Subscribe from "@/components/Subscribe";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Essays",
  description:
    "The complete archive of the weekly letter — long-form essays on culture, attention, and the examined life by Arabella Grace.",
};

export default function EssaysPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-24 sm:pt-28">
        <Reveal>
          <p className="kicker">The Archive</p>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
            Every essay, every Friday.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ivory-dim">
            This page doubles as the newsletter archive. Each piece was first a
            letter; each letter is kept here, in full.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {essays.map((essay, i) => (
          <Reveal key={essay.slug} delay={i * 0.04}>
            <EssayCard essay={essay} linked={i === 0} />
          </Reveal>
        ))}
        <div className="border-t border-ink-line/70" />
        <p className="mt-6 text-sm text-ivory-dim/60">
          The featured essay above opens to a full reading page. Remaining
          entries are placeholders for the launch archive.
        </p>
      </section>

      <section className="border-t border-ink-line/70 bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Subscribe variant="panel" />
        </div>
      </section>
    </>
  );
}
