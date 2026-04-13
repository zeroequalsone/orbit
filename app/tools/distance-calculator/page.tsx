"use client";
import { planets } from "@/data/planets";
import { useEffect, useState } from "react";

export default function DistanceCalculator() {
  const [minDistance, setMinDistance] = useState<number>(0);
  const [maxDistance, setMaxDistance] = useState<number>(0);
  const [distanceFrom, setDistanceFrom] = useState(1);
  const [distanceTo, setDistanceTo] = useState(3);

  const calculateDistance = () => {
    {
      const planetA = planets.find((planet) => planet.id === distanceFrom);
      const planetB = planets.find((planet) => planet.id === distanceTo);

      if (!planetA || !planetB) return;

      setMinDistance(
        Math.abs(planetA.distanceFromSun - planetB.distanceFromSun),
      );

      setMaxDistance(planetA.distanceFromSun + planetB.distanceFromSun);
    }
  };

  useEffect(() => {
    calculateDistance();
  }, [distanceFrom, distanceTo]);

  return (
    <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex justify-center items-center flex-col gap-10 w-4/5">
        <h1 className="text-4xl font-bold uppercase tracking-[0.3em]">
          Distance Calculator
        </h1>
        <div className="flex flex-col items-center gap-10">
          <div className="flex items-center gap-10">
            <label htmlFor="distanceFrom">Von:</label>
            <select
              name="distanceFrom"
              id="distanceFrom"
              onChange={(e) => setDistanceFrom(Number(e.target.value))}
              value={distanceFrom}
            >
              {planets.map((planet) => (
                <option
                  key={planet.id}
                  value={planet.id}
                  className="bg-black"
                  disabled={distanceTo === planet.id && true}
                >
                  {planet.name}
                </option>
              ))}
            </select>

            <label htmlFor="distanceTo">Nach:</label>
            <select
              name="distanceTo"
              id="distanceTo"
              onChange={(e) => setDistanceTo(Number(e.target.value))}
              value={distanceTo}
            >
              {planets.map((planet) => (
                <option
                  key={planet.id}
                  value={planet.id}
                  className="bg-black"
                  disabled={distanceFrom === planet.id && true}
                >
                  {planet.name}
                </option>
              ))}
            </select>
          </div>
          {minDistance && maxDistance ? (
            <div className="flex flex-col gap-4">
              <p className="text-xl">
                Minimale Distanz: {minDistance / 1e6} Millionen km{" "}
                <sup>(Vereinfacht)</sup>
              </p>
              <p className="text-xl">
                Maximale Distanz: {maxDistance / 1e6} Millionen km{" "}
                <sup>(Vereinfacht)</sup>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-xl">Berechnen von Distanzen...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
