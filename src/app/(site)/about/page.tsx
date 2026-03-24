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
                  It started with reporting nobody read.
                </strong>{" "}
                My first role at Citibank was building credit risk reports —
                automated SQL Server and SAS pipelines that transformed the
                monthly reporting stack and improved efficiency by 30%. I moved
                into information security BI, developing data warehouse
                solutions with SSAS, SSIS, and SSRS. That early experience
                taught me something that still drives my work: the most
                impactful data initiatives solve business problems first and
                technology problems second.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  At Euronet Worldwide, I learned to build organisations, not
                  just systems.
                </strong>{" "}
                Over eight years I went from finance systems developer to
                engineering manager, building a team of 25+ professionals from
                scratch. We designed an automated payments and invoicing system
                that cut manual errors by 30% and sped up payment cycles by 15%.
                I led the company&apos;s first move to Azure — reducing
                operational costs by 10% — rolled out PowerBI as the standard
                reporting tool, and built custom ETL software that boosted data
                processing efficiency by 25%.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  I founded the data practice at SMP Solutions from zero.
                </strong>{" "}
                Starting in 2022, I hired the team, defined the delivery
                methodology, and led implementations across banking and
                manufacturing. We delivered enterprise data warehouses, cloud
                migrations that reduced infrastructure costs by 25%, and CRM
                implementations that measurably improved client relationship
                management. A new data architecture framework sped up software
                delivery by 35% across all client projects, and cloud-based
                analytics solutions boosted data-driven decision-making by 30%.
                I established both the AI engineering team — improving internal
                development with modern AI tools — and the AI development team,
                delivering machine learning solutions to customers.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  Today I lead consulting across data, AI, and banking
                  solutions.
                </strong>{" "}
                That means multiple specialist teams: data strategy consultants
                and business analysts, a banking core system migration team,
                a unified front-end solutions team, and an AI applications
                group. Our clients span banking, healthcare, retail, sports,
                agriculture, and manufacturing. I sit between technical teams
                and C-level stakeholders, making sure project objectives align
                with business strategy — and I contribute to business
                development through go-to-market strategy and client workshops.
              </p>

              <p>
                <strong style={{ color: "var(--foreground)" }}>
                  My technical roots are in the Microsoft Azure ecosystem.
                </strong>{" "}
                Databricks, Data Factory, Synapse Analytics, and increasingly
                Microsoft Fabric. I hold certifications in Azure Data
                Engineering, Power BI, and Databricks Lakehouse. This blog is
                where I share what I see in the field — practical perspectives
                on data strategy, AI implementation, and the realities of
                enterprise consulting.
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
