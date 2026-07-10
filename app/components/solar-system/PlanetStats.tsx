import { Planet } from "@/data/planets";
import { InfoIcon } from "@phosphor-icons/react";
import { Tooltip } from "radix-ui";

export default function PlanetStats({ planet }: { planet: Planet }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-32">
      <div>
        <p className="font-bold uppercase">Tagesdauer</p>
        <p className="text-2xl lg:text-4xl font-light">
          {planet.lengthOfDay < 24
            ? planet.lengthOfDay.toLocaleString("de", {
                maximumFractionDigits: 1,
              }) + " Stunden"
            : (planet.lengthOfDay / 24).toLocaleString("de", {
                maximumFractionDigits: 1,
              }) + " Erdtage"}
        </p>
      </div>
      <div>
        <p className="font-bold uppercase">Durchmesser</p>
        <p className="text-2xl lg:text-4xl font-light">
          {planet.diameter.toLocaleString("de", {
            maximumFractionDigits: 1,
          })}{" "}
          km
        </p>
      </div>
      <div>
        <div className="flex gap-2">
          <p className="font-bold uppercase">Monde</p>
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
                  Stand: {new Date().toLocaleDateString("de")}
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <p className="text-2xl lg:text-4xl font-light">
          {planet.numberOfMoons}{" "}
          {planet.numberOfMoons === 1 ? "bestätigter" : "bestätigte"}
        </p>
      </div>
      <div>
        <p className="font-bold uppercase">Planetentyp</p>
        <p className="text-2xl lg:text-4xl font-light">{planet.planetType}</p>
      </div>
    </div>
  );
}
