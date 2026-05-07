"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — bots tend to fill this. Real users never see it. */
  company: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error.");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto mb-12 max-w-[640px] rounded-[14px] border border-border bg-bg-card p-6 text-left sm:p-8"
    >
      {/* Honeypot — visually hidden, ignored by users, often filled by bots */}
      <div aria-hidden className="hidden" tabIndex={-1}>
        <label>
          Don&apos;t fill this out:
          <input
            type="text"
            name="company"
            autoComplete="off"
            tabIndex={-1}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="cf-name">
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            disabled={isSubmitting}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
            placeholder="Jane Doe"
          />
        </Field>

        <Field label="Email" htmlFor="cf-email">
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            disabled={isSubmitting}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="input"
            placeholder="jane@example.com"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Subject" htmlFor="cf-subject" optional>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            maxLength={120}
            disabled={isSubmitting}
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="input"
            placeholder="Project, role, or just saying hi"
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Message" htmlFor="cf-message">
          <textarea
            id="cf-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={5}
            disabled={isSubmitting}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="input resize-y"
            placeholder="Tell me a bit about what you have in mind…"
          />
          <div className="mt-1.5 text-right font-mono text-[0.7rem] text-text-dim">
            {form.message.length}/2000
          </div>
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white bg-white px-6 py-3.5 text-[0.95rem] font-medium text-black transition hover:-translate-y-px hover:shadow-card-hover disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Spinner /> Sending…
          </>
        ) : (
          <>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M22 2L11 13" />
              <path d="M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Send message
          </>
        )}
      </button>

      {status === "success" && (
        <p
          role="status"
          className="mt-5 rounded-md border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-[0.92rem] text-success"
        >
          Thanks — your message is on its way. I&apos;ll get back to you within a day.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="mt-5 rounded-md border border-red-500/25 bg-red-500/10 px-4 py-3 text-[0.92rem] text-red-300"
        >
          {errorMsg ||
            "Something went wrong. Please try again, or email me directly at tanzeelabbaskhan7@gmail.com."}
        </p>
      )}

      <style jsx>{`
        :global(.input) {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          color: #ededed;
          font-family: inherit;
          font-size: 0.92rem;
          padding: 0.7rem 0.85rem;
          transition: border-color 0.15s ease, background 0.15s ease,
            box-shadow 0.15s ease;
          outline: none;
        }
        :global(.input::placeholder) {
          color: #71717a;
        }
        :global(.input:focus) {
          border-color: rgba(139, 92, 246, 0.55);
          background: rgba(255, 255, 255, 0.04);
          box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.12);
        }
        :global(.input:disabled) {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.06em] text-text-dim"
      >
        {label}
        {optional && (
          <span className="rounded bg-white/[0.04] px-1.5 py-px text-[0.62rem] normal-case tracking-normal text-text-dim">
            optional
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.25"
      />
      <path
        d="M22 12a10 10 0 0 0-10-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
