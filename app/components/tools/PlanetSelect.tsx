import { IoChevronDown } from "react-icons/io5";
import { Planet, planets } from "@/data/planets";

type PlanetSelectProps = {
  id: string;
  label: string;
  value: number;
  onChange: (id: number) => void;
  options?: Planet[];
  disabledId?: number;
};

export default function PlanetSelect({
  id,
  label,
  value,
  onChange,
  options = planets,
  disabledId,
}: PlanetSelectProps) {
  return (
    <div className="flex items-center justify-between gap-10 md:gap-4 w-full">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-widest text-white/50"
      >
        {label}
      </label>
      <div className="relative inline-block">
        <select
          className="appearance-none cursor-pointer rounded-full border border-white/10 bg-white/5 py-2 pl-4 pr-10 text-sm uppercase tracking-widest text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:border-white/40 focus-visible:outline-none"
          id={id}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        >
          {options.map((planet) => (
            <option
              key={planet.id}
              value={planet.id}
              className="bg-black"
              disabled={planet.id === disabledId}
            >
              {planet.name}
            </option>
          ))}
        </select>

        <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white" />
      </div>
    </div>
  );
}
