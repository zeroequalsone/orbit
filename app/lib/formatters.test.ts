import { describe, expect, it } from "vitest";
import { SPEED_OF_LIGHT_IN_KM_S } from "./constants";
import {
  formatDayLength,
  formatDistance,
  formatLightTime,
  formatYearLength,
} from "./formatters";

describe("formatDistance", () => {
  it("zeigt Millionen km mit einer Nachkommastelle", () => {
    expect(formatDistance(57.9e6)).toBe("57,9 Millionen km"); // Merkur
  });

  it("wechselt ab 1000 Millionen km auf Milliarden", () => {
    expect(formatDistance(4.5e9)).toBe("4,50 Milliarden km"); // Neptun
  });

  it("nutzt Milliarden genau an der Grenze", () => {
    expect(formatDistance(1e9)).toBe("1,00 Milliarden km");
  });

  it("bleibt knapp unter der Grenze bei Millionen", () => {
    expect(formatDistance(999e6)).toBe("999,0 Millionen km");
  });

  it("uses Milliarden when rounding would reach 1,000 Millionen", () => {
    expect(formatDistance(999_999_999)).toBe("1,00 Milliarden km");
  });
});

describe("formatLightTime", () => {
  it("zeigt Minuten unter einer Stunde", () => {
    expect(formatLightTime(149.6e6)).toBe("ca. 8 Minuten"); // Sonne -> Erde
  });

  it("zeigt Stunden ab 60 Minuten", () => {
    expect(formatLightTime(4.5e9)).toBe("ca. 4,2 Stunden"); // Sonne -> Neptun
  });

  it("wechselt zwischen Minuten und Stunden bei 60 Minuten", () => {
    // 3500 s Lichtlaufzeit = 58 Minuten, 3700 s = 61 Minuten
    expect(formatLightTime(3500 * SPEED_OF_LIGHT_IN_KM_S)).toBe(
      "ca. 58 Minuten",
    );
    expect(formatLightTime(3700 * SPEED_OF_LIGHT_IN_KM_S)).toBe(
      "ca. 1,0 Stunden",
    );
  });
});

describe("formatYearLength", () => {
  it("zeigt Erdtage unter einem Erdjahr", () => {
    expect(formatYearLength(87.97)).toBe("88 Erdtage"); // Merkur
    expect(formatYearLength(224.7)).toBe("224,7 Erdtage"); // Venus
  });

  it("wechselt ab 365 Tagen auf Erdjahre", () => {
    expect(formatYearLength(364)).toBe("364 Erdtage");
    expect(formatYearLength(365)).toBe("1 Erdjahr(e)");
  });

  it("rechnet lange Jahre in Erdjahre um", () => {
    expect(formatYearLength(687)).toBe("1,9 Erdjahr(e)"); // Mars
    expect(formatYearLength(59800)).toBe("163,8 Erdjahr(e)"); // Neptun
  });
});

describe("formatDayLength", () => {
  it("zeigt Stunden unter 24 Stunden", () => {
    expect(formatDayLength(9.9)).toBe("9,9 Stunde(n)"); // Jupiter
    expect(formatDayLength(23.9)).toBe("23,9 Stunde(n)");
  });

  it("wechselt ab 24 Stunden auf Erdtage", () => {
    expect(formatDayLength(24)).toBe("1 Erdtag(e)");
    expect(formatDayLength(5832)).toBe("243 Erdtag(e)"); // Venus
  });
});
