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
  composition: string; // Hauptbestandteile
  diameter_km: number; // Durchmesser
  mass_kg: string; // "3,3 x 10^23 kg"
  gravity_m_s2: number; // Fallbeschleunigung
  escape_velocity_km_s: number; // Fluchtgeschwindigkeit

  // Position & Bewegung
  distance_from_sun_km: number; // Distanz von der Sonne
  perihelion_km: number; // sonnennächster Punkt
  aphelion_km: number; // sonnenfernster Punkt
  orbital_period_days: number; // Umlaufzeit
  rotation_period_hours: number; // Tageslänge
  axial_tilt_degrees: number; // Achsenneigung

  // Atmosphäre & Klima
  atmosphere: { gas: string; percentage: number }[];
  atmosphereLayers?: AtmosphereLayer[]; // detaillierte Schichten
  surface_pressure_bars: number;
  average_temperature_celsius: number;
  temperature_range: string; // "Min: -173°C / Max: 427°C"
  wind_speed_kmh?: number;
  magnetic_field: string; // "Ja, 0,1% der Erdstärke"

  // Monde & Ringsysteme
  numberOfMoons: number;
  moonNames?: string[];
  ringSystem: boolean;
  ringDescription?: string;

  // Exploration
  discoveredBy: string;
  discoveryYear: number;
  missions: ExplorationMission[];

  // Visuelles & Storytelling
  firstImage?: { imageUrl: string; year: string; caption?: string };
  latestImage?: { imageUrl: string; year: string; caption?: string };
  description: string; // kurze Einleitung
  detailedDescription: string; // ausführlicher Text
  timeline?: { year: number; event: string }[];

  // Navigation
  slug: string;
};
