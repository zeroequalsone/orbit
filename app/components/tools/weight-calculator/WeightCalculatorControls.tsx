import { planets } from "@/data/planets";

type WeightCalculatorControlsProps = {
  earthWeight: number;
  onEarthWeightChange: (weight: number) => void;
  onPlanetChange: (selectedPlanetId: number) => void;
};

export default function WeightCalculatorControls({
  earthWeight,
  onEarthWeightChange,
  onPlanetChange,
}: WeightCalculatorControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-xl">
      <div className="flex gap-2 text-xl">
        <label htmlFor="earthWeight">
          <b>Dein Erd-Gewicht:</b>
        </label>
        <input
          className="w-16 text-right bg-neutral-900"
          type="number"
          id="earthWeight"
          value={earthWeight}
          onChange={(e) => {
            const value = Math.max(0, Math.min(Number(e.target.value), 999));
            onEarthWeightChange(value);
          }}
          min={0}
          max={3}
          step={0.5}
          autoFocus
        />
        KG
      </div>
      <div className="flex gap-2">
        <label htmlFor="compareWith">
          <b>Vergleichen mit:</b>
        </label>
        <select
          className="bg-neutral-900"
          id="compareWith"
          onChange={(e) => onPlanetChange(Number(e.target.value))}
        >
          {planets.map(
            (planet) =>
              planet.id !== 0 && (
                <option key={planet.id} value={planet.id}>
                  {planet.name}
                </option>
              ),
          )}
        </select>
      </div>
    </div>
  );
}
