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
  {
    id: 0,
    name: "Sonne",
    type: "Stern",
    category: "stars",

    age: "ca. 4,6 Milliarden Jahre",
    composition:
      "Hauptsächlich Wasserstoff (ca. 73%) und Helium (ca. 25%), sowie geringe Anteile schwererer Elemente wie Sauerstoff, Kohlenstoff, Eisen und Neon (ca. 2%)",
    diameter_km: "1392700 km",
    mass_kg: "1,989 x 10^30 kg",
    gravity_m_s2: "274,0 m/s²",
    escape_velocity_km_s: "617,7 km/s",

    orbital_period_days:
      "0 (Umlaufzeit um das galaktische Zentrum der Milchstraße beträgt ca. 220-230 Millionen Jahre)",
    rotation_period:
      "ca. 25 bis 36 Tage (Differentielle Rotation: ca. 25 Tage am Äquator, bis zu 36 Tage an den Polen)",
    axial_tilt_degrees: "7,25 (Bezogen auf die Ekliptik der Erdbahn)",

    atmosphere: [
      { gas: "Wasserstoff", percentage: 73.46 },
      { gas: "Helium", percentage: 24.85 },
      { gas: "Sauerstoff", percentage: 0.77 },
      { gas: "Kohlenstoff", percentage: 0.29 },
      { gas: "Eisen", percentage: 0.16 },
      { gas: "Neon", percentage: 0.12 },
      { gas: "Stickstoff", percentage: 0.09 },
      { gas: "Silizium", percentage: 0.07 },
      { gas: "Magnesium", percentage: 0.05 },
      { gas: "Schwefel", percentage: 0.04 },
    ],
    atmosphereLayers: [
      {
        name: "Photosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 73.46 },
          { gas: "Helium", percentage: 24.85 },
        ],
        temperature: "4500 °C bis 6000 °C",
        pressure: "1e-4 bar (NN)", // Bezogen auf die optische Tiefe, da es keine feste Erdoberfläche (NN) gibt
      },
      {
        name: "Chromosphäre",
        composition: [
          { gas: "Wasserstoff", percentage: 73.46 },
          { gas: "Helium", percentage: 24.85 },
        ],
        temperature: "4000 °C bis 20000 °C",
        pressure: "1e-8 bar (NN)",
      },
      {
        name: "Übergangsregion",
        composition: [
          { gas: "Wasserstoff (ionisiert)", percentage: 73.46 },
          { gas: "Helium (ionisiert)", percentage: 24.85 },
        ],
        temperature: "20000 °C bis 1000000 °C",
        pressure: "1e-13 bar (NN)",
      },
      {
        name: "Korona",
        composition: [
          { gas: "Wasserstoff-Plasma", percentage: 73.46 },
          { gas: "Helium-Plasma", percentage: 24.85 },
        ],
        temperature: "1000000 °C bis 3000000 °C",
        pressure: "1e-14 bar (NN)",
      },
    ],

    surface_pressure_bars: 0.0001,
    average_temperature_celsius: 5500,
    temperature_range: "Min: 4100°C / Max: 15000000°C",
    wind_speed_kmh: "3000000",
    magnetic_field:
      "Extrem starkes, hochkomplexes und dynamisches Magnetfeld, das durch den solaren Dynamo (Konvektion von Plasma) erzeugt wird und sich ca. alle 11 Jahre umpolt",

    missions: [
      {
        name: "Pioneer 4",
        year: 1959,
        description:
          "Die erste US-amerikanische Raumsonde, die an der Sonne vorbeiflog (nach einem geplanten Vorbeiflug am Mond) und wertvolle Daten über die Strahlungsgürtel im interplanetaren Raum lieferte.",
      },
      {
        name: "Helios 1",
        year: 1974,
        description:
          "Eine gemeinsame Mission von Deutschland und der NASA, die sich der Sonne bis auf rund 47 Millionen Kilometer näherte, um Sonnenwind, Magnetfelder und kosmische Strahlung zu erforschen.",
      },
      {
        name: "Helios 2",
        year: 1976,
        description:
          "Das Zwillingsraumschiff von Helios 1 stellte mit einer Annäherung von ca. 43,4 Millionen Kilometern zur Sonne einen langjährigen Entfernungs- und Geschwindigkeitsrekord auf.",
      },
      {
        name: "Ulysses",
        year: 1990,
        description:
          "Gemeinschaftsprojekt von ESA und NASA, das als erste Raumsonde die Ekliptik verließ, um die unentdeckten Polregionen der Sonne aus einer hochgradig geneigten Umlaufbahn zu untersuchen.",
      },
      {
        name: "SOHO (Solar and Heliospheric Observatory)",
        year: 1995,
        description:
          "Das von ESA und NASA betriebene Weltraumobservatorium im Lagrange-Punkt L1 liefert seit Jahrzehnten ununterbrochen fundamentale Daten über den inneren Aufbau der Sonne, die Korona und Eruptionen.",
      },
      {
        name: "Genesis",
        year: 2001,
        description:
          "NASA-Mission, die Proben des Sonnenwinds im Weltraum sammelte, um die exakte Isotopenzusammensetzung des solaren Urnebels zu analysieren, trotz einer harten Landung der Rückkehrkapsel.",
      },
      {
        name: "STEREO (A & B)",
        year: 2006,
        description:
          "Zwei fast identische NASA-Sonden, die die Sonne aus unterschiedlichen Perspektiven umkreisten, um erstmals dreidimensionale 3D-Bilder von koronalen Massenauswürfen (CMEs) zu erstellen.",
      },
      {
        name: "SDO (Solar Dynamics Observatory)",
        year: 2010,
        description:
          "Ein NASA-Satellit in einer geosynchronen Umlaufbahn, der die Sonnenatmosphäre in extrem hoher zeitlicher und räumlicher Auflösung in verschiedenen Wellenlängen überwacht.",
      },
      {
        name: "Parker Solar Probe",
        year: 2018,
        description:
          "Die NASA-Sonde fliegt so nah an die Sonne heran wie kein anderes Objekt zuvor. Sie taucht direkt in die äußere Korona ein, um die Mechanismen hinter der extremen Hitzeentwicklung und Beschleunigung des Sonnenwinds zu entschlüsseln.",
      },
      {
        name: "Solar Orbiter",
        year: 2020,
        description:
          "Eine ESA-Mission mit NASA-Beteiligung, die hochauflösende Nahaufnahmen der Sonne macht und insbesondere die Polarregionen aus einer geneigten Umlaufbahn detailliert vermisst.",
      },
      {
        name: "Aditya-L1",
        year: 2023,
        description:
          "Indiens erste dedizierte Weltraummission zur Erforschung der Sonne, positioniert am Lagrange-Punkt L1, um die Chromosphäre, die Korona und die solaren Magnetstürme kontinuierlich zu beobachten.",
      },
    ],

    displayImageUrl: "/explore/solar-system/stars/sun/Icon.webp",
    description:
      "Die Sonne ist der Zentralstern des Sonnensystems, ein gelber Zwergstern und die primäre Energiequelle für alles Leben auf der Erde.",
    detailedDescription:
      "Mit einer Masse von rund 1,989 x 10^30 Kilogramm vereint die Sonne etwa 99,86 % der gesamten Masse des Sonnensystems in sich. In ihrem Zentrum wandelt sie durch thermonukleare Kernfusion im Zuge der Proton-Proton-Reaktion jede Sekunde rund 564 Millionen Tonnen Wasserstoff in Helium um. Die dabei freigesetzte Energie wandert über Hunderttausende von Jahren durch die Strahlungs- und Konvektionszone nach außen, bevor sie von der Photosphäre als Licht und Wärme in den Weltraum abgestrahlt wird. Die Sonne besitzt keine feste Oberfläche, sondern besteht vollständig aus hochenergetischem, ionisiertem Gas (Plasma). Ihr hochdynamisches Magnetfeld erzeugt sichtbare Phänomene wie Sonnenflecken, Protuberanzen und koronale Massenauswürfe, die als Sonnenwind das interplanetare Medium prägen und auf der Erde Polarlichter sowie geomagnetische Stürme auslösen können. Als Hauptreihenstern der Spektralklasse G2V befindet sich die Sonne aktuell in ihrer stabilsten Lebensphase und hat etwa die Hälfte ihrer geschätzten Lebensdauer von rund 10 Milliarden Jahren erreicht.",
    timeline: [
      {
        year: "1610",
        event:
          "Galileo Galilei und Thomas Harriot beobachten als Erste systematisch Sonnenflecken mit dem Teleskop, was das jahrhundertealte Dogma einer makellosen, unveränderlichen Sonne bricht.",
      },
      {
        year: "1843",
        event:
          "Der Astronom Heinrich Schwabe entdeckt nach jahrzehntelanger Beobachtung, dass die Aktivität der Sonnenflecken einem regelmäßigen, etwa 11-jährigen Zyklus folgt.",
      },
      {
        year: "1859",
        event:
          "Das 'Carrington-Ereignis', der bis heute stärkste registrierte geomagnetische Sonnensturm, legt weltweite Telegrafennetze lahm und macht Polarlichter bis in die Tropen sichtbar.",
      },
      {
        year: "1920",
        event:
          "Arthur Eddington schlägt als Erster vor, dass die Energieerzeugung der Sonne auf der atomaren Fusion von Wasserstoff zu Helium in ihrem extrem heißen Kern basiert.",
      },
      {
        year: "1974",
        event:
          "Die deutsch-amerikanische Helios-1-Sonde startet und nähert sich der Sonne so nah wie kein Raumfahrzeug zuvor, um den Sonnenwind direkt im inneren Sonnensystem zu vermessen.",
      },
      {
        year: "1995",
        event:
          "Das Weltraumobservatorium SOHO wird im Lagrange-Punkt L1 stationiert und revolutioniert mit einer ununterbrochenen 24/7-Überwachung der Sonnenatmosphäre die Weltraumwetter-Vorhersage.",
      },
      {
        year: "2018",
        event:
          "Die NASA startet die Parker Solar Probe, die im Laufe ihrer Mission direkt in die glühend heiße äußere Korona eintaucht, um die Beschleunigung des Sonnenwinds vor Ort zu ergründen.",
      },
      {
        year: "2023",
        event:
          "Indien schickt mit Aditya-L1 sein erstes eigenes Sonnenobservatorium ins All, um die chromosphärische und koronale Erhitzung zeitgleich mit internationalen Sonden zu erforschen.",
      },
    ],

    slug: "sun",
  },
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
  {
    id: 4,
    name: "Mond",
    type: "Mond",
    category: "moons",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Differenzierter Aufbau bestehend aus einer krustenartigen Oberfläche (Anorthosit, Basalt), einem dicken lithosphärischen Mantel (Olivin, Pyroxen) und einem kleinen, teilweise geschmolzenen metallischen Kern (hauptsächlich Eisen und Nickel)",
    diameter_km: "3474 km",
    mass_kg: "7,342 x 10^22 kg",
    gravity_m_s2: "1,62 m/s²",
    escape_velocity_km_s: "2,38 km/s",

    distance_from_sun_km:
      "ca. 149.600.000 (Durchschnitt, da er die Sonne gemeinsam mit der Erde umkreist; variiert analog zur Erdbahn)",
    perihelion_km:
      "ca. 147.000.000 (Sonnennächster Punkt des Erde-Mond-Systems)",
    aphelion_km: "ca. 152.000.000 (Sonnenfernster Punkt des Erde-Mond-Systems)",
    orbital_period_days:
      "27,32 (Siderische Umlaufzeit um die Erde; ein voller Umlauf um die Sonne dauert wie bei der Erde ca. 365,25 Tage)",
    rotation_period: "27,32 Tage (Gebundene Rotation an die Erde)",
    axial_tilt_degrees:
      "6,68 (Bezogen auf seine Bahnebene um die Erde / 1,54° bezogen auf die Ekliptik)",

    atmosphere: [
      { gas: "Helium", percentage: 25 },
      { gas: "Neon", percentage: 25 },
      { gas: "Wasserstoff", percentage: 23 },
      { gas: "Argon", percentage: 20 },
      { gas: "Methan", percentage: 4 },
      { gas: "Ammoniak", percentage: 2 },
      { gas: "Kohlendioxid", percentage: 1 },
    ],

    surface_pressure_bars: 3e-15,
    average_temperature_celsius: -74,
    temperature_range: "Min: -248°C / Max: +121°C",
    magnetic_field:
      "Kein globales Dipolfeld; es existiert nur ein extrem schwaches, ungleichmäßig verteiltes Krustenmagnetfeld aus magnetisiertem Gestein",

    missions: [
      {
        name: "Luna 2",
        year: 1959,
        description:
          "Die sowjetische Raumsonde war das erste von Menschen gebaute Objekt, das die Mondoberfläche erreichte und gezielt auf ihr aufschlug.",
      },
      {
        name: "Luna 3",
        year: 1959,
        description:
          "Lieferte die allerersten historisch bedeutenden Fotografien der von der Erde aus unsichtbaren Mondrückseite.",
      },
      {
        name: "Apollo 11",
        year: 1969,
        description:
          "Die historische NASA-Mission brachte mit Neil Armstrong und Buzz Aldrin die ersten Menschen sicher auf die Mondoberfläche und leitete eine Ära intensiver bemannter Erforschung ein.",
      },
      {
        name: "Apollo 17",
        year: 1972,
        description:
          "Die sechste und bis heute letzte bemannte Mondlandung der USA, bei der auch der erste Profi-Geologe (Harrison Schmitt) Proben sammelte.",
      },
      {
        name: "Luna 24",
        year: 1976,
        description:
          "Die letzte sowjetische Rückholmission, die erfolgreich Bodenproben vollautomatisch zur Erde transportierte, bevor es jahrzehntelang ruhig um den Mond wurde.",
      },
      {
        name: "Clementine",
        year: 1994,
        description:
          "Gemeinsame Mission von NASA und BMDO, die den Mond global kartografierte und erste starke Hinweise auf Wassereis in den permanent beschatteten Polkratern fand.",
      },
      {
        name: "Lunar Reconnaissance Orbiter (LRO)",
        year: 2009,
        description:
          "Hochleistungs-NASA-Sonde, die den Mond bis heute umkreist, extrem hochauflösende 3D-Karten erstellt und alle historischen Landeplätze fotografiert hat.",
      },
      {
        name: "Chang'e 3",
        year: 2013,
        description:
          "Chinas erste weiche Mondlandung, die den Rover 'Yutu' (Storch) auf der Vorderseite absetzte und die moderne robotische Erkennung des Mondes einläutete.",
      },
      {
        name: "Chang'e 4",
        year: 2019,
        description:
          "Die weltweit erste erfolgreiche weiche Landung einer Raumsonde und eines Rovers (Yutu-2) auf der geologisch völlig andersartigen Mondrückseite.",
      },
      {
        name: "Artemis I",
        year: 2022,
        description:
          "Unbemannter Testflug des neuen NASA-Artemis-Programms, bei dem das Orion-Raumschiff den Mond umkreiste, um die Technologie für die Rückkehr von Astronauten zu erproben.",
      },
      {
        name: "Chandrayaan-3",
        year: 2023,
        description:
          "Indiens historische Mission, die als erste erfolgreich eine sanfte Landung in der Nähe der wissenschaftlich extrem wichtigen Südpolregion des Mondes vollzog.",
      },
      {
        name: "SLIM",
        year: 2024,
        description:
          "Japanische Mission, die eine extrem präzise Punktlandung ('Mond-Scharfschütze') mit einer Genauigkeit von unter 100 Metern demonstrierte.",
      },
      {
        name: "Chang'e 6",
        year: 2024,
        description:
          "Die erste Mission der Raumfahrtgeschichte, die erfolgreich Bodenproben direkt von der Mondrückseite (aus dem Südpol-Aitken-Becken) sammelte und zur Erde brachte.",
      },
      {
        name: "Artemis II",
        year: 2026,
        description:
          "Die historische erste bemannte Mission des Artemis-Programms. Vier Astronauten umrundeten im April 2026 an Bord des Orion-Raumschiffs den Mond, erreichten einen neuen Entfernungsrekord für Menschen im All und testeten die Systeme für die kommenden Landungen.",
      },
    ],

    displayImageUrl: "/explore/solar-system/moons/moon/Icon.webp",
    description:
      "Der Erdmond ist der einzige natürliche Satellit der Erde und der fünftgrößte Mond des Sonnensystems.",
    detailedDescription:
      "Mit einem Durchmesser von rund 3.474 Kilometern prägt der Mond seit jeher das Leben auf der Erde, indem er die Erdachse stabilisiert und für die Gezeiten (Ebbe und Flut) in den Ozeanen sorgt. Er befindet sich in einer gebundenen Rotation, weshalb er der Erde immer dieselbe Seite zuwendet. Die Oberfläche des Mondes ist zweigeteilt: Sie besteht aus den hellen, kraterreichen Hochebenen (Anorthosit) und den dunklen, flachen 'Maria' (Basalt), die durch antiken Vulkanismus nach großen Asteroideneinschlägen entstanden sind. Da der Mond keine nennenswerte Atmosphäre und kein globales Magnetfeld besitzt, ist er kosmischer Strahlung und Meteoriteneinschlägen schutzlos ausgeliefert. Seine Erforschung begann 1959 mit den sowjetischen Luna-Sonden, gipfelte zwischen 1969 und 1972 im US-amerikanischen Apollo-Programm mit insgesamt zwölf Astronauten auf der Oberfläche und erlebt heute durch das internationale Artemis-Programm sowie robotische Missionen verschiedenster Nationen eine moderne Renaissance mit dem Fokus auf die eisreichen Polregionen.",
    timeline: [
      {
        year: "1610",
        event:
          "Galileo Galilei untersucht den Mond als einer der Ersten mit einem Fernrohr, zeichnet Krater sowie Gebirge und widerlegt die antike These, der Mond sei eine perfekte, glatte Kugel.",
      },
      {
        year: "1959",
        event:
          "Die sowjetische Sonde Luna 2 schlägt als erstes menschengemachtes Objekt auf dem Mond auf. Wenige Monate später fotografiert Luna 3 erstmals die bis dahin völlig unbekannte Mondrückseite.",
      },
      {
        year: "1969",
        event:
          "Im Rahmen der NASA-Mission Apollo 11 betreten Neil Armstrong und Buzz Aldrin am 21. Juli (UTC) als erste Menschen den Mond.",
      },
      {
        year: "1972",
        event:
          "Apollo 17 markiert die sechste und für über fünf Jahrzehnte letzte bemannte Mondlandung des 20. Jahrhunderts.",
      },
      {
        year: "1994",
        event:
          "Die Raumsonde Clementine kartografiert den Mond global und liefert erste Hinweise auf Wassereis in den permanent im Schatten liegenden Kratern der Polregionen.",
      },
      {
        year: "2019",
        event:
          "Chinas Sonde Chang'e 4 gelingt die historisch erste weiche Landung eines Rovers (Yutu-2) auf der geologisch völlig andersartigen Rückseite des Mondes.",
      },
      {
        year: "2024",
        event:
          "Die chinesische Mission Chang'e 6 schreibt Raumfahrtgeschichte, indem sie erstmals Bodenproben direkt von der Mondrückseite sammelt und erfolgreich zur Erde transportiert.",
      },
      {
        year: "2026",
        event:
          "Mit Artemis II fliegen im April erstmals seit 1972 wieder Menschen (eine vierköpfige internationale Crew) zum Mond, umrunden diesen im Orion-Raumschiff und stellen einen neuen Entfernungsrekord im tiefen Weltraum auf.",
      },
    ],

    slug: "moon",
  },
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

    displayImageUrl: "/explore/solar-system/planets/mars/Icon.webp",
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
  {
    id: 6,
    name: "Ceres",
    type: "Zwergplanet",
    category: "dwarf-planets",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Differenzierter Aufbau mit einem felsigen Kern, einem dicken Mantel aus Wassereis und einer dünnen, staubigen Kruste; spektroskopisch nachgewiesen wurden wasserhaltige Minerale (Tone), Carbonate, Ammoniumsalze und organische Verbindungen",
    diameter_km: "ca. 940 km (äquatorial: 964 km / polar: 892 km)",
    mass_kg:
      "9,39 x 10^20 kg (macht etwa ein Drittel der Gesamtmasse des gesamten Asteroidengürtels aus)",
    gravity_m_s2: "0,28 m/s²",
    escape_velocity_km_s: "0,51 km/s",

    distance_from_sun_km:
      "ca. 414.000.000 (Durchschnitt, entspricht etwa 2,77 AE)",
    perihelion_km: "ca. 382.000.000 (ca. 2,56 AE)",
    aphelion_km: "ca. 445.000.000 (ca. 2,98 AE)",
    orbital_period_days: "1682 (ca. 4,6 Erdjahre)",
    rotation_period: "9 Stunden 4 Minuten",
    axial_tilt_degrees: "4",

    atmosphere: [{ gas: "Wasserdampf", percentage: 100 }],

    average_temperature_celsius: -105,
    temperature_range: "Min: -143°C / Max: -38°C",

    missions: [
      {
        name: "Dawn",
        year: 2015,
        description:
          "Die US-Raumsonde Dawn erreichte Ceres im März 2015 und war die erste Mission, die einen Zwergplaneten aus nächster Nähe erforschte. Sie verblieb bis zum Missionsende 2018 in einer permanenten Umlaufbahn, kartografierte die Oberfläche komplett und entdeckte unter anderem die berühmten hellen Flecken im Occator-Krater sowie Hinweise auf Kryovulkanismus.",
      },
    ],

    displayImageUrl: "/explore/solar-system/dwarf-planets/ceres/Icon.webp",
    description:
      "Ceres ist der kleinste von der IAU anerkannte Zwergplanet und das mit Abstand größte Objekt im Asteroidengürtel zwischen Mars und Jupiter.",
    detailedDescription:
      "Ceres wurde am 1. Januar 1801 von Giuseppe Piazzi entdeckt und galt zunächst für viele Jahrzehnte als vollwertiger Planet, bevor sie wegen der Entdeckung zahlreicher weiterer Objekte in derselben Region als Asteroid eingestuft wurde. Im Jahr 2006 erhielt sie schließlich den Status eines Zwergplaneten. Mit einem Durchmesser von rund 940 Kilometern vereint Ceres etwa ein Drittel der gesamten Masse des Asteroidengürtels in sich. Als einziger Körper dieser Region besitzt sie genug Masse, um durch ihre eigene Schwerkraft eine annähernd runde, hydrostatische Gleichgewichtsform zu bilden. Wissenschaftliche Daten der Raumsonde Dawn zeigen, dass Ceres ein differenzierter Himmelskörper mit einem felsigen Kern und einem dicken Mantel aus Wassereis ist. Überraschenderweise deuten Messungen darauf hin, dass sich unter ihrer kraterreichen, von Carbonaten und Tonen geprägten Oberfläche noch heute Reste eines globalen, salzhaltigen Ozeans oder hydrothermale Taschen befinden könnten. Berühmt ist Ceres zudem für ihre hellen Flecken (Cerealia Facula) im Occator-Krater, die durch ausgetretene Natriumcarbonat-Salze entstanden sind und aktiven Kryovulkanismus (Eisvulkanismus) in der jüngeren geologischen Vergangenheit belegen.",
    timeline: [
      {
        year: "1801",
        event:
          "Der italienische Astronom Giuseppe Piazzi entdeckt Ceres am Observatorium in Palermo und benennt sie nach der römischen Göttin des Ackerbaus und der Fruchtbarkeit.",
      },
      {
        year: "1802",
        event:
          "Carl Friedrich Gauß berechnet mithilfe einer neuen mathematischen Methode (Methode der kleinsten Quadrate) die Bahn von Ceres wieder, nachdem sie kurz nach ihrer Entdeckung hinter der Sonne verloren gegangen war.",
      },
      {
        year: "1850er",
        event:
          "Nachdem immer mehr Himmelskörper zwischen Mars und Jupiter gefunden werden, verliert Ceres offiziell den Planetenstatus und wird fortan zusammen mit den anderen Objekten als 'Asteroid' oder 'Kleinplanet' klassifiziert.",
      },
      {
        year: "1995-2005",
        event:
          "Beobachtungen mit dem Hubble-Weltraumteleskop liefern erste grobe Oberflächenstrukturen und bestätigen die nahezu runde, sphärische Form des Asteroiden.",
      },
      {
        year: "2006",
        event:
          "Die Internationale Astronomische Union (IAU) definiert den Begriff 'Planet' neu. Ceres wird zusammen mit Pluto und Eris in die neu geschaffene Kategorie der 'Zwergplaneten' hochgestuft.",
      },
      {
        year: "2015",
        event:
          "Die NASA-Sonde Dawn schwenkt in eine Umlaufbahn um Ceres ein. Sie entdeckt faszinierende helle Salzablagerungen im Occator-Krater und einen riesigen, einsamen Eisvulkan namens Ahuna Mons.",
      },
      {
        year: "2018",
        event:
          "Die Dawn-Mission geht nach Treibstoffmangel zu Ende. Die Sonde verbleibt in einem stabilen, inaktiven Orbit um den Zwergplaneten, um eine Kontamination der Oberfläche zu verhindern.",
      },
    ],

    slug: "ceres",
  },
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

    displayImageUrl: "/explore/solar-system/planets/jupiter/Icon.webp",
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

    displayImageUrl: "/explore/solar-system/planets/saturn/Icon.webp",
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

    displayImageUrl: "/explore/solar-system/planets/uranus/Icon.webp",
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

    displayImageUrl: "/explore/solar-system/planets/neptune/Icon.webp",
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
  {
    id: 11,
    name: "Pluto",
    type: "Zwergplanet",
    category: "dwarf-planets",

    age: "4,503 Milliarden Jahre",
    composition:
      "Zwergplanet mit einem differenzierten Aufbau: ein großer innerer Gesteinskern, der von einem dicken Mantel aus Wassereis umgeben ist; die Oberfläche ist von einer Kruste aus gefrorenem Stickstoff, Methan und Kohlenmonoxid bedeckt",
    diameter_km: "2.376",
    mass_kg: "1,303 x 10^22 kg",
    gravity_m_s2: "0,62 m/s²",
    escape_velocity_km_s: "1,23 km/s",

    distance_from_sun_km: "5,906 Milliarden (Schnitt)",
    perihelion_km: "4,437 Milliarden",
    aphelion_km: "7,376 Milliarden",
    orbital_period_days: "90.560 Erdtage (ca. 248 Erdjahre)",
    rotation_period: "-153,3 Stunden (ca. 6,4 Erdtage, retrograd)",
    axial_tilt_degrees: "122,5",

    atmosphere: [
      { gas: "Stickstoff", percentage: 99.0 },
      { gas: "Methan", percentage: 0.5 },
      { gas: "Kohlenmonoxid", percentage: 0.5 },
    ],
    atmosphereLayers: [
      {
        name: "Troposphäre",
        composition: [
          { gas: "Stickstoff", percentage: 99.0 },
          { gas: "Methan", percentage: 0.5 },
          { gas: "Kohlenmonoxid", percentage: 0.5 },
        ],
        temperature: "-235°C bis -220°C",
        pressure: "0.00001 bar (Schnitt an der Oberfläche)",
      },
      {
        name: "Stratosphäre / Obere Atmosphäre",
        composition: [
          { gas: "Stickstoff", percentage: 99.0 },
          { gas: "Komplexe Kohlenwasserstoffe (Tholine)", percentage: 1.0 },
        ],
        temperature: "-220°C bis -170°C",
        pressure: "Weniger als 0.000001 bar",
      },
    ],

    surface_pressure_bars: 0.00001,
    average_temperature_celsius: -228,
    temperature_range: "Min: -240°C / Max: -218°C",
    wind_speed_kmh: "36",
    magnetic_field: "Kein globales Magnetfeld vorhanden (oder extrem schwach)",

    numberOfMoons: 5,
    moonNames: ["Charon", "Styx", "Nix", "Kerberos", "Hydra"],

    missions: [
      {
        name: "New Horizons",
        year: 2015,
        description:
          "Der erste und bislang einzige Vorbeiflug an Pluto; lieferte die ersten hochauflösenden Bilder der Oberfläche, entdeckte die markante herzförmige Region (Tombaugh Regio) und untersuchte Plutos Atmosphäre und Monde.",
      },
    ],

    displayImageUrl: "/explore/solar-system/dwarf-planets/pluto/Icon.webp",
    description:
      "Pluto ist der bekannteste Zwergplanet unseres Sonnensystems und war bis 2006 der neunte Hauptplanet. Er ist eine eisige, faszinierende Welt am fernen Rand des Sonnensystems mit einer markanten, herzförmigen Ebene auf seiner Oberfläche.",
    detailedDescription:
      "Pluto wurde 1930 entdeckt und im Jahr 2006 von der Internationalen Astronomischen Union (IAU) als Zwergplanet neu klassifiziert, da er seinen Orbit nicht von anderen Objekten bereinigt hat. Er zieht seine Bahn im Kuipergürtel, einer Region voller eisiger Himmelskörper jenseits von Neptun. Seine Oberfläche ist überraschend dynamisch und geologisch jung. Das auffälligste Merkmal ist 'Tombaugh Regio', eine riesige, herzförmige Tiefebene, die hauptsächlich aus gefrorenem Stickstoff besteht. Pluto besitzt eine dünne Atmosphäre, die sich ausdehnt, wenn er der Sonne am nächsten ist, und kollabiert (ausfriert), wenn er sich weiter entfernt. Zusammen mit seinem riesigen Mond Charon bildet er quasi ein Doppelplaneten-System, da beide Körper um einen gemeinsamen Schwerpunkt außerhalb von Plutos Oberfläche kreisen.",
    timeline: [
      {
        year: "1930",
        event:
          "Clyde Tombaugh entdeckt Pluto am Lowell-Observatorium durch den systematischen Vergleich von Fotoplatten.",
      },
      {
        year: "1978",
        event:
          "James Christy entdeckt Plutos größten Mond Charon, was die erste genaue Massenbestimmung von Pluto ermöglicht.",
      },
      {
        year: "2005",
        event:
          "Das Hubble-Weltraumteleskop entdeckt zwei weitere kleine Monde: Nix und Hydra.",
      },
      {
        year: "2006",
        event:
          "Die IAU beschließt eine offizielle Definition für Planeten; Pluto verliert seinen Status als neunter Planet und wird zum Prototyp der neuen Klasse der Zwergplaneten.",
      },
      {
        year: "2011-2012",
        event:
          "Hubble entdeckt bei der Vorbereitung der New-Horizons-Mission die zwei kleinsten Monde, Kerberos und Styx.",
      },
      {
        year: "2015",
        event:
          "Die NASA-Sonde New Horizons fliegt im Juli in nur 12.500 km Entfernung an Pluto vorbei und liefert die ersten hochauflösenden Daten dieser fernen Welt.",
      },
      {
        year: "2015-2026",
        event:
          "Die detaillierte Auswertung der New-Horizons-Daten revolutioniert die Planetenwissenschaft und liefert Belege für eisvulkanische Aktivität und einen möglichen verborgenen Ozean unter Plutos Eiskruste.",
      },
    ],

    slug: "pluto",
  },
  {
    id: 12,
    name: "Haumea",
    type: "Zwergplanet",
    category: "dwarf-planets",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Zwergplanet mit einem dichten, felsigen Kern, der von einer relativ dünnen, glänzenden Kruste aus fast reinem Wassereis umgeben ist; aufgrund seiner extrem schnellen Rotation ist seine Form stark zu einem Ellipsoid (wie ein gedehnter Football) deformiert",
    diameter_km:
      "ca. 1.600 (Mittelwert; Abmessungen ca. 2.322 x 1.704 x 1.026)",
    mass_kg: "4,006 x 10^21 kg",
    gravity_m_s2: "0,40 m/s²",
    escape_velocity_km_s: "0,80 km/s",

    distance_from_sun_km: "6,452 Milliarden (Schnitt)",
    perihelion_km: "5,157 Milliarden",
    aphelion_km: "7,747 Milliarden",
    orbital_period_days: "103.774 Erdtage (ca. 284 Erdjahre)",
    rotation_period: "3,9 Stunden (extrem schnell)",
    axial_tilt_degrees:
      "Keine genauen Daten (Orbit ist stark geneigt mit ca. 28,2° zur Ekliptik)",

    average_temperature_celsius: -223,
    temperature_range: "Min: -241°C / Max: -218°C",

    numberOfMoons: 2,
    moonNames: ["Hiʻiaka", "Namaka"],
    ringSystem: true,

    missions: [
      {
        name: "Keine (bisher nur erdgebundene/weltraumgestützte Beobachtungen)",
        year: 2026,
        description:
          "Bislang wurde Haumea von keiner Raumsonde direkt besucht. Alle Daten basieren auf Beobachtungen durch erdgebundene Teleskop-Zentren sowie die Weltraumteleskope Hubble, Spitzer und James Webb.",
      },
    ],

    displayImageUrl: "/explore/solar-system/dwarf-planets/haumea/Icon.webp",
    description:
      "Haumea ist ein extrem schnell rotierender Zwergplanet im Kuipergürtel, der durch seine längliche, footballähnliche Form und sein überraschendes Ringsystem auffällt.",
    detailedDescription:
      "Haumea befindet sich in den eisigen Außenbereichen unseres Sonnensystems jenseits der Neptunbahn. Das faszinierendste Merkmal dieses Zwergplaneten ist seine extreme Rotationsgeschwindigkeit: Ein Tag dauert dort weniger als vier Stunden. Diese enorme Fliehkraft hat den Körper stark verformt, sodass er die Gestalt eines dreiaxialen Ellipsoids - ähnlich einem gestreckten Football - angenommen hat. Im Jahr 2017 entdeckten Astronomen bei einer Sternbedeckung, dass Haumea als erster bekanntes Objekt im Kuipergürtel von einem schmalen, dichten Ring umgeben ist. Die Oberfläche besteht fast vollständig aus kristallinem Wassereis, das das Sonnenlicht stark reflektiert. Zusammen mit ihren beiden Monden Hiʻiaka und Namaka bildet Haumea den Kern einer eigenen Kollisionsfamilie, die vermutlich durch den Einschlag eines anderen großen Objekts in der Frühzeit des Sonnensystems entstanden ist.",
    timeline: [
      {
        year: "2003",
        event:
          "Ein Team um Mike Brown am Palomar-Observatorium fotografiert Haumea erstmals, die Entdeckung wird jedoch zunächst nicht offiziell gemeldet.",
      },
      {
        year: "2005",
        event:
          "Ein spanisches Team um José Luis Ortiz Moreno gibt die Entdeckung unabhängig bekannt; kurz darauf meldet auch das US-Team seine Daten, was zu einer anhaltenden Kontroverse über die Entdeckerrechte führt.",
      },
      {
        year: "2005",
        event:
          "Das Keck-Observatorium auf Hawaii entdeckt die beiden Monde Hiʻiaka und Namaka, was die Berechnung von Haumeas Masse ermöglicht.",
      },
      {
        year: "2008",
        event:
          "Die Internationale Astronomische Union (IAU) klassifiziert den Himmelskörper offiziell als fünften Zwergplaneten und benennt ihn nach Haumea, der hawaiianischen Göttin der Fruchtbarkeit und Geburt.",
      },
      {
        year: "2017",
        event:
          "Während einer seltenen Sternbedeckung entdecken europäische Astronomen einen zirka 70 Kilometer breiten Ring, der Haumea im Abstand von rund 2.287 Kilometern umkreist.",
      },
      {
        year: "2020-2026",
        event:
          "Beobachtungen mit modernen Weltraumteleskopen wie James Webb verfeinern das Wissen über die Zusammensetzung des Oberflächeneises und die Dynamik des Ringsystems im tiefen Kuipergürtel.",
      },
    ],

    slug: "haumea",
  },
  {
    id: 13,
    name: "Makemake",
    type: "Zwergplanet",
    category: "dwarf-planets",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Zwergplanet mit einer Oberfläche, die von gefrorenem Methan, Ethan und möglicherweise Stickstoff-Eis bedeckt ist; die rötlich-braune Färbung deutet auf das Vorhandensein von Tholinen hin, die durch solare UV-Strahlung entstehen; im Inneren wird ein dichter Kern aus Gestein und einer Eisschicht vermutet",
    diameter_km: "ca. 1.430 (Mittelwert; Abmessungen ca. 1.434 x 1.420)",
    mass_kg: "3,1 x 10^21 kg",
    gravity_m_s2: "0,57 m/s²",
    escape_velocity_km_s: "0,84 km/s",

    distance_from_sun_km: "6,847 Milliarden (Schnitt)",
    perihelion_km: "5,671 Milliarden",
    aphelion_km: "8,023 Milliarden",
    orbital_period_days: "112.897 Erdtage (ca. 309 Erdjahre)",
    rotation_period: "22,8 Stunden",
    axial_tilt_degrees:
      "Keine genauen Daten (Orbit ist um 29° zur Ekliptik geneigt)",

    atmosphere: [
      { gas: "Stickstoff", percentage: 95.0 },
      { gas: "Methan", percentage: 4.0 },
      { gas: "Ethan", percentage: 1.0 },
    ],

    average_temperature_celsius: -243,
    temperature_range: "Min: -248°C / Max: -238°C",

    numberOfMoons: 1,
    moonNames: ["MK2"],

    missions: [
      {
        name: "Keine (bisher nur erdgebundene/weltraumgestützte Beobachtungen)",
        year: 2026,
        description:
          "Wie Haumea wurde auch Makemake noch nie von einer Raumsonde aus der Nähe untersucht. Unser Wissen stammt komplett aus Beobachtungen mit großen erdgebundenen Teleskopen sowie Weltraumobservatorien wie Hubble, Spitzer und James Webb.",
      },
    ],

    displayImageUrl: "/explore/solar-system/dwarf-planets/makemake/Icon.webp",
    description:
      "Makemake ist der zweithellste Zwergplanet des Kuipergürtels, der durch seine rötliche Oberfläche aus gefrorenem Methan und seinen extrem dunklen, kleinen Mond auffällt.",
    detailedDescription:
      "Makemake zieht seine Bahnen in den eisigen Tiefen des äußeren Sonnensystems, weit jenseits von Neptun. Er ist das drittgrößte bekannte transneptunische Objekt und nach Pluto der hellste Körper im Kuipergürtel, weshalb er selbst mit guten Amateurteleskopen theoretisch sichtbar ist. Seine Oberfläche zeigt eine markante rötlich-braune Färbung. Diese entsteht durch Tholine - komplexe organische Moleküle, die sich bilden, wenn solares UV-Licht auf das dort reichlich vorhandene gefrorene Methan, Ethan und Stickstoff trifft. Im Gegensatz zu Pluto besitzt Makemake im Mittel keine dauerhafte Atmosphäre; Berechnungen zeigen jedoch, dass sich bei maximaler Annäherung an die Sonne temporär eine extrem dünne Gashülle bilden kann, die bei zunehmender Entfernung wieder komplett ausfriert. Makemake besitzt einen winzigen, extrem dunklen Mond namens MK2, dessen Entdeckung im Jahr 2016 dabei half, die Masse und Dichte des Zwergplaneten weitaus präziser zu bestimmen.",
    timeline: [
      {
        year: "2005",
        event:
          "Ein Team um Mike Brown entdeckt den Zwergplaneten am Palomar-Observatorium kurz nach Ostern, weshalb er jahrelang den inoffiziellen Spitznamen 'Easterbunny' (Osterhase) trägt.",
      },
      {
        year: "2008",
        event:
          "Die Internationale Astronomische Union (IAU) klassifiziert das Objekt offiziell als vierten Zwergplaneten und benennt es nach Makemake, dem Schöpfergott aus der Mythologie der Osterinsel (Rapa Nui).",
      },
      {
        year: "2011",
        event:
          "Während einer seltenen Sternbedeckung stellen Astronomen fest, dass Makemake im Gegensatz zu Pluto keine nennenswerte, dauerhafte Atmosphäre besitzt, was die Wissenschaftler überrascht.",
      },
      {
        year: "2016",
        event:
          "Das Hubble-Weltraumteleskop entdeckt einen kleinen, extrem dunklen Begleiter (Mond) im Orbit um Makemake, der die vorläufige Bezeichnung S/2015 (136472) 1 bzw. den Spitznamen MK2 erhält.",
      },
      {
        year: "2022-2026",
        event:
          "Infrarot-Untersuchungen unter anderem durch das James-Webb-Weltraumteleskop liefern detaillierte Aufschlüsse über die genaue Verteilung von Methan- und Stickstoffeis sowie die thermischen Eigenschaften der Oberfläche.",
      },
    ],

    slug: "makemake",
  },
  {
    id: 14,
    name: "Eris",
    type: "Zwergplanet",
    category: "dwarf-planets",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Zwergplanet mit einem dichten, felsigen Kern (ca. 85 % des Gesamtvolumens), der von einem dicken Mantel aus Wassereis umgeben ist; die Oberfläche ist von einer extrem hellen, hochgradig reflektierenden Schicht aus gefrorenem Methan und Stickstoff bedeckt",
    diameter_km: "ca. 2.326",
    mass_kg: "1,66 x 10^22 kg",
    gravity_m_s2: "0,82 m/s²",
    escape_velocity_km_s: "1,38 km/s",

    distance_from_sun_km: "10,120 Milliarden (Schnitt)",
    perihelion_km: "5,723 Milliarden",
    aphelion_km: "14,594 Milliarden",
    orbital_period_days: "203.830 Erdtage (ca. 558 Erdjahre)",
    rotation_period: "25,9 Stunden",
    axial_tilt_degrees:
      "Keine genauen Daten (Orbit ist extrem stark um 44° zur Ekliptik geneigt)",

    atmosphere: [
      { gas: "Stickstoff", percentage: 90.0 },
      { gas: "Methan", percentage: 10.0 },
    ],

    average_temperature_celsius: -243,
    temperature_range: "Min: -246°C / Max: -232°C",

    numberOfMoons: 1,
    moonNames: ["Dysnomia"],

    missions: [
      {
        name: "Keine (bisher nur erdgebundene/weltraumgestützte Beobachtungen)",
        year: 2026,
        description:
          "Eris wurde noch nie von einer Raumsonde besucht oder aus der Nähe fotografiert. Aufgrund der extremen Entfernung stammt unser gesamtes Wissen über den Zwergplaneten aus Analysen mit leistungsstarken Teleskopen wie Keck, Hubble und dem James-Webb-Weltraumteleskop.",
      },
    ],

    displayImageUrl: "/explore/solar-system/dwarf-planets/eris/Icon.webp",
    description:
      "Eris ist der massereichste bekannte Zwergplanet des Sonnensystems und ein eisiger, extrem weit entfernter Körper, dessen Entdeckung im Jahr 2005 die wissenschaftliche Definition von Planeten grundlegend veränderte.",
    detailedDescription:
      "Eris zieht seine Bahnen in der sogenannten 'gestreuten Scheibe' (Scattered Disc), einer Region weit jenseits des Kuipergürtels. Obwohl er geringfügig kleiner ist als Pluto, besitzt er rund 28 % mehr Masse, was ihn zum massereichsten bekannten Zwergplaneten unseres Sonnensystems macht. Seine Oberfläche ist von Natur aus spektakulär: Sie gehört zu den am stärksten reflektierenden (albedostärksten) Oberflächen im gesamten Sonnensystem. Grund dafür ist eine blendend weiße, extrem saubere Schicht aus gefrorenem Methan- und Stickstoffeis, die fast das gesamte einfallende Sonnenlicht zurückwirft. Diese Eisschicht verhält sich wie ein dynamischer Frostmantel. Wenn Eris auf seiner stark elliptischen und um 44° zur Erdbahn geneigten Umlaufbahn die maximale Sonnenferne (Aphel) erreicht, friert die gesamte Atmosphäre vollständig aus und legt sich als frischer Schnee auf den Boden. Eris besitzt einen relativ großen, felsigen Kern, der von einer Eishülle umgeben ist. Begleitet wird er von seinem einzigen bekannten Mond Dysnomia, durch dessen Umlaufbahn die Masse von Eris überhaupt erst exakt berechnet werden konnte.",
    timeline: [
      {
        year: "2005",
        event:
          "Ein Astronomenteam um Mike Brown, Chad Trujillo und David Rabinowitz entdeckt das Objekt auf Aufnahmen aus dem Jahr 2003 und gibt ihm den inoffiziellen Arbeitstitel 'Xena'.",
      },
      {
        year: "2006",
        event:
          "Da Eris schwerer als Pluto ist, bricht eine Debatte über den Planetenstatus aus. Die IAU beschließt eine neue Definition, degradiert Pluto und stufter Eris offiziell als Zwergplaneten ein. Er erhält den Namen der griechischen Göttin der Zwietracht.",
      },
      {
        year: "2010",
        event:
          "Astronomen nutzen eine seltene Sternbedeckung, um die Größe von Eris präzise zu messen. Überraschend stellt sich heraus, dass Eris minimal kleiner, aber deutlich dichter und kompakter als Pluto ist.",
      },
      {
        year: "2016",
        event:
          "Untersuchungen mit dem Atacama Large Millimeter/submillimeter Array (ALMA) und dem Hubble-Weltraumteleskop ermöglichen die erste genaue Bestimmung der Masse von Eris und der Größe seines Mondes Dysnomia.",
      },
      {
        year: "2023-2026",
        event:
          "Neue Daten des James-Webb-Weltraumteleskops zeigen komplexe Isotopen-Verhältnisse im Methaneis der Oberfläche, was auf geologische Prozesse oder sogar hydrothermale Aktivität im Inneren hindeuten könnte.",
      },
    ],

    slug: "eris",
  },
  {
    id: 15,
    name: "Kuipergürtel",
    type: "Asteroidengürtel",
    category: "asteroid-belts",

    age: "ca. 4,5 Milliarden Jahre",
    composition:
      "Eine gigantische Ringregion bestehend aus Millionen von eisigen Himmelskörpern (KBOs - Kuiper Belt Objects), Überresten aus der Entstehungsphase des Sonnensystems; die Objekte bestehen hauptsächlich aus gefrorenem Wasser, Ammoniak und Methan, gemischt mit Gestein und organischen Tholinen",
    diameter_km:
      "Breite: ca. 3,0 Milliarden bis 7,5 Milliarden km (von ca. 30 bis 50 AE Sonnenentfernung)",
    mass_kg:
      "ca. 6 x 10^22 bis 2 x 10^23 kg (Gesamtmasse aller Objekte zusammen entspricht nur etwa 1 % bis 3 % der Erdmasse)",

    distance_from_sun_km:
      "4,488 Milliarden bis 7,480 Milliarden (ca. 30 bis 50 AE Sonnenentfernung)",
    perihelion_km: "ca. 4,488 Milliarden (Innerer Rand nahe der Neptunbahn)",
    aphelion_km: "ca. 7,480 Milliarden (Äußerer Rand der Hauptpopulation)",

    average_temperature_celsius: -223,
    temperature_range: "Min: -240°C / Max: -210°C",

    missions: [
      {
        name: "Pioneer 10",
        year: 1983,
        description:
          "Als erste Raumsonde überhaupt überquerte Pioneer 10 im Juni 1983 die Umlaufbahn von Neptun und trat damit als erstes menschengemachtes Objekt rein theoretisch in den Bereich des Kuipergürtels ein (obwohl dieser damals noch nicht offiziell bestätigt war).",
      },
      {
        name: "Voyager 1",
        year: 1989,
        description:
          "Passierte nach ihrem Vorbeiflug an Saturn im Jahr 1980 schließlich 1989 die Distanz der Neptunbahn und durchquerte die Ebene des Kuipergürtels weit oberhalb der Ekliptik auf ihrem Weg aus dem Sonnensystem.",
      },
      {
        name: "Voyager 2",
        year: 1989,
        description:
          "Flog im August 1989 extrem nah an Neptun und dessen Mond Triton vorbei. Da Triton vermutlich ein eingefangenes Objekt aus dem Kuipergürtel (KBO) ist, lieferte Voyager 2 die historisch ersten Nahaufnahmen eines Körpers mit Kuipergürtel-Ursprung.",
      },
      {
        name: "New Horizons",
        year: 2015,
        description:
          "Die erste Mission, die gezielt zur Erforschung des Kuipergürtels geschickt wurde. Im Juli 2015 führte sie den historischen, ersten Vorbeiflug am Zwergplaneten Pluto und seinen Monden durch und lieferte revolutionäre Daten.",
      },
      {
        name: "New Horizons (Extended Mission)",
        year: 2019,
        description:
          "Am 1. Januar 2019 flog die Sonde erfolgreich an (486958) Arrokoth (ehemals Ultima Thule) vorbei. Dies ist bis heute das am weitesten entfernte Objekt, das jemals von einer Raumsonde aus nächster Nähe besucht und fotografiert wurde.",
      },
    ],

    displayImageUrl:
      "/explore/solar-system/asteroid-belts/kuiper-belt/Icon.webp",
    description:
      "Der Kuipergürtel ist eine ringförmige, gigantische Trümmerregion aus Eis- und Gesteinskörpern am kalten Rand unseres Sonnensystems, die sich weit jenseits der Umlaufbahn von Neptun erstreckt.",
    detailedDescription:
      "Der Kuipergürtel (oft auch Edgeworth-Kuiper-Gürtel genannt) ist eine der größten Strukturen in unserem Sonnensystem. Er beginnt direkt hinter der Bahn des Planeten Neptun bei etwa 30 Astronomischen Einheiten (AE) und reicht in seiner Hauptkonzentration bis zu einer Entfernung von rund 50 AE von der Sonne. Diese Region ist die Heimat von Millionen eisiger Überreste, die aus der turbulenten Entstehungsphase des Sonnensystems vor rund 4,5 Milliarden Jahren übrig geblieben sind. Die dortigen Objekte, bekannt als Kuiper Belt Objects (KBOs), variieren in ihrer Größe von winzigen Staub- und Eiskörnern über kometenähnliche Brocken bis hin zu massiven Zwergplaneten wie Pluto, Haumea und Makemake. Aufgrund der extremen Sonnenferne herrschen im Kuipergürtel Temperaturen nahe dem absoluten Nullpunkt, weshalb die Himmelskörper als tiefgefrorene 'Zeitkapseln' gelten, die Aufschluss über die Ur-Materie unseres Planetensystems geben können. Darüber hinaus gilt der Kuipergürtel als die primäre Geburtsstätte für die meisten kurzperiodischen Kometen, die gelegentlich durch gravitative Störungen mit Neptun in das innere Sonnensystem abgelenkt werden.",
    timeline: [
      {
        year: "1930",
        event:
          "Clyde Tombaugh entdeckt Pluto. Obwohl damals noch nicht bekannt, war Pluto das erste entdeckte Objekt des Kuipergürtels.",
      },
      {
        year: "1943 / 1951",
        event:
          "Kenneth Edgeworth und unabhängig davon Gerard Kuiper postulieren theoretisch, dass jenseits von Neptun eine Region voller kleinerer Eis- und Kometenkörper existieren müsste, da das Sonnensystem dort nicht abrupt enden könne.",
      },
      {
        year: "1992",
        event:
          "Die Astronomen David Jewitt und Jane Luu entdecken nach jahrelanger Suche mit dem Objekt (15760) Albion (zunächst bekannt als 1992 QB1) den ersten direkten Beweis für die Existenz des Kuipergürtels.",
      },
      {
        year: "2000-2005",
        event:
          "Eine Welle von Entdeckungen großer KBOs (darunter Quaoar, Sedna, Haumea, Makemake und der Zwergplanet Eris) revolutioniert unser Verständnis des äußeren Sonnensystems und führt schließlich zur Neudefinition von Planeten.",
      },
      {
        year: "2015",
        event:
          "Die NASA-Sonde New Horizons fliegt an Pluto vorbei und liefert die allerersten hochauflösenden Aufnahmen und geologischen Profile eines großen Kuipergürtel-Objekts.",
      },
      {
        year: "2019",
        event:
          "New Horizons fliegt an dem kleinen Planetesimal Arrokoth vorbei. Die Daten zeigen einen unberührten, aus zwei Teilen verschmolzenen Körper - ein Meilenstein für das Verständnis der Planetenentstehung.",
      },
    ],

    slug: "kuiper-belt",
  },
];
