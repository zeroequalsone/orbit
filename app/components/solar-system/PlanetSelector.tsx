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
    <section className="min-h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col">
        <div className="flex gap-18">
          {[...planets].reverse().map((planet) => (
            <div
              key={planet.id}
              className={`flex flex-col items-center justify-between cursor-pointer ${planetId === planet.id ? "text-white" : "text-neutral-400"}`}
              onClick={() => setPlanetId(planet.id)}
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
  );
}
