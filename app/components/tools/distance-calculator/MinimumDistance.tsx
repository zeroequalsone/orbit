import { Planet } from "@/data/planets";
import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip } from "radix-ui";

type MinimumDistanceProps = {
  from: Planet;
  to: Planet;
  speedOfLight: number;
};

export default function MinimumDistance({
  from,
  to,
  speedOfLight,
}: MinimumDistanceProps) {
  const minDistance = Math.abs(from.distanceFromSun - to.distanceFromSun);

  return (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <p className="text-xl font-bold">Minimale Distanz</p>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <InfoIcon className="cursor-help" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="text-white text-sm bg-black/80 p-3 rounded-md max-w-64"
                    sideOffset={5}
                    side="right"
                  >
                    Kürzester Abstand zwischen beiden Planeten (auf derselben
                    Seite der Sonne)
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <p className="text-lg">
            {minDistance / 1e6 < 1e3
              ? (minDistance / 1e6).toFixed(1).replaceAll(".", ",") +
                " Millionen "
              : (minDistance / 1e9).toFixed(2).replaceAll(".", ",") +
                " Milliarden "}
            km
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">Minimale Lichtlaufzeit</p>
          <p className="text-lg">
            ca.{" "}
            {minDistance / speedOfLight / 60 < 60
              ? (minDistance / speedOfLight / 60)
                  .toFixed(0)
                  .replaceAll(".", ",") + " Minuten"
              : (minDistance / speedOfLight / 60 / 60)
                  .toFixed(1)
                  .replaceAll(".", ",") + " Stunden"}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className={`relative flex flex-col text-center`}>
          <svg className={`w-30 h-30 border-2 rounded-full`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-bold">{from.name}</p>
          </div>
        </div>
        <span
          className={`h-0 border border-dashed rounded-full`}
          style={{ width: `${Math.sqrt(minDistance / 2e4)}px` }}
        ></span>
        <div className={`relative flex flex-col text-center`}>
          <svg className={`w-30 h-30 border-2 rounded-full`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-bold">{to.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
