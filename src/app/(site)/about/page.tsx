import type { Metadata } from "next";
import Image from "next/image";
import { Download, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Mihaly Kocziha",
  description:
    "Head of Consulting at SMP Solutions — 17+ years in data platforms, AI strategy, and enterprise consulting across banking, healthcare, and manufacturing.",
};

const FACTS = [
  { label: "Current role", value: "Head of Consulting, SMP Solutions" },
  { label: "Scope", value: "Data, AI & Banking Solutions" },
  { label: "Industry", value: "Multi-sector consulting" },
  { label: "Experience", value: "17+ years" },
  { label: "Location", value: "Budapest, Hungary" },
  { label: "Stack", value: "Azure, Databricks, Fabric, AI/ML" },
] as const;

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Page header */}
      <header
        className="px-6"
        style={{
          paddingTop: "calc(56px + 3rem)",
          paddingBottom: "2rem",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <p
          className="text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          About
        </p>
        <h1
          className="font-semibold"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Mihaly Kocziha
        </h1>
        <p
          className="mt-2 text-sm"
          style={{ color: "var(--muted-foreground)" }}
        >
          Head of Consulting — Data, AI and Banking Solutions at SMP Solutions
        </p>
        <span
          className="flex items-center gap-1.5 text-xs mt-3"
          style={{ color: "var(--muted-foreground)" }}
        >
          <MapPin className="w-3 h-3" />
          Budapest, Hungary
        </span>
      </header>

      {/* Main content section */}
      <section
        className="px-6 pb-24"
        style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Sidebar — first in DOM for mobile, second visually on desktop */}
          <aside
            className="lg:order-2"
            style={{ alignSelf: "start" }}
          >
            <div
              className="flex flex-col gap-5 lg:sticky"
              style={{ top: "calc(56px + 2rem)" }}
            >
              {/* Profile photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: "180px",
                  height: "180px",
                  borderRadius: "var(--radius-xl)",
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
                  sizes="180px"
                />
              </div>

              {/* At a glance card */}
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
                {FACTS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-baseline gap-4 text-sm py-2"
                    style={{ borderTop: "1px solid var(--border)" }}
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

              {/* Desktop CV button */}
              <a
                href="/cv/Mihaly_Kocziha_CV.pdf"
                download
                className="btn-primary justify-center hidden lg:inline-flex"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </a>
            </div>
          </aside>

          {/* Narrative bio — second in DOM, first visually on desktop */}
          <div className="lg:order-1">
            <div
              className="flex flex-col gap-5 text-base leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  My career in data began in financial services.
                </strong>{" "}
                At Citibank, I built credit risk reporting and analytics
                solutions — automated pipelines that improved the efficiency
                of monthly reporting by 30%. I went on to develop business
                intelligence and data warehouse solutions for information
                security, working across the full SQL Server stack. Those
                early years shaped a principle I still apply: the most
                impactful data work starts with the business problem, not the
                technology.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  At Euronet Worldwide, I moved from building systems to
                  building teams.
                </strong>{" "}
                Over eight years I progressed from finance systems developer
                to engineering manager, growing a team of 25+ professionals
                across multiple locations. We delivered an automated payments
                and invoicing platform that reduced manual errors by 30% and
                accelerated payment cycles by 15%, pioneered the company&apos;s
                adoption of Azure cloud services, and rolled out PowerBI as the
                enterprise reporting standard.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  At SMP Solutions, I established the data practice from the
                  ground up.
                </strong>{" "}
                Starting in 2022, I built the team, defined the delivery
                methodology, and led engagements across banking and
                manufacturing. Key outcomes included enterprise data warehouse
                implementations, cloud migrations that reduced infrastructure
                costs by 25%, and a data architecture framework that improved
                software delivery times by 35%. I also founded the AI
                engineering and development teams, bringing machine learning
                capabilities to both internal processes and client solutions.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  Today I lead consulting across data, AI, and banking
                  solutions.
                </strong>{" "}
                My remit covers multiple specialist teams — data strategy
                consultants, banking core system migration, unified front-end
                solutions, and AI applications — serving clients in banking,
                healthcare, retail, sports, agriculture, and manufacturing.
                I work closely with both technical teams and C-level
                stakeholders to align project delivery with business strategy.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  My technical foundation is in the Microsoft Azure ecosystem.
                </strong>{" "}
                Databricks, Data Factory, Synapse Analytics, and increasingly
                Microsoft Fabric. I hold certifications in Azure Data
                Engineering, Power BI, and Databricks Lakehouse. This blog is
                where I share practical perspectives on data strategy, AI
                implementation, and enterprise consulting.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile CV button */}
        <a
          href="/cv/Mihaly_Kocziha_CV.pdf"
          download
          className="btn-primary justify-center mt-12 lg:hidden"
          style={{ width: "100%" }}
        >
          <Download className="w-3.5 h-3.5" />
          Download CV
        </a>
      </section>
    </main>
  );
}
