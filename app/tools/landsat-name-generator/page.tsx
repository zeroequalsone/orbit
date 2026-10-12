"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { landsatLetters } from "@/data/landsatLetters";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ToolHeader from "@/components/tools/ToolHeader";

type LandsatImageInfo = {
  letter: string;
  url: string;
  locationCoordinates: string;
};

export default function LandSatNameGenerator() {
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [images, setImages] = useState<LandsatImageInfo[]>([]);

  const generateImages = (name: string) => {
    if (name.length <= 0) return;

    const letters = [...name];

    const imageInfos = letters
      .map((letter) => {
        const letterEntry = landsatLetters.find(
          (entry) => entry.letter.toLowerCase() === letter.toLowerCase(),
        );

        if (
          !letterEntry ||
          !letterEntry.images ||
          letterEntry.images.length === 0
        )
          return null;

        const randomIndex = Math.floor(
          Math.random() * letterEntry.images.length,
        );

        const randomImage = letterEntry.images[randomIndex];

        return {
          letter,
          url: randomImage.url,
          locationCoordinates: randomImage.locationCoordinates,
        };
      })
      .filter((info): info is LandsatImageInfo => info !== null);

    setImages(imageInfos);
  };

  const onDownloadClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "orbit.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  useEffect(() => {
    generateImages("orbit");
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        <ToolHeader
          header="Landsat Name Generator"
          desc="Wie sieht dein Name in Landsat Bildern aus?"
        />

        {/* Ergebnis */}
        <div ref={ref} className="flex flex-wrap justify-center gap-4">
          {images.map((randomImage, idx) => (
            <Link
              className="group h-50 lg:h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:-translate-y-1 active:border-white/20 active:bg-white/10"
              key={`${randomImage.letter}-${randomImage.locationCoordinates}-${idx}`}
              href={`https://www.google.com/maps?q=${encodeURIComponent(randomImage.locationCoordinates)}`}
              target="_blank"
            >
              <img
                src={randomImage.url}
                alt={`Letter ${randomImage.letter}`}
                className="h-full rounded-xl transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
              />
            </Link>
          ))}
        </div>

        {/* Eingabe */}
        <div className="flex w-full max-w-2xl flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm sm:flex-row sm:items-center">
          <input
            type="text"
            value={name}
            className="w-full min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm uppercase tracking-widest text-white placeholder:text-white/40 transition-colors hover:border-white/20 active:border-white/20 focus-visible:border-white/40 focus-visible:bg-white/10 focus-visible:outline-none"
            onChange={(e) => setName(e.target.value.replace(/[^A-Za-z]/g, ""))}
            onKeyDown={(e) => e.key === "Enter" && generateImages(name)}
            maxLength={25}
            autoFocus
          />
          <div className="flex gap-4">
            <button
              className="flex-1 cursor-pointer rounded-full border border-white/10 bg-white/10 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:border-white/20 hover:bg-white/20 active:border-white/20 active:bg-white/20 sm:flex-none"
              onClick={() => generateImages(name)}
            >
              Enter
            </button>
            {images.length > 0 && (
              <button
                onClick={onDownloadClick}
                className="flex-1 cursor-pointer rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white active:border-white/20 active:bg-white/10 active:text-white sm:flex-none"
              >
                Download
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
