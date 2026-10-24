export type Line = { id: string; geometry: { coordinates: number[][][] } };
export type Item = {
  id: string;
  segs: number[][]; // Linienstücke: [x1, y1, x2, y2]
  stars: number[][]; // Sterne: [x, y]
};

export const CONSTELLATIONS_PATH =
  "/explore/constellations-and-cultural-astronomy/constellations";
export const W = 1700; // Canvas-Breite
export const H = 700; // Canvas-Höhe
const MAP = 1440; // Breite der Himmelskarte
const PAD = 200; // Rand links

// Himmelskoordinaten (Länge/Breite) -> Pixel auf dem Canvas
const project = ([lon, lat]: number[]) => [
  PAD + ((180 - lon) / 360) * MAP,
  ((90 - lat) / 180) * H,
];

// Abstand eines Punkts zu einem Linienstück
const distToSeg = (px: number, py: number, [x1, y1, x2, y2]: number[]) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const t = Math.max(
    0,
    Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy || 1)),
  );
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
};

// Rechnet ein Sternbild aus den Rohdaten in Canvas-Pixel um
export const buildItem = (feature: Line): Item => {
  const firstLon = feature.geometry.coordinates[0][0][0];

  // Verhindert den Sprung von +180° auf -180° am Kartenrand
  const unwrap = (lon: number) =>
    lon - firstLon > 180 ? lon - 360 : lon - firstLon < -180 ? lon + 360 : lon;

  const points = feature.geometry.coordinates.flat();
  const lons = points.map((p) => unwrap(p[0]));
  const lats = points.map((p) => p[1]);
  const mid = (Math.min(...lons) + Math.max(...lons)) / 2;
  const shift = mid > 180 ? -360 : mid < -180 ? 360 : 0;

  const midLon = mid + shift;
  const midLat = (Math.min(...lats) + Math.max(...lats)) / 2;
  // Zu den Polen werden Längengrade enger -> Sternbild horizontal stauchen
  const k = Math.cos((midLat * Math.PI) / 180);

  const at = (p: number[]) =>
    project([midLon + (unwrap(p[0]) + shift - midLon) * k, p[1]]);

  const segs: number[][] = [];
  const stars: number[][] = [];

  for (const line of feature.geometry.coordinates) {
    line.forEach((p, i) => {
      const [x, y] = at(p);
      stars.push([x, y]);
      if (i > 0) {
        const [px, py] = at(line[i - 1]);
        segs.push([px, py, x, y]);
      }
    });
  }
  return { id: feature.id, segs, stars };
};

// Sternbild unter der Maus (oder null), maxDist in Canvas-Pixeln
export const findHovered = (
  items: Item[],
  x: number,
  y: number,
  maxDist = 8,
) => {
  let best = maxDist;
  let found: string | null = null;
  for (const item of items) {
    for (const seg of item.segs) {
      const d = distToSeg(x, y, seg);
      if (d < best) {
        best = d;
        found = item.id;
      }
    }
  }
  return found;
};
