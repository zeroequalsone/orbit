"use client";
import { planets } from "@/data/planets";
import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip } from "radix-ui";
import { useEffect, useState } from "react";

export default function DistanceCalculator() {
  const [minDistance, setMinDistance] = useState<number>(0);
  const [maxDistance, setMaxDistance] = useState<number>(0);
  const [distanceFrom, setDistanceFrom] = useState(1);
  const [distanceTo, setDistanceTo] = useState(3);

  const planetFrom = planets.find((planet) => planet.id === distanceFrom);
  const planetTo = planets.find((planet) => planet.id === distanceTo);

  if (!planetFrom || !planetTo) return;

  const calculateDistance = () => {
    setMinDistance(
      Math.abs(planetFrom.distanceFromSun - planetTo.distanceFromSun),
    );

    setMaxDistance(planetFrom.distanceFromSun + planetTo.distanceFromSun);
  };

  useEffect(() => {
    calculateDistance();
  }, [distanceFrom, distanceTo]);

  return (
    <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex justify-center items-center flex-col gap-2 w-4/5">
        <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
          Distanz-Rechner
        </h1>
        <div className="flex flex-col items-center gap-10">
          <div className="flex gap-2">
            <h2 className="text-lg">(Vereinfachte Berechnungen)</h2>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <InfoIcon />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="text-white text-sm bg-black/80 p-3 rounded-md w-1/2"
                    sideOffset={5}
                    side="right"
                  >
                    Basierend auf mittleren Sonnenabständen - tatsächliche
                    Distanzen schwanken je nach Umlaufbahn.
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <div className="flex flex-col items-center gap-10">
            <div className="flex items-center gap-10 text-xl">
              <div className="flex gap-2">
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
              </div>
              <div className="flex gap-2">
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
            </div>
            {minDistance && maxDistance ? (
              <div className="flex flex-col gap-12">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">Minimale Distanz</p>
                    <p className="text-lg">{minDistance / 1e6} Millionen km</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div className={`relative flex flex-col text-center`}>
                      <svg className={`w-30 h-30 border-2 rounded-full`} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-bold">{planetFrom.name}</p>
                      </div>
                    </div>
                    <span
                      className={`h-0 border border-dashed rounded-full`}
                      style={{ width: `${Math.sqrt(minDistance / 2e4)}px` }}
                    ></span>
                    <div className={`relative flex flex-col text-center`}>
                      <svg className={`w-30 h-30 border-2 rounded-full`} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-bold">{planetTo.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center">
                    <p className="text-xl font-bold">Maximale Distanz</p>
                    <p className="text-lg">{maxDistance / 1e6} Millionen km</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <div className={`relative flex flex-col text-center`}>
                      <svg className={`w-30 h-30 border-2 rounded-full`} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-bold">{planetFrom.name}</p>
                      </div>
                    </div>
                    <span
                      className={`h-0 border border-dashed rounded-full`}
                      style={{ width: `${Math.sqrt(maxDistance / 2e4)}px` }}
                    ></span>
                    <div className={`relative flex flex-col text-center`}>
                      <svg className={`w-30 h-30 border-2 rounded-full`} />
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <p className="font-bold">{planetTo.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xl">Berechnen von Distanzen...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
