import InfoTooltip from "@/components/ui/InfoTooltip";
import { constellationsData } from "@/data/constellationsData";
import Image from "next/image";
import Link from "next/link";

export default function ExploreConstellations() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={`/explore`}
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
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl max-w-2xl">
            Sternbilder & Kulturelle Astronomie
          </h1>
        </div>

        {/* Grid */}
        <div className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {constellationsData.map((item) => (
            <Link
              href={`constellations-and-cultural-astronomy/${item.slug}`}
              key={item.id}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  fill
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.imageUrl}
                  alt={item.name}
                  priority
                />
              </div>

              {/* Titel + Tooltip */}
              <div className="flex items-center justify-between gap-2 px-3 pb-3">
                <h2 className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
                  {item.name}
                </h2>
                <InfoTooltip tooltip={item.tooltip} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
