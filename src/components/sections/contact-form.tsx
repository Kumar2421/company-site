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

/**
 * UI + validation only. No submit endpoint yet — api.mlforge.in isn't live,
 * so this stops at onSubmit and reports a local "sent" state instead of
 * posting anywhere.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
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

      <NovaButton type="submit" size="md" className="mt-2 self-start">
        Send message
      </NovaButton>
    </form>
  );
}
