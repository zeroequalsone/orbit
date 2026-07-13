"use client";

import WeightComparison from "@/components/weight-calculator/WeightComparison";
import { planets } from "@/data/planets";
import Link from "next/link";
import { useState } from "react";

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState<number>(60);
  const [planetId, setPlanetId] = useState<number>(1);
  const selectedPlanet = planets[planetId];

  if (!selectedPlanet) throw new Error("Selected planet could not be found.");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 max-w-384">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
            Gewicht-Rechner
          </h1>
          <div className="flex flex-col justify-center items-center gap-8">
            <h2 className="text-lg">
              (Wie viel wiegst du auf anderen Planeten?)
            </h2>
            <Link href={"/tools"}>Zurück zu Tools</Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-4 text-xl">
            <div className="flex gap-2 text-xl">
              <label htmlFor="earthWeight">
                <b>Dein Erd-Gewicht:</b>
              </label>
              <input
                className="w-16 text-right bg-neutral-900"
                type="number"
                id="earthWeight"
                value={earthWeight}
                onChange={(e) => setEarthWeight(Number(e.target.value))}
                min={0}
                max={999}
                step={0.5}
                autoFocus
              />
              KG
            </div>
            <div className="flex gap-2">
              <label htmlFor="compareWith">
                <b>Vergleichen mit:</b>
              </label>
              <select
                className="bg-neutral-900"
                id="compareWith"
                onChange={(e) => setPlanetId(Number(e.target.value))}
              >
                {planets.map(
                  (planet) =>
                    planet.id !== 0 && (
                      <option key={planet.id} value={planet.id}>
                        {planet.name}
                      </option>
                    ),
                )}
              </select>
            </div>
          </div>
          {selectedPlanet && (
            <WeightComparison
              selectedPlanet={selectedPlanet}
              earthWeight={earthWeight}
            />
          )}
        </div>
      </div>
    </section>
  );
}
