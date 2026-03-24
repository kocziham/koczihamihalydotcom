import type { Metadata } from "next";
import Link from "next/link";
import {
  Database,
  BrainCircuit,
  Users,
  BookOpen,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { GlowOrb } from "@/components/visuals/GlowOrb";
import { GeometricAccent } from "@/components/visuals/GeometricAccent";

export const metadata: Metadata = {
  title: "Mihaly Kocziha — Data & AI Consulting",
  description:
    "Senior data and AI consulting executive. 17+ years helping organisations turn data into strategic advantage. Head of Consulting at SMP Solutions.",
};

/* ─── Topic cards ───────────────────────────────────────────── */
const TOPICS = [
  {
    icon: Database,
    label: "Data Strategy",
    description:
      "Building data platforms that scale — from architecture decisions to Azure and Databricks implementations that actually ship.",
    href: "/blog",
  },
  {
    icon: BrainCircuit,
    label: "AI in Practice",
    description:
      "Cutting through the noise: what enterprise AI adoption looks like when the slide deck meets the data warehouse.",
    href: "/blog",
  },
  {
    icon: Users,
    label: "Consulting & Leadership",
    description:
      "Running high-performing consulting teams. Selling complex engagements, managing delivery, and keeping clients for a decade.",
    href: "/blog",
  },
  {
    icon: BookOpen,
    label: "Case Studies",
    description:
      "Real transformations — anonymised where needed, honest about what worked and what didn't.",
    href: "/blog",
  },
] as const;

/* ─── Stat pills ────────────────────────────────────────────── */
const STATS = [
  { value: "17+",  label: "years in data & AI" },
  { value: "Head", label: "of Consulting, SMP Solutions" },
  { value: "Azure", label: "& Databricks expert" },
] as const;

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* ════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "calc(100dvh - 56px)",
          paddingTop: "calc(56px + 4rem)",
          paddingBottom: "6rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Radial glow behind headline — existing */}
        <div className="hero-glow" aria-hidden="true" />

        {/* Secondary glow orb — bottom-right quadrant for depth */}
        <GlowOrb
          size={600}
          color="#3b82f6"
          className="absolute -bottom-24 -right-24"
        />

        {/* Geometric accent — top-right corner, partially clipped */}
        <GeometricAccent
          size={420}
          className="absolute -top-8 -right-16"
        />

        <div
          className="relative flex flex-col items-center gap-6"
          style={{ maxWidth: "740px", margin: "0 auto" }}
        >
          {/* Role badge */}
          <div
            className="animate-fade-up delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide"
            style={{
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "var(--accent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />
            Head of Consulting · SMP Solutions
          </div>

          {/* Main headline */}
          <h1
            className="animate-fade-up delay-200 font-semibold text-balance"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            Turning data into
            <br />
            <span style={{ color: "var(--accent)" }}>strategic advantage</span>
          </h1>

          {/* Subheadline */}
          <p
            className="animate-fade-up delay-300 text-balance"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
              maxWidth: "560px",
            }}
          >
            17+ years helping organisations build data platforms, adopt AI at
            scale, and grow consulting practices that deliver lasting results.
            I write about what actually works.
          </p>

          {/* Stat pills */}
          <ul
            className="animate-fade-up delay-400 flex flex-wrap justify-center gap-3"
            aria-label="Quick facts"
          >
            {STATS.map(({ value, label }) => (
              <li
                key={value}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--muted-foreground)",
                }}
              >
                <span
                  className="font-semibold"
                  style={{ color: "var(--foreground)" }}
                >
                  {value}
                </span>
                {label}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="animate-fade-up delay-500 flex flex-wrap items-center justify-center gap-3 mt-2">
            {/* Primary CTA */}
            <Link href="/cv" className="btn-primary group">
              View CV
              <ChevronRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary CTA */}
            <Link href="/blog" className="btn-secondary group">
              Read the Blog
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="animate-fade-in delay-800 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--muted-foreground)", opacity: 0.5 }}
          >
            scroll
          </span>
          <div
            className="w-px h-6"
            style={{
              background:
                "linear-gradient(to bottom, var(--border), transparent)",
            }}
          />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TOPICS SECTION
          ════════════════════════════════════════════════════════ */}
      <section
        className="px-6 pb-28"
        style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
      >
        {/* Section label */}
        <div className="mb-12">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Writing
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
            }}
          >
            What I write about
          </h2>
          <p
            className="mt-2 text-sm"
            style={{ color: "var(--muted-foreground)", maxWidth: "420px" }}
          >
            Practical perspectives from 17 years in the field — not thought
            leadership, but field notes.
          </p>
        </div>

        {/* Cards grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOPICS.map(({ icon: Icon, label, description, href }, i) => (
            <li key={label}>
              <Link
                href={href}
                className="card-lift group flex flex-col gap-4 h-full p-6 rounded-xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow-sm)",
                  animationDelay: `${(i + 1) * 100}ms`,
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150"
                  style={{
                    background: "rgba(59,130,246,0.08)",
                    border: "1px solid rgba(59,130,246,0.15)",
                  }}
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: "var(--accent)" }}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3
                    className="text-sm font-semibold tracking-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {description}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="flex items-center gap-1 text-xs font-medium transition-colors duration-150 mt-auto"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <span className="group-hover:text-foreground transition-colors duration-150">
                    Read posts
                  </span>
                  <ArrowRight
                    className="w-3 h-3 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-foreground"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
