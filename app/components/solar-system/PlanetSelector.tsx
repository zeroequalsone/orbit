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
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center p-8 max-w-384 w-full gap-10">
        <div className="flex lg:flex-row flex-col justify-between">
          {[...planets].reverse().map((planet) => (
            <div
              key={planet.id}
              className={`flex lg:flex-col items-center justify-between cursor-pointer ${planetId === planet.id ? "text-white" : "text-neutral-400"}`}
              onClick={() => setPlanetId(planet.id)}
            >
              <p>
                {planet.astronomicalUnit.toLocaleString("de", {
                  maximumFractionDigits: 2,
                })}{" "}
                AE
              </p>
              <div
                className={`hidden lg:flex rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%]`}
                style={{
                  height: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                  width: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
                  backgroundImage: `url('${planet.iconUrl}')`,
                }}
              />
              <div
                className={`lg:hidden rounded-full mb-8 mt-8 bg-center bg-no-repeat bg-size-[100%] size-12`}
                style={{
                  backgroundImage: `url('${planet.iconUrl}')`,
                }}
              />
              <div className="flex flex-col gap-8 items-center">
                <p className="font-bold">{planet.name}</p>
                <p>{planet.numberOfMoons} Monde</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400">
          AE (Astronomische Einheit) — die Distanz der Erde zur Sonne.
        </p>
      </div>
    </section>
  );
}
