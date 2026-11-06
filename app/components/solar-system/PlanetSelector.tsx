import { planets } from "@/data/planets";
import { getPlanetDisplaySize } from "@/lib/planets";

export default function PlanetSelector({
  planetId,
  setPlanetId,
}: {
  planetId: number;
  setPlanetId: (id: number) => void;
}) {
  return (
    <section className="flex flex-col items-center px-4 pb-24 pt-40">
      <div className="flex w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)] md:p-8 lg:flex-row lg:justify-between lg:gap-2">
          {planets.map((planet) => {
            const size = getPlanetDisplaySize(planet);
            const isSelected = planetId === planet.id;
            return (
              <button
                type="button"
                key={planet.id}
                aria-pressed={isSelected}
                onClick={() => setPlanetId(planet.id)}
                className={`group flex cursor-pointer items-center justify-between rounded-xl border px-4 py-1 text-left transition-all duration-300 lg:flex-col lg:px-3 lg:py-2 ${
                  isSelected
                    ? "border-white/20 bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                    : "border-transparent text-white/50 hover:border-white/10 hover:bg-white/5 hover:text-white/80"
                }`}
              >
                <span className="flex-1 text-xs font-medium uppercase tracking-widest">
                  {planet.astronomicalUnit.toLocaleString("de", {
                    maximumFractionDigits: 2,
                  })}{" "}
                  AE
                </span>
                <span
                  aria-hidden
                  className={`hidden lg:flex rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%] transition-transform duration-300 group-hover:scale-105 ${
                    isSelected
                      ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "opacity-70"
                  }`}
                  style={{
                    height: size,
                    width: size,
                    backgroundImage: `url('${planet.iconUrl}')`,
                  }}
                />
                <span
                  aria-hidden
                  className={`lg:hidden rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%] size-12 ${
                    isSelected
                      ? "drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      : "opacity-70"
                  }`}
                  style={{
                    backgroundImage: `url('${planet.iconUrl}')`,
                  }}
                />
                <span className="flex flex-1 items-end justify-end">
                  <span className="flex w-fit flex-col items-center gap-1">
                    <span className="text-sm font-medium uppercase tracking-widest">
                      {planet.name}
                    </span>
                    <span className="text-xs tracking-widest text-white/50">
                      {planet.numberOfMoons} Monde
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-center text-xs uppercase tracking-widest text-white/50">
          AE (Astronomische Einheit) — die Distanz der Erde zur Sonne.
        </p>
      </div>
    </section>
  );
}
