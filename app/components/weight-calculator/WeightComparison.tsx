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
      <div className="flex flex-col items-center gap-8">
        <table className="text-xl">
          <thead>
            <tr>
              <th></th>
              <th className="p-4 lg:lg:px-10 lg:lg:py-6">Erde</th>
              <th className="p-4 lg:lg:px-10 lg:lg:py-6">{selectedPlanet.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-4 lg:lg:px-10 lg:py-6">G-Kraft</th>
              <th className="p-4 lg:px-10 lg:py-6 font-normal">9.81 m/s²</th>
              <th className="p-4 lg:px-10 lg:py-6 font-normal">
                {selectedPlanet.gForce + " m/s²"}
              </th>
            </tr>
            <tr>
              <th className="p-4 lg:px-10 lg:py-6">KG</th>
              <th className="p-4 lg:px-10 lg:py-6 font-normal">
                {earthWeight.toLocaleString("de", {
                  maximumFractionDigits: 1,
                }) + " KG"}
              </th>
              <th className="p-4 lg:px-10 lg:py-6 font-normal">
                {newWeight.toLocaleString("de", {
                  maximumFractionDigits: 2,
                }) + " KG"}
              </th>
            </tr>
          </tbody>
        </table>
        <FunFact selectedPlanet={selectedPlanet} />
      </div>
    )
  );
}
