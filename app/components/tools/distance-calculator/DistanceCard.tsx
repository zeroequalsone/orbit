import InfoTooltip from "@/components/ui/InfoTooltip";
import PlanetIcon from "@/components/planets/PlanetIcon";
import { Planet } from "@/data/planets";
import { SPEED_OF_LIGHT_IN_KM_S } from "@/lib/constants";
import PlanetDistanceVisual from "./PlanetDistanceVisual";

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
            {distanceKm / 1e6 < 1e3
              ? (distanceKm / 1e6).toFixed(1).replaceAll(".", ",") +
                " Millionen "
              : (distanceKm / 1e9).toFixed(2).replaceAll(".", ",") +
                " Milliarden "}
            km
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">
            {lightTimeLabel}
          </p>
          <p className="mt-1 text-base text-white">
            ca.{" "}
            {distanceKm / SPEED_OF_LIGHT_IN_KM_S / 60 < 60
              ? (distanceKm / SPEED_OF_LIGHT_IN_KM_S / 60)
                  .toFixed(0)
                  .replaceAll(".", ",") + " Minuten"
              : (distanceKm / SPEED_OF_LIGHT_IN_KM_S / 60 / 60)
                  .toFixed(1)
                  .replaceAll(".", ",") + " Stunden"}
          </p>
        </div>
      </div>
      <PlanetDistanceVisual from={from} to={to} distanceKm={distanceKm} />
    </div>
  );
}
