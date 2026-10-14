import { SPEED_OF_LIGHT_IN_KM_S } from "./constants";

const format = (value: number, digits: number) =>
  value.toLocaleString("de", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

export function formatDistance(km: number) {
  const million = km / 1e6;
  return million < 1_000
    ? `${format(million, 1)} Millionen km`
    : `${format(km / 1e9, 2)} Milliarden km`;
}

export function formatLightTime(km: number) {
  const minutes = km / SPEED_OF_LIGHT_IN_KM_S / 60;
  return minutes < 60
    ? `ca. ${format(minutes, 0)} Minuten`
    : `ca. ${format(minutes / 60, 1)} Stunden`;
}
