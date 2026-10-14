import PlanetIcon from "@/components/planets/PlanetIcon";
import { Planet } from "@/data/planets";

type PlanetDistanceVisualProps = {
  from: Planet;
  to: Planet;
  distanceKm: number;
};

export default function PlanetDistanceVisual({
  from,
  to,
  distanceKm,
}: PlanetDistanceVisualProps) {
  return (
    <div className="flex items-center gap-2">
      <PlanetIcon planet={from} />
      <span
        className="hidden h-0 rounded-full border border-dashed border-white/40 lg:block"
        style={{ width: Math.sqrt(distanceKm / 20_000) }}
      />
      <span className="h-0 w-20 rounded-full border border-dashed border-white/40 lg:hidden" />
      <PlanetIcon planet={to} />
    </div>
  );
}
