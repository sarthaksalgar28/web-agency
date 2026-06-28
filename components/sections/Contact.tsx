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
import { cn } from "@/lib/utils";

interface FormValues {
  name: string;
  email: string;
  budget: string;
  message: string;
}

export function Contact() {
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
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Tell us about your project and we'll get back within one business day."
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
                  <label className="mb-1.5 block text-sm">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-1.5 block text-sm">Email</label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm">Budget</label>
                <select {...register("budget")} className={inputClass}>
                  <option className="bg-surface">Under ₹15,000</option>
                  <option className="bg-surface">₹15,000 – ₹45,000</option>
                  <option className="bg-surface">₹45,000 – ₹1,50,000</option>
                  <option className="bg-surface">₹1,50,000+</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-sm">Project details</label>
                <textarea
                  {...register("message", {
                    required: "Please tell us about your project",
                  })}
                  rows={5}
                  className={cn(inputClass, "resize-none")}
                  placeholder="What are you looking to build?"
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
                    <Loader2 size={18} className="animate-spin" /> Sending…
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 size={18} /> Message sent!
                  </>
                )}
                {(status === "idle" || status === "error") && (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="mt-3 text-center text-xs text-red-400">
                  Something went wrong. Please try WhatsApp or email instead.
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
                label="WhatsApp"
                value="Chat with us instantly"
                accent="text-success"
              />
              <ContactCard
                href={`mailto:${siteConfig.contact.email}`}
                icon={Mail}
                label="Email"
                value={siteConfig.contact.email}
                accent="text-primary"
              />
              <ContactCard
                href={siteConfig.contact.calendly}
                icon={CalendarClock}
                label="Book a Call"
                value="Schedule a free intro call"
                accent="text-secondary"
              />
              <div className="flex-1 overflow-hidden rounded-3xl glass">
                <div className="flex items-center gap-2 px-5 py-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">{siteConfig.contact.address}</span>
                </div>
                <iframe
                  title="Location map"
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
