export type Planet = {
  id: number;
  name: string;
  diameter: number;
  lengthOfDay: number;
  lengthOfYear: number;
  distanceFromSun: number;
  axialTilt: number;
  meanTemperature: number;
  numberOfMoons: number;
  ringSystem: boolean;
  atmosphere: { gas: string; percentage: number }[];
  funFact: string;
  imageUrl: string;
  iconUrl: string;
  sectionOneUrl: string;
  sectionTwoUrl: string;
  sectionThreeUrl: string;
  sectionFourUrl: string;
  descriptionLong: string;
  descriptionShort: string;
  inDepthDescription: string;
  featureDescription: string;
  featureTitle: string;
  featureInfo: string;
  planetType: "Gesteinsplanet" | "Gasriese" | "Eisriese" | "Stern";
  astronomicalUnit: number;
  quickFacts1: string;
  quickFacts2: string;
  quickFacts3: string;
};

export const planets: Planet[] = [
  {
    id: 0,
    name: "Sonne",
    diameter: 1392700,
    lengthOfDay: 609.6,
    lengthOfYear: 0,
    distanceFromSun: 0,
    axialTilt: 7.25,
    meanTemperature: 5500,
    numberOfMoons: 0,
    ringSystem: false,
    atmosphere: [
      { gas: "Wasserstoff", percentage: 73.46 },
      { gas: "Helium", percentage: 24.85 },
      { gas: "Sauerstoff", percentage: 0.77 },
      { gas: "Kohlenstoff", percentage: 0.29 },
      { gas: "Eisen", percentage: 0.16 },
    ],
    funFact:
      "Die Sonne macht 99,86 % der gesamten Masse unseres Sonnensystems aus.",
    imageUrl: "/planets/sun/BG.webp",
    iconUrl: "/planets/sun/Icon.webp",
    sectionOneUrl: "/planets/sun/Section1.webp",
    sectionTwoUrl: "/planets/sun/Section2.webp",
    sectionThreeUrl: "/planets/sun/Section3.webp",
    sectionFourUrl: "/planets/sun/Section4.webp",
    descriptionLong:
      "Die Sonne ist das Herzstück unseres Sonnensystems. Dieser gelbe Zwergstern liefert durch Kernfusion in seinem Inneren die Energie, die das Leben auf der Erde ermöglicht. Ihre gewaltige Schwerkraft hält alle Planeten auf ihren Umlaufbahnen.",
    descriptionShort:
      "Die Sonne ist ein fast perfekter Ball aus heißem Plasma.",
    inDepthDescription:
      "Im Kern der Sonne herrschen Temperaturen von etwa 15 Millionen °C. Dort wird pro Sekunde 600 Millionen Tonnen Wasserstoff in Helium umgewandelt. Diese Energie benötigt Tausende von Jahren, um an die Oberfläche zu gelangen.",
    featureDescription:
      "Die Sonne ist die primäre Energiequelle für unser gesamtes Sonnensystem.",
    featureTitle: "KERNFUSION",
    featureInfo:
      "In ihrem Inneren verschmilzt die Sonne Wasserstoff zu Helium. Dieser Prozess setzt gigantische Mengen an Energie in Form von Licht und Wärme frei, die nach etwa 8 Minuten und 20 Sekunden die Erde erreichen.",
    planetType: "Stern",
    astronomicalUnit: 0.0,
    quickFacts1:
      "Licht benötigt etwa 8 Minuten und 20 Sekunden, um von der Sonne zur Erde zu gelangen.",
    quickFacts2:
      "Über eine Million Erden würden in das Innere der Sonne passen.",
    quickFacts3:
      "Die Sonne verliert pro Sekunde etwa 4 Millionen Tonnen an Masse durch Energieabstrahlung.",
  },
  {
    id: 1,
    name: "Merkur",
    diameter: 4879.0,
    lengthOfDay: 4222.6,
    lengthOfYear: 88.0,
    distanceFromSun: 57.9e6,
    axialTilt: 0.01,
    meanTemperature: 167,
    numberOfMoons: 0,
    ringSystem: false,
    atmosphere: [
      { gas: "Sauerstoff", percentage: 42 },
      { gas: "Natrium", percentage: 29 },
      { gas: "Wasserstoff", percentage: 22 },
      { gas: "Helium", percentage: 6 },
      { gas: "Andere", percentage: 1 },
    ],
    funFact:
      "Ein Tag auf Merkur dauert 176 Erdtage - doppelt so lang wie sein ganzes Jahr.",
    imageUrl: "/planets/mercury/BG.webp",
    iconUrl: "/planets/mercury/Icon.webp",
    sectionOneUrl: "/planets/mercury/Section1.webp",
    sectionTwoUrl: "/planets/mercury/Section2.webp",
    sectionThreeUrl: "/planets/mercury/Section3.webp",
    sectionFourUrl: "/planets/mercury/Section4.webp",
    descriptionLong:
      "Der Merkur ist der innerste Planet unseres Sonnensystems und der Sonne am nächsten. Er ist ein kleiner, felsiger Planet mit extremen Temperaturschwankungen - tagsüber glühend heiß und nachts eisig kalt - und besitzt weder eine nennenswerte Atmosphäre noch Monde.",
    descriptionShort: "Merkur ist nach dem römischen Götterboten benannt.",
    inDepthDescription:
      "Die Umweltbedingungen auf dem Merkur sind für Leben, wie wir es kennen, nicht geeignet. Extreme Temperaturschwankungen, intensive Sonneneinstrahlung und das Fehlen einer stabilen Atmosphäre machen es unwahrscheinlich, dass Organismen dort überleben könnten.",
    featureDescription:
      "Der Merkur ist der innerste Planet unseres Sonnensystems und der Sonne am nächsten.",
    featureTitle: "EXTREME TEMPERATUREN",
    featureInfo:
      "Auf dem Merkur herrschen extreme Temperaturschwankungen, da der Planet praktisch keine schützende Atmosphäre besitzt. Tagsüber können über 400 °C erreicht werden, während die Temperaturen nachts auf etwa -180 °C fallen. Diese Unterschiede gehören zu den größten im gesamten Sonnensystem.",
    planetType: "Gesteinsplanet",
    astronomicalUnit: 0.39,
    quickFacts1:
      "Extreme Temperaturschwankungen von über 600 °C zwischen Tag und Nacht.",
    quickFacts2:
      "Kein nennenswertes Magnetfeld - Sonnenwinde treffen direkt auf die Oberfläche.",
    quickFacts3:
      "Ein Tag dauert doppelt so lang wie ein Merkur-Jahr (176 Erdtage).",
  },
  {
    id: 2,
    name: "Venus",
    diameter: 12104.0,
    lengthOfDay: 2802.0,
    lengthOfYear: 224.7,
    distanceFromSun: 108.2e6,
    axialTilt: 177.4,
    meanTemperature: 464,
    numberOfMoons: 0,
    ringSystem: false,
    atmosphere: [
      { gas: "Kohlendioxid", percentage: 96.5 },
      { gas: "Stickstoff", percentage: 3.4 },
      { gas: "Andere", percentage: 0.1 },
    ],
    funFact:
      "Der heißeste Planet, obwohl er nicht der sonnennächste ist. (über 460°C)",
    imageUrl: "/planets/venus/BG.webp",
    iconUrl: "/planets/venus/Icon.webp",
    sectionOneUrl: "/planets/venus/Section1.webp",
    sectionTwoUrl: "/planets/venus/Section2.webp",
    sectionThreeUrl: "/planets/venus/Section3.webp",
    sectionFourUrl: "/planets/venus/Section4.webp",
    descriptionLong:
      "Die Venus ist der zweite Planet von der Sonne aus gesehen und der hellste Planet am Nachthimmel. Sie ist der Erde in Größe und Aufbau ähnlich, besitzt jedoch eine dichte, giftige Atmosphäre, die einen extremen Treibhauseffekt verursacht und sie zum heißesten Planeten im Sonnensystem macht.",
    descriptionShort: "Venus ist nach der römischen Göttin der Liebe benannt.",
    inDepthDescription:
      "Die Umweltbedingungen auf der Venus sind wahrscheinlich nicht geeignet für Leben, wie wir es kennen. Die extreme Hitze, der enorme atmosphärische Druck und die ätzenden Wolken schaffen Bedingungen, die für Organismen viel zu rau sind, als dass sie sich daran anpassen könnten.",
    featureDescription:
      "Die Venus ist der zweite Planet von der Sonne aus gesehen und der hellste Planet am Nachthimmel.",
    featureTitle: "RUNAWAY-TREIBHAUSEFFEKT",
    featureInfo:
      "Die Venus besitzt eine dichte Atmosphäre aus Kohlendioxid, die einen extremen Treibhauseffekt verursacht. Dadurch wird Wärme nahezu vollständig eingeschlossen, was zu Oberflächentemperaturen von über 460 °C führt. Selbst Merkur, der näher an der Sonne ist, bleibt deutlich kälter.",
    planetType: "Gesteinsplanet",
    astronomicalUnit: 0.72,
    quickFacts1:
      "Oberflächentemperaturen von rund 464 °C - heißer als Merkur durch extremen Treibhauseffekt.",
    quickFacts2:
      "Dichte Atmosphäre aus Kohlendioxid mit Schwefelsäurewolken erzeugt enormen Druck.",
    quickFacts3:
      "Ein Tag dauert länger als ein Venus-Jahr (243 vs. 225 Erdtage).",
  },
  {
    id: 3,
    name: "Erde",
    diameter: 12756.0,
    lengthOfDay: 24.0,
    lengthOfYear: 365.25,
    distanceFromSun: 149.6e6,
    axialTilt: 23.4,
    meanTemperature: 15,
    numberOfMoons: 1,
    ringSystem: false,
    atmosphere: [
      { gas: "Stickstoff", percentage: 78.08 },
      { gas: "Sauerstoff", percentage: 20.95 },
      { gas: "Andere", percentage: 0.97 },
    ],
    funFact: "Der einzig bekannte Ort mit Leben. (Hier lebst du. 👀)",
    imageUrl: "/planets/earth/BG.webp",
    iconUrl: "/planets/earth/Icon.webp",
    sectionOneUrl: "/planets/earth/Section1.webp",
    sectionTwoUrl: "/planets/earth/Section2.webp",
    sectionThreeUrl: "/planets/earth/Section3.webp",
    sectionFourUrl: "/planets/earth/Section4.webp",
    descriptionLong:
      "Die Erde ist der dritte Planet von der Sonne und der einzige bekannte Planet, auf dem Leben existiert. Sie ist ein felsiger Planet mit einer schützenden Atmosphäre, großen Ozeanen aus flüssigem Wasser und einem Mond, der Gezeiten erzeugt und die Erdachse stabilisiert.",
    descriptionShort: "Erde stammt aus dem Althochdeutschen.",
    inDepthDescription:
      "Die Atmosphäre der Erde ist bestens geeignet, um Leben, wie wir es kennen, zu ermöglichen. Dank ihrer gemäßigten Temperaturen, ihrer schützenden Atmosphäre und des reichlichen Vorkommens von flüssigem Wasser können sich dort vielfältige Organismen entfalten.",
    featureDescription:
      "Die Erde ist der dritte Planet von der Sonne und der einzige bekannte Planet, auf dem Leben existiert.",
    featureTitle: "FLÜSSIGES WASSER",
    featureInfo:
      "Die Erde ist der einzige bekannte Planet mit stabilen großen Mengen flüssigen Wassers an der Oberfläche. Dieses Wasser bedeckt etwa 70 % des Planeten und spielt eine entscheidende Rolle für Klima, Wetter und Leben. Es ermöglicht komplexe Ökosysteme und eine außergewöhnliche Vielfalt an Lebensformen.",
    planetType: "Gesteinsplanet",
    astronomicalUnit: 1.0,
    quickFacts1:
      "Durchschnittstemperatur von etwa 15 °C - ideal für flüssiges Wasser.",
    quickFacts2:
      "Starkes Magnetfeld schützt vor schädlicher kosmischer Strahlung.",
    quickFacts3: "Ein Tag dauert 24 Stunden, ein Jahr 365,25 Tage.",
  },
  {
    id: 4,
    name: "Mars",
    diameter: 6792.0,
    lengthOfDay: 24.7,
    lengthOfYear: 687.0,
    distanceFromSun: 227.9e6,
    axialTilt: 25.2,
    meanTemperature: -65,
    numberOfMoons: 2,
    ringSystem: false,
    atmosphere: [
      { gas: "Kohlendioxid", percentage: 95.3 },
      { gas: "Stickstoff", percentage: 2.7 },
      { gas: "Argon", percentage: 1.6 },
      { gas: "Andere", percentage: 0.4 },
    ],
    funFact: "Der höchste Berg des Sonnensystems. (22 km - 3x Mount Everest)",
    imageUrl: "/planets/mars/BG.webp",
    iconUrl: "/planets/mars/Icon.webp",
    sectionOneUrl: "/planets/mars/Section1.webp",
    sectionTwoUrl: "/planets/mars/Section2.webp",
    sectionThreeUrl: "/planets/mars/Section3.webp",
    sectionFourUrl: "/planets/mars/Section4.webp",
    descriptionLong:
      'Der Mars ist der vierte Planet von der Sonne aus gesehen und wird wegen seiner rötlichen Oberfläche auch der "Rote Planet" genannt. Er ist kleiner als die Erde, besitzt eine dünne Atmosphäre, gewaltige Vulkane und Schluchten und gilt als einer der vielversprechendsten Kandidaten für vergangenes Leben.',
    descriptionShort: "Mars ist nach dem römischen Kriegsgott benannt.",
    inDepthDescription:
      "Die Umweltbedingungen auf dem Mars sind wahrscheinlich nicht förderlich für Leben, wie wir es kennen. Die kalten Temperaturen, die dünne Atmosphäre und die hohe Strahlenbelastung erschweren den meisten bekannten Organismen das Überleben.",
    featureDescription:
      'Der Mars ist der vierte Planet von der Sonne aus gesehen und wird wegen seiner rötlichen Oberfläche auch der "Rote Planet" genannt.',
    featureTitle: "OLYMPUS MONS",
    featureInfo:
      "Der Olympus Mons auf dem Mars ist der größte Vulkan im gesamten Sonnensystem. Mit einer Höhe von etwa 22 Kilometern überragt er selbst die höchsten Berge der Erde deutlich. Seine enorme Größe ist auf die geringe Schwerkraft und fehlende Plattentektonik des Mars zurückzuführen.",
    planetType: "Gesteinsplanet",
    astronomicalUnit: 1.52,
    quickFacts1:
      "Durchschnittstemperaturen um -65 °C, mit starken Schwankungen.",
    quickFacts2:
      "Dünne Atmosphäre bietet kaum Schutz vor Strahlung und Meteoroiden.",
    quickFacts3: "Ein Tag dauert 24,7 Stunden, ein Jahr 687 Erdtage.",
  },
  {
    id: 5,
    name: "Jupiter",
    diameter: 142984.0,
    lengthOfDay: 9.9,
    lengthOfYear: 4332.6,
    distanceFromSun: 778.6e6,
    axialTilt: 3.1,
    meanTemperature: -110,
    numberOfMoons: 115,
    ringSystem: true,
    atmosphere: [
      { gas: "Wasserstoff", percentage: 89.8 },
      { gas: "Helium", percentage: 10.2 },
      { gas: "Andere", percentage: 0 },
    ],
    funFact:
      "Sein roter Fleck ist ein Sturm, der größer als die Erde ist. (16.350 km)",
    imageUrl: "/planets/jupiter/BG.webp",
    iconUrl: "/planets/jupiter/Icon.webp",
    sectionOneUrl: "/planets/jupiter/Section1.webp",
    sectionTwoUrl: "/planets/jupiter/Section2.webp",
    sectionThreeUrl: "/planets/jupiter/Section3.webp",
    sectionFourUrl: "/planets/jupiter/Section4.webp",
    descriptionLong:
      "Der Jupiter ist der fünfte Planet von der Sonne aus gesehen und der größte im Sonnensystem. Er ist ein Riesenplanet mit einer Masse, die ein Tausendstel der Sonnenmasse beträgt, aber zweieinhalb Mal so groß ist wie die aller anderen Planeten im Sonnensystem zusammen.",
    descriptionShort:
      "Jupiter ist nach dem König der römischen Götter benannt.",
    inDepthDescription:
      "Die Umgebungsbedingungen auf dem Jupiter sind wahrscheinlich nicht förderlich für Leben, wie wir es kennen. Die Temperaturen, der Druck und die dort vorkommenden Stoffe sind höchstwahrscheinlich zu extrem und unbeständig, als dass sich Organismen daran anpassen könnten.",
    featureDescription:
      "Der Jupiter ist der fünfte Planet von der Sonne aus gesehen und der größte im Sonnensystem.",
    featureTitle: "GROßER ROTER FLECK",
    featureInfo:
      "Der Große Rote Fleck auf Jupiter ist ein gewaltiger Sturm, der seit über 300 Jahren beobachtet wird. Er ist so groß, dass die Erde problemlos hineinpassen würde, und rotiert gegen den Uhrzeigersinn. Trotz seiner langen Existenz verändert er ständig Form, Farbe und Intensität.",
    planetType: "Gasriese",
    astronomicalUnit: 5.2,
    quickFacts1: "Temperaturen von etwa -145 °C in den Wolkenobergrenzen.",
    quickFacts2:
      "Stärkstes Magnetfeld im Sonnensystem und gewaltige Stürme wie der Große Rote Fleck.",
    quickFacts3:
      "Ein Tag dauert nur etwa 10 Stunden, ein Jahr knapp 12 Erdenjahre.",
  },
  {
    id: 6,
    name: "Saturn",
    diameter: 120536.0,
    lengthOfDay: 10.7,
    lengthOfYear: 10759.2,
    distanceFromSun: 1433.5e6,
    axialTilt: 26.7,
    meanTemperature: -140,
    numberOfMoons: 292,
    ringSystem: true,
    atmosphere: [
      { gas: "Wasserstoff", percentage: 96.3 },
      { gas: "Helium", percentage: 3.25 },
      { gas: "Andere", percentage: 0.45 },
    ],
    funFact:
      "Saturn würde oben schwimmen - gäbe es ein Meer, das groß genug ist.",
    imageUrl: "/planets/saturn/BG.webp",
    iconUrl: "/planets/saturn/Icon.webp",
    sectionOneUrl: "/planets/saturn/Section1.webp",
    sectionTwoUrl: "/planets/saturn/Section2.webp",
    sectionThreeUrl: "/planets/saturn/Section3.webp",
    sectionFourUrl: "/planets/saturn/Section4.webp",
    descriptionLong:
      "Der Saturn ist der sechste Planet von der Sonne und bekannt für sein beeindruckendes Ringsystem. Er ist ein Gasriese mit geringer Dichte, sodass er theoretisch auf Wasser schwimmen könnte, und besitzt zahlreiche Monde, darunter einige mit unterirdischen Ozeanen.",
    descriptionShort:
      "Saturn ist nach dem römischen Gott der Landwirtschaft benannt.",
    inDepthDescription:
      "Die Umgebungsbedingungen auf dem Saturn sind für Leben, wie wir es kennen, nicht geeignet. Da es dort keine feste Oberfläche gibt und zudem extremer Druck sowie turbulente atmosphärische Bedingungen herrschen, ist es unwahrscheinlich, dass dort Lebewesen existieren könnten.",
    featureDescription:
      "Der Saturn ist der sechste Planet von der Sonne und bekannt für sein beeindruckendes Ringsystem.",
    featureTitle: "RINGSTRUKTUR",
    featureInfo:
      "Das Ringsystem des Saturns besteht aus Milliarden von Eis- und Gesteinspartikeln, die den Planeten in mehreren klar abgegrenzten Bändern umkreisen. Diese Ringe variieren stark in Dichte und Breite und zählen zu den auffälligsten Strukturen im gesamten Sonnensystem.",
    planetType: "Gasriese",
    astronomicalUnit: 9.58,
    quickFacts1: "Temperaturen um -180 °C in der oberen Atmosphäre.",
    quickFacts2:
      "Bekannt für sein ausgeprägtes Ringsystem aus Eis und Gestein.",
    quickFacts3:
      "Ein Tag dauert etwa 10,7 Stunden, ein Jahr rund 29,5 Erdenjahre.",
  },
  {
    id: 7,
    name: "Uranus",
    diameter: 51118.0,
    lengthOfDay: 17.2,
    lengthOfYear: 30687.0,
    distanceFromSun: 2872.5e6,
    axialTilt: 97.8,
    meanTemperature: -195,
    numberOfMoons: 29,
    ringSystem: true,
    atmosphere: [
      { gas: "Wasserstoff", percentage: 82.5 },
      { gas: "Helium", percentage: 15.2 },
      { gas: "Methan", percentage: 2.3 },
      { gas: "Andere", percentage: 0 },
    ],
    funFact: "Er rollt durchs All. Seine Achse ist um 97.8° gekippt.",
    imageUrl: "/planets/uranus/BG.webp",
    iconUrl: "/planets/uranus/Icon.webp",
    sectionOneUrl: "/planets/uranus/Section1.webp",
    sectionTwoUrl: "/planets/uranus/Section2.webp",
    sectionThreeUrl: "/planets/uranus/Section3.webp",
    sectionFourUrl: "/planets/uranus/Section4.webp",
    descriptionLong:
      'Der Uranus, der siebte Planet von der Sonne, gehört zu den Eisriesen und zeichnet sich durch eine auffällige bläulich-grüne Farbe aus. Besonders bemerkenswert ist seine stark gekippte Rotationsachse, wodurch der Planet fast "seitwärts" rotiert und außergewöhnlich extreme, langanhaltende Jahreszeiten durchlebt.',
    descriptionShort: "Uranus ist nach dem griechischen Himmelsgott benannt.",
    inDepthDescription:
      "Die Umgebungsbedingungen auf Uranus sind wahrscheinlich nicht förderlich für Leben, wie wir es kennen. Die extrem niedrigen Temperaturen und die unter hohem Druck stehende, eisige Zusammensetzung schaffen Bedingungen, die für Organismen zu rau sind, als dass sie sich daran anpassen könnten.",
    featureDescription:
      "Der Uranus, der siebte Planet von der Sonne, gehört zu den Eisriesen und zeichnet sich durch eine auffällige bläulich-grüne Farbe aus.",
    featureTitle: "SEITLICHE ROTATION",
    featureInfo:
      "Uranus rotiert nahezu auf der Seite, da seine Achse um etwa 97,8° geneigt ist. Dadurch erlebt der Planet extreme Jahreszeiten, bei denen ein Pol über Jahrzehnte hinweg ständig von der Sonne beleuchtet wird, während der andere im Dunkeln liegt.",
    planetType: "Eisriese",
    astronomicalUnit: 19.21,
    quickFacts1:
      "Extrem kalte Temperaturen bis zu -224 °C - einer der kältesten Planeten.",
    quickFacts2:
      'Achse stark gekippt (97,8°), sodass er "auf der Seite" rotiert.',
    quickFacts3: "Ein Tag dauert etwa 17 Stunden, ein Jahr 84 Erdenjahre.",
  },
  {
    id: 8,
    name: "Neptun",
    diameter: 49528.0,
    lengthOfDay: 16.1,
    lengthOfYear: 60190.0,
    distanceFromSun: 4495.1e6,
    axialTilt: 28.3,
    meanTemperature: -200,
    numberOfMoons: 16,
    ringSystem: true,
    atmosphere: [
      { gas: "Wasserstoff", percentage: 79.5 },
      { gas: "Helium", percentage: 19 },
      { gas: "Methan", percentage: 1.5 },
      { gas: "Andere", percentage: 0 },
    ],
    funFact: "Die schnellsten Winde im Sonnensystem. (über 2000 km/h)",
    imageUrl: "/planets/neptune/BG.webp",
    iconUrl: "/planets/neptune/Icon.webp",
    sectionOneUrl: "/planets/neptune/Section1.webp",
    sectionTwoUrl: "/planets/neptune/Section2.webp",
    sectionThreeUrl: "/planets/neptune/Section3.webp",
    sectionFourUrl: "/planets/neptune/Section4.webp",
    descriptionLong:
      "Der Neptun ist der äußerste Planet unseres Sonnensystems und steht an achter Stelle von der Sonne. Dieser tiefblaue Eisriese beeindruckt mit den stärksten Winden aller Planeten, die enorme Geschwindigkeiten erreichen. Für einen Umlauf um die Sonne benötigt er über 160 Jahre, was seine Bahn besonders lang macht.",
    descriptionShort: "Neptun ist nach dem römischen Meeresgott benannt.",
    inDepthDescription:
      "Die Umweltbedingungen auf Neptun sind für Leben, wie wir es kennen, nicht geeignet. Die eisigen Temperaturen, die starken Winde und die extremen atmosphärischen Bedingungen sind wahrscheinlich zu unbeständig, als dass Organismen dort überleben könnten.",
    featureDescription:
      "Der Neptun ist der äußerste Planet unseres Sonnensystems und steht an achter Stelle von der Sonne.",
    featureTitle: "EXTREME WINDE",
    featureInfo:
      "Neptun besitzt die schnellsten Winde im Sonnensystem, die Geschwindigkeiten von über 2000 km/h erreichen können. Diese extremen Stürme entstehen trotz der großen Entfernung zur Sonne und führen zu dynamischen, sich ständig verändernden Wolkenstrukturen in seiner Atmosphäre.",
    planetType: "Eisriese",
    astronomicalUnit: 30.07,
    quickFacts1: "Temperaturen um -200 °C, trotz großer Entfernung zur Sonne.",
    quickFacts2:
      "Heftigste Winde im Sonnensystem mit Geschwindigkeiten über 2.000 km/h.",
    quickFacts3: "Ein Tag dauert etwa 16,1 Stunden, ein Jahr 164,9 Erdenjahre.",
  },
];
