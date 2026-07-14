"use client";

import WeightCalculatorControls from "@/components/weight-calculator/WeightCalculatorControls";
import WeightComparison from "@/components/weight-calculator/WeightComparison";
import { planets } from "@/data/planets";
import Link from "next/link";
import { useState } from "react";

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState<number>(60);
  const [selectedPlanetId, setSelectedPlanetId] = useState<number>(1);
  const selectedPlanet = planets.find(
    (planet) => planet.id === selectedPlanetId,
  );

  if (!selectedPlanet) throw new Error("Selected planet could not be found.");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col p-8 mt-20 gap-10 lg:max-w-384">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl text-center lg:text-5xl font-bold uppercase tracking-[0.3em]">
              Gewicht-Rechner
            </h1>
            <h2 className="lg:max-w-full max-w-xs text-center text-lg">
              (Wie viel wiegst du auf anderen Planeten?)
            </h2>
          </div>
          <Link href={"/tools"}>Zurück zu Tools</Link>
        </div>
        <WeightCalculatorControls
          earthWeight={earthWeight}
          onEarthWeightChange={setEarthWeight}
          onPlanetChange={setSelectedPlanetId}
        />
        <WeightComparison
          selectedPlanet={selectedPlanet}
          earthWeight={earthWeight}
        />
      </div>
    </section>
  );
}
