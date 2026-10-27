import { afterEach, describe, expect, it, vi } from "vitest";
import { getRandomLandsatImages } from "./landsat";

// Eigene Testdaten, damit der Test nicht vom echten Datensatz abhängt
vi.mock("@/data/landsatLetters", () => ({
  landsatLetters: [
    {
      letter: "A",
      images: [
        { url: "a1.jpg", locationCoordinates: "1,1" },
        { url: "a2.jpg", locationCoordinates: "2,2" },
      ],
    },
    { letter: "B", images: [{ url: "b1.jpg", locationCoordinates: "3,3" }] },
    { letter: "C", images: [] },
  ],
}));

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getRandomLandsatImages", () => {
  it("liefert pro bekanntem Buchstaben einen Eintrag", () => {
    expect(getRandomLandsatImages("AB")).toHaveLength(2);
  });

  it("liefert ein leeres Array bei leerem Namen", () => {
    expect(getRandomLandsatImages("")).toEqual([]);
  });

  it("überspringt unbekannte Zeichen wie Leerzeichen und Zahlen", () => {
    const result = getRandomLandsatImages("A 1B");
    expect(result.map((r) => r.letter)).toEqual(["A", "B"]);
  });

  it("überspringt Buchstaben ohne Bilder", () => {
    expect(getRandomLandsatImages("C")).toEqual([]);
  });

  it("ignoriert Groß/Klein beim Suchen, behält aber die Schreibweise", () => {
    const [result] = getRandomLandsatImages("b");
    expect(result.letter).toBe("b");
    expect(result.url).toBe("b1.jpg");
  });

  it("wählt das Bild passend zum Zufallswert", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);
    expect(getRandomLandsatImages("A")[0].url).toBe("a1.jpg");

    vi.spyOn(Math, "random").mockReturnValue(0.99);
    expect(getRandomLandsatImages("A")[0].url).toBe("a2.jpg");
  });

  it("nimmt das Bild immer aus dem Set des Buchstabens", () => {
    const urls = getRandomLandsatImages("AAAAAAAAAA").map((r) => r.url);
    for (const url of urls) {
      expect(["a1.jpg", "a2.jpg"]).toContain(url);
    }
  });
});
