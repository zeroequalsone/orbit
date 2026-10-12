"use client";

import ToolHeader from "@/components/tools/ToolHeader";
import WeightCalculatorControls from "@/components/tools/weight-calculator/WeightCalculatorControls";
import WeightComparison from "@/components/tools/weight-calculator/WeightComparison";
import { planets } from "@/data/planets";
import { useState } from "react";

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState<number>(60);
  const [selectedPlanetId, setSelectedPlanetId] = useState<number>(1);
  const selectedPlanet = planets.find(
    (planet) => planet.id === selectedPlanetId,
  );

  if (!selectedPlanet) throw new Error("Selected planet could not be found.");

  return (
    <section className="w-full max-w-7xl mx-auto px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        <ToolHeader
          header="Gewicht-Rechner"
          desc="Wie viel wiegst du auf anderen Planeten?"
        />
        <div className="flex w-full flex-col items-center gap-6">
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
      </div>
    </section>
  );
}
