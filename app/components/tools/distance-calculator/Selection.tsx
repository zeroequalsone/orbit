import PlanetSelect from "../PlanetSelect";

type SelectionProps = {
  setDistanceFrom: (distance: number) => void;
  setDistanceTo: (distance: number) => void;
  distanceFrom: number;
  distanceTo: number;
};

export default function Selection({
  setDistanceFrom,
  setDistanceTo,
  distanceFrom,
  distanceTo,
}: SelectionProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:w-auto sm:flex-row sm:gap-10 sm:px-10">
      <PlanetSelect
        id="distanceFrom"
        label="Von:"
        value={distanceFrom}
        onChange={setDistanceFrom}
        disabledId={distanceTo}
      />
      <PlanetSelect
        id="distanceTo"
        label="Nach:"
        value={distanceTo}
        onChange={setDistanceTo}
        disabledId={distanceFrom}
      />
    </div>
  );
}
