import type { Metadata } from "next";
import Link from "next/link";
import { Download, MapPin, Calendar } from "lucide-react";
import { GridPattern } from "@/components/visuals/GridPattern";
import { GeometricAccent } from "@/components/visuals/GeometricAccent";
import { GlowOrb } from "@/components/visuals/GlowOrb";

export const metadata: Metadata = {
  title: "About — Mihaly Kocziha",
  description:
    "17+ years in data and AI consulting. Head of Consulting at SMP Solutions. Background in data engineering, AI strategy, and building teams that deliver.",
};

/* ─── Career timeline ────────────────────────────────────────── */
const TIMELINE = [
  {
    year: "2007",
    role: "Analyst, Data & Reporting",
    company: "Citibank",
    description:
      "Started in financial services data — building reporting pipelines and learning what it means to make data reliable under real operational pressure.",
  },
  {
    year: "2013",
    role: "Engineering Manager",
    company: "Euronet Worldwide",
    description:
      "Led engineering teams delivering payment and transaction data platforms across multiple markets. First significant exposure to cross-border data architecture and stakeholder complexity.",
  },
  {
    year: "2018",
    role: "Head of Data",
    company: "SMP Solutions",
    description:
      "Built and scaled the data practice from the ground up — hired the team, shaped the methodology, and delivered Azure and Databricks implementations for enterprise clients.",
  },
  {
    year: "2022",
    role: "Head of Consulting",
    company: "SMP Solutions",
    description:
      "Expanded remit to own the full consulting portfolio: sales, delivery, client relationships, and practice development. Focus on AI strategy and enterprise-scale data transformation.",
  },
] as const;

