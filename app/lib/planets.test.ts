import type { Planet } from "@/data/planets";
import { describe, expect, it } from "vitest";
import {
  calculateWeightOnPlanet,
  getMaxDistance,
  getMinDistance,
  getPlanetDisplaySize,
  getVolumeRatio,
} from "./planets";

// Nur die Felder, die die Funktionen wirklich lesen
const makePlanet = (values: Partial<Planet>) => values as Planet;

describe("calculateWeightOnPlanet", () => {
  it("lässt das Gewicht auf der Erde gleich", () => {
    const earth = makePlanet({ gForce: 9.81 });
    expect(calculateWeightOnPlanet(earth, 100)).toBeCloseTo(100);
  });

  it("macht 100 kg auf dem Mars zu etwa 37,8 kg", () => {
    const mars = makePlanet({ gForce: 3.71 });
    expect(calculateWeightOnPlanet(mars, 100)).toBeCloseTo(37.8, 1);
  });

  it("macht 100 kg auf dem Jupiter zu etwa 252,7 kg", () => {
    const jupiter = makePlanet({ gForce: 24.79 });
    expect(calculateWeightOnPlanet(jupiter, 100)).toBeCloseTo(252.7, 1);
  });

  it("liefert 0 bei 0 kg", () => {
    const mars = makePlanet({ gForce: 3.71 });
    expect(calculateWeightOnPlanet(mars, 0)).toBe(0);
  });
});

describe("getMinDistance / getMaxDistance", () => {
  const a = makePlanet({ distanceFromSun: 100 });
  const b = makePlanet({ distanceFromSun: 250 });

  it("min: Abstand zwischen zwei Planeten (Sonne dazwischen nicht)", () => {
    expect(getMinDistance(a, b)).toBe(150);
  });

  it("min: Reihenfolge der Planeten ist egal", () => {
    expect(getMinDistance(b, a)).toBe(150);
  });

  it("min: derselbe Planet hat Abstand 0", () => {
    expect(getMinDistance(a, a)).toBe(0);
  });

  it("max: Planeten auf gegenüberliegenden Seiten der Sonne", () => {
    expect(getMaxDistance(a, b)).toBe(350);
  });

  it("max ist immer mindestens so groß wie min", () => {
    expect(getMaxDistance(a, b)).toBeGreaterThanOrEqual(getMinDistance(a, b));
  });
});

describe("getVolumeRatio", () => {
  it("doppelter Durchmesser = 8-faches Volumen", () => {
    const big = makePlanet({ diameter: 2 });
    const small = makePlanet({ diameter: 1 });
    expect(getVolumeRatio(big, small)).toBe(8);
  });

  it("liefert dasselbe Ergebnis, egal in welcher Reihenfolge", () => {
    const big = makePlanet({ diameter: 3 });
    const small = makePlanet({ diameter: 1 });
    expect(getVolumeRatio(small, big)).toBe(27);
  });

  it("gleich große Planeten ergeben 1", () => {
    const p = makePlanet({ diameter: 5000 });
    expect(getVolumeRatio(p, p)).toBe(1);
  });
});

describe("getPlanetDisplaySize", () => {
  it("nutzt für normale Planeten den Teiler 20", () => {
    const planet = makePlanet({ id: 1, diameter: 20 });
    expect(getPlanetDisplaySize(planet)).toBe(1);
  });

  it("nutzt für den Sonderfall id 6 den Teiler 5", () => {
    const planet = makePlanet({ id: 6, diameter: 5 });
    expect(getPlanetDisplaySize(planet)).toBe(1);
  });

  it("zeigt größere Planeten größer an", () => {
    const small = makePlanet({ id: 1, diameter: 100 });
    const big = makePlanet({ id: 2, diameter: 400 });
    expect(getPlanetDisplaySize(big)).toBeGreaterThan(
      getPlanetDisplaySize(small),
    );
  });
});
