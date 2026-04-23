"use client";

import { planets } from "@/data/planets";
import Link from "next/link";
import { useState } from "react";

export default function SizeCalculator() {
  const [sizeFrom, setSizeFrom] = useState(3);
  const [sizeTo, setSizeTo] = useState(0);

  const planetFrom = planets.find((p) => p.id === sizeFrom);
  const planetTo = planets.find((p) => p.id === sizeTo);

  if (!planetFrom || !planetTo) return;

  const bigger =
    planetFrom.diameter > planetTo.diameter ? planetFrom : planetTo;
  const smaller =
    planetFrom.diameter > planetTo.diameter ? planetTo : planetFrom;

  const fitsIntoPlanet = Math.pow(bigger.diameter / smaller.diameter, 3);

  return (
    <div className="text-white min-h-screen">
      <section className='min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-[url("/planets/BG.png")]'>
        <div className="flex flex-col gap-20 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Größen-Rechner
            </h1>
            <h2 className="text-lg">(Wie oft passen Planete ineinander?)</h2>
          </div>
          <div className="flex flex-col items-center gap-28">
            <div className="flex flex-col items-center gap-10">
              <div className="flex items-center gap-10 text-xl">
                <div className="flex gap-2">
                  <label htmlFor="sizeFrom">Vergleiche:</label>
                  <select
                    name="sizeFrom"
                    id="sizeFrom"
                    onChange={(e) => setSizeFrom(Number(e.target.value))}
                    value={sizeFrom}
                  >
                    {planets.map((planet) => (
                      <option
                        key={planet.id}
                        value={planet.id}
                        className="bg-black"
                        disabled={sizeTo === planet.id && true}
                      >
                        {planet.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <label htmlFor="sizeTo">Mit:</label>
                  <select
                    name="sizeTo"
                    id="sizeTo"
                    onChange={(e) => setSizeTo(Number(e.target.value))}
                    value={sizeTo}
                  >
                    {planets.map((planet) => (
                      <option
                        key={planet.id}
                        value={planet.id}
                        className="bg-black"
                        disabled={sizeFrom === planet.id && true}
                      >
                        {planet.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {planetFrom && planetTo ? (
                <div className="flex flex-col gap-12 items-center">
                  <div className="flex items-end gap-12">
                    <div
                      className={`flex flex-col gap-6 text-center items-center`}
                    >
                      <div
                        className={`rounded-full`}
                        style={{
                          height: `${planetFrom.id === 6 ? Math.sqrt(planetFrom.diameter / 5) : Math.sqrt(planetFrom.diameter / 20)}px`,
                          width: `${planetFrom.id === 6 ? Math.sqrt(planetFrom.diameter / 5) : Math.sqrt(planetFrom.diameter / 20)}px`,
                          backgroundImage: `url('${planetFrom.iconUrl}')`,
                          backgroundSize: "100%",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <p className="font-bold">{planetFrom.name}</p>
                      <p className="font-bold">
                        {planetFrom.diameter.toLocaleString("de", {
                          maximumFractionDigits: 0,
                        })}{" "}
                        km
                      </p>
                    </div>
                    <div
                      className={`flex flex-col gap-6 text-center items-center`}
                    >
                      <div
                        className={`rounded-full`}
                        style={{
                          height: `${planetTo.id === 6 ? Math.sqrt(planetTo.diameter / 5) : Math.sqrt(planetTo.diameter / 20)}px`,
                          width: `${planetTo.id === 6 ? Math.sqrt(planetTo.diameter / 5) : Math.sqrt(planetTo.diameter / 20)}px`,
                          backgroundImage: `url('${planetTo.iconUrl}')`,
                          backgroundSize: "100%",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                      <p className="font-bold">{planetTo.name}</p>
                      <p className="font-bold">
                        {planetTo.diameter.toLocaleString("de", {
                          maximumFractionDigits: 0,
                        })}{" "}
                        km
                      </p>
                    </div>
                  </div>
                  <p>
                    {smaller.name} passt in {bigger.name}{" "}
                    <b>
                      {fitsIntoPlanet.toLocaleString("de", {
                        maximumFractionDigits: 0,
                      })}
                    </b>{" "}
                    mal rein.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p className="text-xl">Berechnen von Größen...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
