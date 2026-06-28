"use client";

import { getPortfolioStats } from "@/lib/data/projects";
import { Counter } from "@/components/ui/Counter";
import { Reveal } from "@/components/ui/Reveal";
import { Briefcase, Layers, Cpu, Calendar, Smile, Smartphone } from "lucide-react";

export function Stats() {
  const s = getPortfolioStats();

  const items = [
    { icon: Briefcase, label: "Total Projects", value: s.totalProjects, suffix: "+" },
    { icon: Layers, label: "Industries Served", value: s.industriesServed, suffix: "" },
    { icon: Cpu, label: "Technologies Used", value: s.technologiesUsed, suffix: "+" },
    { icon: Calendar, label: "Years Experience", value: s.yearsExperience, suffix: "+" },
    { icon: Smile, label: "Client Satisfaction", value: s.clientSatisfaction, suffix: "%" },
    { icon: Smartphone, label: "Responsive Sites", value: s.responsiveWebsites, suffix: "" },
  ];

  return (
    <section className="relative py-16">
      <div className="container-max px-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="rounded-3xl glass p-6 text-center transition-colors hover:border-primary/40">
                <item.icon
                  size={22}
                  className="mx-auto mb-3 text-primary"
                />
                <div className="font-heading text-3xl font-bold">
                  <Counter to={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-text-secondary">
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
