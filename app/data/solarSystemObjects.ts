export type AtmosphereLayer = {
  name: string; // z.B. "Exosphäre", "Troposphäre"
  composition: { gas: string; percentage: number }[]; // Atmosphärische Zusammensetzung
  temperature: string; // z.B. "-100°C bis 20°C"
  pressure: string; // z.B. "0,01 bar"
};

export type ExplorationMission = {
  name: string;
  year: number;
  description: string;
  imageUrl?: string;
};

export type SolarSystemObject = {
  id: number;
  name: string;
  type: "Stern" | "Planet" | "Zwergplanet" | "Mond" | "Asteroidengürtel";
  category: "stars" | "planets" | "dwarf-planets" | "moons" | "asteroid-belts";

  // Grunddaten
  age: string; // "4,6 Milliarden Jahre"
  composition?: string; // Hauptbestandteile
  diameter_km: number; // Durchmesser
  mass_kg?: string; // "3,3 x 10^23 kg"
  gravity_m_s2?: number; // Fallbeschleunigung
  escape_velocity_km_s?: number; // Fluchtgeschwindigkeit

  // Position & Bewegung
  distance_from_sun_km?: number; // Distanz von der Sonne
  perihelion_km?: number; // sonnennächster Punkt
  aphelion_km?: number; // sonnenfernster Punkt
  orbital_period_days?: number; // Umlaufzeit
  rotation_period_hours?: number; // Tageslänge
  axial_tilt_degrees?: number; // Achsenneigung

  // Atmosphäre & Klima
  atmosphere?: { gas: string; percentage: number }[];
  atmosphereLayers?: AtmosphereLayer[]; // detaillierte Schichten
  surface_pressure_bars?: number;
  average_temperature_celsius?: number;
  temperature_range?: string; // "Min: -173°C / Max: 427°C"
  wind_speed_kmh?: number;
  magnetic_field?: string; // "Ja, 0,1% der Erdstärke"

  // Monde & Ringsysteme
  numberOfMoons?: number;
  moonNames?: string[];
  ringSystem?: boolean;
  ringDescription?: string;

  // Exploration
  discovered?: string;
  missions?: ExplorationMission[];

  // Visuelles & Storytelling
  displayImageUrl: string;
  description: string; // kurze Einleitung
  detailedDescription: string; // ausführlicher Text
  timeline?: { year: number; event: string }[];

  // Navigation
  slug: string;
};

