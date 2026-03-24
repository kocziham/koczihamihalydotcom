import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, MapPin, Calendar } from "lucide-react";
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
      "Built reporting and analytics pipelines within financial services, establishing a foundation in data reliability and operational data management.",
  },
  {
    year: "2013",
    role: "Engineering Manager",
    company: "Euronet Worldwide",
    description:
      "Led engineering teams responsible for payment and transaction data platforms across multiple markets, managing cross-border data architecture and multi-stakeholder delivery.",
  },
  {
    year: "2018",
    role: "Head of Data",
    company: "SMP Solutions",
    description:
      "Founded and scaled the data consulting practice — building the team, defining delivery methodology, and leading Azure and Databricks implementations for enterprise clients.",
  },
  {
    year: "2022",
    role: "Head of Consulting",
    company: "SMP Solutions",
    description:
      "Leading the full consulting portfolio encompassing sales, delivery, client relationships, and practice growth — with a strategic focus on AI adoption and enterprise-scale data transformation.",
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
            I advise organisations on building scalable data platforms and
            adopting AI with a clear return on investment — from technical
            architecture and team design to enterprise-wide strategy and
            delivery governance.
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
                  My career in data began at Citibank, where I developed
                  reporting and analytics solutions within financial services.
                  That early experience instilled a principle that continues to
                  guide my work: the most impactful data initiatives solve
                  business problems first and technology problems second.
                </p>
                <p>
                  Following an engineering management role at Euronet Worldwide,
                  I joined SMP Solutions to establish and grow the data
                  practice. Today, as Head of Consulting, I lead a team of
                  specialist consultants, oversee client engagements across
                  industries, and focus on the intersection of data strategy,
                  AI adoption, and organisational transformation.
                </p>
                <p>
                  My technical foundation is rooted in the Microsoft Azure
                  ecosystem — Databricks, Azure Data Factory, Synapse Analytics,
                  and an expanding portfolio of AI and machine learning services.
                  I maintain strong architectural fluency to ensure that the
                  solutions we design are robust, scalable, and aligned with
                  long-term business objectives.
                </p>
                <p>
                  This blog is where I share perspectives from the field —
                  practical insights on data strategy, AI implementation, and
                  the realities of enterprise consulting.
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

          {/* ── Right column: photo ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Profile photo */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "3 / 4",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <Image
                src="/images/profile.jpeg"
                alt="Mihaly Kocziha"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Subtle bottom fade overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(8,8,8,0.5) 0%, transparent 100%)",
                }}
              />
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
