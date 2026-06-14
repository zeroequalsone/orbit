import Link from "next/link";
import { Fragment } from "react";

const footerLinks = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
  { name: "AGB", href: "/agb" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-transparent">
      <div className="flex flex-col items-center lg:w-4/5 gap-8 py-12">
        <div className="text-sm flex flex-col items-center gap-8">
          <p className="font-knicknack text-3xl lg:text-4xl">Orbit</p>
          <ul className="flex flex-col lg:flex-row items-center gap-2 lg:gap-8">
            {footerLinks.map((footerLink, index) => (
              <Fragment key={footerLink.href}>
                <li className="text-lg">
                  <Link href={footerLink.href}>{footerLink.name}</Link>
                </li>
                {index < footerLinks.length - 1 && (
                  <span className="text-2xl hidden lg:block">•</span>
                )}
              </Fragment>
            ))}
          </ul>
        </div>
        <span className="border-t w-full"></span>
        <div className="text-sm lg:text-base text-center space-y-2">
          <div>
            <p>
              &copy;&nbsp;{new Date().getFullYear()}
              &nbsp;Orbit
            </p>
            <p>Alle&nbsp;Rechte&nbsp;vorbehalten.</p>
          </div>
          <p>
            Portfolio Projekt von{" "}
            <Link
              href={"https://github.com/zeroequalsone"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream active:text-cream"
            >
              zeroequalsone
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
