"use client";
import { useState } from "react";
import { planets } from "@/data/planets";
import {
  ClockIcon,
  LightningIcon,
  ThermometerHotIcon,
} from "@phosphor-icons/react";

export default function SolarSystem() {
  const [planetId, selectPlanetId] = useState<number>(3);
  const selectedPlanet = planets.find((p) => p.id === planetId);
  const speedOfLight = 3e5;

  if (!selectedPlanet) return;

  const calculateLightDistance =
    selectedPlanet.distanceFromSun / speedOfLight / 60;

  return (
    <div className={`text-white min-h-screen scroll-smooth`}>
      <section
        className={`min-h-screen bg-center bg-cover flex flex-col justify-center items-center`}
        style={{ backgroundImage: `url("${selectedPlanet.imageUrl}")` }}
      >
        <div
          key={selectedPlanet.id}
          className="flex flex-col gap-40 w-4/5 mt-40 p-8"
        >
          <div className="flex justify-center items-center">
            <div className="w-3/4">
              <h1 className="text-[11rem] font-extrabold uppercase tracking-widest text-center">
                {selectedPlanet.name}
              </h1>
              <h2 className="text-2xl text-center w-full">
                {selectedPlanet.descriptionLong}
              </h2>
            </div>
          </div>
          <div className="flex gap-32">
            <div>
              <p className="font-bold uppercase">Tageslänge</p>
              <p className="text-4xl font-light">
                {selectedPlanet.lengthOfDay < 24
                  ? selectedPlanet.lengthOfDay.toFixed(1) + " Stunden"
                  : (selectedPlanet.lengthOfDay / 24).toFixed(1) + " Erdtage"}
              </p>
            </div>
            <div>
              <p className="font-bold uppercase">Durchmesser</p>
              <p className="text-4xl font-light">
                {selectedPlanet.diameter.toLocaleString("de")} km
              </p>
            </div>
            <div>
              <p className="font-bold uppercase">Monde</p>
              <p className="text-4xl font-light">
                {selectedPlanet.numberOfMoons} bestätigte
              </p>
            </div>
            <div>
              <p className="font-bold uppercase">Planet Typ</p>
              <p className="text-4xl font-light">{selectedPlanet.planetType}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center flex-col">
        <div>
          <div className="flex gap-24">
            {[...planets].reverse().map((planet) => (
              <div
                key={planet.id}
                className={`flex flex-col gap-6 text-center ${planetId === planet.id ? "text-white" : "text-neutral-400"}`}
              >
                <p>{planet.astronomicalUnit} AE</p>
                <svg
                  onClick={() => selectPlanetId(planet.id)}
                  className={`w-20 h-20 border-2 rounded-full mb-16 mt-16 cursor-pointer`}
                />
                <p className="font-bold">{planet.name}</p>
                <p>{planet.numberOfMoons} Monde</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-28 text-neutral-400">
            AE (Astronomische Einheit) — die Distanz der Erde zur Sonne.
          </p>
        </div>
      </section>
      <section
        className="min-h-screen bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url('${selectedPlanet.sectionOneUrl}')` }}
      >
        <div className="flex w-4/5 gap-14">
          <p
            className="text-[15rem] font-semibold leading-44 bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
            style={{
              backgroundImage: `url('${selectedPlanet.sectionOneUrl}')`,
            }}
          >
            01
          </p>
          <div className="flex flex-col gap-6">
            <p className="text-7xl font-bold uppercase tracking-[0.3em] border-t-2 w-28 pt-14 mb-8">
              Übersicht
            </p>
            <p className="w-2/5 text-neutral-300 tracking-wider">
              {selectedPlanet.descriptionLong}
            </p>
            <p className="w-2/5 text-neutral-300 tracking-wider">
              {selectedPlanet.descriptionShort}
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="min-h-screen flex justify-center items-center w-full flex-col gap-40">
          <div className="flex justify-center gap-36 uppercase tracking-widest font-light">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Lichtlaufzeit zur Sonne</p>
              <p className="text-5xl">
                ca.{" "}
                {calculateLightDistance < 60
                  ? calculateLightDistance.toFixed(0) + " Minuten"
                  : (calculateLightDistance / 60).toFixed(1) + " Stunden"}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Distanz zur Sonne</p>
              <p className="text-5xl">
                {selectedPlanet.distanceFromSun / 1e6 < 1e3
                  ? (selectedPlanet.distanceFromSun / 1e6).toFixed(1) +
                    " Millionen "
                  : (selectedPlanet.distanceFromSun / 1e9).toFixed(2) +
                    " Milliarden "}
                km
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Jahreslänge</p>
              <p className="text-5xl">
                {selectedPlanet.lengthOfYear < 365
                  ? selectedPlanet.lengthOfYear.toFixed(1) + " Erdtage"
                  : (selectedPlanet.lengthOfYear / 365).toFixed(1) +
                    " Erdjahre"}
              </p>
            </div>
          </div>
          <div className="flex w-4/5 flex-row-reverse items-center gap-24">
            <p
              className="text-[15rem] font-semibold leading-44 bg-clip-text text-transparent bg-center"
              style={{
                backgroundImage: `url('${selectedPlanet.sectionTwoUrl}')`,
              }}
            >
              02
            </p>
            <div className="flex flex-col gap-6 items-end text-left">
              <p className="relative text-7xl font-bold uppercase tracking-[0.3em] mb-8 pt-14 w-fit">
                Merkmale
                <span className="absolute top-0 right-6 w-28 border-t-2"></span>
              </p>
              <p className="w-2/5 text-neutral-300 tracking-wider">
                {selectedPlanet.featureDescription}
              </p>
            </div>
          </div>
        </div>
        <div
          className="min-h-screen bg-center bg-cover flex justify-center items-center w-full flex-col gap-40"
          style={{
            backgroundImage: `url('${selectedPlanet.sectionTwoUrl}')`,
          }}
        >
          <div className="flex max-w-4/5 justify-end">
            <div className="w-2/5 flex flex-col gap-14 items-center">
              <div className="flex flex-col gap-6">
                <p className="text-2xl font-bold uppercase">
                  {selectedPlanet.featureTitle}
                </p>
                <p className="text-neutral-300 tracking-wider">
                  {selectedPlanet.featureInfo}
                </p>
              </div>
              <div className="flex flex-col gap-10 text-neutral-300 w-3/5">
                <div className="flex gap-4 items-center">
                  <ThermometerHotIcon size={32} className="shrink-0" />
                  <p>
                    Extreme Temperaturschwankungen von über 600 °C zwischen Tag
                    und Nacht.
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <LightningIcon size={32} className="shrink-0" />
                  <p>
                    Kein nennenswertes Magnetfeld - Sonnenwinde treffen direkt
                    auf die Oberfläche.
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <ClockIcon size={32} className="shrink-0" />
                  <p>
                    Ein Tag dauert doppelt so lang wie ein Merkur-Jahr (176
                    Erdtage).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col min-h-screen justify-center items-center gap-24">
        <div className="flex items-center justify-center gap-24 w-4/5">
          <p
            className="text-[15rem] font-semibold leading-44 bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
            style={{
              backgroundImage: `url('${selectedPlanet.sectionThreeUrl}')`,
            }}
          >
            03
          </p>
          <div className="flex flex-col gap-12">
            <span className="border-t-2 w-32"></span>
            <p className="text-7xl font-bold uppercase tracking-[0.3em]">
              In Depth
            </p>
            <p className="w-2xl text-neutral-300 font-semibold tracking-wider leading-loose">
              {selectedPlanet.inDepthDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-24">
          {selectedPlanet.atmosphere.map((atmosphere) => (
            <div key={atmosphere.gas}>
              <div className="relative size-72 border-2 border-gray-700 rounded-full p-6">
                <svg
                  className="-rotate-90 drop-shadow-[0_0_12px_rgba(43,127,255,1)]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-500"
                    strokeWidth="1.5"
                    strokeDasharray={100}
                    strokeDashoffset={100 - atmosphere.percentage}
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-4xl font-light">
                    {atmosphere.percentage}%
                  </p>
                  <p className="font-extralight">{atmosphere.gas}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
