import { planets } from "@/data/planets";
import { Dispatch } from "react";

export default function PlanetSelector({
  planetId,
  setPlanetId,
}: {
  planetId: number;
  setPlanetId: Dispatch<number>;
}) {
  return (
    <section className="flex flex-col items-center px-4 pb-24 pt-40">
      <div className="flex w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] md:p-8 lg:flex-row lg:justify-between lg:gap-2">
          {[...planets].map((planet) => (
            <div
              key={planet.id}
              className={`group flex cursor-pointer items-center justify-between rounded-xl border px-4 py-1 transition-all duration-300 lg:flex-col lg:px-3 lg:py-2 ${
                planetId === planet.id
                  ? "border-white/20 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                  : "border-transparent text-white/50 hover:border-white/10 hover:bg-white/5 hover:text-white/80"
              }`}
              onClick={() => setPlanetId(planet.id)}
            >
              <p className="flex-1 text-xs font-medium uppercase tracking-widest">
                {planet.astronomicalUnit.toLocaleString("de", {
                  maximumFractionDigits: 2,
                })}{" "}
                AE
              </p>
              <div
                className={`hidden lg:flex rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%] transition-transform duration-300 group-hover:scale-105 ${
                  planetId === planet.id
                    ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "opacity-70"
                }`}
                style={{
                  height: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                  width: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                  backgroundImage: `url('${planet.iconUrl}')`,
                }}
              />
              <div
                className={`lg:hidden rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%] size-12 ${
                  planetId === planet.id
                    ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "opacity-70"
                }`}
                style={{
                  backgroundImage: `url('${planet.iconUrl}')`,
                }}
              />
              <div className="flex flex-1 items-end justify-end">
                <div className="flex w-fit flex-col items-center gap-1">
                  <p className="text-sm font-medium uppercase tracking-widest">
                    {planet.name}
                  </p>
                  <p className="text-xs tracking-widest text-white/50">
                    {planet.numberOfMoons} Monde
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs uppercase tracking-widest text-white/50">
          AE (Astronomische Einheit) — die Distanz der Erde zur Sonne.
        </p>
      </div>
    </section>
  );
}
