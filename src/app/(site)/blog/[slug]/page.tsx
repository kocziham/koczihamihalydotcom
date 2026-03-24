import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { GlowOrb } from "@/components/visuals/GlowOrb";
import { GeometricAccent } from "@/components/visuals/GeometricAccent";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ─── Static params for build-time generation ─────────────── */
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* ─── Metadata ─────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} — Mihaly Kocziha`,
    description: post.summary,
  };
}

/* ─── Date formatter ────────────────────────────────────────── */
function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="flex-1 flex flex-col relative overflow-hidden">
      {/* ════════════════════════════════════════════════════════
          BACKGROUND DECORATIONS
          ════════════════════════════════════════════════════════ */}
      {/* GlowOrb — top-left atmospheric depth */}
      <GlowOrb
        size={480}
        color="#3b82f6"
        className="absolute -top-24 -left-24 pointer-events-none"
      />

      {/* GeometricAccent — top-right corner */}
      <GeometricAccent
        size={360}
        className="absolute -top-8 -right-16 pointer-events-none"
      />

      {/* ════════════════════════════════════════════════════════
          ARTICLE CONTAINER
          ════════════════════════════════════════════════════════ */}
      <div
        className="relative w-full px-6"
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          paddingTop: "calc(56px + 3rem)",
          paddingBottom: "6rem",
        }}
      >
        {/* ── Back link ── */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors duration-150 group"
          style={{ color: "var(--muted-foreground)" }}
        >
          <ArrowLeft
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          <span className="group-hover:text-foreground transition-colors duration-150">
            Writing
          </span>
        </Link>

        <article>
          {/* ── Post header ── */}
          <header className="mb-8">
            <h1
              className="font-semibold mb-5 text-balance"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--foreground)",
              }}
            >
              {post.title}
            </h1>

            {/* Meta row: date · reading time · tags */}
            <div className="flex flex-wrap items-center gap-3">
              <time
                dateTime={post.date}
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                {formatDate(post.date)}
              </time>

              <span aria-hidden="true" style={{ color: "var(--border)" }}>
                ·
              </span>

              <span
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                {post.readingTime}
              </span>

              {post.tags && post.tags.length > 0 && (
                <>
                  <span aria-hidden="true" style={{ color: "var(--border)" }}>
                    ·
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={{
                          background: "rgba(59,130,246,0.08)",
                          border: "1px solid rgba(59,130,246,0.15)",
                          color: "var(--accent)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Subtle divider below header */}
            <hr
              className="mt-8"
              style={{ border: "none", borderTop: "1px solid var(--border)" }}
            />
          </header>

          {/* ── MDX prose content ── */}
          <div className="prose-dark">
            <MDXRemote source={post.content} />
          </div>
        </article>

        {/* ── Bottom nav — back link repeated ── */}
        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150 group"
            style={{ color: "var(--muted-foreground)" }}
          >
            <ArrowLeft
              className="w-3.5 h-3.5 transition-transform duration-150 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            <span className="group-hover:text-foreground transition-colors duration-150">
              Back to Writing
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
