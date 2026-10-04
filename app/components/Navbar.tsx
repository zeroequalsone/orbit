"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sonnensystem", href: "/solar-system" },
  { name: "Entdecken", href: "/explore" },
  { name: "Tools", href: "/tools" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 select-none">
      <div className="absolute top-0 left-0 w-full backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between gap-16 h-20 p-4">
            {/* Logo */}
            <div className="flex-1">
              <Link
                href="/"
                className="group flex items-center gap-2 text-xl uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] w-fit"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  <span className="absolute h-5 w-5 rounded-full border border-white/40 transition-colors group-hover:border-white" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Orbit
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex justify-center">
              {navLinks.map((link) => {
                const active = isLinkActive(pathname, link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* GitHub + Mobile Toggle */}
            <div className="flex flex-1 items-center justify-end gap-4">
              <a
                href="https://github.com/zeroequalsone/orbit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Orbit auf GitHub ansehen"
                className="hidden text-white/60 transition-colors hover:text-white lg:block"
              >
                <FaGithub size={20} />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
                className="relative flex h-8 w-8 items-center justify-center text-white lg:hidden"
              >
                <HiOutlineMenuAlt4
                  size={26}
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <HiOutlineX
                  size={26}
                  className={`absolute transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden p-4 pt-0">
              <div className="flex flex-col items-center gap-4 pt-4 border-t border-white/10">
                {navLinks.map((link) => {
                  const active = isLinkActive(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`w-full rounded-xl border px-6 py-2 text-center text-xs uppercase tracking-widest transition-colors ${
                        active
                          ? "border-white/20 bg-white/5 text-white"
                          : "border-white/5 text-white/80 hover:border-white/20 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <a
                  href="https://github.com/zeroequalsone/orbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 flex items-center gap-2 text-sm uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
