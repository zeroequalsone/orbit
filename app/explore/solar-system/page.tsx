"use client";

import { SolarSystemObjects } from "@/data/solarSystemObjects";
import Link from "next/link";

const CATEGORIES = [
  { type: "Stern", slug: "stars" },
  { type: "Planet", slug: "planets" },
  { type: "Zwergplanet", slug: "dwarf-planets" },
  { type: "Mond", slug: "moons" },
  { type: "Asteroidengürtel", slug: "asteroid-belts" },
];

const categories = CATEGORIES.map(({ type, slug }) => {
  const objects = SolarSystemObjects.filter((obj) => obj.type === type);
  return {
    type,
    href: `/explore/solar-system/${slug}`,
    amount: objects.length,
    imageUrl: objects[0]?.displayImageUrl,
  };
});

export default function ExploreSolarSystem() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={`../explore`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Zurück zu Entdecken
          </Link>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            Sonnensystem
          </h1>
        </div>

        {/* Grid */}
        <div className="flex max-w-5xl flex-wrap justify-center gap-6">
          {categories.map(({ type, href, amount, imageUrl }) => (
            <Link
              href={href}
              key={href}
              className="group flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  className="h-full w-full bg-black object-contain transition-transform duration-500 group-hover:scale-105"
                  src={imageUrl}
                  alt={type}
                  loading="lazy"
                />
              </div>

              {/* Titel + Anzahl */}
              <div className="flex items-center justify-between gap-2 px-3 pb-3">
                <p className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
                  {type}
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs tracking-widest text-white/60">
                  {amount}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
