"use client";

import { planets } from "@/data/planets";
import { useState } from "react";
import ToolHeader from "@/components/tools/ToolHeader";
import Selection from "@/components/tools/distance-calculator/Selection";
import MaximumDistance from "@/components/tools/distance-calculator/MaximumDistance";
import MinimumDistance from "@/components/tools/distance-calculator/MinimumDistance";

export default function DistanceCalculator() {
  const SPEED_OF_LIGHT_IN_KM_S = 300_000;

  const [distanceFrom, setDistanceFrom] = useState(1);
  const [distanceTo, setDistanceTo] = useState(3);

  const planetFrom = planets.find((planet) => planet.id === distanceFrom);
  const planetTo = planets.find((planet) => planet.id === distanceTo);

  if (!planetFrom || !planetTo)
    throw new Error("Fehler beim Auswählen eines Planeten.");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col gap-10 max-w-384">
        <ToolHeader
          header="Distanz-Rechner"
          desc="Vereinfachte Berechnungen"
          toolTip="Berechnung basiert auf runder Umlaufbahn (nicht elliptisch)."
        />
        <div className="flex flex-col items-center gap-28">
          <div className="flex flex-col items-center gap-10">
            <Selection
              setDistanceFrom={setDistanceFrom}
              distanceFrom={distanceFrom}
              setDistanceTo={setDistanceTo}
              distanceTo={distanceTo}
            />
            <div className="flex flex-col gap-24">
              <MinimumDistance
                from={planetFrom}
                to={planetTo}
                speedOfLight={SPEED_OF_LIGHT_IN_KM_S}
              />
              <MaximumDistance
                from={planetFrom}
                to={planetTo}
                speedOfLight={SPEED_OF_LIGHT_IN_KM_S}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
