"use client";
import { planets } from "@/data/planets";
import { useState } from "react";

export default function DistanceCalculator() {
  const [distance, setDistance] = useState<number>(0);
  const [distanceFrom, setDistanceFrom] = useState(1);
  const [distanceTo, setDistanceTo] = useState(2);

  return (
    <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex justify-center items-center flex-col gap-10 w-4/5">
        <h1 className="text-4xl font-bold uppercase tracking-[0.3em]">
          Distance Calculator
        </h1>
        <div className="flex items-center gap-10">
          <label htmlFor="distanceFrom">From:</label>
          <select
            name="distanceFrom"
            id="distanceFrom"
            onChange={(e) => setDistanceFrom(Number(e.target.value))}
            value={distanceFrom}
          >
            {planets.map((planet) => (
              <option key={planet.id} value={planet.id} className="bg-black">
                {planet.name}
              </option>
            ))}
          </select>

          <label htmlFor="distanceTo">To:</label>
          <select
            name="distanceTo"
            id="distanceTo"
            onChange={(e) => setDistanceTo(Number(e.target.value))}
            value={distanceTo}
          >
            {planets.map((planet) => (
              <option key={planet.id} value={planet.id} className="bg-black">
                {planet.name}
              </option>
            ))}
          </select>

          <button className="bg-white text-black px-4 py-2 rounded-md">
            Calculate
          </button>

          {distance && (
            <p className="text-xl mt-4">
              Distanz: {(distance / 1e6).toFixed(2)} Mio km
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
