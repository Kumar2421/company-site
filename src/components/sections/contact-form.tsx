"use client";

import { useState, type FormEvent } from "react";
import { NovaButton } from "@/components/ui/nova-button";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  {
    name: "company",
    label: "Company",
    type: "text",
    autoComplete: "organization",
  },
] as const;

/** Posts to /api/contact, which sends via Resend. */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Submit failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-card bg-white p-8 text-center shadow-card"
      >
        <p className="text-lead font-medium">Thanks — message received.</p>
        <p className="mt-2 text-body text-ink-60">
          We reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[560px] flex-col gap-5 rounded-card bg-white p-8 shadow-card"
      noValidate
    >
      {FIELDS.map((field) => (
        <label key={field.name} className="block text-left">
          <span className="mb-1.5 block text-small font-medium text-ink">
            {field.label}
          </span>
          <input
            type={field.type}
            name={field.name}
            autoComplete={field.autoComplete}
            required
            className="min-h-11 w-full rounded-card border border-ink-08 bg-white px-3.5 py-2.5 text-body text-ink outline-none transition-colors duration-150 focus:border-brand"
          />
        </label>
      ))}

      <label className="block text-left">
        <span className="mb-1.5 block text-small font-medium text-ink">
          Message
        </span>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-card border border-ink-08 bg-white px-3.5 py-2.5 text-body text-ink outline-none transition-colors duration-150 focus:border-brand"
        />
      </label>

      {status === "error" && (
        <p role="alert" className="text-small text-[#b5651d]">
          Something went wrong — try again, or email us directly.
        </p>
      )}

      <NovaButton
        type="submit"
        size="md"
        disabled={status === "sending"}
        className="mt-2 self-start"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </NovaButton>
    </form>
  );
}
