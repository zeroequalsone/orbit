"use client";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Entdecken", href: "/explore" },
    { name: "Sonnensystem", href: "/solar-system" },
    { name: "Tools", href: "/tools" },
    { name: "GitHub", href: "https://github.com/zeroequalsone/orbit" },
  ];

  return (
    <div className={"fixed w-full z-50 flex justify-center bg-black/25"}>
      <div className="hidden lg:flex justify-between items-center p-8 max-w-384 w-full uppercase">
        <Link href={"/"} className="text-2xl drop-shadow-sm drop-shadow-white">
          Orbit
        </Link>
        <div className="flex gap-8 tracking-widest font-extralight">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.href}
              href={navLink.href}
              className="hover:font-normal"
              onClick={() => setMobileMenuOpen(false)}
            >
              {navLink.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={`flex lg:hidden p-8 w-full uppercase`}>
        <div className="flex justify-between w-full z-50">
          <Link
            href={"/"}
            className="text-2xl drop-shadow-sm drop-shadow-white"
          >
            Orbit
          </Link>
          {mobileMenuOpen ? (
            <XIcon
              className="text-3xl"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            />
          ) : (
            <ListIcon
              className="text-3xl"
              onClick={() => {
                setMobileMenuOpen(true);
              }}
            />
          )}
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-16 p-8 text-xl uppercase">
              {navLinks.map((navLink) => (
                <Link
                  key={navLink.href}
                  href={navLink.href}
                  className="hover:font-normal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navLink.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
