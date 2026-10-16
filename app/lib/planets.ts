import { Planet } from "@/data/planets";
import { EARTH_GRAVITY_M_S2 } from "./constants";

export function getPlanetDisplaySize(planet: Planet) {
  const divisor = planet.id === 6 ? 5 : 20;
  return Math.sqrt(planet.diameter / divisor);
}

export const calculateWeightOnPlanet = (planet: Planet, earthWeight: number) =>
  (planet.gForce / EARTH_GRAVITY_M_S2) * earthWeight;

export const getMinDistance = (a: Planet, b: Planet) =>
  Math.abs(a.distanceFromSun - b.distanceFromSun);

export const getMaxDistance = (a: Planet, b: Planet) =>
  a.distanceFromSun + b.distanceFromSun;

export const getVolumeRatio = (a: Planet, b: Planet) => {
  const [bigger, smaller] = a.diameter > b.diameter ? [a, b] : [b, a];
  return Math.pow(bigger.diameter / smaller.diameter, 3);
};
