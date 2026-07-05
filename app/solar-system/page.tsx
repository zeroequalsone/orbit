"use client";
import { useState } from "react";
import { planets } from "@/data/planets";
import PlanetHeader from "@/components/solar-system/PlanetHeader";
import PlanetSelector from "@/components/solar-system/PlanetSelector";
import OverviewSection from "@/components/solar-system/OverviewSection";
import FeaturesSection from "@/components/solar-system/FeaturesSection";
import InDepthSection from "@/components/solar-system/InDepthSection";

export default function SolarSystem() {
  const [planetId, selectPlanetId] = useState<number>(0);
  const selectedPlanet = planets.find((p) => p.id === planetId);

  if (!selectedPlanet) return;

  return (
    <>
      <PlanetHeader planet={selectedPlanet} />
      <PlanetSelector planetId={planetId} setPlanetId={selectPlanetId} />
      <OverviewSection planet={selectedPlanet} />
      <FeaturesSection planet={selectedPlanet} />
      <InDepthSection planet={selectedPlanet} />
    </>
  );
}
