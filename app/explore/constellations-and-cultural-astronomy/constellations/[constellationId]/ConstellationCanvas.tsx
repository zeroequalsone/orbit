"use client";

import type { Line } from "@/lib/constellationMap";
import { buildShape } from "@/lib/constellationShape";
import { useEffect, useRef } from "react";

const W = 900;
const H = 600;
const PAD = 80; // Abstand zwischen Sternbild und Rand
const STAR_RADIUS = 4;

export default function ConstellationCanvas({ id }: { id: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = ref.current!.getContext("2d")!;

    const load = async () => {
      const lines: { features: Line[] } = await fetch(
        "/data/constellations.lines.json",
      ).then((res) => res.json());

      const shape = buildShape(lines.features, id, W, H, PAD);
      if (!shape) return;

      ctx.clearRect(0, 0, W, H);

      // Linien: weiß ohne Schatten
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (const path of shape.paths) {
        path.forEach(([x, y], i) => {
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });
      }
      ctx.stroke();

      // Sterne: weiß mit Glow
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 16;
      for (const [x, y] of shape.stars) {
        ctx.beginPath();
        ctx.arc(x, y, STAR_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    load();
  }, [id]);

  return (
    <canvas
      ref={ref}
      width={W}
      height={H}
      className="h-auto w-full rounded-2xl border border-white/10 bg-black"
    />
  );
}
