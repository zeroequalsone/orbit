"use client"
import { useState } from 'react';

export default function SolarSystem() {
    const planets = [
        {
            id: 1,
            name: "Merkur",
            diameter: 4879,
            lengthOfDay: 4222.6,
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
            funFact: "Ein Tag auf Merkur dauert 176 Erdtage - doppelt so lang wie sein ganzes Jahr.",
            imageUrl: "/planets/mercury/BG.webp",
            iconUrl: "/planets/mercury/Icon.webp",
            sectionOneUrl: "/planets/mercury/Section1.webp",
            sectionTwoUrl: "/planets/mercury/Section2.webp",
            sectionThreeUrl: "/planets/mercury/Section3.webp",
            sectionFourUrl: "/planets/mercury/Section4.webp",
            descriptionLong: "Der Merkur ist der innerste Planet unseres Sonnensystems und der Sonne am nächsten. Er ist ein kleiner, felsiger Planet mit extremen Temperaturschwankungen - tagsüber glühend heiß und nachts eisig kalt - und besitzt weder eine nennenswerte Atmosphäre noch Monde.",
            descriptionShort: "Merkur ist nach dem römischen Götterboten benannt.",
            planetType: "Gesteinsplanet",
            astronomicalUnit: 0.39,
        },
        {
            id: 2,
            name: "Venus",
            diameter: 12104,
            lengthOfDay: 2802.0,
            distanceFromSun: 108.2e6,
            axialTilt: 177.4,
            meanTemperature: 464,
            numberOfMoons: 0,
            ringSystem: false,
            atmosphere: [
                { gas: "Kohlendioxid", percentage: 96.5 },
                { gas: "Stickstoff", percentage: 3.5 },
                { gas: "Andere", percentage: 0 },
            ],
            funFact: "Der heißeste Planet, obwohl er nicht der sonnennächste ist. (über 460°C)",
            imageUrl: "/planets/venus/BG.webp",
            iconUrl: "/planets/venus/Icon.webp",
            sectionOneUrl: "/planets/venus/Section1.webp",
            sectionTwoUrl: "/planets/venus/Section2.webp",
            sectionThreeUrl: "/planets/venus/Section3.webp",
            sectionFourUrl: "/planets/venus/Section4.webp",
            descriptionLong: "Die Venus ist der zweite Planet von der Sonne aus gesehen und der hellste Planet am Nachthimmel. Sie ist der Erde in Größe und Aufbau ähnlich, besitzt jedoch eine dichte, giftige Atmosphäre, die einen extremen Treibhauseffekt verursacht und sie zum heißesten Planeten im Sonnensystem macht.",
            descriptionShort: "Venus ist nach der römischen Göttin der Liebe benannt.",
            planetType: "Gesteinsplanet",
            astronomicalUnit: 0.72,
        },
        {
            id: 3,
            name: "Erde",
            diameter: 12756,
            lengthOfDay: 24.0,
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
            descriptionLong: "Die Erde ist der dritte Planet von der Sonne und der einzige bekannte Planet, auf dem Leben existiert. Sie ist ein felsiger Planet mit einer schützenden Atmosphäre, großen Ozeanen aus flüssigem Wasser und einem Mond, der Gezeiten erzeugt und die Erdachse stabilisiert.",
            descriptionShort: "Erde stammt aus dem Althochdeutschen.",
            planetType: "Gesteinsplanet",
            astronomicalUnit: 1,
        },
        {
            id: 4,
            name: "Mars",
            diameter: 6792,
            lengthOfDay: 24.7,
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
            descriptionLong: "Der Mars ist der vierte Planet von der Sonne aus gesehen und wird wegen seiner rötlichen Oberfläche auch der \"Rote Planet\" genannt. Er ist kleiner als die Erde, besitzt eine dünne Atmosphäre, gewaltige Vulkane und Schluchten und gilt als einer der vielversprechendsten Kandidaten für vergangenes Leben.",
            descriptionShort: "Mars ist nach dem römischen Kriegsgott benannt.",
            planetType: "Gesteinsplanet",
            astronomicalUnit: 1.5,
        },
        {
            id: 5,
            name: "Jupiter",
            diameter: 142984,
            lengthOfDay: 9.9,
            distanceFromSun: 778.6e6,
            axialTilt: 3.1,
            meanTemperature: -110,
            numberOfMoons: 97,
            ringSystem: true,
            atmosphere: [
                { gas: "Wasserstoff", percentage: 89.8 },
                { gas: "Helium", percentage: 10.2 },
                { gas: "Andere", percentage: 0 },
            ],
            funFact: "Sein roter Fleck ist ein Sturm, der größer als die Erde ist. (16.350 km)",
            imageUrl: "/planets/jupiter/BG.webp",
            iconUrl: "/planets/jupiter/Icon.webp",
            sectionOneUrl: "/planets/jupiter/Section1.webp",
            sectionTwoUrl: "/planets/jupiter/Section2.webp",
            sectionThreeUrl: "/planets/jupiter/Section3.webp",
            sectionFourUrl: "/planets/jupiter/Section4.webp",
            descriptionLong: "Der Jupiter ist der fünfte Planet von der Sonne aus gesehen und der größte im Sonnensystem. Er ist ein Riesenplanet mit einer Masse, die ein Tausendstel der Sonnenmasse beträgt, aber zweieinhalb Mal so groß ist wie die aller anderen Planeten im Sonnensystem zusammen.",
            descriptionShort: "Jupiter ist nach dem König der römischen Götter benannt.",
            planetType: "Gasriese",
            astronomicalUnit: 5.2,
        },
        {
            id: 6,
            name: "Saturn",
            diameter: 120536,
            lengthOfDay: 10.7,
            distanceFromSun: 1433.5e6,
            axialTilt: 26.7,
            meanTemperature: -140,
            numberOfMoons: 62,
            ringSystem: true,
            atmosphere: [
                { gas: "Wasserstoff", percentage: 96.3 },
                { gas: "Helium", percentage: 3.25 },
                { gas: "Andere", percentage: 0.45 },
            ],
            funFact: "Saturn würde oben schwimmen - gäbe es ein Meer, das groß genug ist.",
            imageUrl: "/planets/saturn/BG.webp",
            iconUrl: "/planets/saturn/Icon.webp",
            sectionOneUrl: "/planets/saturn/Section1.webp",
            sectionTwoUrl: "/planets/saturn/Section2.webp",
            sectionThreeUrl: "/planets/saturn/Section3.webp",
            sectionFourUrl: "/planets/saturn/Section4.webp",
            descriptionLong: "Der Saturn ist der sechste Planet von der Sonne und bekannt für sein beeindruckendes Ringsystem. Er ist ein Gasriese mit geringer Dichte, sodass er theoretisch auf Wasser schwimmen könnte, und besitzt zahlreiche Monde, darunter einige mit unterirdischen Ozeanen.",
            descriptionShort: "Saturn ist nach dem römischen Gott der Landwirtschaft benannt.",
            planetType: "Gasriese",
            astronomicalUnit: 9.5,
        },
        {
            id: 7,
            name: "Uranus",
            diameter: 51118,
            lengthOfDay: 17.2,
            distanceFromSun: 2872.5e6,
            axialTilt: 97.8,
            meanTemperature: -195,
            numberOfMoons: 27,
            ringSystem: true,
            atmosphere: [
                { gas: "Wasserstoff", percentage: 82.5 },
                { gas: "Helium", percentage: 15.2 },
                { gas: "Methan", percentage: 2.3 },
                { gas: "Andere", percentage: 0 },
            ],
            funFact: "Er rollt durchs All. Seine Achse ist um 98° gekippt.",
            imageUrl: "/planets/uranus/BG.webp",
            iconUrl: "/planets/uranus/Icon.webp",
            sectionOneUrl: "/planets/uranus/Section1.webp",
            sectionTwoUrl: "/planets/uranus/Section2.webp",
            sectionThreeUrl: "/planets/uranus/Section3.webp",
            sectionFourUrl: "/planets/uranus/Section4.webp",
            descriptionLong: "Der Uranus, der siebte Planet von der Sonne, gehört zu den Eisriesen und zeichnet sich durch eine auffällige bläulich-grüne Farbe aus. Besonders bemerkenswert ist seine stark gekippte Rotationsachse, wodurch der Planet fast \"seitwärts\" rotiert und außergewöhnlich extreme, langanhaltende Jahreszeiten durchlebt.",
            descriptionShort: "Uranus ist nach dem griechischen Himmelsgott benannt.",
            planetType: "Eisriese",
            astronomicalUnit: 19.2,
        },
        {
            id: 8,
            name: "Neptun",
            diameter: 49528,
            lengthOfDay: 16.1,
            distanceFromSun: 4495.1e6,
            axialTilt: 28.3,
            meanTemperature: -200,
            numberOfMoons: 14,
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
            descriptionLong: "Der Neptun ist der äußerste Planet unseres Sonnensystems und steht an achter Stelle von der Sonne. Dieser tiefblaue Eisriese beeindruckt mit den stärksten Winden aller Planeten, die enorme Geschwindigkeiten erreichen. Für einen Umlauf um die Sonne benötigt er über 160 Jahre, was seine Bahn besonders lang macht.",
            descriptionShort: "Neptun ist nach dem römischen Meeresgott benannt.",
            planetType: "Eisriese",
            astronomicalUnit: 30.1,
        },
    ]

    const [planetId, selectPlanetId] = useState<number>(3)
    const selectedPlanet = planets.find(p => p.id === planetId)

    return (
        <div className={`text-white min-h-screen scroll-smooth`} >
            <section className={`min-h-screen bg-center bg-cover flex flex-col justify-center items-center`} style={{ backgroundImage: `url("${selectedPlanet?.imageUrl}")` }}>
                <div key={selectedPlanet?.id} className="flex flex-col gap-40 max-w-4/5 mt-40 p-8">
                    <div className="flex justify-center items-center">
                        <div className='max-w-3/4'>
                            <h1 className="text-[11rem] font-extrabold uppercase tracking-widest text-center">{selectedPlanet?.name}</h1>
                            <h2 className="text-2xl text-center w-full">{selectedPlanet?.descriptionLong}</h2>
                        </div>
                    </div>
                    <div className="flex gap-32">
                        <div>
                            <p className="font-bold uppercase">Tageslänge</p>
                            <p className="text-4xl font-light">{selectedPlanet?.lengthOfDay.toLocaleString("de")} Stunden</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">Durchmesser</p>
                            <p className="text-4xl font-light">{selectedPlanet?.diameter.toLocaleString("de")} km</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">Monde</p>
                            <p className="text-4xl font-light">{selectedPlanet?.numberOfMoons} bestätigte</p>
                        </div>
                        <div>
                            <p className="font-bold uppercase">Planet Typ</p>
                            <p className="text-4xl font-light">{selectedPlanet?.planetType}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex justify-center items-center flex-col">
                <div>
                    <div className="flex gap-24">
                        {[...planets].reverse().map((planet) => (
                            <div key={planet.id} className={`flex flex-col gap-6 text-center ${planetId === planet.id ? "text-white" : "text-neutral-400"}`}>
                                <p className="text-sm">{planet.astronomicalUnit} AE</p>
                                <svg onClick={() => selectPlanetId(planet.id)} className={`w-20 h-20 border-2 rounded-full mb-16 mt-16 cursor-pointer`} />
                                <p className="font-bold">{planet.name}</p>
                                <p className="text-sm">{planet.numberOfMoons} Monde</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm mt-28 text-neutral-400">AE (Astronomische Einheit) — die Distanz der Erde zur Sonne.</p>
                </div>
            </section>
            <section className="min-h-screen bg-center bg-cover flex justify-center items-center w-full" style={{ backgroundImage: `url('${selectedPlanet?.sectionOneUrl}')` }}>
                <div className='flex max-w-4/5 gap-14'>
                    <div>
                        <p className="text-[15rem] font-medium leading-44 bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]" style={{ backgroundImage: `url('${selectedPlanet?.sectionOneUrl}')` }}>01</p>
                    </div>
                    <div className='flex flex-col gap-14'>
                        <p className="text-7xl font-bold uppercase tracking-widest border-t-2 w-28 pt-14">Übersicht</p>
                        <p className='max-w-1/3'>{selectedPlanet?.descriptionLong}</p>
                        <p className='max-w-1/3'>{selectedPlanet?.descriptionShort}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}