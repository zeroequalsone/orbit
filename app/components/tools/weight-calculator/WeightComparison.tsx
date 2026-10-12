import { Planet } from "@/data/planets";
import FunFact from "./FunFact";

export default function WeightComparison({
  selectedPlanet,
  earthWeight,
}: {
  selectedPlanet: Planet;
  earthWeight: number;
}) {
  const newWeight = (selectedPlanet.gForce / 9.81) * earthWeight;

  return (
    selectedPlanet && (
      <div className="flex w-full flex-col items-center gap-6">
        <div className="w-full max-w-2xl overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <table className="w-full text-center">
            <thead>
              <tr className="border-b border-white/10">
                <th></th>
                <th className="p-4 text-xs font-medium uppercase tracking-widest text-white/50 lg:px-10 lg:py-6">
                  Erde
                </th>
                <th className="p-4 text-xs font-medium uppercase tracking-widest text-white lg:px-10 lg:py-6">
                  {selectedPlanet.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <th className="p-4 text-left text-xs font-medium uppercase tracking-widest text-white/50 lg:px-10 lg:py-6">
                  G-Kraft
                </th>
                <th className="p-4 text-base font-normal text-white/70 lg:px-10 lg:py-6">
                  9.81 m/s²
                </th>
                <th className="p-4 text-base font-normal text-white lg:px-10 lg:py-6">
                  {selectedPlanet.gForce + " m/s²"}
                </th>
              </tr>
              <tr>
                <th className="p-4 text-left text-xs font-medium uppercase tracking-widest text-white/50 lg:px-10 lg:py-6">
                  KG
                </th>
                <th className="p-4 text-base font-normal text-white/70 lg:px-10 lg:py-6">
                  {earthWeight.toLocaleString("de", {
                    maximumFractionDigits: 1,
                  }) + " KG"}
                </th>
                <th className="p-4 text-base font-normal text-white lg:px-10 lg:py-6">
                  {newWeight.toLocaleString("de", {
                    maximumFractionDigits: 2,
                  }) + " KG"}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <FunFact selectedPlanet={selectedPlanet} />
      </div>
    )
  );
}
