"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Errors = { name?: string; email?: string; message?: string };

export default function EnquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      e.message = "A sentence or two, please — at least ten characters.";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // No backend: graceful client-side success state.
      setSent(true);
    }
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        role="status"
        aria-live="polite"
        className="rounded-sm border border-gold/30 bg-ink-2/50 p-10 text-center"
      >
        <p className="kicker">Received</p>
        <h2 className="mt-5 font-serif text-3xl text-ivory">
          Thank you, {form.name.split(" ")[0] || "friend"}.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-ivory-dim">
          Your note has arrived. I read every enquiry personally and reply
          within a few days. In the meantime, the writing is here whenever you
          are.
        </p>
      </motion.div>
    );
  }

  const field =
    "w-full rounded-sm border border-ink-line bg-ink-2/80 px-4 py-3 text-ivory placeholder:text-ivory-dim/50 transition-colors focus:border-gold";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs tracking-luxe text-ivory-dim"
        >
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-2 text-sm text-gold-soft">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs tracking-luxe text-ivory-dim"
        >
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={form.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-2 text-sm text-gold-soft">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs tracking-luxe text-ivory-dim"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-none`}
          placeholder="Tell me a little about the work you have in mind."
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-2 text-sm text-gold-soft"
          >
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-sm border border-gold/60 bg-gold/10 px-7 py-4 text-sm font-medium tracking-luxe text-gold transition-colors hover:bg-gold hover:text-ink sm:w-auto"
      >
        SEND ENQUIRY
      </button>
    </form>
  );
}
