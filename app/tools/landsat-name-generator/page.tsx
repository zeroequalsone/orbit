"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { landsatLetters } from "@/data/landsatLetters";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
    <div className="min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-10 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Landsat Name Generator
            </h1>
            <div className="flex flex-col justify-center items-center gap-8">
              <h2 className="text-lg">
                (Wie sieht dein Name in Landsat Bildern aus?)
              </h2>
              <button onClick={router.back} className="cursor-pointer">
                Zurück zu Tools
              </button>
            </div>
          </div>
          <div ref={ref} className="flex flex-wrap gap-4 justify-center">
            {images.map((randomImage, idx) => (
              <Link
                className="h-80"
                key={`${randomImage.letter}-${randomImage.locationCoordinates}-${idx}`}
                href={`https://www.google.com/maps?q=${encodeURIComponent(randomImage.locationCoordinates)}`}
                target="_blank"
              >
                <img
                  src={randomImage.url}
                  alt={`Letter ${randomImage.letter}`}
                  className="h-full"
                />
              </Link>
            ))}
          </div>
          <div className="flex text-white bg-black/50 p-8 gap-4 rounded-xl">
            <input
              type="text"
              value={name}
              className="border-2 p-4 rounded-xl"
              onChange={(e) =>
                setName(e.target.value.replace(/[^A-Za-z]/g, ""))
              }
              onKeyDown={(e) => e.key === "Enter" && generateImages(name)}
              maxLength={25}
              autoFocus
            />
            <button
              className="border-2 p-4 rounded-xl cursor-pointer"
              onClick={() => generateImages(name)}
            >
              Enter
            </button>
            {images.length > 0 && (
              <button
                onClick={onDownloadClick}
                className="border-2 p-4 rounded-xl cursor-pointer"
              >
                Download
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
