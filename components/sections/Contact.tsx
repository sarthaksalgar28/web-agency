"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  CalendarClock,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export function Contact() {
  const { c } = useLanguage();
  const t = c.contact;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (
        serviceId &&
        templateId &&
        publicKey &&
        !serviceId.startsWith("your_")
      ) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            budget: data.budget,
            message: data.message,
          },
          publicKey
        );
      } else {
        // Placeholder env — simulate success so the UI is testable
        await new Promise((r) => setTimeout(r, 800));
      }
      setStatus("sent");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-hairline/5 border border-hairline/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary/60 placeholder:text-text-secondary";

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl glass p-7 sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm">{t.name}</label>
                  <input
                    {...register("name", { required: t.nameRequired })}
                    className={inputClass}
                    placeholder={t.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm">{t.email}</label>
                  <input
                    {...register("email", {
                      required: t.emailRequired,
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: t.emailInvalid,
                      },
                    })}
                    className={inputClass}
                    placeholder={t.emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm">{t.budget}</label>
                <select {...register("budget")} className={inputClass}>
                  {t.budgetOptions.map((opt) => (
                    <option key={opt} className="bg-surface">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm">{t.projectDetails}</label>
                <textarea
                  {...register("message", {
                    required: t.projectRequired,
                  })}
                  rows={5}
                  className={cn(inputClass, "resize-none")}
                  placeholder={t.projectPlaceholder}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-aurora-gradient bg-[length:200%_auto] px-6 py-3.5 text-sm font-medium text-white shadow-glow transition-all hover:bg-right disabled:opacity-70"
              >
                {status === "sending" && (
                  <>
                    <Loader2 size={18} className="animate-spin" /> {t.sending}
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={18} /> {t.sent}
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    <Send size={18} /> {t.send}
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="mt-3 text-center text-xs text-red-400">
                  {t.error}
                </p>
              )}
            </form>
          </Reveal>

          {/* Contact channels */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <ContactCard
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                icon={MessageCircle}
                label={t.cards.whatsappLabel}
                value={t.cards.whatsappValue}
                accent="text-success"
              />
              <ContactCard
                href={`mailto:${siteConfig.contact.email}`}
                icon={Mail}
                label={t.cards.emailLabel}
                value={siteConfig.contact.email}
                accent="text-primary"
              />
              <ContactCard
                href={siteConfig.contact.calendly}
                icon={CalendarClock}
                label={t.cards.bookCallLabel}
                value={t.cards.bookCallValue}
                accent="text-secondary"
              />
              <div className="flex-1 overflow-hidden rounded-3xl glass">
                <div className="flex items-center gap-2 px-5 py-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">{siteConfig.contact.address}</span>
                </div>
                <iframe
                  title={t.mapTitle}
                  src={siteConfig.contact.mapsEmbed}
                  className="h-48 w-full grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  accent,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 rounded-3xl glass p-5 transition-colors hover:border-primary/40"
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-hairline/5">
        <Icon size={20} className={accent} />
      </span>
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        <span className="block text-xs text-text-secondary">{value}</span>
      </span>
    </motion.a>
  );
}
