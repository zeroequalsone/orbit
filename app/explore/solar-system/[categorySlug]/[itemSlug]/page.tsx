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
    <div className='flex justify-center min-h-screen bg-center bg-cover bg-[url("/BG.png")] text-white'>
      <div className="flex items-center flex-col gap-20 w-4/5 py-52">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
            {objects.name}
          </h1>
          <Link href={`../${objects.category}`}>Zurück zu {objects.type}</Link>
        </div>
        <div className="max-w-6xl rounded-2xl border border-white/20 bg-black p-8 backdrop-blur-sm">
          <div className="grid grid-cols-[320px_1fr] gap-10">
            <div className="size-80">
              <img
                src={objects.displayImageUrl}
                alt={objects.name}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                  {objects.type}
                </p>
                <h2 className="text-4xl font-bold">{objects.name}</h2>
                <p className="text-lg text-white/90">{objects.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-base">
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Alter
                  </p>
                  <p className="mt-1 text-lg">Ca. {objects.age} Jahre</p>
                </div>
                {objects.rotation_period && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Tageslänge
                    </p>
                    <p className="mt-1 text-lg">{objects.rotation_period}</p>
                  </div>
                )}
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Durchmesser
                  </p>
                  <p className="mt-1 text-lg">{objects.diameter_km} km</p>
                </div>
                {objects.distance_from_sun_km && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Distanz zur Sonne
                    </p>
                    <p className="mt-1 text-lg">
                      {objects.distance_from_sun_km} km
                    </p>
                  </div>
                )}
                {objects.moonNames && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Monde
                    </p>
                    <p className="mt-1 text-lg">{objects.numberOfMoons}</p>
                  </div>
                )}
                {objects.mass_kg && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Masse
                    </p>
                    <p className="mt-1 text-lg">{objects.mass_kg}</p>
                  </div>
                )}
                {objects.gravity_m_s2 && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Fallbeschleunigung
                    </p>
                    <p className="mt-1 text-lg">{objects.gravity_m_s2}</p>
                  </div>
                )}
                {objects.escape_velocity_km_s && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Fluchtgeschwindigkeit
                    </p>
                    <p className="mt-1 text-lg">
                      {objects.escape_velocity_km_s}
                    </p>
                  </div>
                )}
                {objects.perihelion_km && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Sonnennächster Punkt
                    </p>
                    <p className="mt-1 text-lg">{objects.perihelion_km} km</p>
                  </div>
                )}
                {objects.aphelion_km && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Sonnenfernster Punkt
                    </p>
                    <p className="mt-1 text-lg">{objects.aphelion_km} km</p>
                  </div>
                )}
                {objects.orbital_period_days && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Umlaufzeit
                    </p>
                    <p className="mt-1 text-lg">
                      {objects.orbital_period_days}
                    </p>
                  </div>
                )}
                {objects.axial_tilt_degrees && (
                  <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-widest text-white/70">
                      Achsenneigung
                    </p>
                    <p className="mt-1 text-lg">
                      {objects.axial_tilt_degrees}°
                    </p>
                  </div>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-white/70">
                  Details
                </p>
                <p className="leading-relaxed text-white/90">
                  {objects.detailedDescription}
                </p>
              </div>
              {objects.composition && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Hauptbestandteile
                  </p>
                  <p className="text-white/90">{objects.composition}</p>
                </div>
              )}
              {objects.moonNames && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Benannte Monde
                  </p>
                  <p className="text-white/90">
                    {objects.moonNames.join(", ")}
                  </p>
                </div>
              )}
              {objects.ringSystem == true && objects.ringDescription && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {objects.ringSystem}
                  </p>
                  <p className="text-white/90">{objects.ringDescription}</p>
                </div>
              )}
              {objects.missions && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Missionen
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {objects.missions.map((mission) => (
                      <div
                        key={`${mission.name}-${mission.year}`}
                        className="rounded-xl border border-white/15 bg-white/5 p-4"
                      >
                        <p className="text-lg font-semibold">
                          {mission.name} ({mission.year})
                        </p>
                        <p className="text-white/80">{mission.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {objects.atmosphere && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Atmosphäre
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {objects.atmosphere.map((gas) => (
                      <div
                        key={`${gas.gas}`}
                        className="rounded-xl border border-white/15 bg-white/5 p-4 w-full"
                      >
                        <p className="text-lg font-semibold">{gas.gas}</p>
                        <p className="text-white/80">{gas.percentage} %</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {objects.atmosphereLayers && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    Klima
                  </p>
                  <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-2">
                      {objects.atmosphereLayers.map((atmosphereLayer) => (
                        <div
                          key={`${atmosphereLayer.name}-${atmosphereLayer}`}
                          className="rounded-xl border border-white/15 bg-white/5 p-4 w-full"
                        >
                          <p className="text-lg font-semibold">
                            {atmosphereLayer.name}
                          </p>
                          <p className="text-white/80">
                            {atmosphereLayer.temperature}
                          </p>
                          <p className="text-white/80">
                            {atmosphereLayer.pressure}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Oberflächendruck
                        </p>
                        <p className="mt-1 text-lg">
                          {objects.surface_pressure_bars} bar
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Durchschnittstemperatur
                        </p>
                        <p className="mt-1 text-lg">
                          {objects.average_temperature_celsius} °C
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Temperaturbereich
                        </p>
                        <p className="mt-1 text-lg">
                          {objects.temperature_range}
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Windgeschwindigkeit
                        </p>
                        <p className="mt-1 text-lg">
                          {objects.wind_speed_kmh} km/h
                        </p>
                      </div>
                      <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          Magnetfeld
                        </p>
                        <p className="mt-1 text-lg">{objects.magnetic_field}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {objects.timeline && (
                <div className="space-y-3">
                  <p className="text-xs uppercase text-white/70">Zeitstrahl</p>
                  <div className="space-y-8 border-l-2">
                    {objects.timeline.map((timeline) => (
                      <div key={timeline.year} className="ml-4">
                        <p className="text-white/70">{timeline.year}</p>
                        <p className="text-lg">{timeline.event}</p>
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
