"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { landsatLetters } from "@/data/landsatLetters";

export default function LandSatNameGenerator() {
  const ref = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const generateImages = (name: string) => {
    const imageList: string[] = [];
    const letterArray = [...name];

    letterArray.forEach((letter) => {
      const imageLetterList = landsatLetters.find(
        (checkLetter) => checkLetter.letter === letter,
      );

      const imagesArray = imageLetterList?.images;

      if (!imagesArray) return;

      const randomIndex = Math.floor(Math.random() * imagesArray.length);

      const randomImage = imagesArray[randomIndex].url;

      imageList.push(randomImage);
    });

    setImages(imageList);
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
    <div className="text-white min-h-screen">
      <section className='min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-[url("/planets/BG.png")]'>
        <div className="flex flex-col items-center gap-20 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Landsat Name Generator
            </h1>
            <h2 className="text-lg">
              (Wie sieht dein Name in Landsat Bildern aus?)
            </h2>
          </div>
          <div ref={ref} className="flex flex-wrap gap-4 justify-center h-72">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Letter ${index + 1}`}
                className="h-full"
              />
            ))}
          </div>
          <div className="flex text-white bg-black/50 w-fit p-8 gap-4 rounded-xl">
            <input
              type="text"
              value={name}
              className="border-2 p-4 rounded-xl"
              onChange={(e) =>
                setName(e.target.value.replace(/[^A-Za-z]/g, ""))
              }
              onKeyDown={(e) =>
                e.key === "Enter" && name.length > 0 && generateImages(name)
              }
              maxLength={25}
              autoFocus
            />
            <button
              className="border-2 p-4 rounded-xl cursor-pointer"
              onClick={() => name.length > 0 && generateImages(name)}
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
