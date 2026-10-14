import { Planet } from "@/data/planets";

export function getPlanetDisplaySize(planet: Planet) {
  const divisor = planet.id === 6 ? 5 : 20;
  return Math.sqrt(planet.diameter / divisor);
}
