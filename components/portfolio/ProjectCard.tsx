"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { c } = useLanguage();
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl glass"
    >
      {/* Mockup / preview area */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `radial-gradient(120% 120% at 50% 0%, ${project.themeColor}33 0%, #0B1220 70%)`,
          }}
        />
        {/* Laptop mockup frame */}
        <div className="absolute inset-x-8 top-8 bottom-0">
          <div className="h-full rounded-t-xl border border-hairline/10 bg-surface/80 p-2 shadow-soft">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-hairline/20" />
              <span className="h-2 w-2 rounded-full bg-hairline/20" />
              <span className="h-2 w-2 rounded-full bg-hairline/20" />
            </div>
            <div
              className="h-full rounded-md"
              style={{
                background: `linear-gradient(135deg, ${project.themeColor}55, transparent)`,
              }}
            >
              <div className="flex h-full items-center justify-center font-heading text-sm font-semibold text-white/80">
                {project.title}
              </div>
            </div>
          </div>
        </div>

        <span
          className="absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-medium backdrop-blur"
          style={{
            backgroundColor: `${project.themeColor}22`,
            color: project.themeColor,
            border: `1px solid ${project.themeColor}44`,
          }}
        >
          {c.industryLabels[project.industry] ?? project.industry}
        </span>
        {project.featured && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-aurora-gradient px-3 py-1 text-xs font-medium text-white">
            {c.projectCard.featured}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
          <span className="shrink-0 text-xs text-text-secondary">
            {project.completionDate}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm text-text-secondary line-clamp-3">
          {c.projects[project.slug]?.description ?? project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-hairline/5 px-2.5 py-1 text-[11px] text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-xl bg-aurora-gradient px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            {c.projectCard.caseStudy} <ArrowUpRight size={15} />
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl glass px-4 py-2 text-sm font-medium transition-colors hover:bg-hairline/10"
          >
            {c.projectCard.liveSite} <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
