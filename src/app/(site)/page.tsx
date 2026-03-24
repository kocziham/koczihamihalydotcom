import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <main className="flex-1 container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Mihaly Kocziha</h1>
      <p className="mt-4 text-muted-foreground text-lg">
        Software engineer, writer, and builder.
      </p>
    </main>
  );
}
