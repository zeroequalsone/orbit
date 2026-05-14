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
  diameter_km: string; // Durchmesser
  mass_kg?: string; // "3,3 x 10^23 kg"
  gravity_m_s2?: string; // Fallbeschleunigung
  escape_velocity_km_s?: string; // Fluchtgeschwindigkeit

  // Position & Bewegung
  distance_from_sun_km?: string; // Distanz von der Sonne
  perihelion_km?: string; // sonnennächster Punkt
  aphelion_km?: string; // sonnenfernster Punkt
  orbital_period_days?: string; // Umlaufzeit
  rotation_period?: string; // Tageslänge
  axial_tilt_degrees?: string; // Achsenneigung

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
  missions?: ExplorationMission[];

  // Visuelles & Storytelling
  displayImageUrl: string;
  description: string; // kurze Einleitung
  detailedDescription: string; // ausführlicher Text
  timeline?: { year: string; event: string }[];

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
  {
    id: 2,
    name: "Venus",
    type: "Planet",
    category: "planets",

    age: "ca. 4,503 Milliarden Jahre",
    composition:
      "~80% vulkanische Ebenen; Kern aus Eisen und Nickel, Mantel und Kruste aus Silikatgestein.",
    diameter_km: "12.104",
    mass_kg: "4,867 x 10^24 kg",
    gravity_m_s2: "8,87 m/s²",
    escape_velocity_km_s: "10,36 km/s",

    distance_from_sun_km: "108,2 Millionen",
    perihelion_km: "107,5 Millionen",
    aphelion_km: "108,9 Millionen",
    orbital_period_days: "224,7 Erdtage",
    rotation_period: "243 Erdtage",
    axial_tilt_degrees: "177,4",

    atmosphere: [
      { gas: "Kohlenstoffdioxid", percentage: 96.5 },
      { gas: "Stickstoff", percentage: 3.5 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [{ gas: "Kohlenstoffdioxid", percentage: 96.5 }],
        temperature: "460 °C",
        pressure: "92 bar",
      },
      {
        name: "Mesosphäre",
        composition: [{ gas: "Schwefelsäure (Wolken)", percentage: 0.01 }],
        temperature: "0 °C bis -100 °C",
        pressure: "1 bar bis 0,1 bar",
      },
      {
        name: "Thermosphäre",
        composition: [{ gas: "Kohlenstoffdioxid/Stickstoff", percentage: 100 }],
        temperature: "-100 °C bis 200 °C",
        pressure: "fast Vakuum",
      },
      {
        name: "Exosphäre",
        composition: [{ gas: "Wasserstoff/Helium", percentage: 100 }],
        temperature: "variabel",
        pressure: "Vakuum",
      },
    ],

    surface_pressure_bars: 92,
    average_temperature_celsius: 464,
    temperature_range: "Min: 437°C / Max: 497°C",
    wind_speed_kmh: 360,
    magnetic_field: "Induziertes Magnetfeld",

    numberOfMoons: 0,
    ringSystem: false,

    missions: [
      {
        name: "Venera 1",
        year: 1961,
        description:
          "Erster Vorbeiflug an der Venus (Kontakt ging jedoch verloren).",
      },
      {
        name: "Mariner 2",
        year: 1962,
        description:
          "Erster erfolgreicher Vorbeiflug; Bestätigung der hohen Oberflächentemperaturen.",
      },
      {
        name: "Venera 4",
        year: 1967,
        description: "Erste chemische Analyse der Atmosphäre direkt vor Ort.",
      },
      {
        name: "Venera 7",
        year: 1970,
        description:
          "Erste erfolgreiche weiche Landung auf einem anderen Planeten.",
      },
      {
        name: "Mariner 10",
        year: 1974,
        description:
          "Vorbeiflug zur Nutzung der Schwerkraft (Gravity Assist) in Richtung Merkur.",
      },
      {
        name: "Venera 9",
        year: 1975,
        description:
          "Übermittlung der ersten Schwarz-Weiß-Panoramafotos von der Oberfläche.",
      },
      {
        name: "Pioneer Venus Orbiter",
        year: 1978,
        description: "Langfristige Kartierung der Venus mittels Radar.",
      },
      {
        name: "Venera 13",
        year: 1982,
        description: "Erste Farbfotos von der Oberfläche und Bodenanalyse.",
      },
      {
        name: "Magellan",
        year: 1989,
        description: "Hochauflösende globale Radarkartierung der Oberfläche.",
      },
      {
        name: "Venus Express",
        year: 2005,
        description:
          "Langzeitmission der ESA zur Erforschung der atmosphärischen Dynamik.",
      },
      {
        name: "Akatsuki",
        year: 2010,
        description:
          "Japanische Sonde zur Untersuchung des Klimas und der Wolkenstrukturen.",
      },
      {
        name: "Parker Solar Probe",
        year: 2018,
        description:
          "Mehrfache Vorbeiflüge (bis 2024) zur Kurskorrektur Richtung Sonne.",
      },
      {
        name: "BepiColombo",
        year: 2020,
        description: "Vorbeiflüge (2020/2021) auf dem Weg zum Merkur.",
      },
      {
        name: "Solar Orbiter",
        year: 2020,
        description:
          "Nutzt Venus-Vorbeiflüge (laufend bis 2026), um die Bahnneigung zu ändern.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/venus/Icon.webp",
    description:
      "Die Venus ist der zweite Planet im Sonnensystem und wird aufgrund ihrer ähnlichen Größe und Masse oft als 'Zwillingsschwester der Erde' bezeichnet.",
    detailedDescription:
      "Trotz ihrer Ähnlichkeit zur Erde ist die Venus eine lebensfeindliche Welt mit einem extremen Treibhauseffekt, der sie zum heißesten Planeten im Sonnensystem macht. Ihre dichte Atmosphäre aus Schwefelsäurewolken reflektiert das Sonnenlicht stark, weshalb sie als 'Abend- oder Morgenstern' hell am Himmel leuchtet. Eine Besonderheit ist ihre retrograde Rotation - sie dreht sich entgegengesetzt zur Umlaufrichtung der meisten anderen Planeten.",
    timeline: [
      { year: "4,5 Milliarden Jahre v. Chr.", event: "Entstehung der Venus" },
      {
        year: "vor ca. 3 - 4 Milliarden Jahren",
        event:
          "Vermutete Existenz von flüssigem Wasser oder Ozeanen vor dem einsetzenden Treibhauseffekt",
      },
      {
        year: "vor ca. 700 Millionen Jahren",
        event:
          "Globales Resurfacing-Ereignis: Massive vulkanische Aktivität erneuert fast die gesamte Planetenoberfläche",
      },
      {
        year: "1610",
        event:
          "Galileo Galilei beobachtet erstmals die Phasen der Venus, was das heliozentrische Weltbild stützt",
      },
      {
        year: "1761",
        event:
          "Michail Lomonossow entdeckt während eines Venusdurchgangs die Atmosphäre des Planeten",
      },
      {
        year: "1962",
        event:
          "Mariner 2 (USA) gelingt der erste erfolgreiche Vorbeiflug einer Raumsonde",
      },
      {
        year: "1970",
        event:
          "Venera 7 (UdSSR) führt die erste erfolgreiche Landung und Datenübertragung von der Oberfläche aus",
      },
      {
        year: "1975",
        event:
          "Venera 9 sendet die ersten Bilder von der extrem lebensfeindlichen Oberfläche",
      },
      {
        year: "1990 - 1994",
        event:
          "Die Sonde Magellan kartiert mittels Radar 98 % der Oberfläche unter der dichten Wolkendecke",
      },
      {
        year: "2020",
        event:
          "Mögliche Entdeckung von Phosphin in der Atmosphäre löst Debatten über potenzielles mikrobielles Leben aus",
      },
    ],

    slug: "venus",
  },
  {
    id: 3,
    name: "Erde",
    type: "Planet",
    category: "planets",

    age: "4,543 Milliarden",
    composition:
      "70% Ozeane, 30% Kontinentalplatten; Kern aus Eisen und Nickel, Mantel aus Silikatgestein",
    diameter_km: "12.742",
    mass_kg: "5,972 x 10^24 kg",
    gravity_m_s2: "9,81 m/s²",
    escape_velocity_km_s: "11,2 km/s",

    distance_from_sun_km: "149,6 Millionen",
    perihelion_km: "147,1 Millionen",
    aphelion_km: "152,1 Millionen",
    orbital_period_days: "1 Erdjahr",
    rotation_period: "23,9 Stunden",
    axial_tilt_degrees: "23,4",

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
        temperature: "-50 °C bis 15 °C",
        pressure: "1,013 bar (NN)",
      },
      {
        name: "Stratosphäre",
        composition: [{ gas: "Ozon", percentage: 0.001 }],
        temperature: `-50 °C bis 0 °C`,
        pressure: "0,001 bar",
      },
      {
        name: "Mesosphäre",
        composition: [{ gas: "Stickstoff/Sauerstoff", percentage: 100 }],
        temperature: "-90 °C bis -50 °C",
        pressure: "0,00001 bar",
      },
      {
        name: "Thermosphäre",
        composition: [{ gas: "Atomarer Sauerstoff", percentage: 100 }],
        temperature: "500 °C bis 1500 °C",
        pressure: "fast Vakuum",
      },
      {
        name: "Exosphäre",
        composition: [{ gas: "Wasserstoff/Helium", percentage: 100 }],
        temperature: "variabel",
        pressure: "Vakuum",
      },
    ],

    surface_pressure_bars: 1.013,
    average_temperature_celsius: 15,
    temperature_range: "Min: -89°C / Max: 58°C",
    wind_speed_kmh: 408,
    magnetic_field: "Starkes globales Dipolfeld",

    numberOfMoons: 1,
    moonNames: ["Mond"],
    ringSystem: false,

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
    ],

    displayImageUrl: "/explore/solar-system/planets/earth/Icon.webp",
    description:
      "Die Erde ist der dritte Planet im Sonnensystem und der einzige bekannte Ort, der Leben beherbergt.",
    detailedDescription:
      "Unsere Heimatwelt zeichnet sich durch flüssiges Wasser an der Oberfläche, eine sauerstoffreiche Atmosphäre und ein starkes Magnetfeld aus, das uns vor kosmischer Strahlung schützt. Die Neigung der Erdachse sorgt für die Jahreszeiten, während der Mond die Gezeiten steuert und die Erdrotation stabilisiert.",
    timeline: [
      { year: "4,54 Milliarden Jahre v. Chr.", event: "Entstehung der Erde" },
      {
        year: "3,5 Milliarden Jahre v. Chr.",
        event: "Erstes Leben in den Ozeanen",
      },
      {
        year: "1961",
        event: "Juri Gagarin erreicht als erster Mensch den Orbit",
      },
    ],

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
