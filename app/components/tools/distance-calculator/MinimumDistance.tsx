import { Planet } from "@/data/planets";
import { InfoIcon } from "@phosphor-icons/react";
import Image from "next/image";
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
    <div className="flex flex-col items-center gap-8 rounded-2xl p-6 md:p-10 lg:flex-row">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-widest text-white/50">
              Minimale Distanz
            </p>
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <InfoIcon className="shrink-0 cursor-help text-white/50 transition-colors hover:text-white active:text-white" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="z-10 max-w-64 rounded-xl border border-white/10 bg-black/80 p-3 text-sm leading-relaxed text-white/80 backdrop-blur-md"
                    sideOffset={5}
                    side="top"
                  >
                    Kürzester Abstand zwischen beiden Planeten (auf derselben
                    Seite der Sonne)
                    <Tooltip.Arrow className="fill-white/10" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          </div>
          <p className="mt-1 text-base text-white">
            {minDistance / 1_000_000 < 1_000
              ? (minDistance / 1_000_000).toFixed(1).replaceAll(".", ",") +
                " Millionen "
              : (minDistance / 1_000_000_000).toFixed(2).replaceAll(".", ",") +
                " Milliarden "}
            km
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-white/50">
            Minimale Lichtlaufzeit
          </p>
          <p className="mt-1 text-base text-white">
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
      <div className="flex items-center gap-2">
        <Image
          alt={from.name}
          src={from.iconUrl}
          width={300}
          height={300}
          className="rounded-full lg:max-h-full lg:max-w-full max-h-24 max-w-24 object-contain"
          style={{
            height: `${from.id === 6 ? Math.sqrt(from.diameter / 5) : Math.sqrt(from.diameter / 20)}px`,
            width: `${from.id === 6 ? Math.sqrt(from.diameter / 5) : Math.sqrt(from.diameter / 20)}px`,
          }}
        />
        <span
          className={`hidden lg:block h-0 border border-dashed border-white/40 rounded-full`}
          style={{ width: `${Math.sqrt(minDistance / 20_000)}px` }}
        ></span>
        <span
          className={`lg:hidden h-0 border border-dashed border-white/40 rounded-full w-20`}
        ></span>
        <Image
          alt={to.name}
          src={to.iconUrl}
          width={300}
          height={300}
          className="rounded-full lg:max-h-full lg:max-w-full max-h-24 max-w-24 object-contain"
          style={{
            width: `${to.id === 6 ? Math.sqrt(to.diameter / 5) : Math.sqrt(to.diameter / 20)}px`,
            height: `${to.id === 6 ? Math.sqrt(to.diameter / 5) : Math.sqrt(to.diameter / 20)}px`,
          }}
        />
      </div>
    </div>
  );
}
