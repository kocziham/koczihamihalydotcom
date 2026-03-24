import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
      <article>
        <header className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-sm text-muted-foreground">
            {post.date} &middot; {post.readingTime}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>
        <Separator className="my-8" />
        {/* MDX content rendered as a string for now — wire up a renderer when ready */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <pre className="whitespace-pre-wrap text-sm">{post.content}</pre>
        </div>
      </article>
    </main>
  );
}
