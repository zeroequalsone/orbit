import constellations from "../../public/data/constellations.json";

// Sucht ein Sternbild in constellations.json
export const getConstellationInfo = (id: string) =>
  constellations.features.find((feature) => feature.id === id)?.properties;
