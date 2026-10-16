"use client";

import { planets } from "@/data/planets";
import { useState } from "react";
import ToolHeader from "@/components/tools/ToolHeader";
import Selection from "@/components/tools/distance-calculator/Selection";
import MaximumDistance from "@/components/tools/distance-calculator/MaximumDistance";
import MinimumDistance from "@/components/tools/distance-calculator/MinimumDistance";
import DistanceCard from "@/components/tools/distance-calculator/DistanceCard";
import { SPEED_OF_LIGHT_IN_KM_S } from "@/lib/constants";
import { getMaxDistance, getMinDistance } from "@/lib/planets";

export default function DistanceCalculator() {
  const [distanceFrom, setDistanceFrom] = useState(0);
  const [distanceTo, setDistanceTo] = useState(3);

  const planetFrom = planets.find((planet) => planet.id === distanceFrom);
  const planetTo = planets.find((planet) => planet.id === distanceTo);

  if (!planetFrom || !planetTo)
    throw new Error("Fehler beim Auswählen eines Planeten.");

  const minDistance = getMinDistance(planetFrom, planetTo);
  const maxDistance = getMaxDistance(planetFrom, planetTo);

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24 pt-40">
      <div className="flex flex-col gap-16">
        <ToolHeader
          header="Distanz-Rechner"
          desc="Vereinfachte Berechnungen"
          toolTip="Berechnung basiert auf runder Umlaufbahn (nicht elliptisch)."
        />
        <div className="flex flex-col items-center gap-10">
          <Selection
            setDistanceFrom={setDistanceFrom}
            distanceFrom={distanceFrom}
            setDistanceTo={setDistanceTo}
            distanceTo={distanceTo}
          />
          <div className="flex flex-col">
            {/* MIN */}
            <DistanceCard
              from={planetFrom}
              to={planetTo}
              distanceLabel="Minimale Distanz"
              lightTimeLabel="Minimale Lichtlaufzeit"
              tooltip="Kürzester Abstand zwischen beiden Planeten (auf derselben
                    Seite der Sonne)"
              distanceKm={minDistance}
            />
            {/* MAX */}
            <DistanceCard
              from={planetFrom}
              to={planetTo}
              distanceLabel="Maximale Distanz"
              lightTimeLabel="Maximale Lichtlaufzeit"
              tooltip="Größter Abstand zwischen beiden Planeten (auf
                    gegenüberliegenden Seiten der Sonne)"
              distanceKm={maxDistance}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
