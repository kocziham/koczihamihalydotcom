import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GridPattern } from "@/components/visuals/GridPattern";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Fixed full-viewport grid — sits behind everything */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <GridPattern />
      </div>
      <Navbar />
      <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      <Footer />
    </>
  );
}
