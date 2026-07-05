import { Planet } from "@/data/planets";
import PlanetStats from "./PlanetStats";

export default function PlanetHeader({ planet }: { planet: Planet }) {
  return (
    <section
      className={`min-h-screen bg-center bg-cover flex flex-col justify-center items-center`}
      style={{ backgroundImage: `url("${planet.imageUrl}")` }}
    >
      <div key={planet.id} className="flex flex-col gap-40 w-4/5 mt-40 p-8">
        <div className="flex justify-center items-center">
          <div className="w-3/4">
            <h1 className="text-[11rem] font-extrabold uppercase tracking-widest text-center">
              {planet.name}
            </h1>
            <h2 className="text-2xl text-center w-full">
              {planet.descriptionLong}
            </h2>
          </div>
        </div>
        <PlanetStats planet={planet} />
      </div>
    </section>
  );
}
