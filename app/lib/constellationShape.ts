import type { Line } from "@/lib/constellationMap";

export type Shape = {
  paths: number[][][]; // Linienzüge, jeder Punkt: [x, y]
  stars: number[][]; // Sterne ohne Duplikate: [x, y]
};

// Rechnet ein Sternbild so um, dass es zentriert in die Zeichenfläche passt
export const buildShape = (
  lines: Line[],
  id: string,
  width: number,
  height: number,
  pad: number,
): Shape | null => {
  // Ein Sternbild kann aus mehreren Features bestehen (z. B. die Schlange)
  const parts = lines
    .filter((line) => line.id === id)
    .flatMap((line) => line.geometry.coordinates);
  if (parts.length === 0) return null;

  // Verhindert den Sprung von +180° auf -180° am Kartenrand
  const firstLon = parts[0][0][0];
  const unwrap = (lon: number) =>
    lon - firstLon > 180 ? lon - 360 : lon - firstLon < -180 ? lon + 360 : lon;
  const paths = parts.map((part) => part.map((p) => [unwrap(p[0]), p[1]]));

  const points = paths.flat();
  const lons = points.map((p) => p[0]);
  const lats = points.map((p) => p[1]);
  const lonRange = Math.max(...lons) - Math.min(...lons);
  const latRange = Math.max(...lats) - Math.min(...lats);
  const centerLon = (Math.min(...lons) + Math.max(...lons)) / 2;
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;

  // Zu den Polen werden Längengrade enger -> horizontal stauchen
  const k = Math.cos((centerLat * Math.PI) / 180);
  // Zoom: so groß, dass das Sternbild gerade noch in die Fläche passt
  const scale = Math.min(
    (width - 2 * pad) / (lonRange * k || 1),
    (height - 2 * pad) / (latRange || 1),
  );

  // x gespiegelt: am Himmel wächst die Rektaszension nach links
  const project = ([lon, lat]: number[]) => [
    width / 2 - (lon - centerLon) * k * scale,
    height / 2 - (lat - centerLat) * scale,
  ];

  // Knotenpunkte liegen in mehreren Linien -> jeden Stern nur einmal behalten
  const stars = points
    .filter(
      (p, i) => points.findIndex((q) => q[0] === p[0] && q[1] === p[1]) === i,
    )
    .map(project);

  return { paths: paths.map((path) => path.map(project)), stars };
};
