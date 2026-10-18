import InfoTooltip from "@/components/ui/InfoTooltip";
import { Planet } from "@/data/planets";
import PlanetDistanceVisual from "./PlanetDistanceVisual";
import { formatDistance, formatLightTime } from "@/lib/formatters";

type DistanceCardProps = {
  from: Planet;
  to: Planet;
  distanceLabel: string;
  tooltip: string;
  lightTimeLabel: string;
  distanceKm: number;
};

export default function DistanceCard({
  from,
  to,
  distanceLabel,
  tooltip,
  lightTimeLabel,
  distanceKm,
}: DistanceCardProps) {
  return (
    <div className="flex flex-col items-center gap-8 rounded-2xl p-6 md:p-10 lg:flex-row">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              {distanceLabel}
            </p>
            <InfoTooltip tooltip={tooltip} />
          </div>
          <p className="mt-1 text-base text-white">
            {formatDistance(distanceKm)}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">
            {lightTimeLabel}
          </p>
          <p className="mt-1 text-base text-white">
            {formatLightTime(distanceKm)}
          </p>
        </div>
      </div>
      <PlanetDistanceVisual from={from} to={to} distanceKm={distanceKm} />
    </div>
  );
}
