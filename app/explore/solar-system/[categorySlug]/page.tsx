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
    <div className='flex justify-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex items-center flex-col gap-20 w-4/5 py-52">
        <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
          Sonnensystem
        </h1>
        <div className="grid grid-cols-3 place-items-center gap-24">
          {objects.map((planet) => (
            <Link
              href={`/explore/solar-system/${categorySlug}/${planet.slug}`}
              key={planet.id}
              className="w-52 hover:scale-105 duration-200 transition-transform"
            >
              <div className="size-52">
                <img
                  className="w-full h-full object-contain bg-black"
                  src={planet.displayImageUrl}
                  alt={planet.name}
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2 justify-center">
                <h2 className="text-center text-lg">{planet.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
