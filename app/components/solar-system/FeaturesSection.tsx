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
    <section>
      <div className="flex flex-col">
        {planet.distanceFromSun !== 0 && (
          <div className="flex p-8 lg:flex-row flex-col justify-between gap-8 lg:gap-36 uppercase tracking-widest font-light w-full max-w-384 mx-auto">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-400">Lichtlaufzeit zur Sonne</p>
              <p className="text-2xl lg:text-4xl">
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
              <p className="text-2xl lg:text-4xl">
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
              <p className="text-2xl lg:text-4xl">
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

        <div className="flex flex-col lg:flex-row-reverse items-end gap-6 lg:gap-14 lg:p-40 p-8">
          <p
            className="text-9xl lg:text-[15rem] font-semibold bg-clip-text text-transparent bg-center"
            style={{
              backgroundImage: `url('${planet.section[1]}')`,
            }}
          >
            02
          </p>
          <div className="flex flex-col items-end gap-8">
            <span className="border border-white w-14 lg:w-28"></span>
            <p className="text-3xl lg:text-7xl font-bold uppercase tracking-[0.3em]">
              Merkmale
            </p>
            <p className="w-xs text-neutral-300 tracking-wider text-right">
              {planet.featureDescription}
            </p>
          </div>
        </div>

        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url('${planet.section[1]}')`,
          }}
        >
          <div className="flex lg:flex-col gap-14 p-8 lg:p-40 items-end">
            <div className="flex flex-col items-center gap-8 bg-black/35 p-8 rounded-2xl">
              <div className="flex flex-col gap-6 lg:w-xl">
                <p className="text-xl lg:text-2xl font-bold uppercase">
                  {planet.featureTitle}
                </p>
                <p className="text-neutral-300 tracking-wider">
                  {planet.featureInfo}
                </p>
              </div>
              <div className="flex flex-col text-neutral-300 gap-10 lg:w-sm">
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
      </div>
    </section>
  );
}
