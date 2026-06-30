import type { Metadata } from "next";
import { notes } from "@/lib/content";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Shorter observations and fragments between the weekly essays — brief, unfinished, true.",
};

export default function NotesPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-12 pt-24 sm:pt-28">
        <Reveal>
          <p className="kicker">Fragments</p>
          <h1 className="mt-6 text-balance font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
            Notes
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ivory-dim">
            The smaller things. Observations too brief to be essays and too
            insistent to discard — kept here between the Friday letters.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28">
        <ul>
          {notes.map((note, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="border-t border-ink-line/70 py-9">
                <p className="text-xs tracking-luxe text-gold/80">
                  {note.date}
                </p>
                <p className="mt-4 text-pretty font-serif text-xl leading-relaxed text-ivory/90">
                  {note.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
        <div className="border-t border-ink-line/70" />
      </section>
    </>
  );
}
