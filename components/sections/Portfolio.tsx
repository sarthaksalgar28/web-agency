"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  projects,
  getAllIndustries,
  getAllTechnologies,
} from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { usePortfolioFilter } from "@/components/providers/PortfolioFilterContext";
import { cn } from "@/lib/utils";

type FilterType = "industry" | "technology" | "featured";

export function Portfolio() {
  const { industry: hoveredIndustry, setIndustry } = usePortfolioFilter();
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [query, setQuery] = useState("");

  const industries = getAllIndustries();
  const technologies = getAllTechnologies();

  // hovered industry from Industries section takes visual precedence
  const effectiveIndustry = hoveredIndustry ?? activeIndustry;

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (effectiveIndustry && p.industry !== effectiveIndustry) return false;
      if (activeTech && !p.technologies.includes(activeTech)) return false;
      if (featuredOnly && !p.featured) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = [
          p.title,
          p.client,
          p.industry,
          p.category,
          p.description,
          ...p.technologies,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [effectiveIndustry, activeTech, featuredOnly, query]);

  const clearAll = () => {
    setActiveIndustry(null);
    setIndustry(null);
    setActiveTech(null);
    setFeaturedOnly(false);
    setQuery("");
  };

  const hasFilters =
    !!effectiveIndustry || !!activeTech || featuredOnly || !!query;

  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work & Case Studies"
          subtitle="Real projects, real results. Filter by industry or technology, or search to find exactly what you need."
        />

        {/* Search + controls */}
        <div className="mt-12 flex flex-col gap-4">
          <div className="mx-auto flex w-full max-w-xl items-center gap-2 rounded-2xl glass px-4 py-3">
            <Search size={18} className="text-text-secondary" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, clients, technologies…"
              className="w-full bg-transparent text-sm outline-none placeholder:text-text-secondary"
              aria-label="Search portfolio"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Clear search">
                <X size={16} className="text-text-secondary hover:text-white" />
              </button>
            )}
          </div>

          {/* Industry filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <FilterChip
              label="All"
              active={!activeIndustry && !featuredOnly}
              onClick={clearAll}
            />
            <FilterChip
              label="★ Featured"
              active={featuredOnly}
              onClick={() => setFeaturedOnly((v) => !v)}
            />
            {industries.map((ind) => (
              <FilterChip
                key={ind}
                label={ind}
                active={activeIndustry === ind}
                onClick={() =>
                  setActiveIndustry((cur) => (cur === ind ? null : ind))
                }
              />
            ))}
          </div>

          {/* Technology filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {technologies.map((tech) => (
              <FilterChip
                key={tech}
                small
                label={tech}
                active={activeTech === tech}
                onClick={() =>
                  setActiveTech((cur) => (cur === tech ? null : tech))
                }
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-text-secondary">
              No projects match your filters.
            </p>
            {hasFilters && (
              <button
                onClick={clearAll}
                className="mt-3 text-sm text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({
  label,
  active,
  onClick,
  small,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border transition-all duration-200",
        small ? "px-3 py-1 text-xs" : "px-4 py-2 text-sm",
        active
          ? "border-primary/60 bg-primary/15 text-white"
          : "border-white/10 bg-white/5 text-text-secondary hover:border-white/30 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
