"use client";

import { planets } from "@/data/planets";
import { useEffect, useState } from "react";

export default function WeightCalculator() {
  const [earthWeight, setEarthWeight] = useState<number>(60);
  const [newWeight, setNewWeight] = useState<number>(0);
  const [planetId, selectPlanetId] = useState<number>(1);
  const selectedPlanet = planets.find((p) => p.id === planetId);

  if (!selectedPlanet) return;

  const calculateWeight = () => {
    setNewWeight((selectedPlanet.gForce / 9.81) * earthWeight);
  };

  useEffect(() => {
    calculateWeight();
  }, [earthWeight, selectedPlanet]);

  return (
    <div className="text-white min-h-screen">
      <section className='min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-[url("/planets/BG.png")]'>
        <div className="flex flex-col gap-20 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Gewicht-Rechner
            </h1>
            <h2 className="text-lg">
              (Wie viel wiegst du auf anderen Planeten?)
            </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-xl">
              <div className="flex gap-2 text-xl">
                <p>Dein Erd-Gewicht:</p>
                <input
                  className="w-16"
                  type="number"
                  name="earthWeight"
                  id="earthWeight"
                  placeholder="60"
                  value={earthWeight}
                  onChange={(e) => setEarthWeight(Number(e.target.value))}
                  min={0}
                  step={0.5}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor="compareWith">Vergleichen mit:</label>
                <select
                  name="compareWith"
                  id="compareWith"
                  onChange={(e) => selectPlanetId(Number(e.target.value))}
                >
                  {planets.map(
                    (planet) =>
                      planet.id !== 0 && (
                        <option
                          key={planet.id}
                          value={planet.id}
                          className="bg-black"
                        >
                          {planet.name}
                        </option>
                      ),
                  )}
                </select>
              </div>
            </div>
            {selectedPlanet && (
              <div className="flex flex-col items-center gap-8">
                <table className="text-xl">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="px-10 py-6">Erde</th>
                      <th className="px-10 py-6">{selectedPlanet.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="px-10 py-6">G-Kraft</th>
                      <th className="px-10 py-6">9.81 m/s²</th>
                      <th className="px-10 py-6">
                        {selectedPlanet.gForce + " m/s²"}
                      </th>
                    </tr>
                    <tr>
                      <th className="px-10 py-6">KG</th>
                      <th className="px-10 py-6">
                        {earthWeight.toFixed(2).replace(".", ",") + " KG"}
                      </th>
                      <th className="px-10 py-6">
                        {newWeight.toFixed(2).replace(".", ",") + " KG"}
                      </th>
                    </tr>
                  </tbody>
                </table>
                <p className="text-lg w-2/3">
                  <b>Fun Fact:</b> {selectedPlanet.funFactWeight}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
