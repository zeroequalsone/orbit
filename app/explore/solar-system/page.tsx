"use client";

import { SolarSystemObjects } from "@/data/solarSystemObjects";
import Link from "next/link";

const slugMap: Record<string, string> = {
  Stern: "solar-system/stars",
  Planet: "solar-system/planets",
  Zwergplanet: "solar-system/dwarf-planets",
  Mond: "solar-system/moons",
  Asteroidengürtel: "solar-system/asteroid-belts",
};

const calculateTypeAmount = [
  "Stern",
  "Planet",
  "Zwergplanet",
  "Mond",
  "Asteroidengürtel",
].map((type) => {
  const firstOfType = SolarSystemObjects.find((obj) => obj.type === type);
  return [
    type,
    SolarSystemObjects.filter((obj) => obj.type === type).length,
    firstOfType?.displayImageUrl,
    slugMap[type],
  ];
});

export default function ExploreSolarSystem() {
  return (
    <div className='flex justify-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex items-center flex-col gap-20 w-4/5 py-52">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
            Sonnensystem
          </h1>
          <Link href={`../explore`}>Zurück zu Entdecken</Link>
        </div>
        <div className="grid grid-cols-3 place-items-center gap-24">
          {calculateTypeAmount.map(
            ([type, amount, displayImageUrl, slug], index) => (
              <Link
                href={`${slug}`}
                key={index}
                className="w-52 hover:scale-105 duration-200 transition-transform"
              >
                <div className="size-52">
                  <img
                    className="w-full h-full object-contain bg-black"
                    src={`${displayImageUrl}`}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-2 justify-center">
                  <p className="text-center text-lg">
                    {type} <span>({amount})</span>
                  </p>
                </div>
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
