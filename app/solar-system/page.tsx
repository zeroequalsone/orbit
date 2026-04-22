"use client";
import { useState } from "react";
import { planets } from "@/data/planets";
import {
  ClockIcon,
  InfoIcon,
  LightningIcon,
  ThermometerHotIcon,
} from "@phosphor-icons/react";
import { Tooltip } from "radix-ui";

export default function SolarSystem() {
  const [planetId, selectPlanetId] = useState<number>(0);
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
              <p className="font-bold uppercase">Tagesdauer</p>
              <p className="text-4xl font-light">
                {selectedPlanet.lengthOfDay < 24
                  ? selectedPlanet.lengthOfDay.toLocaleString("de", {
                      maximumFractionDigits: 1,
                    }) + " Stunden"
                  : (selectedPlanet.lengthOfDay / 24).toLocaleString("de", {
                      maximumFractionDigits: 1,
                    }) + " Erdtage"}
              </p>
            </div>
            <div>
              <p className="font-bold uppercase">Durchmesser</p>
              <p className="text-4xl font-light">
                {selectedPlanet.diameter.toLocaleString("de", {
                  maximumFractionDigits: 1,
                })}{" "}
                km
              </p>
            </div>
            <div>
              <div className="flex gap-2">
                <p className="font-bold uppercase">Monde</p>
                <Tooltip.Provider>
                  <Tooltip.Root delayDuration={0}>
                    <Tooltip.Trigger asChild>
                      <InfoIcon className="cursor-help" />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        className="text-white text-sm bg-black/80 p-3 rounded-md max-w-64"
                        sideOffset={5}
                        side="right"
                      >
                        Stand: {new Date().toLocaleDateString("de")}
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
              <p className="text-4xl font-light">
                {selectedPlanet.numberOfMoons}{" "}
                {selectedPlanet.numberOfMoons === 1
                  ? "bestätigter"
                  : "bestätigte"}
              </p>
            </div>
            <div>
              <p className="font-bold uppercase">Planetentyp</p>
              <p className="text-4xl font-light">{selectedPlanet.planetType}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <div className="flex gap-18">
            {[...planets].reverse().map((planet) => (
              <div
                key={planet.id}
                className={`flex flex-col items-center justify-between cursor-pointer ${planetId === planet.id ? "text-white" : "text-neutral-400"}`}
                onClick={() => selectPlanetId(planet.id)}
              >
                <p>
                  {planet.astronomicalUnit.toLocaleString("de", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  AE
                </p>
                <div
                  className={`rounded-full mb-8 mt-8`}
                  style={{
                    height: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                    width: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                    backgroundImage: `url('${planet.iconUrl}')`,
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="flex flex-col gap-8 items-center">
                  <p className="font-bold">{planet.name}</p>
                  <p>{planet.numberOfMoons} Monde</p>
                </div>
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
        <div className="flex justify-center items-center w-full flex-col gap-40 pt-48 pb-48">
          {selectedPlanet.distanceFromSun !== 0 && (
            <div className="flex justify-center gap-36 uppercase tracking-widest font-light">
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400">Lichtlaufzeit zur Sonne</p>
                <p className="text-5xl">
                  ca.{" "}
                  {calculateLightDistance < 60
                    ? calculateLightDistance.toLocaleString("de", {
                        maximumFractionDigits: 0,
                      }) + " Minuten"
                    : (calculateLightDistance / 60).toLocaleString("de", {
                        maximumFractionDigits: 1,
                      }) + " Stunden"}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400">Distanz zur Sonne</p>
                <p className="text-5xl">
                  {selectedPlanet.distanceFromSun / 1e6 < 1e3
                    ? (selectedPlanet.distanceFromSun / 1e6).toLocaleString(
                        "de",
                        {
                          maximumFractionDigits: 1,
                        },
                      ) + " Millionen "
                    : (selectedPlanet.distanceFromSun / 1e9).toLocaleString(
                        "de",
                        {
                          maximumFractionDigits: 2,
                        },
                      ) + " Milliarden "}
                  km
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400">Jahreslänge</p>
                <p className="text-5xl">
                  {selectedPlanet.lengthOfYear < 365
                    ? selectedPlanet.lengthOfYear.toLocaleString("de", {
                        maximumFractionDigits: 1,
                      }) + " Erdtage"
                    : (selectedPlanet.lengthOfYear / 365).toLocaleString("de", {
                        maximumFractionDigits: 1,
                      }) + " Erdjahr(e)"}
                </p>
              </div>
            </div>
          )}
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
                  <p>{selectedPlanet.quickFacts1}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <LightningIcon size={32} className="shrink-0" />
                  <p>{selectedPlanet.quickFacts2}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <ClockIcon size={32} className="shrink-0" />
                  <p>{selectedPlanet.quickFacts3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col min-h-screen justify-center items-center gap-24 pt-48 pb-48">
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
        <div className="grid grid-cols-3 gap-24">
          {selectedPlanet.atmosphere
            .filter((atmosphere) => atmosphere.percentage > 0)
            .map((atmosphere) => (
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
                      {atmosphere.percentage.toLocaleString("de")}%
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
