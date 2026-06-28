"use client";

import { trustedByLogos } from "@/lib/data/content";

export function TrustedBy() {
  const items = [...trustedByLogos, ...trustedByLogos];

  return (
    <section className="relative border-y border-white/5 py-12">
      <div className="container-max px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-text-secondary">
          Trusted by businesses across industries
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {items.map((logo, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 font-heading text-lg font-semibold text-text-secondary/70 transition-colors hover:text-white"
              >
                <span className="h-2 w-2 rounded-full bg-aurora-gradient" />
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
