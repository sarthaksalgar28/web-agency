import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Check,
  Calendar,
  Clock,
  Building2,
  Layers,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";
import { siteConfig } from "@/lib/config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — ${project.category}`,
    description: project.description,
    openGraph: {
      title: `${project.title} · Case Study`,
      description: project.description,
      url: `${siteConfig.url}/work/${project.slug}`,
      images: [{ url: project.heroImage }],
    },
    alternates: { canonical: `${siteConfig.url}/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.slug !== project.slug && p.industry === project.industry)
    .slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pb-16 pt-36">
          <AuroraBackground />
          <div className="container-max relative z-10">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <ArrowLeft size={16} /> Back to portfolio
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{
                  backgroundColor: `${project.themeColor}22`,
                  color: project.themeColor,
                  border: `1px solid ${project.themeColor}44`,
                }}
              >
                {project.industry}
              </span>
              <span className="rounded-full glass px-3 py-1 text-xs">
                {project.category}
              </span>
              {project.featured && (
                <span className="rounded-full bg-aurora-gradient px-3 py-1 text-xs text-white">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-text-secondary">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-aurora-gradient px-6 py-3 text-sm font-medium text-white shadow-glow transition-transform hover:scale-105"
              >
                Visit Live Site <ExternalLink size={16} />
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl glass px-6 py-3 text-sm font-medium transition-colors hover:bg-hairline/10"
                >
                  <Github size={16} /> Source
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Mockup showcase */}
        <section className="px-6 pb-16">
          <div className="container-max">
            <div
              className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12"
              style={{
                background: `radial-gradient(120% 120% at 50% 0%, ${project.themeColor}22 0%, #0B1220 70%)`,
              }}
            >
              <div className="grid items-end gap-8 lg:grid-cols-[1.6fr_1fr]">
                {/* Laptop */}
                <div className="rounded-t-2xl border border-white/10 bg-surface/80 p-3 shadow-soft">
                  <div className="mb-3 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <div
                    className="grid aspect-[16/10] place-items-center rounded-lg"
                    style={{
                      background: `linear-gradient(135deg, ${project.themeColor}66, transparent)`,
                    }}
                  >
                    <span className="font-heading text-2xl font-bold text-white/80">
                      {project.title}
                    </span>
                  </div>
                </div>
                {/* Mobile */}
                <div className="mx-auto w-44 rounded-[2rem] border border-white/10 bg-surface/80 p-2.5 shadow-soft">
                  <div
                    className="grid aspect-[9/19] place-items-center rounded-[1.5rem]"
                    style={{
                      background: `linear-gradient(160deg, ${project.themeColor}66, transparent)`,
                    }}
                  >
                    <span className="px-3 text-center font-heading text-sm font-semibold text-white/80">
                      {project.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta bar */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <MetaItem icon={Building2} label="Client" value={project.client} />
              <MetaItem icon={Layers} label="Industry" value={project.industry} />
              <MetaItem
                icon={Calendar}
                label="Completed"
                value={project.completionDate}
              />
              <MetaItem
                icon={Clock}
                label="Duration"
                value={project.projectDuration}
              />
            </div>
          </div>
        </section>

        {/* Body content */}
        <section className="px-6 pb-24">
          <div className="container-max grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-12">
              <Reveal>
                <Block title="The Challenge" body={project.businessChallenge} />
              </Reveal>
              <Reveal>
                <Block title="Our Solution" body={project.solution} />
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold">
                    Key Features
                  </h2>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 rounded-2xl glass p-4 text-sm"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-success" />
                        <span className="text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <h2 className="font-heading text-2xl font-bold">Results</h2>
                  <ul className="mt-5 space-y-3">
                    {project.results.map((r) => (
                      <li
                        key={r}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-aurora-gradient" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {project.testimonial && (
                <Reveal>
                  <blockquote className="rounded-3xl glass p-8">
                    <p className="text-lg italic text-text-primary/90">
                      “{project.testimonial.quote}”
                    </p>
                    <footer className="mt-4 text-sm text-text-secondary">
                      — {project.testimonial.author}, {project.testimonial.role}
                    </footer>
                  </blockquote>
                </Reveal>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-3xl glass p-6">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-secondary">
                  Technologies
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-hairline/5 px-3 py-1.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl glass p-6">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-text-secondary">
                  Services Provided
                </h3>
                <ul className="mt-4 space-y-2">
                  {project.servicesProvided.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <Check size={14} className="text-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-aurora-gradient p-6 text-white">
                <h3 className="font-heading text-lg font-semibold">
                  Want results like this?
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Let's build something great for your business.
                </p>
                <Link
                  href="/#contact"
                  className="mt-4 inline-flex rounded-xl bg-white/20 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/30"
                >
                  Start Your Project
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="px-6 pb-24">
            <div className="container-max">
              <h2 className="font-heading text-2xl font-bold">
                More in {project.industry}
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/work/${p.slug}`}
                    className="group rounded-3xl glass p-6 transition-transform hover:-translate-y-1"
                  >
                    <span className="text-xs text-text-secondary">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold group-hover:text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary line-clamp-2">
                      {p.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function MetaItem({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl glass p-4">
      <Icon size={18} className="text-primary" />
      <div>
        <div className="text-xs text-text-secondary">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold">{title}</h2>
      <p className="mt-4 leading-relaxed text-text-secondary">{body}</p>
    </div>
  );
}
