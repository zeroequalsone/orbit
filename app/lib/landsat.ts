import { landsatLetters } from "@/data/landsatLetters";

export type LandsatImageInfo = {
  letter: string;
  url: string;
  locationCoordinates: string;
};

export function getRandomLandsatImages(name: string): LandsatImageInfo[] {
  return [...name]
    .map((letter) => {
      const entry = landsatLetters.find(
        (e) => e.letter.toLowerCase() === letter.toLowerCase(),
      );
      if (!entry?.images?.length) return null;

      const image =
        entry.images[Math.floor(Math.random() * entry.images.length)];
      return {
        letter,
        url: image.url,
        locationCoordinates: image.locationCoordinates,
      };
    })
    .filter((info): info is LandsatImageInfo => info !== null);
}
