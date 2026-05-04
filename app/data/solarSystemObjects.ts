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
  discoveredBy?: string;
  discoveryYear?: number;
  missions?: ExplorationMission[];

  // Visuelles & Storytelling
  displayImageUrl: string;
  firstImage?: { imageUrl: string; year: string; caption?: string }[];
  latestImage?: { imageUrl: string; year: string; caption?: string }[];
  description: string; // kurze Einleitung
  detailedDescription: string; // ausführlicher Text
  timeline?: { year: number; event: string }[];

  // Navigation
  slug: string;
};

export const SolarSystemObjects: SolarSystemObject[] = [
  {
    id: 0,
    name: "Sonne",
    type: "Stern",
    age: "ca. 4,603 Milliarden Jahre",
    diameter_km: 1_392_700,
    displayImageUrl: "/explore/solar-system/stars/sun/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "sun",
  },
  {
    id: 1,
    name: "Merkur",
    type: "Planet",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 4_879,
    displayImageUrl: "/explore/solar-system/planets/mercury/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "mercury",
  },
  {
    id: 2,
    name: "Venus",
    type: "Planet",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 12_104,
    displayImageUrl: "/explore/solar-system/planets/venus/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "venus",
  },
  {
    id: 3,
    name: "Erde",
    type: "Planet",
    age: "ca. 4,543 Milliarden Jahre",
    diameter_km: 12_742,
    displayImageUrl: "/explore/solar-system/planets/earth/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "earth",
  },
  {
    id: 4,
    name: "Mond",
    type: "Mond",
    age: "ca. 4,53 Milliarden Jahre",
    diameter_km: 3_475,
    displayImageUrl: "/explore/solar-system/moons/moon/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "moon",
  },
  {
    id: 5,
    name: "Mars",
    type: "Planet",
    age: "ca. 4,603 Milliarden Jahre",
    diameter_km: 6_779,
    displayImageUrl: "/explore/solar-system/planets/mars/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "mars",
  },
  {
    id: 6,
    name: "Ceres",
    type: "Zwergplanet",
    age: "ca. 4,5 Milliarden Jahre",
    diameter_km: 940,
    displayImageUrl: "/explore/solar-system/dwarf-planets/ceres/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "ceres",
  },
  {
    id: 7,
    name: "Jupiter",
    type: "Planet",
    age: "ca. 4,603 Milliarden Jahre",
    diameter_km: 139_820,
    displayImageUrl: "/explore/solar-system/planets/jupiter/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "jupiter",
  },
  {
    id: 8,
    name: "Saturn",
    type: "Planet",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 116_460,
    displayImageUrl: "/explore/solar-system/planets/saturn/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "saturn",
  },
  {
    id: 9,
    name: "Uranus",
    type: "Planet",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 50_724,
    displayImageUrl: "/explore/solar-system/planets/uranus/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "uranus",
  },
  {
    id: 10,
    name: "Neptun",
    type: "Planet",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 49_244,
    displayImageUrl: "/explore/solar-system/planets/neptune/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "neptune",
  },
  {
    id: 11,
    name: "Pluto",
    type: "Zwergplanet",
    age: "ca. 4,5 Milliarden Jahre",
    diameter_km: 2_377,
    displayImageUrl: "/explore/solar-system/dwarf-planets/pluto/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "pluto",
  },
  {
    id: 12,
    name: "Haumea",
    type: "Zwergplanet",
    age: "ca. 4,5 Milliarden Jahre",
    diameter_km: 1_632,
    displayImageUrl: "/explore/solar-system/dwarf-planets/haumea/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "haumea",
  },
  {
    id: 13,
    name: "Makemake",
    type: "Zwergplanet",
    age: "ca. 4,5 Milliarden Jahre",
    diameter_km: 1_430,
    displayImageUrl: "/explore/solar-system/dwarf-planets/makemake/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "makemake",
  },
  {
    id: 14,
    name: "Eris",
    type: "Zwergplanet",
    age: "ca. 4,5 Milliarden Jahre",
    diameter_km: 2_326,
    displayImageUrl: "/explore/solar-system/dwarf-planets/eris/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "eris",
  },
  {
    id: 15,
    name: "Asteroidengürtel",
    type: "Asteroidengürtel",
    age: "ca. 4,503 Milliarden Jahre",
    diameter_km: 119_680_000_000_000,
    displayImageUrl:
      "/explore/solar-system/asteroid-belts/kuiper-belt/Icon.webp",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam erat, vitae tristique enim est a nisi. Pellentesque et aliquam nunc, ac condimentum leo. Duis in urna tellus.",
    slug: "kuiper-belt",
  },
];
