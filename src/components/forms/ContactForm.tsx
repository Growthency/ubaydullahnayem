"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";

type Intent = "admissions" | "lecture" | "writing" | "other";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [intent, setIntent] = useState<Intent>("admissions");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, intent, message }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Could not send. Please try again or message on WhatsApp.");
      }
      toast.success("Salam — we received it.", {
        description: "We read everything. Replies are slow but real.",
      });
      setName("");
      setEmail("");
      setPhone("");
      setIntent("admissions");
      setMessage("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      toast.error("Could not send", { description: msg });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your name">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputCls}
            placeholder="Mohammad Aiman"
          />
        </Field>
        <Field label="Email">
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputCls}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Phone (optional)">
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputCls}
            placeholder="+880…"
          />
        </Field>
        <Field label="About">
          <select
            value={intent}
            onChange={(e) => setIntent(e.target.value as Intent)}
            className={inputCls}
          >
            <option value="admissions">Admissions inquiry</option>
            <option value="lecture">Lecture or dars request</option>
            <option value="writing">A writing question</option>
            <option value="other">Something else</option>
          </select>
        </Field>
      </div>

      <Field label="Your note">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className={inputCls}
          placeholder="Two or three sentences is enough."
        />
      </Field>

      <div className="flex items-center justify-between pt-2">
        <p className="text-xs text-ink-muted max-w-xs">
          By sending this you agree to a slow, sincere reply — not a marketing
          email. We do not share your information.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="btn-mag btn-mag-primary disabled:opacity-60"
        >
          <Send size={14} />
          {submitting ? "Sending…" : "Send the note"}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-button px-4 py-3 bg-paper-2 border border-border focus:bg-paper focus:border-emerald focus:ring-2 focus:ring-emerald/15 outline-none text-ink placeholder:text-ink-subtle transition-colors font-body";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs tracking-[0.18em] uppercase text-ink-muted">{label}</span>
      {children}
    </label>
  );
}
