"use client";

import {
  buildItem,
  CONSTELLATIONS_PATH,
  findHovered,
  H,
  W,
} from "@/lib/constellationMap";
import type { Item, Line } from "@/lib/constellationMap";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ConstellationList from "./ConstellationList";

type Name = { de: string; la: string };
type Info = { id: string; properties: { de: string; name: string } };

const STAR_RADIUS = 2;

export default function Constellations() {
  const router = useRouter();
  const ref = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState<Name | null>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;

    let names: Record<string, Name> = {};
    let items: Item[] = [];
    let hovered: string | null = null;

    const drawItem = (item: Item, active: boolean) => {
      // Linien
      ctx.strokeStyle = active ? "white" : "black";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (const [x1, y1, x2, y2] of item.segs) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
      }
      ctx.stroke();

      // Sterne
      ctx.fillStyle = active ? "white" : "#404040";
      if (active) {
        ctx.shadowColor = "white";
        ctx.shadowBlur = 12;
      }
      for (const [x, y] of item.stars) {
        ctx.beginPath();
        ctx.arc(x, y, STAR_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
    };

    const draw = () => {
      // Radial Gradient BG
      const gradient = ctx.createRadialGradient(
        W / 2,
        H / 2,
        0,
        W / 2,
        H / 2,
        Math.max(W, H) / 2,
      );
      gradient.addColorStop(0, "#00010f");
      gradient.addColorStop(0.5, "black");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);

      // Aktives Sternbild zuletzt, damit es über den anderen liegt
      for (const it of items) if (it.id !== hovered) drawItem(it, false);
      for (const it of items) if (it.id === hovered) drawItem(it, true);
    };

    const onMove = (e: MouseEvent) => {
      // Canvas wird per CSS skaliert -> Mauskoordinaten umrechnen
      const rect = canvas.getBoundingClientRect();
      const next = findHovered(
        items,
        ((e.clientX - rect.left) * W) / rect.width,
        ((e.clientY - rect.top) * H) / rect.height,
      );
      if (next !== hovered) {
        hovered = next;
        setName(next ? names[next] : null);
        canvas.style.cursor = next ? "pointer" : "default";
        draw();
      }
    };

    const onClick = () => {
      if (hovered) router.push(`${CONSTELLATIONS_PATH}/${hovered}`);
    };

    const onLeave = () => {
      hovered = null;
      setName(null);
      canvas.style.cursor = "default";
      draw();
    };

    canvas.addEventListener("click", onClick);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    // Beide Dateien gleichzeitig laden
    const load = async () => {
      const [lines, info]: [{ features: Line[] }, { features: Info[] }] =
        await Promise.all([
          fetch("/data/constellations.lines.json").then((res) => res.json()),
          fetch("/data/constellations.json").then((res) => res.json()),
        ]);
      names = Object.fromEntries(
        info.features.map((feature) => [
          feature.id,
          { de: feature.properties.de, la: feature.properties.name },
        ]),
      );
      items = lines.features.map(buildItem);
      draw();
    };
    load();

    return () => {
      canvas.removeEventListener("click", onClick);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [router]);

  return (
    <div className="flex flex-col gap-16 items-center justify-center max-w-7xl w-full mx-auto px-4 pb-24 pt-40">
      {/* Eyebrow + Heading */}
      <div className="flex flex-col items-center gap-4 text-center">
        <Link
          href={`../constellations-and-cultural-astronomy`}
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <span
            aria-hidden
            className="transition-transform group-hover:-translate-x-0.5"
          >
            ←
          </span>
          Zurück zu Sternbilder & Kulturelle Astronomie
        </Link>
        <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
          Sternbilder
        </h1>
      </div>

      <div className="relative hidden md:block">
        {name && (
          <span className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white">
            {name.de}{" "}
            <span className="normal-case tracking-normal text-white/50">
              (lat. {name.la})
            </span>
          </span>
        )}
        <canvas
          ref={ref}
          width={W}
          height={H}
          className="h-auto w-full rounded-xl"
        />
      </div>

      <div className="w-full md:hidden">
        <ConstellationList />
      </div>
    </div>
  );
}
