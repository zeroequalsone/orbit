import { SolarSystemObjects } from "@/data/solarSystemObjects";
import Link from "next/link";

export default async function ItemPage({
  params,
}: {
  params: { itemSlug: string };
}) {
  const { itemSlug } = await params;

  const objects = SolarSystemObjects.find((obj) => obj.slug === itemSlug);

  if (!objects) return;

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={`../${objects.category}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Zurück zu {objects.type}
          </Link>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            {objects.name}
          </h1>
        </div>

        {/* Hauptkarte */}
        <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-sm md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr]">
            {/* Bild */}
            <div className="mx-auto aspect-square w-full max-w-80 overflow-hidden rounded-xl border border-white/10 bg-black p-2 lg:sticky lg:top-28 lg:self-start">
              <img
                src={objects.displayImageUrl}
                alt={objects.name}
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>

            <div className="flex flex-col gap-10">
              {/* Intro */}
              <div className="flex flex-col gap-3">
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
                  {objects.type}
                </span>
                <h2 className="text-2xl font-semibold uppercase tracking-tight text-white md:text-3xl">
                  {objects.name}
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {objects.description}
                </p>
              </div>

              {/* Fakten */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Alter
                  </p>
                  <p className="mt-1 text-base text-white">
                    Ca. {objects.age} Jahre
                  </p>
                </div>
                {objects.rotation_period && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Tageslänge
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.rotation_period}
                    </p>
                  </div>
                )}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Durchmesser
                  </p>
                  <p className="mt-1 text-base text-white">
                    {objects.diameter_km} km
                  </p>
                </div>
                {objects.distance_from_sun_km && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Distanz zur Sonne
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.distance_from_sun_km} km
                    </p>
                  </div>
                )}
                {objects.moonNames && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Monde
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.numberOfMoons}
                    </p>
                  </div>
                )}
                {objects.mass_kg && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Masse
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.mass_kg}
                    </p>
                  </div>
                )}
                {objects.gravity_m_s2 && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Fallbeschleunigung
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.gravity_m_s2}
                    </p>
                  </div>
                )}
                {objects.escape_velocity_km_s && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Fluchtgeschwindigkeit
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.escape_velocity_km_s}
                    </p>
                  </div>
                )}
                {objects.perihelion_km && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Sonnennächster Punkt
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.perihelion_km} km
                    </p>
                  </div>
                )}
                {objects.aphelion_km && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Sonnenfernster Punkt
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.aphelion_km} km
                    </p>
                  </div>
                )}
                {objects.orbital_period_days && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Umlaufzeit
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.orbital_period_days}
                    </p>
                  </div>
                )}
                {objects.axial_tilt_degrees && (
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                    <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                      Achsenneigung
                    </p>
                    <p className="mt-1 text-base text-white">
                      {objects.axial_tilt_degrees}°
                    </p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                  Details
                </p>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {objects.detailedDescription}
                </p>
              </div>

              {objects.composition && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Hauptbestandteile
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {objects.composition}
                  </p>
                </div>
              )}

              {objects.moonNames && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Benannte Monde
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {objects.moonNames.join(", ")}
                  </p>
                </div>
              )}

              {objects.ringSystem == true && objects.ringDescription && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    {objects.ringSystem}
                  </p>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {objects.ringDescription}
                  </p>
                </div>
              )}

              {objects.missions && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Missionen
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {objects.missions.map((mission) => (
                      <div
                        key={`${mission.name}-${mission.year}`}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        <p className="text-sm font-medium uppercase tracking-widest text-white">
                          {mission.name}{" "}
                          <span className="text-white/50">
                            ({mission.year})
                          </span>
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/70">
                          {mission.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {objects.atmosphere && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Atmosphäre
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {objects.atmosphere.map((gas) => (
                      <div
                        key={`${gas.gas}`}
                        className="w-full rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        <p className="text-sm font-medium uppercase tracking-widest text-white">
                          {gas.gas}
                        </p>
                        <p className="mt-1 text-sm text-white/70">
                          {gas.percentage} %
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {objects.atmosphereLayers && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Klima
                  </p>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {objects.atmosphereLayers.map((atmosphereLayer) => (
                        <div
                          key={`${atmosphereLayer.name}-${atmosphereLayer}`}
                          className="w-full rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
                        >
                          <p className="text-sm font-medium uppercase tracking-widest text-white">
                            {atmosphereLayer.name}
                          </p>
                          <p className="mt-2 text-sm text-white/70">
                            {atmosphereLayer.temperature}
                          </p>
                          <p className="text-sm text-white/70">
                            {atmosphereLayer.pressure}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          Oberflächendruck
                        </p>
                        <p className="mt-1 text-base text-white">
                          {objects.surface_pressure_bars} bar
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          Durchschnittstemperatur
                        </p>
                        <p className="mt-1 text-base text-white">
                          {objects.average_temperature_celsius} °C
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          Temperaturbereich
                        </p>
                        <p className="mt-1 text-base text-white">
                          {objects.temperature_range}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          Windgeschwindigkeit
                        </p>
                        <p className="mt-1 text-base text-white">
                          {objects.wind_speed_kmh} km/h
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10">
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          Magnetfeld
                        </p>
                        <p className="mt-1 text-base text-white">
                          {objects.magnetic_field}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {objects.timeline && (
                <div className="space-y-3">
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                    Zeitstrahl
                  </p>
                  <div className="space-y-8 border-l border-white/20">
                    {objects.timeline.map((timeline) => (
                      <div key={timeline.year} className="relative ml-6">
                        <span
                          aria-hidden
                          className="absolute -left-7.25 top-2 size-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        />
                        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                          {timeline.year}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/80 md:text-base">
                          {timeline.event}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
