"use client";

import { exploreData } from "@/data/exploreData";
import { InfoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Tooltip } from "radix-ui";

export default function Explore() {
  return (
    <div className='flex justify-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex items-center flex-col gap-20 w-4/5 py-52">
        <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
          Entdecken
        </h1>
        <div className="grid grid-cols-3 place-items-center gap-24">
          {exploreData.map((category) => (
            <Link
              href={category.slug}
              key={category.id}
              className="w-56 hover:scale-105 duration-200"
            >
              <div className="size-56">
                <img
                  className="w-full h-full object-cover"
                  src={category.imageUrl}
                  loading="lazy"
                />
              </div>
              <div className="flex gap-2 mt-2 justify-center">
                <h2 className="text-lg text-center">{category.name}</h2>
                <Tooltip.Provider>
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <InfoIcon className="cursor-help shrink-0" />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="text-white text-sm bg-black/80 p-3 rounded-md max-w-64"
                        sideOffset={5}
                        side="right"
                      >
                        {category.tooltip}
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
