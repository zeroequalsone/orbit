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
    <div className="flex items-center gap-10 text-xl">
      <div className="flex gap-2">
        <label htmlFor="distanceFrom">Von:</label>
        <select
          name="distanceFrom"
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
          name="distanceTo"
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
