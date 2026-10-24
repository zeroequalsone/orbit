"use client";

import { CONSTELLATIONS_PATH } from "@/lib/constellationMap";
import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { id: string; de: string; la: string };

export default function ConstellationList() {
  const [items, setItems] = useState<Item[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/data/constellations.json")
      .then((res) => res.json())
      .then(
        (data: {
          features: { id: string; properties: { de: string; name: string } }[];
        }) => {
          const unique = new Map<string, Item>();
          for (const feature of data.features) {
            if (!unique.has(feature.id)) {
              unique.set(feature.id, {
                id: feature.id,
                de: feature.properties.de,
                la: feature.properties.name,
              });
            }
          }
          setItems(
            [...unique.values()].sort((a, b) => a.de.localeCompare(b.de, "de")),
          );
        },
      );
  }, []);

  // Filtern und nach Anfangsbuchstabe gruppieren
  const searchTerm = query.trim().toLowerCase();
  const byLetter = new Map<string, Item[]>();
  const matches = items.filter(
    (item) =>
      item.de.toLowerCase().includes(searchTerm) ||
      item.la.toLowerCase().includes(searchTerm),
  );
  for (const item of matches) {
    const letter = item.de[0].toUpperCase();
    byLetter.set(letter, [...(byLetter.get(letter) ?? []), item]);
  }
  const groups = [...byLetter];

  return (
    <div className="flex w-full flex-col gap-6">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Sternbild suchen ..."
        aria-label="Sternbild suchen"
        className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
      />

      {groups.length === 0 && items.length > 0 && (
        <p className="text-center text-sm text-white/50">
          Kein Sternbild gefunden.
        </p>
      )}

      {groups.map(([letter, list]) => (
        <section key={letter} className="flex flex-col gap-2">
          <h2 className="px-2 text-xs uppercase tracking-widest text-white/40">
            {letter}
          </h2>
          <ul className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            {list.map((item) => (
              <li
                key={item.id}
                className="border-b border-white/10 last:border-b-0"
              >
                <Link
                  href={`${CONSTELLATIONS_PATH}/${item.id}`}
                  className="flex items-center justify-between gap-4 px-4 py-3 transition-colors active:bg-white/10"
                >
                  <span className="text-sm font-medium uppercase tracking-widest text-white/80">
                    {item.de}
                  </span>
                  <span className="text-xs text-white/40">{item.la}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
