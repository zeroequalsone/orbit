"use client";

import { exploreData } from "@/data/exploreData";
import { InfoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Tooltip } from "radix-ui";

export default function Explore() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
            Kategorien · {exploreData.length} Themen
          </span>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            Entdecken
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
            Tauche ein in die Welt der Astronomie und erkunde Planeten, Monde,
            Sterne und mehr.
          </p>
        </div>

        {/* Grid */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exploreData.map((category) => (
            <Link
              href={category.slug}
              key={category.id}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              {/* Bild */}
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={category.imageUrl}
                  alt={category.name}
                  loading="lazy"
                />
              </div>

              {/* Titel + Tooltip */}
              <div className="flex items-center justify-between gap-2 px-3 pb-3">
                <h2 className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors group-hover:text-white">
                  {category.name}
                </h2>
                <Tooltip.Provider>
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <button
                        type="button"
                        aria-label={`Info zu ${category.name}`}
                        onClick={(e) => e.preventDefault()}
                        className="shrink-0 cursor-help text-white/50 transition-colors hover:text-white"
                      >
                        <InfoIcon size={18} />
                      </button>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="z-50 max-w-64 rounded-xl border border-white/10 bg-black/80 p-3 text-sm leading-relaxed text-white/80 backdrop-blur-md"
                        sideOffset={5}
                        side="top"
                      >
                        {category.tooltip}
                        <Tooltip.Arrow className="fill-white/10" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
