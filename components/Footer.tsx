import Link from "next/link";
import Subscribe from "@/components/Subscribe";

export default function Footer() {
  return (
    <footer className="relative z-[2] border-t border-ink-line/70 bg-ink-2">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="kicker">Subscribe</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl text-ivory">
              A quiet letter, once a week.
            </h2>
            <p className="mt-3 max-w-sm text-sm text-ivory-dim">
              No noise, no tracking theatre. Just one essay, delivered on Fridays.
            </p>
            <div className="mt-6">
              <Subscribe variant="compact" />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:items-end">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { href: "/essays", label: "Essays" },
                { href: "/notes", label: "Notes" },
                { href: "/about", label: "About" },
                { href: "/work-with-me", label: "Work With Me" },
                { href: "/subscribe", label: "Subscribe" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-ivory-dim transition-colors hover:text-gold">
                  {l.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs leading-relaxed text-ivory-dim/70 md:text-right">
              A podcast, <span className="text-gold/80">Listen</span>, is coming soon.
            </p>
          </div>
        </div>
        <div className="rule-gold mt-16" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-ivory-dim/60 sm:flex-row">
          <p className="font-serif text-sm text-ivory">
            Arabella<span className="text-gold"> Grace</span>
          </p>
          <p>&copy; {new Date().getFullYear()} Arabella Grace. All rights reserved.</p>
          <p className="tracking-luxe">A STUDIO OF ONE</p>
        </div>
      </div>
    </footer>
  );
}
