"use client";

import SizeComparison from "@/components/tools/size-calculator/SizeComparison";
import SizeDisplay from "@/components/tools/size-calculator/SizeDisplay";
import ToolHeader from "@/components/tools/ToolHeader";
import { planets } from "@/data/planets";
import { useState } from "react";

export default function SizeCalculator() {
  const [sizeFrom, setSizeFrom] = useState(0);
  const [sizeTo, setSizeTo] = useState(3);

  const planetFrom = planets.find((p) => p.id === sizeFrom);
  const planetTo = planets.find((p) => p.id === sizeTo);

  if (!planetFrom || !planetTo)
    throw new Error("Fehler beim Auswählen eines Planeten.");

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col p-8 mt-20 gap-10 lg:max-w-384">
        <ToolHeader
          header="Größen-Rechner"
          desc="Wie oft passen Planete ineinander?"
        />
        <div className="flex flex-col items-center gap-28">
          <div className="flex flex-col items-center gap-10">
            <SizeComparison
              setSizeFrom={setSizeFrom}
              setSizeTo={setSizeTo}
              sizeFrom={sizeFrom}
              sizeTo={sizeTo}
            />
            {planetFrom && planetTo ? (
              <SizeDisplay planetFrom={planetFrom} planetTo={planetTo} />
            ) : (
              <div className="flex flex-col gap-4">
                <p className="text-xl">Berechnen von Größen...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
