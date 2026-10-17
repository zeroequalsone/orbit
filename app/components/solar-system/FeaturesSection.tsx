import { Planet } from "@/data/planets";
import {
  formatDistance,
  formatLightTime,
  formatYearLength,
} from "@/lib/formatters";
import {
  ClockIcon,
  LightningIcon,
  ThermometerHotIcon,
} from "@phosphor-icons/react";

export default function FeaturesSection({ planet }: { planet: Planet }) {
  return (
    <section>
      <div className="flex flex-col">
        {planet.distanceFromSun !== 0 && (
          <div className="mx-auto w-full max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Lichtlaufzeit zur Sonne
                </p>
                <p className="text-2xl font-light uppercase tracking-widest text-white">
                  {formatLightTime(planet.distanceFromSun)}
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Distanz zur Sonne
                </p>
                <p className="text-2xl font-light uppercase tracking-widest text-white">
                  {formatDistance(planet.distanceFromSun)}
                </p>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Jahreslänge
                </p>
                <p className="text-2xl font-light uppercase tracking-widest text-white">
                  {formatYearLength(planet.lengthOfYear)}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mx-auto flex w-full max-w-7xl px-4 py-24">
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md md:p-10 lg:ml-auto lg:w-auto lg:flex-row-reverse lg:items-end lg:gap-14">
            <p
              className="bg-clip-text bg-center text-9xl font-semibold text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[15rem]"
              style={{
                backgroundImage: `url('${planet.section[1]}')`,
              }}
            >
              02
            </p>
            <div className="flex flex-col gap-6 lg:items-end">
              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
                Kapitel 02
              </span>
              <h2 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
                Merkmale
              </h2>
              <p className="w-full text-sm leading-relaxed text-white/70 md:text-base lg:max-w-xs lg:text-right">
                {planet.featureDescription}
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url('${planet.section[1]}')`,
          }}
        >
          <div className="mx-auto flex w-full max-w-7xl justify-end px-4 py-24">
            <div className="flex w-full flex-col gap-10 rounded-2xl border border-white/10 bg-black/50 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md md:p-10 lg:w-auto">
              <div className="flex flex-col gap-4 lg:w-xl lg:max-w-full">
                <h3 className="text-xl font-semibold uppercase tracking-widest text-white lg:text-2xl">
                  {planet.featureTitle}
                </h3>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {planet.featureInfo}
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:w-xl lg:max-w-full">
                {planet.quickFacts.map((quickFact) => (
                  <div
                    key={`${quickFact.id}-${quickFact.text}`}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 text-white/80 transition-colors hover:border-white/20 hover:bg-white/10"
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
                    <p className="text-sm leading-relaxed md:text-base">
                      {quickFact.text}
                    </p>
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
