"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/",      label: "Home"  },
  { href: "/about", label: "About" },
  { href: "/blog",  label: "Blog"  },
  { href: "/cv",    label: "CV"    },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow/border only after user scrolls
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
        style={{
          backgroundColor: scrolled
            ? "rgba(8, 8, 8, 0.92)"
            : "rgba(8, 8, 8, 0.75)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
      >
        <nav
          className="container mx-auto px-6 h-14 flex items-center justify-between"
          style={{ maxWidth: "1100px" }}
        >
          {/* ── Wordmark ── */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Mihaly Kocziha — home"
          >
            {/* Monogram pill */}
            <span
              className="flex items-center justify-center w-7 h-7 rounded-md text-xs font-bold tracking-wider transition-colors duration-150"
              style={{
                background: "var(--accent)",
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              MK
            </span>
            {/* Full name — hidden on small screens */}
            <span
              className="hidden sm:block text-sm font-medium tracking-tight transition-colors duration-150 group-hover:text-foreground"
              style={{ color: "var(--foreground)" }}
            >
              Mihaly Kocziha
            </span>
          </Link>

          {/* ── Desktop nav links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="nav-link px-3 py-1.5 rounded-md text-sm transition-colors duration-150"
                    data-active={active ? "true" : undefined}
                    style={{
                      color: active ? "var(--foreground)" : "var(--muted-foreground)",
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-150"
            style={{ color: "var(--muted-foreground)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </nav>
      </header>

      {/* ── Mobile slide-down menu ── */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(8,8,8,0.7)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu panel */}
        <div
          className="absolute top-14 inset-x-0 px-6 py-4"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-150"
                    style={{
                      color: active ? "var(--foreground)" : "var(--muted-foreground)",
                      background: active ? "rgba(255,255,255,0.05)" : "transparent",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {active && (
                      <span
                        className="w-1 h-1 rounded-full mr-2.5 shrink-0"
                        style={{ background: "var(--accent)" }}
                      />
                    )}
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
