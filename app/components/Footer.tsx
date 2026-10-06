"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const footerLinks = [
  { name: "Impressum", href: "/imprint" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "AGB", href: "/agb" },
  { name: "Kontakt", href: "/kontakt" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16">
        {/* Logo */}
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

        {/* Links Desktop */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
          {footerLinks.map((link) => {
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

        {/* Links Mobile */}
        <div className="flex w-full max-w-xs flex-col items-center gap-4 lg:hidden">
          {footerLinks.map((link) => {
            const active = isLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`w-full rounded-xl border px-6 py-2 text-center text-xs uppercase tracking-widest transition-colors ${
                  active
                    ? "border-white/20 bg-white/5 text-white"
                    : "border-white/5 text-white/80 active:border-white/20 active:bg-white/5 active:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <span className="h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2 text-center text-xs text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Orbit. Alle Rechte vorbehalten.
          </p>
          <p className="flex items-center gap-1.5">
            Portfolio Projekt von
            <a
              href="https://github.com/zeroequalsone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
            >
              <FaGithub size={14} />
              zeroequalsone
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
