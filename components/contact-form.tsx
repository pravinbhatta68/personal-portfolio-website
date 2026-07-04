"use client";

import { useState, useTransition } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";

const formSubmitEndpoint = "https://formsubmit.co/ajax/pravinbhatta68@gmail.com";

const fields = [
  ["fullName", "Full Name", "text"],
  ["email", "Email", "email"],
  ["phone", "Phone Number", "tel"],
  ["company", "Company Name", "text"],
  ["subject", "Subject", "text"],
] as const;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function submit(formData: FormData) {
    setStatus("idle");
    setMessage("");
    startTransition(async () => {
      formData.set("_subject", "New consultation request from Asthetic Pravin");
      formData.set("_template", "table");
      formData.set("_captcha", "false");

      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = (await response.json()) as { message?: string };
      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Message sent successfully. Please check your email inbox.");
      } else {
        setStatus("error");
        setMessage(data.message || "Please check the form and try again.");
      }
    });
  }

  return (
    <form action={submit} className="grid gap-4" aria-label="Contact form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map(([name, label, type]) => (
          <label key={name} className="grid gap-2 text-sm font-medium text-white/72">
            {label}
            <Input name={name} type={type} required={name !== "phone" && name !== "company"} placeholder={label} />
          </label>
        ))}
      </div>
      <label className="grid gap-2 text-sm font-medium text-white/72">
        Message
        <Textarea name="message" required placeholder="Tell me about your goals, current marketing, and where AI could help." />
      </label>
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? "Sending..." : "Send Message"} <Send size={18} />
      </Button>
      {status !== "idle" ? (
        <p className={status === "success" ? "flex items-center gap-2 text-sm text-emerald-300" : "text-sm text-red-300"}>
          {status === "success" ? <CheckCircle2 size={18} /> : null}
          {message}
        </p>
      ) : null}
    </form>
  );
}
