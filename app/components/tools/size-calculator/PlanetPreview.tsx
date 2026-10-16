import PlanetIcon from "@/components/planets/PlanetIcon";
import { Planet } from "@/data/planets";

export default function PlanetPreview({ planet }: { planet: Planet }) {
  return (
    <div className={`flex flex-col gap-6 text-center items-center`}>
      <PlanetIcon planet={planet} />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium uppercase tracking-widest text-white">
          {planet.name}
        </p>
        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
          {planet.diameter.toLocaleString("de", {
            maximumFractionDigits: 0,
          })}{" "}
          km
        </p>
      </div>
    </div>
  );
}
