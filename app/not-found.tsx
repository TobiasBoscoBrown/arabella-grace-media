import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-40 text-center">
      <p className="kicker">404</p>
      <h1 className="mt-6 font-serif text-5xl font-light text-ivory">
        Nothing here, quietly.
      </h1>
      <p className="mt-4 text-ivory-dim">
        The page you were looking for has slipped away. Perhaps an essay
        instead.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm border border-gold/60 px-7 py-3 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
      >
        RETURN HOME
      </Link>
    </section>
  );
}
