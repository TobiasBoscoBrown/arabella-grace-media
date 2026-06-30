"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/essays", label: "Essays" },
  { href: "/notes", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  // Listen (podcast) — architected for the future, intentionally not yet linked.
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/70 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-ivory"
          onClick={() => setOpen(false)}
        >
          Arabella<span className="text-gold"> Grace</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-gold"
                    : "text-ivory-dim hover:text-ivory"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/subscribe"
            className="rounded-sm border border-gold/60 px-4 py-2 text-xs font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            SUBSCRIBE
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-sm tracking-luxe text-ivory-dim">
            {open ? "CLOSE" : "MENU"}
          </span>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-ink-line/70 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-ivory-dim hover:text-ivory"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/subscribe"
              onClick={() => setOpen(false)}
              className="mt-1 inline-block w-fit rounded-sm border border-gold/60 px-4 py-2 text-xs font-medium tracking-luxe text-gold"
            >
              SUBSCRIBE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
