"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="rounded border border-line bg-white/[0.045] p-5 shadow-card backdrop-blur" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Name
          <input className="field" name="name" type="text" placeholder="Your name" required />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-300">
          Email
          <input className="field" name="email" type="email" placeholder="you@example.com" required />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-300">
        Message
        <textarea className="field min-h-36 resize-y" name="message" placeholder="Tell me about your project" required />
      </label>
      <button className="button-primary mt-5 w-full justify-center sm:w-auto" type="submit">
        Send Message
        <Send size={18} aria-hidden="true" />
      </button>
      {sent ? <p className="mt-4 text-sm text-cyan">Thanks. Your message is ready to wire to a backend.</p> : null}
    </form>
  );
}
