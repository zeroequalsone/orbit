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
  wind_speed_kmh?: string;
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
  {
    id: 1,
    name: "Merkur",
    type: "Planet",
    category: "planets",

    age: "4,503 Milliarden Jahre",
    composition:
      "70% metallischer Kern (Eisen/Nickel), 30% Silikatgestein (Mantel und Kruste); extrem dünne Exosphäre.",
    diameter_km: "4.879",
    mass_kg: "3,301 x 10^23 kg",
    gravity_m_s2: "3,70 m/s²",
    escape_velocity_km_s: "4,3 km/s",

    distance_from_sun_km: "57,9 Millionen",
    perihelion_km: "46,0 Millionen",
    aphelion_km: "69,8 Millionen",
    orbital_period_days: "88 Erdtage",
    rotation_period: "58,6 Erdtage",
    axial_tilt_degrees: "0,03",

    atmosphere: [
      { gas: "Sauerstoff", percentage: 42.0 },
      { gas: "Natrium", percentage: 29.0 },
      { gas: "Wasserstoff", percentage: 22.0 },
      { gas: "Helium", percentage: 6.0 },
      { gas: "Kalium", percentage: 0.5 },
    ],
    atmosphereLayers: [
      {
        name: "Exosphäre",
        composition: [
          { gas: "Sauerstoff, Natrium, Wasserstoff", percentage: 100 },
        ],
        temperature: "-173 °C bis 427 °C",
        pressure: "10⁻¹⁴ bar (fast Vakuum)",
      },
    ],

    surface_pressure_bars: 0.000000000001,
    average_temperature_celsius: 167,
    temperature_range: "Min: -173 °C / Max: 427 °C",
    magnetic_field: "Globales Dipolfeld (ca. 1% der Stärke der Erde)",

    missions: [
      {
        name: "Mariner 10",
        year: 1974,
        description:
          "Erster Vorbeiflug am Merkur; Nutzung von Gravity Assist (Venus) und Entdeckung des Magnetfelds.",
      },
      {
        name: "Mariner 10 (Zweiter Vorbeiflug)",
        year: 1974,
        description: "Detaillierte Aufnahmen der Südhalbkugel.",
      },
      {
        name: "Mariner 10 (Dritter Vorbeiflug)",
        year: 1975,
        description:
          "Letzter Vorbeiflug; Bestätigung des globalen Magnetfelds.",
      },
      {
        name: "MESSENGER (Vorbeiflug 1)",
        year: 2008,
        description:
          "Erster Besuch seit über 30 Jahren; Kartierung bisher unbekannter Gebiete.",
      },
      {
        name: "MESSENGER (Vorbeiflug 2 & 3)",
        year: 2008,
        description:
          "Untersuchung der Atmosphäre (Exosphäre) und Oberflächenzusammensetzung.",
      },
      {
        name: "MESSENGER (Orbit)",
        year: 2011,
        description:
          "Eintritt in den Orbit als erster künstlicher Satellit Merkurs; Entdeckung von Wassereis in Polarkratern.",
      },
      {
        name: "MESSENGER (Missionsende)",
        year: 2015,
        description:
          "Geplanter Aufprall auf der Oberfläche nach vollständiger globaler Kartierung.",
      },
      {
        name: "BepiColombo (Start)",
        year: 2018,
        description:
          "Gemeinsame Mission von ESA und JAXA zur umfassenden Erforschung des Planeten.",
      },
      {
        name: "BepiColombo (Erster Vorbeiflug Merkur)",
        year: 2021,
        description:
          "Erster von sechs Vorbeiflügen am Zielplaneten zur Abbremsung.",
      },
      {
        name: "BepiColombo (Zweiter & Dritter Vorbeiflug)",
        year: 2022,
        description:
          "Nahaufnahmen der Kraterlandschaft und Magnetfeldmessungen.",
      },
      {
        name: "BepiColombo (Vierter Vorbeiflug)",
        year: 2024,
        description:
          "Weitere Annäherung und Test der wissenschaftlichen Instrumente.",
      },
      {
        name: "BepiColombo (Fünfter Vorbeiflug)",
        year: 2024,
        description:
          "Präzisierung der Flugbahn für den geplanten Orbiteintritt.",
      },
      {
        name: "BepiColombo (Sechster Vorbeiflug)",
        year: 2025,
        description: "Letztes Swing-by-Manöver vor dem endgültigen Ziel.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/mercury/Icon.webp",
    description:
      "Der Merkur ist der sonnennächste und kleinste Planet im Sonnensystem, nur wenig größer als der Erdmond.",
    detailedDescription:
      "Merkur ist eine Welt der Extreme: Da er fast keine Atmosphäre besitzt, um Wärme zu speichern, schwanken die Temperaturen zwischen glühender Hitze am Tag und eisiger Kälte in der Nacht. Seine Oberfläche ist von unzähligen Kratern übersät, was ihm ein mondähnliches Aussehen verleiht. Trotz seiner geringen Größe besitzt er einen riesigen Eisenkern, der etwa 75 % seines Radius einnimmt und ein schwaches, aber globales Magnetfeld erzeugt.",
    timeline: [
      { year: "4,5 Milliarden Jahre v. Chr.", event: "Entstehung des Merkur" },
      {
        year: "vor ca. 3,8 Milliarden Jahren",
        event:
          "Ende des 'Großen Bombardements' - Entstehung der meisten Krater und des Caloris-Beckens",
      },
      {
        year: "1631",
        event:
          "Pierre Gassendi beobachtet erstmals einen Merkurtransit vor der Sonne",
      },
      {
        year: "1974",
        event:
          "Mariner 10 erreicht als erste Raumsonde den Merkur und fotografiert 45 % der Oberfläche",
      },
      {
        year: "2011",
        event:
          "MESSENGER tritt als erster künstlicher Satellit in die Umlaufbahn ein",
      },
      {
        year: "2012",
        event:
          "Bestätigung von Wassereis in den permanent im Schatten liegenden Polarkratern",
      },
      {
        year: "2021",
        event:
          "Erster Merkur-Vorbeiflug der europäisch-japanischen Mission BepiColombo",
      },
    ],

    slug: "mercury",
  },
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
    wind_speed_kmh: "360",
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
    wind_speed_kmh: "408",
    magnetic_field: "Starkes globales Dipolfeld",

    numberOfMoons: 1,
    moonNames: ["Mond"],

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
  {
    id: 5,
    name: "Mars",
    type: "Planet",
    category: "planets",

    age: "4,603 Milliarden Jahre",
    composition:
      "Oberfläche aus silikatischem Gestein und Eisenoxiden (Regolith); Kern aus Eisen, Nickel und Schwefel; Mantel aus Silikaten",
    diameter_km: "6.779",
    mass_kg: "6,39 x 10^23 kg",
    gravity_m_s2: "3,71 m/s²",
    escape_velocity_km_s: "5,03 km/s",

    distance_from_sun_km: "227,9 Millionen",
    perihelion_km: "206,6 Millionen",
    aphelion_km: "249,2 Millionen",
    orbital_period_days: "687 Erdtage",
    rotation_period: "24,6 Stunden",
    axial_tilt_degrees: "25,2",

    atmosphere: [
      { gas: "Kohlenstoffdioxid", percentage: 95.32 },
      { gas: "Stickstoff", percentage: 2.7 },
      { gas: "Argon", percentage: 1.6 },
      { gas: "Sauerstoff", percentage: 0.13 },
      { gas: "Kohlenstoffmonoxid", percentage: 0.08 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [{ gas: "Kohlenstoffdioxid", percentage: 95.3 }],
        temperature: "-133 °C bis 27 °C",
        pressure: "0,006 bar",
      },
      {
        name: "Mesosphäre",
        composition: [{ gas: "Kohlenstoffdioxid/Stickstoff", percentage: 100 }],
        temperature: "-130 °C bis -60 °C",
        pressure: "0,00001 bar",
      },
      {
        name: "Thermosphäre",
        composition: [{ gas: "Stickstoff/Argon", percentage: 100 }],
        temperature: "0 °C bis 120 °C",
        pressure: "fast Vakuum",
      },
      {
        name: "Exosphäre",
        composition: [{ gas: "Wasserstoff/Helium", percentage: 100 }],
        temperature: "variabel",
        pressure: "Vakuum",
      },
    ],

    surface_pressure_bars: 0.006,
    average_temperature_celsius: -63,
    temperature_range: "Min: -153°C / Max: 20°C",
    wind_speed_kmh: "30",
    magnetic_field:
      "Kein globales Dipolfeld; nur lokale, krustale Magnetfelder",

    numberOfMoons: 2,
    moonNames: ["Phobos", "Deimos"],

    missions: [
      {
        name: "Mariner 4",
        year: 1965,
        description:
          "Erster erfolgreicher Vorbeiflug am Mars; lieferte die ersten Nahaufnahmen von der kraterübersäten Oberfläche.",
      },
      {
        name: "Mariner 9",
        year: 1971,
        description:
          "Erste Sonde in einem Mars-Orbit; kartierte 100 % der Oberfläche und entdeckte den Olympus Mons.",
      },
      {
        name: "Viking 1 & 2",
        year: 1976,
        description:
          "Erste erfolgreiche Landungen; Durchführung biologischer Experimente zur Suche nach Leben.",
      },
      {
        name: "Mars Pathfinder",
        year: 1997,
        description:
          "Landung des ersten erfolgreichen Rovers (Sojourner) auf der Marsoberfläche.",
      },
      {
        name: "Mars Express",
        year: 2003,
        description:
          "Europäische Mission zur Kartierung der Mineralogie und Suche nach Wasserzeichen im Boden.",
      },
      {
        name: "Spirit & Opportunity",
        year: 2004,
        description:
          "Zwillings-Rover zur Untersuchung der geologischen Geschichte von flüssigem Wasser auf dem Mars.",
      },
      {
        name: "Mars Reconnaissance Orbiter",
        year: 2006,
        description:
          "Hochauflösende Kartierung der Oberfläche zur Identifizierung zukünftiger Landeplätze.",
      },
      {
        name: "Curiosity (MSL)",
        year: 2012,
        description:
          "Großer Rover zur Untersuchung der Bewohnbarkeit des Gale-Kraters.",
      },
      {
        name: "MAVEN",
        year: 2014,
        description:
          "Untersuchung der oberen Marsatmosphäre und des Verlusts von Gasen in den Weltraum.",
      },
      {
        name: "InSight",
        year: 2018,
        description:
          "Stationärer Lander zur Messung von Marsbeben und der inneren Struktur des Planeten.",
      },
      {
        name: "Perseverance & Ingenuity",
        year: 2021,
        description:
          "Suche nach Mikrofossilien und der erste erfolgreiche Motorflug auf einem anderen Planeten.",
      },
      {
        name: "ExoMars TGO",
        year: 2021,
        description:
          "Messung von Spurengasen wie Methan zur Identifizierung biologischer oder geologischer Quellen.",
      },
      {
        name: "ESCAPADE",
        year: 2024,
        description:
          "Zwei Kleinsatelliten zur Erforschung des Einflusses des Sonnenwinds auf die Mars-Magnetosphäre.",
      },
      {
        name: "Mars Sample Return (Vorbereitung)",
        year: 2026,
        description:
          "Laufende Missionsplanung und Design-Phase für die Rückführung von Mars-Bodenproben zur Erde.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/Mars/Icon.webp",
    description:
      "Der Mars ist der vierte Planet im Sonnensystem und als 'Roter Planet' bekannt, geprägt durch Eisenoxid-Staub auf seiner Oberfläche.",
    detailedDescription:
      "Mars ist eine kalte Wüstenwelt mit einer sehr dünnen Atmosphäre. Er beheimatet spektakuläre geologische Formationen wie den Olympus Mons, den höchsten Vulkan im Sonnensystem, und das Valles Marineris, ein Grabensystem, das so lang ist wie die USA breit sind. Wissenschaftliche Beweise deuten darauf hin, dass der Mars vor Milliarden von Jahren deutlich feuchter und wärmer war, mit einer dichteren Atmosphäre, die flüssiges Wasser an der Oberfläche ermöglichte.",
    timeline: [
      {
        year: "4,5 Milliarden Jahre v. Chr.",
        event: "Entstehung des Mars zusammen mit dem restlichen Sonnensystem.",
      },
      {
        year: "vor ca. 3,8-3,5 Milliarden Jahren",
        event:
          "Ende der Noachischen Periode; flüssiges Wasser war wahrscheinlich weit verbreitet, bevor der Planet den Großteil seiner Atmosphäre verlor.",
      },
      {
        year: "1610",
        event:
          "Galileo Galilei beobachtet den Mars erstmals durch ein Teleskop.",
      },
      {
        year: "1965",
        event:
          "Mariner 4 liefert die ersten Nahaufnahmen und entlarvt den Mars als kraterübersäte Einöde.",
      },
      {
        year: "1976",
        event:
          "Viking 1 und 2 landen erfolgreich und führen die ersten chemischen Bodenanalysen durch.",
      },
      {
        year: "2012",
        event:
          "Landung des Rovers Curiosity im Gale-Krater zur Untersuchung der Bewohnbarkeit.",
      },
      {
        year: "2021",
        event:
          "Landung von Perseverance und der erste Flug der Hubschrauberdrohne Ingenuity.",
      },
    ],

    slug: "mars",
  },
  // {
  //   id: 6,
  //   name: "Ceres",
  // },
  {
    id: 7,
    name: "Jupiter",
    type: "Planet",
    category: "planets",

    age: "4,603 Milliarden Jahre",
    composition:
      "Gasriese bestehend aus ca. 90% Wasserstoff und 10% Helium; vermutlich ein kleiner Gesteinskern unter einer Schicht aus metallischem Wasserstoff",
    diameter_km: "139.820",
    mass_kg: "1,898 x 10^27 kg",
    gravity_m_s2: "24,79 m/s²",
    escape_velocity_km_s: "59,5 km/s",

    distance_from_sun_km: "778,5 Millionen",
    perihelion_km: "740,5 Millionen",
    aphelion_km: "816,6 Millionen",
    orbital_period_days: "4.333 Erdtage (ca. 11,86 Jahre)",
    rotation_period: "9,9 Stunden",
    axial_tilt_degrees: "3,1",

    atmosphere: [
      { gas: "Wasserstoff", percentage: 89.8 },
      { gas: "Helium", percentage: 10.2 },
      { gas: "Methan", percentage: 0.3 },
      { gas: "Ammoniak", percentage: 0.026 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [{ gas: "Ammoniakwolken", percentage: 100 }],
        temperature: "-150 °C bis -100 °C",
        pressure: "0,1 bis 1,0 bar",
      },
      {
        name: "Stratosphäre",
        composition: [
          { gas: "Kohlenwasserstoffe (Ethan/Acetylen)", percentage: 0.0001 },
        ],
        temperature: "-160 °C bis -100 °C",
        pressure: "0,001 bar",
      },
      {
        name: "Thermosphäre",
        composition: [{ gas: "Wasserstoff-Ionen", percentage: 100 }],
        temperature: "200 °C bis 700 °C",
        pressure: "fast Vakuum",
      },
      {
        name: "Exosphäre",
        composition: [{ gas: "Wasserstoff", percentage: 100 }],
        temperature: "variabel",
        pressure: "Vakuum",
      },
    ],

    average_temperature_celsius: -108,
    temperature_range: "Min: -160°C / Max: -100°C (oberhalb der Wolken)",
    wind_speed_kmh: "400 bis 650",
    magnetic_field:
      "Extrem starkes globales Dipolfeld (ca. 20.000-mal stärker als die Erde)",

    numberOfMoons: 95,
    moonNames: ["Io", "Europa", "Ganymed", "Kallisto", "Amalthea", "Himalia"],
    ringSystem: true,

    missions: [
      {
        name: "Pioneer 10",
        year: 1973,
        description:
          "Erste Sonde, die den Asteroidengürtel durchquerte und Jupiter aus der Nähe fotografierte.",
      },
      {
        name: "Voyager 1 & 2",
        year: 1979,
        description:
          "Entdeckung der Jupiterringe, aktiver Vulkane auf Io und Hinweise auf einen Ozean unter Europas Eiskruste.",
      },
      {
        name: "Galileo",
        year: 1995,
        description:
          "Erster Orbiter; setzte eine Kapsel in die Atmosphäre ab und untersuchte das Jupitersystem über 8 Jahre lang.",
      },
      {
        name: "Cassini-Huygens",
        year: 2000,
        description:
          "Vorbeiflug auf dem Weg zum Saturn; lieferte extrem hochauflösende Aufnahmen der Jupiter-Atmosphäre.",
      },
      {
        name: "New Horizons",
        year: 2007,
        description:
          "Nutze Jupiter für ein Swing-by-Manöver zum Pluto und untersuchte dabei die Blitze am Nordpol und Io.",
      },
      {
        name: "Juno",
        year: 2016,
        description:
          "Aktive Mission zur Erforschung der inneren Struktur, der Magnetosphäre und der tiefen Atmosphäre.",
      },
      {
        name: "JUICE (ESA)",
        year: 2023,
        description:
          "Start der Mission zur Untersuchung der Eismonde Ganymed, Kallisto und Europa (Ankunft 2031).",
      },
      {
        name: "Europa Clipper (NASA)",
        year: 2024,
        description:
          "Gestartete Mission zur gezielten Untersuchung der Bewohnbarkeit des Mondes Europa.",
      },
      {
        name: "Lucy",
        year: 2025,
        description:
          "Vorbeiflug an einem Asteroiden des Hauptgürtels auf dem Weg zu den Trojaner-Asteroiden des Jupiters.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/Jupiter/Icon.webp",
    description:
      "Jupiter ist der größte Planet unseres Sonnensystems und ein gewaltiger Gasriese, der mehr Masse besitzt als alle anderen Planeten zusammen.",
    detailedDescription:
      "Als dominierender Himmelskörper des äußeren Sonnensystems besteht Jupiter fast vollständig aus Wasserstoff und Helium. Seine auffälligste Eigenschaft ist der Große Rote Fleck, ein gigantischer Antizyklon, der größer als die Erde ist und seit Jahrhunderten tobt. Jupiter fungiert durch seine enorme Schwerkraft oft als 'Staubsauger' des Sonnensystems, indem er Kometen und Asteroiden ablenkt oder einfängt. Er besitzt ein extrem starkes Magnetfeld, das gewaltige Polarlichter erzeugt und seine zahlreichen Monde in einem komplexen Strahlungsgürtel gefangen hält.",
    timeline: [
      {
        year: "4,6 Milliarden Jahre v. Chr.",
        event:
          "Entstehung des Jupiters; er war der erste Planet, der sich im Sonnensystem bildete.",
      },
      {
        year: "1610",
        event:
          "Galileo Galilei entdeckt die vier größten Monde (Io, Europa, Ganymed, Kallisto) und beweist, dass sich nicht alles um die Erde dreht.",
      },
      {
        year: "1973",
        event: "Pioneer 10 fliegt als erste Raumsonde am Jupiter vorbei.",
      },
      {
        year: "1979",
        event:
          "Voyager 1 entdeckt das schwache Ringsystem des Jupiters und Vulkane auf dem Mond Io.",
      },
      {
        year: "1994",
        event:
          "Der Komet Shoemaker-Levy 9 kollidiert mit Jupiter - das erste Mal, dass eine Kollision zweier Himmelskörper direkt beobachtet wurde.",
      },
      {
        year: "1995",
        event:
          "Die Sonde Galileo tritt in den Orbit ein und setzt eine Kapsel in die Atmosphäre ab.",
      },
      {
        year: "2016",
        event:
          "Ankunft der NASA-Sonde Juno zur Erforschung der inneren Struktur und der Polarlichter.",
      },
      {
        year: "2024",
        event:
          "Start von Europa Clipper, um die Lebensfreundlichkeit des Eismondes Europa zu untersuchen.",
      },
    ],

    slug: "jupiter",
  },
  {
    id: 8,
    name: "Saturn",
    type: "Planet",
    category: "planets",

    age: "4,503 Milliarden Jahre",
    composition:
      "96% Wasserstoff und 3% Helium; verfügt über einen dichten Kern aus Gestein und Eis, umgeben von metallischem Wasserstoff",
    diameter_km: "116.460",
    mass_kg: "5,683 x 10^26 kg",
    gravity_m_s2: "10,44 m/s²",
    escape_velocity_km_s: "35,5 km/s",

    distance_from_sun_km: "1,434 Milliarden",
    perihelion_km: "1,353 Milliarden",
    aphelion_km: "1,513 Milliarden",
    orbital_period_days: "10.759 Erdtage (ca. 29,46 Jahre)",
    rotation_period: "10,7 Stunden",
    axial_tilt_degrees: "26,7",

    atmosphere: [
      { gas: "Wasserstoff", percentage: 96.3 },
      { gas: "Helium", percentage: 3.25 },
      { gas: "Methan", percentage: 0.45 },
      { gas: "Ammoniak", percentage: 0.01 },
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

    average_temperature_celsius: -138,
    temperature_range: "Min: -190°C / Max: -130°C (oberhalb der Wolken)",
    wind_speed_kmh: "1800",
    magnetic_field: "Globales Dipolfeld (etwas schwächer als das der Erde)",

    numberOfMoons: 115,
    moonNames: [
      "Titan",
      "Rhea",
      "Iapetus",
      "Dione",
      "Tethys",
      "Enceladus",
      "Mimas",
    ],
    ringSystem: true,

    missions: [
      {
        name: "Pioneer 11",
        year: 1979,
        description:
          "Erster Vorbeiflug am Saturn; Entdeckung des F-Rings und des Mondes Epimetheus.",
      },
      {
        name: "Voyager 1",
        year: 1980,
        description:
          "Detaillierte Aufnahmen des Ringsystems und Untersuchung der dichten Atmosphäre von Titan.",
      },
      {
        name: "Voyager 2",
        year: 1981,
        description:
          "Nahaufnahmen der Monde und Messung von Windgeschwindigkeiten in der oberen Atmosphäre.",
      },
      {
        name: "Cassini-Huygens",
        year: 2004,
        description:
          "Langzeitmission im Saturn-Orbit; die Landekapsel Huygens landete 2005 erfolgreich auf Titan.",
      },
      {
        name: "Dragonfly (geplant)",
        year: 2028,
        description:
          "Geplante NASA-Mission, die eine fliegende Sonde zur Untersuchung der organischen Chemie auf Titan schickt.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/Saturn/Icon.webp",
    description:
      "Saturn ist der zweitgrößte Planet des Sonnensystems und berühmt für sein weitreichendes, prächtiges Ringsystem aus Eis und Gestein.",
    detailedDescription:
      "Als zweiter der großen Gasriesen besteht Saturn wie Jupiter hauptsächlich aus Wasserstoff und Helium. Aufgrund seiner geringen Dichte ist er der einzige Planet im Sonnensystem, dessen mittlere Dichte geringer als die von Wasser ist. Das markanteste Merkmal ist sein extrem ausgeprägtes Ringsystem, das sich über Hunderttausende von Kilometern erstreckt, aber oft nur wenige Meter dick ist. Saturn besitzt zudem eine riesige Familie von Monden, darunter Titan - der einzige Mond im Sonnensystem mit einer dichten Atmosphäre - und Enceladus, unter dessen Eiskruste ein globaler Ozean mit hydrothermaler Aktivität vermutet wird.",
    timeline: [
      {
        year: "4,5 Milliarden Jahre v. Chr.",
        event: "Entstehung des Saturns kurz nach der Bildung des Jupiters.",
      },
      {
        year: "1610",
        event:
          "Galileo Galilei beobachtet die Ringe erstmals durch sein Teleskop, hält sie fälschlicherweise aber für zwei große Monde an den Seiten.",
      },
      {
        year: "1655",
        event:
          "Christiaan Huygens erkennt die wahre Natur der Ringe als freischwebendes System und entdeckt den größten Mond, Titan.",
      },
      {
        year: "1675",
        event:
          "Giovanni Domenico Cassini entdeckt die nach ihm benannte Lücke innerhalb der Hauptringe.",
      },
      {
        year: "1979",
        event:
          "Pioneer 11 fliegt als erste Raumsonde am Saturn vorbei und liefert die ersten Nahaufnahmen.",
      },
      {
        year: "2004",
        event:
          "Die Raumsonde Cassini erreicht den Saturn-Orbit und beginnt eine 13-jährige, beispiellose Erforschung des Planeten und seiner Monde.",
      },
      {
        year: "2005",
        event:
          "Die europäische Landekapsel Huygens landet auf der Oberfläche des Titan - die erste Landung im äußeren Sonnensystem.",
      },
      {
        year: "2017",
        event:
          "Das 'Grand Finale' der Cassini-Mission endet mit einem kontrollierten Absturz der Sonde in die Saturn-Atmosphäre.",
      },
    ],

    slug: "saturn",
  },
  {
    id: 9,
    name: "Uranus",
    type: "Planet",
    category: "planets",

    age: "4,503 Milliarden Jahre",
    composition:
      "Eisriese bestehend aus einer dichten Suppe aus 'Eisen' (Wasser, Ammoniak, Methan) über einem kleinen felsigen Kern; die Atmosphäre besteht primär aus Wasserstoff und Helium",
    diameter_km: "50.724",
    mass_kg: "8,681 x 10^25 kg",
    gravity_m_s2: "8,69 m/s²",
    escape_velocity_km_s: "21,3 km/s",

    distance_from_sun_km: "2,871 Milliarden",
    perihelion_km: "2,741 Milliarden",
    aphelion_km: "3,001 Milliarden",
    orbital_period_days: "30.687 Erdtage (ca. 84 Erdjahre)",
    rotation_period: "17,2 Stunden (rückläufig)",
    axial_tilt_degrees: "97,8",

    atmosphere: [
      { gas: "Wasserstoff", percentage: 82.5 },
      { gas: "Helium", percentage: 15.2 },
      { gas: "Methan", percentage: 2.3 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 82.5 },
          { gas: "Helium", percentage: 15.2 },
          { gas: "Methan", percentage: 2.3 },
        ],
        temperature: "-224°C bis -197°C",
        pressure: "0.1 bar bis 10 bar",
      },
      {
        name: "Stratosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 82.5 },
          { gas: "Helium", percentage: 15.2 },
          { gas: "Kohlenwasserstoffe (Ethan/Acetylen)", percentage: 0.01 },
        ],
        temperature: "-197°C bis -175°C",
        pressure: "0.0001 bar bis 0.1 bar",
      },
      {
        name: "Thermosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 99.0 },
          { gas: "Helium", percentage: 1.0 },
        ],
        temperature: "-175°C bis 500°C",
        pressure: "Weniger als 0.00001 bar",
      },
    ],

    average_temperature_celsius: -214,
    temperature_range: "Min: -224°C / Max: -197°C (oberhalb der Wolken)",
    wind_speed_kmh: "900",
    magnetic_field:
      "Stark asymmetrisches, um 59 Grad zur Rotationsachse geneigtes und seitlich versetztes Quadrupolfeld",

    numberOfMoons: 28,
    moonNames: [
      "Titania",
      "Oberon",
      "Umbriel",
      "Ariel",
      "Miranda",
      "Puck",
      "Portia",
    ],
    ringSystem: true,

    missions: [
      {
        name: "Voyager 2",
        year: 1986,
        description:
          "Der bisher einzige Vorbeiflug an Uranus; entdeckte 10 neue Monde, zwei neue Ringe und das stark geneigte Magnetfeld.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/Uranus/Icon.webp",
    description:
      "Uranus ist der siebte Planet des Sonnensystems und ein eisiger Riese, der vor allem durch seine extreme Achsenneigung auffällt, wodurch er quasi auf der Seite rollt.",
    detailedDescription:
      "Als erster Planet, der in der Neuzeit per Teleskop entdeckt wurde, unterscheidet sich Uranus stark von den inneren Gasriesen. Er wird als Eisriese klassifiziert, da sein Mantel primär aus einer heißen, dichten Flüssigkeit aus Wasser, Ammoniak und Methan besteht. Seine blassgrüne Farbe verdankt er dem Methangas in der oberen Atmosphäre. Das faszinierendste Merkmal ist seine Rotationsachse: Mit einer Neigung von fast 98 Grad liegt der Planet nahezu auf der Seite, was zu extremen, jahrzehntelangen Jahreszeiten führt. Zudem besitzt er ein schwaches, vertikal gekipptes Ringsystem und ein komplexes, asymmetrisches Magnetfeld.",
    timeline: [
      {
        year: "4,5 Milliarden Jahre v. Chr.",
        event: "Entstehung des Uranus in den äußeren Regionen des Urnebels.",
      },
      {
        year: "1781",
        event:
          "Wilhelm Herschel entdeckt den Planeten zufällig mit einem selbstgebauten Teleskop und hält ihn anfangs für einen Kometen.",
      },
      {
        year: "1787",
        event:
          "Herschel entdeckt mit Titania und Oberon die beiden größten Monde des Uranus.",
      },
      {
        year: "1851",
        event:
          "William Lassell entdeckt zwei weitere große Monde: Ariel und Umbriel.",
      },
      {
        year: "1948",
        event: "Gerard Kuiper entdeckt den fünften großen Hauptmond, Miranda.",
      },
      {
        year: "1977",
        event:
          "Bei der Beobachtung einer Sternbedeckung entdecken Astronomen zufällig die ersten dünnen Ringe des Uranus.",
      },
      {
        year: "1986",
        event:
          "Die Raumsonde Voyager 2 fliegt als bislang einziges menschengemachtes Objekt am Planeten vorbei und liefert bahnbrechende Daten.",
      },
    ],

    slug: "uranus",
  },
  {
    id: 10,
    name: "Neptun",
    type: "Planet",
    category: "planets",

    age: "4,503 Milliarden Jahre",
    composition:
      "Eisriese bestehend aus einer dichten, heißen Flüssigkeit aus Wasser, Ammoniak und Methan über einem erdgroßen Gesteinskern; die Atmosphäre besteht hauptsächlich aus Wasserstoff, Helium und Methan",
    diameter_km: "49.244",
    mass_kg: "1,024 x 10^26 kg",
    gravity_m_s2: "11,15 m/s²",
    escape_velocity_km_s: "23,5 km/s",

    distance_from_sun_km: "4,495 Milliarden",
    perihelion_km: "4,444 Milliarden",
    aphelion_km: "4,546 Milliarden",
    orbital_period_days: "60.190 Erdtage (ca. 165 Erdjahre)",
    rotation_period: "16,1 Stunden",
    axial_tilt_degrees: "28,3",

    atmosphere: [
      { gas: "Wasserstoff", percentage: 80.0 },
      { gas: "Helium", percentage: 19.0 },
      { gas: "Methan", percentage: 1.5 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 80.0 },
          { gas: "Helium", percentage: 19.0 },
          { gas: "Methan", percentage: 1.5 },
        ],
        temperature: "-220°C bis -130°C",
        pressure: "0.1 bar bis über 10 bar",
      },
      {
        name: "Stratosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 80.0 },
          { gas: "Helium", percentage: 19.0 },
          { gas: "Kohlenwasserstoffe (Ethan/Acetylen)", percentage: 0.001 },
        ],
        temperature: "-130°C bis -60°C",
        pressure: "0.0001 bar bis 0.1 bar",
      },
      {
        name: "Thermosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 99.0 },
          { gas: "Helium", percentage: 1.0 },
        ],
        temperature: "-60°C bis 475°C",
        pressure: "Weniger als 0.00001 bar",
      },
    ],

    average_temperature_celsius: -201,
    temperature_range: "Min: -218°C / Max: -190°C (oberhalb der Wolken)",
    wind_speed_kmh: "2100",
    magnetic_field:
      "Um 47 Grad zur Rotationsachse geneigt und stark aus dem Zentrum versetzt",

    numberOfMoons: 16,
    moonNames: [
      "Triton",
      "Proteus",
      "Nereid",
      "Larissa",
      "Galatea",
      "Despina",
      "Thalassa",
    ],
    ringSystem: true,

    missions: [
      {
        name: "Voyager 2",
        year: 1989,
        description:
          "Der bisher einzige Vorbeiflug an Neptun; entdeckte den 'Großen Dunklen Fleck', sechs neue Monde und bestätigte die Existenz von Ringen.",
      },
    ],

    displayImageUrl: "/explore/solar-system/planets/Neptune/Icon.webp",
    description:
      "Neptun ist der achte und am weitesten von der Sonne entfernte Planet unseres Sonnensystems. Er ist ein dynamischer, tiefblauer Eisriese, auf dem die stärksten Stürme im Sonnensystem toben.",
    detailedDescription:
      "Neptun wurde 1846 als erster Planet nicht durch visuelle Beobachtung, sondern durch mathematische Berechnungen entdeckt, da Unregelmäßigkeiten in der Umlaufbahn von Uranus seine Existenz verrieten. Ähnlich wie Uranus wird er als Eisriese klassifiziert; sein Inneres besteht aus einem dicken Mantel aus flüssigem Wasser, Ammoniak und Methan, der einen festen Kern umschließt. Seine markante, tiefblaue Farbe resultiert aus der Absorption von rotem Licht durch das Methan in der Atmosphäre sowie einer noch nicht vollständig geklärten atmosphärischen Komponente. Neptun besitzt ein extrem dynamisches Wettergeschehen mit gewaltigen, dunklen Wirbelstürmen und Winden, die fast Überschallgeschwindigkeit erreichen. Er wird von einem schwachen Ringsystem und dem großen, rückläufigen Mond Triton umkreist.",
    timeline: [
      {
        year: "4,5 Milliarden Jahre v. Chr.",
        event:
          "Entstehung des Neptun zusammen mit den anderen Gas- und Eisriesen des Sonnensystems.",
      },
      {
        year: "1846",
        event:
          "Johann Gottfried Galle entdeckt Neptun an der Berliner Sternwarte, basierend auf den präzisen mathematischen Vorhersagen von Urbain Le Verrier.",
      },
      {
        year: "1846",
        event:
          "Nur 17 Tage nach der Entdeckung des Planeten entdeckt William Lassell den größten Neptunmond, Triton.",
      },
      {
        year: "1949",
        event:
          "Gerard Kuiper entdeckt Nereid, den zweiten Mond des Neptun, der eine extrem exzentrische Umlaufbahn aufweist.",
      },
      {
        year: "1984",
        event:
          "Astronomen finden erste eindeutige Hinweise auf ein Ringsystem (Ringbögen) um Neptun während einer Sternbedeckung.",
      },
      {
        year: "1989",
        event:
          "Die Raumsonde Voyager 2 fliegt als erstes und bislang einziges Raumfahrzeug an Neptun vorbei und fotografiert den 'Großen Dunklen Fleck'.",
      },
      {
        year: "1989-2026",
        event:
          "Boden- und weltraumbasierte Teleskope wie Hubble und James Webb entdecken weitere kleine, äußere Monde und liefern detaillierte Infrarotaufnahmen der Ringe.",
      },
    ],

    slug: "neptune",
  },
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