export const SolarSystemObjects: SolarSystemObject[] = [
  // {
  //   id: 0,
  //   name: "Sonne",
  // },
  // {
  //   id: 1,
  //   name: "Merkur",
  // },
  // {
  //   id: 2,
  //   name: "Venus",
  // },
  {
    id: 3,
    name: "Erde",
    type: "Planet",
    category: "planets",

    // Grunddaten
    age: "ca. 4,543 Milliarden Jahre",
    composition:
      "70% Ozeane, 30% Kontinentalplatten; Kern aus Eisen und Nickel, Mantel aus Silikatgestein",
    diameter_km: 12_742,
    mass_kg: "5,972 x 10^24 kg",
    gravity_m_s2: 9.807,
    escape_velocity_km_s: 11.186,

    // Position & Bewegung
    distance_from_sun_km: 149_600_000,
    perihelion_km: 147_095_000,
    aphelion_km: 152_100_000,
    orbital_period_days: 365.25,
    rotation_period_hours: 23.934,
    axial_tilt_degrees: 23.44,

    // Atmosphäre & Klima
    atmosphere: [
      { gas: "Stickstoff", percentage: 78.08 },
      { gas: "Sauerstoff", percentage: 20.95 },
      { gas: "Argon", percentage: 0.93 },
      { gas: "Kohlenstoffdioxid", percentage: 0.04 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [{ gas: "Luftgemisch", percentage: 100 }],
        temperature: "-50°C bis 15°C",
        pressure: "1,013 bar (NN)",
      },
      {
        name: "Stratosphäre",
        composition: [{ gas: "Ozon", percentage: 0.001 }],
        temperature: "-50°C bis 0°C",
        pressure: "0,001 bar",
      },
      {
        name: "Mesosphäre",
        composition: [{ gas: "Stickstoff/Sauerstoff", percentage: 100 }],
        temperature: "-90°C bis -50°C",
        pressure: "0,00001 bar",
      },
      {
        name: "Thermosphäre",
        composition: [{ gas: "Atomarer Sauerstoff", percentage: 100 }],
        temperature: "500°C bis 1500°C",
        pressure: "fast Vakuum",
      },
      {
        name: "Exosphäre",
        composition: [{ gas: "Wasserstoff/Helium", percentage: 100 }],
        temperature: "variabel",
        pressure: "Vakuum",
      },
    ],

    surface_pressure_bars: 1.013, // Oberflächendruck (bar)
    average_temperature_celsius: 15, // Durchschnittstemperatur (°C)
    temperature_range: "Min: -89°C / Max: 58°C", // Temperaturbereich
    wind_speed_kmh: 408, // Windgeschwindigkeit (km/h)
    magnetic_field: "Starkes globales Dipolfeld", // Magnetfeld

    // Monde & Ringsysteme
    numberOfMoons: 1,
    moonNames: ["Mond"],
    ringSystem: false,

    // Exploration
    discovered: "Bekannt seit der Antike",
    missions: [
      {
        name: "V-2 Rakete No. 13",
        year: 1946,
        description: "Erstes Foto der Erde aus dem Weltraum (aus 105 km Höhe).",
      },
      {
        name: "Sputnik 1",
        year: 1957,
        description:
          "Erster künstlicher Satellit; Beginn des Raumfahrtzeitalters.",
      },
      {
        name: "Wostok 1",
        year: 1961,
        description:
          "Erster bemannter Raumflug der Geschichte durch Juri Gagarin.",
      },
      {
        name: "Apollo 8",
        year: 1968,
        description:
          "Erste bemannte Umkreisung des Mondes; Entstehung des 'Earthrise'-Fotos.",
      },
      {
        name: "Apollo 11",
        year: 1969,
        description:
          "Erste bemannte Mondlandung; Neil Armstrong betritt als erster Mensch einen anderen Himmelskörper.",
      },
      {
        name: "Landsat 1",
        year: 1972,
        description:
          "Beginn der systematischen, langfristigen Erdbeobachtung per Satellit.",
      },
      {
        name: "STS-1 (Columbia)",
        year: 1981,
        description:
          "Erster Flug eines Space Shuttles (wiederverwendbares Raumtransportsystem).",
      },
      {
        name: "ISS (Zarya Modul)",
        year: 1998,
        description:
          "Start der Internationalen Raumstation; dauerhafte bemannte Präsenz im Orbit.",
      },
      {
        name: "GRACE",
        year: 2002,
        description:
          "Präzise Kartierung des Erdschwerefelds zur Überwachung von Eismassen.",
      },
      {
        name: "Sentinel-1A",
        year: 2014,
        description:
          "Start des Copernicus-Programms der EU zur globalen Umweltüberwachung.",
      },
      {
        name: "James Webb Space Telescope",
        year: 2021,
        description:
          "Start des leistungsstärksten Weltraumteleskops zur Erforschung des frühen Universums.",
      },
      {
        name: "Artemis I",
        year: 2022,
        description:
          "Erster Testflug des neuen Mondprogramms der NASA (unbemannt).",
      },
      {
        name: "PACE",
        year: 2024,
        description:
          "Aktuelle Mission zur Untersuchung von Ozeangesundheit und Plankton.",
      },
      {
        name: "Artemis II",
        year: 2026,
        description: "Erster bemannter Flug um den Mond seit über 50 Jahren.",
      },
      {
        name: "SMILE",
        year: 2026,
        description:
          "Aktuelle Mission zur Erforschung der Wechselwirkung zwischen Sonnenwind und Magnetosphäre.",
      },
    ],

    // Visuelles & Storytelling
    displayImageUrl: "/explore/solar-system/planets/earth/Icon.webp",
    description:
      "Die Erde ist der dritte Planet im Sonnensystem und der einzige bekannte Ort, der Leben beherbergt.",
    detailedDescription:
      "Unsere Heimatwelt zeichnet sich durch flüssiges Wasser an der Oberfläche, eine sauerstoffreiche Atmosphäre und ein starkes Magnetfeld aus, das uns vor kosmischer Strahlung schützt. Die Neigung der Erdachse sorgt für die Jahreszeiten, während der Mond die Gezeiten steuert und die Erdrotation stabilisiert.",
    timeline: [
      { year: -4540000000, event: "Entstehung der Erde" },
      { year: -3500000000, event: "Erstes Leben in den Ozeanen" },
      {
        year: 1961,
        event: "Juri Gagarin erreicht als erster Mensch den Orbit",
      },
    ],

    // Navigation
    slug: "earth",
  },
  // {
  //   id: 4,
  //   name: "Mond",
  // },
  // {
  //   id: 5,
  //   name: "Mars",
  // },
  // {
  //   id: 6,
  //   name: "Ceres",
  // },
  // {
  //   id: 7,
  //   name: "Jupiter",
  // },
  // {
  //   id: 8,
  //   name: "Saturn",
  // },
  // {
  //   id: 9,
  //   name: "Uranus",
  // },
  // {
  //   id: 10,
  //   name: "Neptun",
  // },
  // {
  //   id: 11,
  //   name: "Pluto",
  // },
  // {
  //   id: 12,
  //   name: "Haumea",
  // },
  // {
  //   id: 13,
  //   name: "Makemake",
  // },
  // {
  //   id: 14,
  //   name: "Eris",
  // },
  // {
  //   id: 15,
  //   name: "Asteroidengürtel",
  // },
];
