import { planets } from "@/data/planets";

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
    <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-4 text-xl">
      <div className="flex gap-2">
        <label htmlFor="distanceFrom">Von:</label>
        <select
          className="bg-neutral-900 cursor-pointer hover:cursor-pointer"
          id="distanceFrom"
          onChange={(e) => setDistanceFrom(Number(e.target.value))}
          value={distanceFrom}
        >
          {planets.map((planet) => (
            <option
              key={planet.id}
              value={planet.id}
              className="bg-black"
              disabled={distanceTo === planet.id && true}
            >
              {planet.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="distanceTo">Nach:</label>
        <select
          className="bg-neutral-900"
          id="distanceTo"
          onChange={(e) => setDistanceTo(Number(e.target.value))}
          value={distanceTo}
        >
          {planets.map((planet) => (
            <option
              key={planet.id}
              value={planet.id}
              className="bg-black"
              disabled={distanceFrom === planet.id && true}
            >
              {planet.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
