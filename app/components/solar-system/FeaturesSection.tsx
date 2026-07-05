import { Planet } from "@/data/planets";
import {
  ClockIcon,
  LightningIcon,
  ThermometerHotIcon,
} from "@phosphor-icons/react";

export default function FeaturesSection({ planet }: { planet: Planet }) {
  const SPEED_OF_LIGHT_IN_KM_S = 300_000;
  const lightTravelTime = planet.distanceFromSun / SPEED_OF_LIGHT_IN_KM_S / 60;

  return (
    <section className="flex flex-col">
      <div className="flex justify-center items-center w-full flex-col gap-40 pt-48 pb-48">
        {planet.distanceFromSun !== 0 && (
          <div className="flex justify-center gap-36 uppercase tracking-widest font-light">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Lichtlaufzeit zur Sonne</p>
              <p className="text-5xl">
                ca.{" "}
                {lightTravelTime < 60
                  ? lightTravelTime.toLocaleString("de", {
                      maximumFractionDigits: 0,
                    }) + " Minuten"
                  : (lightTravelTime / 60).toLocaleString("de", {
                      maximumFractionDigits: 1,
                    }) + " Stunden"}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Distanz zur Sonne</p>
              <p className="text-5xl">
                {planet.distanceFromSun / 1e6 < 1e3
                  ? (planet.distanceFromSun / 1e6).toLocaleString("de", {
                      maximumFractionDigits: 1,
                    }) + " Millionen "
                  : (planet.distanceFromSun / 1e9).toLocaleString("de", {
                      maximumFractionDigits: 2,
                    }) + " Milliarden "}
                km
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Jahreslänge</p>
              <p className="text-5xl">
                {planet.lengthOfYear < 365
                  ? planet.lengthOfYear.toLocaleString("de", {
                      maximumFractionDigits: 1,
                    }) + " Erdtage"
                  : (planet.lengthOfYear / 365).toLocaleString("de", {
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
              backgroundImage: `url('${planet.section[1]}')`,
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
              {planet.featureDescription}
            </p>
          </div>
        </div>
      </div>
      <div
        className="min-h-screen bg-center bg-cover flex justify-center items-center w-full flex-col gap-40"
        style={{
          backgroundImage: `url('${planet.section[1]}')`,
        }}
      >
        <div className="flex max-w-4/5 justify-end">
          <div className="w-2/5 flex flex-col gap-14 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold uppercase">
                {planet.featureTitle}
              </p>
              <p className="text-neutral-300 tracking-wider">
                {planet.featureInfo}
              </p>
            </div>
            <div className="flex flex-col gap-10 text-neutral-300 w-3/5">
              {planet.quickFacts.map((quickFact) => (
                <div
                  key={`${quickFact.id}-${quickFact.text}`}
                  className="flex gap-4 items-center"
                >
                  {quickFact.id === 1 && (
                    <ThermometerHotIcon size={32} className="shrink-0" />
                  )}
                  {quickFact.id === 2 && (
                    <LightningIcon size={32} className="shrink-0" />
                  )}
                  {quickFact.id === 3 && (
                    <ClockIcon size={32} className="shrink-0" />
                  )}
                  <p>{quickFact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
