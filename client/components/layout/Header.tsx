"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../common/Logo";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "/", label: "Ana Səhifə" },
  { href: "/haqqimizda", label: "Haqqımızda" },
  { href: "/lezzetlerimiz", label: "Ləzzətlərimiz" },
  { href: "/blog", label: "Blog" },
  { href: "/elaqe", label: "Əlaqə" },
];

const dropdown: NavLink[] = [

  { href: "/qalereya", label: "Qalereya" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-cocoa/10"
          : "bg-cream/85"
      }`}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-cocoa">
          <Logo className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href || "/"}
              className={`link-underline text-[0.72rem] uppercase tracking-[0.28em] transition-colors ${
                pathname === l.href ? "text-cocoa font-medium" : "text-cocoa/80 hover:text-cocoa"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="link-underline text-[0.72rem] uppercase tracking-[0.28em] text-cocoa/80 hover:text-cocoa">
              Səhifələr
            </button>
            <div className="invisible absolute right-0 top-full mt-4 min-w-[180px] border border-cocoa/10 bg-cream p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              {dropdown.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="block px-4 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-cocoa/80 transition-colors hover:bg-cream-soft hover:text-cocoa"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>



        <button
          aria-label="Menyu"
          onClick={() => setOpen((v) => !v)}
          className="relative h-10 w-10 lg:hidden"
        >
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-cocoa transition-all ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute left-1/2 top-1/2 block h-px w-6 -translate-x-1/2 bg-cocoa transition-all ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-cocoa/10 bg-cream lg:hidden">
          <div className="container-luxe flex flex-col py-6">
            {[...links, ...dropdown].map((l) => (
              <Link
                key={l.href || l.label}
                href={l.href || "/"}
                onClick={() => setOpen(false)}
                className="border-b border-cocoa/5 py-4 text-sm uppercase tracking-[0.28em] text-cocoa"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
