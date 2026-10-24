export type ConstellationCategory = {
  id: number;
  slug: string;
  name: string;
  imageUrl: string;
  tooltip: string;
};

export const constellationsData: ConstellationCategory[] = [
  {
    id: 1,
    slug: "constellations",
    name: "Sternbilder",
    imageUrl: "/explore/constellations/constellations.webp",
    tooltip: "Die bekanntesten Sternbilder am Nachthimmel.",
  },
  {
    id: 2,
    slug: "cultural-astronomy",
    name: "Kulturelle Astronomie",
    imageUrl: "/explore/constellations/cultural-astronomy.webp",
    tooltip: "Wie verschiedene Kulturen den Himmel deuten.",
  },
];