/* ─── Expertise areas ────────────────────────────────────────── */
const EXPERTISE = [
  "Azure Data Platform",
  "Databricks & Spark",
  "AI / ML Strategy",
  "Data Architecture",
  "Consulting Practice Management",
  "Enterprise Data Governance",
  "Team Building & Leadership",
  "Client Engagement & Sales",
] as const;

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* ════════════════════════════════════════════════════════
          HERO STRIP
          ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden border-b"
        style={{
          borderColor: "var(--border)",
          paddingTop: "calc(56px + 5rem)",
          paddingBottom: "5rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Background layers */}
        <GridPattern cellSize={40} opacity={0.04} />
        <GlowOrb
          size={500}
          color="#3b82f6"
          className="absolute -top-32 -left-32 opacity-60"
        />
        <GeometricAccent
          size={320}
          className="absolute -top-6 -right-12 opacity-70"
        />

        <div
          className="relative"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {/* Page label */}
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4 animate-fade-up"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>

          <h1
            className="font-semibold animate-fade-up delay-100 text-balance"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              maxWidth: "640px",
            }}
          >
            17 years of turning
            <br />
            <span style={{ color: "var(--accent)" }}>data into decisions</span>
          </h1>

          <p
            className="mt-5 animate-fade-up delay-200 text-balance"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.7,
              color: "var(--muted-foreground)",
              maxWidth: "560px",
            }}
          >
            I help organisations build the data and AI capabilities they need to
            actually use what they collect. That means platforms, teams,
            strategy — and occasionally talking clients out of ideas that
            sound good in a boardroom but don&apos;t survive contact with a data
            warehouse.
          </p>

          {/* Location + download */}
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up delay-300">
            <span
              className="flex items-center gap-1.5 text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              <MapPin className="w-3.5 h-3.5" />
              Budapest, Hungary
            </span>

            <a
              href="/cv/Mihaly_Kocziha_CV.pdf"
              download
              className="btn-primary group"
            >
              <Download className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" />
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          MAIN CONTENT — two-column on desktop
          ════════════════════════════════════════════════════════ */}
      <section
        className="px-6 py-20"
        style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* ── Left column: bio + expertise ── */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {/* Professional summary */}
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--accent)" }}
              >
                Background
              </p>
              <div
                className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ color: "var(--muted-foreground)" }}
              >
                <p>
                  I started in financial services data at Citibank — writing
                  reports nobody asked for, then gradually learning which ones
                  people actually needed. That distinction has shaped how I
                  think about data work ever since: the problem is rarely
                  technical.
                </p>
                <p>
                  After a stint in engineering management at Euronet Worldwide,
                  I moved into consulting at SMP Solutions. I built the data
                  practice from scratch, then took on the full consulting
                  portfolio. Today I run a team of consultants, oversee client
                  engagements across industries, and spend most of my time at
                  the intersection of data strategy and organisational change.
                </p>
                <p>
                  On the technical side, I work primarily in the Azure
                  ecosystem — Databricks, Azure Data Factory, Synapse, and
                  increasingly AI services. I&apos;m not a hands-on engineer
                  day-to-day, but I know enough to call out bad architecture
                  before it ships.
                </p>
                <p>
                  I write about what I see in the field — what works, what
                  doesn&apos;t, and where the industry is collectively
                  deluding itself.
                </p>
              </div>
            </div>

            {/* Expertise tags */}
            <div>
              <p
                className="text-xs font-medium tracking-widest uppercase mb-5"
                style={{ color: "var(--accent)" }}
              >
                Core expertise
              </p>
              <ul className="flex flex-wrap gap-2">
                {EXPERTISE.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      color: "var(--foreground)",
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right column: photo placeholder ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Photo placeholder card */}
            <div
              className="relative overflow-hidden rounded-2xl flex items-center justify-center"
              style={{
                aspectRatio: "3 / 4",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              {/* Inner grid texture on the placeholder */}
              <GridPattern cellSize={24} opacity={0.055} />

              {/* Subtle accent glow in the corner */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
                  filter: "blur(32px)",
                }}
              />

              <div
                className="relative flex flex-col items-center gap-3 px-6 text-center"
                aria-label="Profile photo placeholder"
              >
                {/* Stylised avatar outline */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    border: "1px solid rgba(59,130,246,0.25)",
                    background: "rgba(59,130,246,0.06)",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="8"
                      r="4"
                      stroke="rgba(59,130,246,0.5)"
                      strokeWidth="1.25"
                    />
                    <path
                      d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                      stroke="rgba(59,130,246,0.5)"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p
                  className="text-xs font-medium tracking-wide"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Photo coming soon
                </p>
              </div>
            </div>

            {/* Quick facts card */}
            <div
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-xs font-medium tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                At a glance
              </p>
              {[
                { label: "Current role", value: "Head of Consulting, SMP Solutions" },
                { label: "Industry", value: "Data & AI Consulting" },
                { label: "Experience", value: "17+ years" },
                { label: "Location", value: "Budapest, Hungary" },
                { label: "Stack focus", value: "Azure · Databricks · AI/ML" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex justify-between items-baseline gap-4 text-sm py-2"
                  style={{
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <span style={{ color: "var(--muted-foreground)" }}>
                    {label}
                  </span>
                  <span
                    className="text-right font-medium"
                    style={{ color: "var(--foreground)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CAREER TIMELINE
          ════════════════════════════════════════════════════════ */}
      <section
        className="px-6 pb-28"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div className="mb-12">
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent)" }}
          >
            Career highlights
          </p>
          <h2
            className="font-semibold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
            }}
          >
            The path so far
          </h2>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Track line */}
          <div
            className="absolute top-0 bottom-0 left-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--border) 5%, var(--border) 95%, transparent)",
            }}
            aria-hidden="true"
          />

          <ol className="flex flex-col">
            {TIMELINE.map(({ year, role, company, description }, i) => (
              <li
                key={year}
                className="relative pl-8 pb-12 last:pb-0 group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full transition-colors duration-200"
                  style={{
                    background: i === TIMELINE.length - 1
                      ? "var(--accent)"
                      : "var(--surface-raised)",
                    border: `1px solid ${
                      i === TIMELINE.length - 1
                        ? "var(--accent)"
                        : "var(--border)"
                    }`,
                    boxShadow:
                      i === TIMELINE.length - 1
                        ? "0 0 8px rgba(59,130,246,0.35)"
                        : "none",
                  }}
                  aria-hidden="true"
                />

                {/* Year badge + role */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span
                    className="inline-flex items-center gap-1 text-xs font-medium tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    <Calendar className="w-3 h-3" />
                    {year}
                  </span>
                  <h3
                    className="text-base font-semibold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {role}
                  </h3>
                  <span
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    · {company}
                  </span>
                </div>

                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--muted-foreground)",
                    maxWidth: "560px",
                  }}
                >
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* CV download CTA at the foot of the timeline */}
        <div
          className="mt-14 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              Want the full picture?
            </p>
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--muted-foreground)" }}
            >
              The CV has the detail — roles, projects, certifications.
            </p>
          </div>
          <a
            href="/cv/Mihaly_Kocziha_CV.pdf"
            download
            className="btn-primary group shrink-0"
          >
            <Download className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-y-0.5" />
            Download CV (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
