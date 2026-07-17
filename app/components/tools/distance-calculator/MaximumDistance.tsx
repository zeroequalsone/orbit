import { Planet } from "@/data/planets";
import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip } from "radix-ui";

type MaximumDistanceProps = {
  from: Planet;
  to: Planet;
  speedOfLight: number;
};

export default function MaximumDistance({
  from,
  to,
  speedOfLight,
}: MaximumDistanceProps) {
  const maxDistance = from.distanceFromSun + to.distanceFromSun;

  return (
    <div className="flex lg:flex-row flex-col items-center lg:gap-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            <p className="text-xl font-bold">Maximale Distanz</p>
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
                    Größter Abstand zwischen beiden Planeten (auf
                    gegenüberliegenden Seiten der Sonne)
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <p className="text-lg">
            {maxDistance / 1_000_000 < 1_000
              ? (maxDistance / 1_000_000).toFixed(1).replaceAll(".", ",") +
                " Millionen "
              : (maxDistance / 1_000_000_000).toFixed(2).replaceAll(".", ",") +
                " Milliarden "}
            km
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold">Maximale Lichtlaufzeit</p>
          <p className="text-lg">
            ca.{" "}
            {maxDistance / speedOfLight / 60 < 60
              ? (maxDistance / speedOfLight / 60)
                  .toFixed(0)
                  .replaceAll(".", ",") + " Minuten"
              : (maxDistance / speedOfLight / 60 / 60)
                  .toFixed(1)
                  .replaceAll(".", ",") + " Stunden"}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 lg:max-h-full max-h-48">
        <div
          className={`rounded-full lg:max-w-full max-w-24`}
          style={{
            height: `${from.id === 6 ? Math.sqrt(from.diameter / 5) : Math.sqrt(from.diameter / 20)}px`,
            width: `${from.id === 6 ? Math.sqrt(from.diameter / 5) : Math.sqrt(from.diameter / 20)}px`,
            backgroundImage: `url('${from.iconUrl}')`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <span
          className={`hidden lg:block h-0 border border-dashed rounded-full`}
          style={{ width: `${Math.sqrt(maxDistance / 20_000)}px` }}
        ></span>
        <span
          className={`lg:hidden h-0 border border-dashed rounded-full w-20`}
        ></span>
        <div
          className={`rounded-full lg:max-w-full max-w-24`}
          style={{
            height: `${to.id === 6 ? Math.sqrt(to.diameter / 5) : Math.sqrt(to.diameter / 20)}px`,
            width: `${to.id === 6 ? Math.sqrt(to.diameter / 5) : Math.sqrt(to.diameter / 20)}px`,
            backgroundImage: `url('${to.iconUrl}')`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
