import { SolarSystemObjects } from "@/data/solarSystemObjects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ categorySlug: string; itemSlug: string }>;
}) {
  const { categorySlug, itemSlug } = await params;

  const objects = SolarSystemObjects.find((obj) => obj.slug === itemSlug);
  if (!objects) notFound();

  return (
    <div className='flex justify-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex items-center flex-col gap-20 w-4/5 py-52">
        <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
          Sonnensystem
        </h1>
        <article className="flex flex-col items-center gap-10 max-w-2xl w-full">
          <Link
            href={`/explore/solar-system/${categorySlug}`}
            className="text-sm tracking-wide text-white/70 hover:text-white transition-colors text-center"
          >
            ← Zurück zur Übersicht
          </Link>
          <div className="w-52 h-52 shrink-0">
            <img
              className="w-full h-full object-contain bg-black"
              src={objects.displayImageUrl}
              alt={objects.name}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold tracking-wide">
              {objects.name}
            </h2>
            <p className="text-lg text-white/80">{objects.type}</p>
          </div>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/90 w-full max-w-md text-left">
            <div className="flex flex-col gap-0.5">
              <dt className="text-white/55 uppercase tracking-wider text-xs">
                Alter
              </dt>
              <dd>{objects.age}</dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="text-white/55 uppercase tracking-wider text-xs">
                Durchmesser
              </dt>
              <dd>
                {objects.diameter_km.toLocaleString("de-DE")} km
              </dd>
            </div>
          </dl>
          <div className="flex flex-col gap-6">
            <p className="leading-relaxed text-white/90">{objects.description}</p>
            <p className="leading-relaxed text-white/80 text-sm">
              {objects.detailedDescription}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
