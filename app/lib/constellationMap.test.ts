import { describe, expect, it } from "vitest";
import { buildItem, findHovered } from "./constellationMap";

describe("findHovered", () => {
  const items = [{ id: "A", segs: [[0, 0, 100, 0]], stars: [] }];

  it("findet das Sternbild, wenn die Maus nah an der Linie ist", () => {
    expect(findHovered(items, 50, 5)).toBe("A");
  });

  it("liefert null, wenn die Maus zu weit weg ist", () => {
    expect(findHovered(items, 50, 50)).toBeNull();
  });

  it("liefert null, wenn die Maus hinter dem Ende der Linie ist", () => {
    expect(findHovered(items, 150, 0)).toBeNull();
  });

  it("zeichnet ein Sternbild über den Kartenrand zusammenhängend", () => {
    const item = buildItem({
      id: "X",
      geometry: {
        coordinates: [
          [
            [170, 10],
            [-170, 10],
          ],
        ],
      },
    });
    const [xA, xB] = item.stars.map(([x]) => x);
    // Ohne unwrap läge ein Stern links, der andere rechts auf der Karte (~1400 px Abstand)
    expect(Math.abs(xA - xB)).toBeLessThan(100);
  });

  it("verbindet getrennte Linien nicht miteinander", () => {
    const item = buildItem({
      id: "Y",
      geometry: {
        coordinates: [
          [
            [10, 10],
            [20, 10],
          ],
          [
            [30, 10],
            [40, 10],
          ],
        ],
      },
    });
    // 2 Linien mit je 2 Punkten = 2 Linienstücke (nicht 3)
    expect(item.segs).toHaveLength(2);
    expect(item.stars).toHaveLength(4);
  });
});

describe("buildItem", () => {
  it("macht aus zwei Punkten ein Linienstück und zwei Sterne", () => {
    const item = buildItem({
      id: "X",
      geometry: {
        coordinates: [
          [
            [10, 10],
            [20, 20],
          ],
        ],
      },
    });
    expect(item.segs).toHaveLength(1);
    expect(item.stars).toHaveLength(2);
  });
});
