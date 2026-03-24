import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex-1 container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <ul className="mt-10 space-y-8">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block space-y-1">
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {post.date} &middot; {post.readingTime}
              </p>
              {post.summary && (
                <p className="text-muted-foreground">{post.summary}</p>
              )}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
