"use client";
import { planets } from "@/data/planets";
import { useState } from "react";

export default function DistanceCalculator() {
  const [distance, setDistance] = useState<number>(0);
  const [distanceFrom, setDistanceFrom] = useState(3);
  const [distanceTo, setDistanceTo] = useState(1);

  const calculateDistance = () => {
    {
      const planetA = planets.find((planet) => planet.id === distanceFrom);
      const planetB = planets.find((planet) => planet.id === distanceTo);

      if (!planetA || !planetB) return;

      setDistance(
        Math.abs(Number(planetA?.distanceFromSun - planetB?.distanceFromSun)),
      );
    }
  };

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

            <button
              className="bg-white text-black px-4 py-2 rounded-md"
              onClick={calculateDistance}
            >
              Distanz berechnen
            </button>
          </div>
          <p className="text-xl mt-4">
            Distanz: {(distance / 1e6).toLocaleString("de")} Millionen km
          </p>
        </div>
      </div>
    </div>
  );
}
