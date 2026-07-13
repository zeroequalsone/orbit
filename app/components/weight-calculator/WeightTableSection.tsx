import { Planet } from "@/data/planets";
import { Dispatch } from "react";
import FunFact from "./FunFact";

export default function WeightTableSection({
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
              <th className="px-10 py-6">Erde</th>
              <th className="px-10 py-6">{selectedPlanet.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-10 py-6">G-Kraft</th>
              <th className="px-10 py-6 font-normal">9.81 m/s²</th>
              <th className="px-10 py-6 font-normal">
                {selectedPlanet.gForce + " m/s²"}
              </th>
            </tr>
            <tr>
              <th className="px-10 py-6">KG</th>
              <th className="px-10 py-6 font-normal">
                {earthWeight.toLocaleString("de", {
                  maximumFractionDigits: 1,
                }) + " KG"}
              </th>
              <th className="px-10 py-6 font-normal">
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
