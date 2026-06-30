"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Variant = "panel" | "inline" | "compact";

export default function Subscribe({
  variant = "panel",
  id,
}: {
  variant?: Variant;
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!ok) {
      setStatus("error");
      return;
    }
    // No backend: graceful client-side success state.
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div
        id={id}
        className={
          variant === "compact"
            ? "text-sm text-gold"
            : "rounded-sm border border-gold/30 bg-ink-3/60 px-6 py-8 text-center"
        }
        role="status"
        aria-live="polite"
      >
        <p className="font-serif text-xl text-ivory">
          The letter is on its way.
        </p>
        {variant !== "compact" && (
          <p className="mt-2 text-sm text-ivory-dim">
            Welcome. Look for a quiet note in your inbox each Friday.
          </p>
        )}
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <motion.form
      id={id}
      onSubmit={onSubmit}
      noValidate
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={
        isCompact
          ? "flex w-full max-w-md flex-col gap-3 sm:flex-row"
          : "mx-auto w-full max-w-xl"
      }
    >
      {!isCompact && (
        <div className="mb-6 text-center">
          <p className="kicker">The Weekly Letter</p>
          <h3 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl">
            One essay. Every Friday. Nothing else.
          </h3>
          <p className="mt-3 text-ivory-dim">
            Join readers who prefer one considered thing to a thousand urgent
            ones. Unsubscribe anytime.
          </p>
        </div>
      )}

      <div
        className={
          isCompact
            ? "flex w-full flex-col gap-3 sm:flex-row"
            : "flex flex-col gap-3 sm:flex-row"
        }
      >
        <label htmlFor={`sub-${variant}`} className="sr-only">
          Email address
        </label>
        <input
          id={`sub-${variant}`}
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-invalid={status === "error"}
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          className="w-full flex-1 rounded-sm border border-ink-line bg-ink-2/80 px-4 py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors focus:border-gold"
        />
        <button
          type="submit"
          className="rounded-sm border border-gold/60 bg-gold/10 px-6 py-3 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Subscribe
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-gold-soft" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </motion.form>
  );
}
