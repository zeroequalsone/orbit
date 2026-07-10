import { Planet } from "@/data/planets";
import PlanetStats from "./PlanetStats";

export default function PlanetHeader({ planet }: { planet: Planet }) {
  return (
    <section
      className={
        "min-h-screen flex items-center justify-center bg-center bg-cover"
      }
      style={{
        backgroundImage: `url("${planet.imageUrl}")`,
      }}
    >
      <div
        key={planet.id}
        className="flex flex-col items-start gap-16 lg:gap-40 mt-40 p-8 w-full max-w-384"
      >
        <div className="flex flex-col text-center mx-auto max-w-xs lg:max-w-5xl space-y-8">
          <h1 className="text-6xl lg:text-[11rem] font-extrabold uppercase tracking-widest">
            {planet.name}
          </h1>
          <h2 className="text-lg lg:text-2xl">{planet.descriptionLong}</h2>
        </div>
        <PlanetStats planet={planet} />
      </div>
    </section>
  );
}
