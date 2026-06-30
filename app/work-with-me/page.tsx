import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Commission editorial and writing work from Arabella Grace. A small number of considered projects each season.",
};

export default function WorkWithMePage() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-24 sm:pt-28">
      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <div>
            <p className="kicker">Work With Me</p>
            <h1 className="mt-6 text-balance font-serif text-5xl font-light leading-tight text-ivory sm:text-6xl">
              Let&apos;s make something considered.
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ivory-dim">
              I take on a small number of editorial and writing commissions each
              season — essays, brand letters, editing, and the occasional
              ghostwritten piece for people with something true to say.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                {
                  k: "Essays & features",
                  v: "Long-form pieces in the voice of the weekly letter.",
                },
                {
                  k: "Editorial direction",
                  v: "Shaping a publication, a series, or a single difficult draft.",
                },
                {
                  k: "Brand letters",
                  v: "Quiet, literate writing for companies who refuse to shout.",
                },
              ].map((item) => (
                <li key={item.k} className="border-l border-gold/40 pl-5">
                  <p className="font-serif text-lg text-ivory">{item.k}</p>
                  <p className="mt-1 text-sm text-ivory-dim">{item.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-ink-line/70 bg-ink-2/40 p-8">
            <EnquiryForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
