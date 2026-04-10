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

      const smallerAE =
        planetA &&
        planetB &&
        (planetA?.distanceFromSun > planetB?.distanceFromSun
          ? planetB?.distanceFromSun
          : planetA?.distanceFromSun);

      const biggerAE =
        planetA &&
        planetB &&
        (planetA?.distanceFromSun > planetB?.distanceFromSun
          ? planetA?.distanceFromSun
          : planetB?.distanceFromSun);

      setDistance(Number(biggerAE && smallerAE && biggerAE - smallerAE));
    }
  };

  const calculateDistance = () => {
    const planetFrom = planets.find((planet) => planet.id === distanceFrom);
    const planetTo = planets.find((planet) => planet.id === distanceTo);
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex justify-center items-center flex-col gap-10 w-4/5">
        <h1 className="text-4xl font-bold uppercase tracking-[0.3em]">
          Distance Calculator
        </h1>
        <div className="flex flex-col items-center gap-10">
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

            <button
              className="bg-white text-black px-4 py-2 rounded-md"
              onClick={() => calculateDistance()}
            >
              Calculate
            </button>
          </div>
<<<<<<< tools/distance-calculator
          <p className="text-xl mt-4">
            Distanz: {(distance / 1e6).toLocaleString("de")} Millionen km
          </p>
=======
          {distance > 1 && (
            <p className="text-xl mt-4">Distanz: {distance} Millionen km</p>
          )}
>>>>>>> main
        </div>
      </div>
    </div>
  );
}
