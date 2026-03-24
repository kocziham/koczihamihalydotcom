import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { GlowOrb } from "@/components/visuals/GlowOrb";

export const metadata: Metadata = {
  title: "Writing — Mihaly Kocziha",
  description:
    "Thoughts on data, AI, leadership, and what actually works in the field.",
};

/* ─── Static tag list ───────────────────────────────────────── */
const ALL_TAGS = ["All", "Data", "AI", "Management", "Case Studies"] as const;

/* ─── Date formatter ────────────────────────────────────────── */
function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ───────────────────────────────────────────────────────────── */
interface Props {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogIndexPage({ searchParams }: Props) {
  const { tag } = await searchParams;
  const activeTag = tag && tag !== "All" ? tag : null;

  const allPosts = await getAllPosts();

  const posts = activeTag
    ? allPosts.filter((p) =>
        p.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase())
      )
    : allPosts;

  return (
    <main className="flex-1 flex flex-col">
      {/* ════════════════════════════════════════════════════════
          PAGE HEADER
          ════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: "calc(56px + 5rem)",
          paddingBottom: "4rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {/* Background glow — top-right */}
        <GlowOrb
          size={500}
          color="#3b82f6"
          className="absolute -top-32 -right-32"
        />

        <div
          className="relative"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {/* Eyebrow */}
          <p
            className="text-xs font-medium tracking-widest uppercase mb-4 animate-fade-up"
            style={{ color: "var(--accent)" }}
          >
            Field Notes
          </p>

          <h1
            className="animate-fade-up delay-100 font-semibold"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            Writing
          </h1>

          <p
            className="animate-fade-up delay-200 mt-4"
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              lineHeight: 1.65,
              color: "var(--muted-foreground)",
              maxWidth: "520px",
            }}
          >
            Thoughts on data, AI, leadership, and what actually works in the
            field.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          TAG FILTER BAR
          ════════════════════════════════════════════════════════ */}
      <div
        className="sticky top-14 z-10 px-6 py-3"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 80%, transparent)",
        }}
      >
        <nav
          aria-label="Filter by topic"
          className="flex flex-wrap gap-2"
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          {ALL_TAGS.map((t) => {
            const isActive =
              t === "All" ? !activeTag : t.toLowerCase() === activeTag?.toLowerCase();
            return (
              <Link
                key={t}
                href={t === "All" ? "/blog" : `/blog?tag=${encodeURIComponent(t)}`}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-150"
                style={{
                  background: isActive
                    ? "var(--accent)"
                    : "var(--surface)",
                  color: isActive
                    ? "#ffffff"
                    : "var(--muted-foreground)",
                  border: isActive
                    ? "1px solid var(--accent)"
                    : "1px solid var(--border)",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {t}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ════════════════════════════════════════════════════════
          POSTS GRID
          ════════════════════════════════════════════════════════ */}
      <section
        className="px-6 pb-28 mt-8"
        style={{ maxWidth: "1100px", margin: "2rem auto 0", width: "100%" }}
      >
        {posts.length === 0 ? (
          /* ── Empty state ── */
          <div
            className="flex flex-col items-center justify-center text-center py-24 px-4"
            style={{ minHeight: "320px" }}
          >
            <p
              className="text-4xl mb-4"
              style={{ lineHeight: 1 }}
              aria-hidden="true"
            >
              ✦
            </p>
            <p
              className="font-medium mb-2"
              style={{ color: "var(--foreground)" }}
            >
              No posts in this category yet
            </p>
            <p
              className="text-sm mb-6"
              style={{ color: "var(--muted-foreground)" }}
            >
              Try a different filter, or check back soon.
            </p>
            <Link href="/blog" className="btn-secondary text-xs">
              View all posts
            </Link>
          </div>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {posts.map((post, i) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="card-lift group flex flex-col gap-4 h-full p-6 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                    animationDelay: `${i * 80}ms`,
                  }}
                >
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
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
                  )}

                  {/* Title */}
                  <h2
                    className="font-semibold leading-snug transition-colors duration-150 group-hover:text-accent"
                    style={{
                      fontSize: "clamp(1.05rem, 2vw, 1.2rem)",
                      letterSpacing: "-0.02em",
                      color: "var(--foreground)",
                    }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  {post.summary && (
                    <p
                      className="text-sm leading-relaxed flex-1"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {post.summary}
                    </p>
                  )}

                  {/* Meta row */}
                  <div
                    className="flex items-center gap-3 text-xs mt-auto pt-2"
                    style={{
                      color: "var(--muted-foreground)",
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
