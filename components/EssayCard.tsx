import Link from "next/link";
import type { Essay } from "@/lib/content";

export default function EssayCard({
  essay,
  linked = false,
}: {
  essay: Essay;
  linked?: boolean;
}) {
  const inner = (
    <article className="group relative border-t border-ink-line/70 py-9 transition-colors">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-luxe text-ivory-dim/70">
        <span className="text-gold/80">{essay.issue}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={essay.date}>{essay.displayDate}</time>
        <span aria-hidden="true">·</span>
        <span>{essay.readingTime}</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl leading-tight text-ivory transition-colors group-hover:text-gold-soft sm:text-3xl">
        {essay.title}
      </h3>
      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-ivory-dim">
        {essay.dek}
      </p>
      {linked && (
        <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-luxe text-gold">
          READ THE ESSAY
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      )}
    </article>
  );

  if (linked) {
    return (
      <Link href={`/essays/${essay.slug}`} className="block">
        {inner}
      </Link>
    );
  }
  return inner;
}
