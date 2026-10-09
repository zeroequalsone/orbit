import { SolarSystemObjects } from "@/data/solarSystemObjects";
import Link from "next/link";

export default async function CategoryPage({
  params,
}: {
  params: { categorySlug: string };
}) {
  const { categorySlug } = await params;

  const typeMap: Record<string, string> = {
    stars: "Stern",
    planets: "Planet",
    "dwarf-planets": "Zwergplanet",
    moons: "Mond",
    "asteroid-belts": "Asteroidengürtel",
  };

  const objects = SolarSystemObjects.filter(
    (obj) => obj.type === typeMap[categorySlug],
  );

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={`../solar-system`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Zurück zu Sonnensystem
          </Link>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            {typeMap[categorySlug]}
          </h1>
        </div>

        {/* Grid */}
        <div className="flex max-w-5xl flex-wrap justify-center gap-6">
          {objects.map((planet) => (
            <Link
              href={`/explore/solar-system/${categorySlug}/${planet.slug}`}
              key={planet.id}
              className="group flex w-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  className="h-full w-full bg-black object-contain transition-transform duration-500 group-hover:scale-105"
                  src={planet.displayImageUrl}
                  alt={planet.name}
                  loading="lazy"
                />
              </div>

              {/* Titel */}
              <div className="px-3 pb-3">
                <h2 className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
                  {planet.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
