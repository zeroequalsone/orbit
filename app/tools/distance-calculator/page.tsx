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

  const speedOfLight = 3e5;

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
    <div className="text-white min-h-screen">
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col gap-20 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Distanz-Rechner
            </h1>
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
                      Berechnung basiert auf runder Umlaufbahn (nicht
                      elliptisch).
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Tooltip.Provider>
            </div>
          </div>
          <div className="flex flex-col items-center gap-28">
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
                <div className="flex flex-col gap-24">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex gap-2">
                          <p className="text-xl font-bold">Minimale Distanz</p>
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
                                  Kürzester Abstand zwischen beiden Planeten
                                  (auf derselben Seite der Sonne)
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        </div>
                        <p className="text-lg">
                          {(minDistance / 1e6).toLocaleString("de")} Millionen
                          km
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                          Minimale Lichtlaufzeit
                        </p>
                        <p className="text-lg">
                          {" "}
                          ca.{" "}
                          {minDistance / speedOfLight / 60 < 60
                            ? (minDistance / speedOfLight / 60).toFixed(0) +
                              " Minute(n)"
                            : (minDistance / speedOfLight / 60 / 60).toFixed(
                                1,
                              ) + " Stunde(n)"}
                        </p>
                      </div>
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
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="flex gap-2">
                          <p className="text-xl font-bold">Maximale Distanz</p>
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
                                  Größter Abstand zwischen beiden Planeten (auf
                                  gegenüberliegenden Seiten der Sonne)
                                </Tooltip.Content>
                              </Tooltip.Portal>
                            </Tooltip.Root>
                          </Tooltip.Provider>
                        </div>
                        <p className="text-lg">
                          {(maxDistance / 1e6).toLocaleString("de")} Millionen
                          km
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-xl font-bold">
                          Maximale Lichtlaufzeit
                        </p>
                        <p className="text-lg">
                          {" "}
                          ca.{" "}
                          {maxDistance / speedOfLight / 60 < 60
                            ? (maxDistance / speedOfLight / 60).toFixed(0) +
                              " Minute(n)"
                            : (maxDistance / speedOfLight / 60 / 60).toFixed(
                                1,
                              ) + " Stunde(n)"}
                        </p>
                      </div>
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
      </section>
    </div>
  );
}
