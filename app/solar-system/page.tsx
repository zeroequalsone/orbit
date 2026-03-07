"use client"
import { useState } from "react"

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
            imageUrl: "/planets/merkur/BG.png",
            iconUrl: "",
            description: "Der Merkur ist der innerste Planet unseres Sonnensystems und der Sonne am nächsten. Er ist ein kleiner, felsiger Planet mit extremen Temperaturschwankungen - tagsüber glühend heiß und nachts eisig kalt - und besitzt weder eine nennenswerte Atmosphäre noch Monde.",
            planetType: "Gesteinsplanet",
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
            imageUrl: "/planets/venus/BG.png",
            iconUrl: "",
            description: "Die Venus ist der zweite Planet von der Sonne aus gesehen und der hellste Planet am Nachthimmel. Sie ist der Erde in Größe und Aufbau ähnlich, besitzt jedoch eine dichte, giftige Atmosphäre, die einen extremen Treibhauseffekt verursacht und sie zum heißesten Planeten im Sonnensystem macht.",
            planetType: "Gesteinsplanet",
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
            imageUrl: "/planets/erde/BG.png",
            iconUrl: "",
            description: "Die Erde ist der dritte Planet von der Sonne und der einzige bekannte Planet, auf dem Leben existiert. Sie ist ein felsiger Planet mit einer schützenden Atmosphäre, großen Ozeanen aus flüssigem Wasser und einem Mond, der Gezeiten erzeugt und die Erdachse stabilisiert.",
            planetType: "Gesteinsplanet",
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
            imageUrl: "/planets/mars/BG.png",
            iconUrl: "",
            description: "Der Mars ist der vierte Planet von der Sonne aus gesehen und wird wegen seiner rötlichen Oberfläche auch der „Rote Planet“ genannt. Er ist kleiner als die Erde, besitzt eine dünne Atmosphäre, gewaltige Vulkane und Schluchten und gilt als einer der vielversprechendsten Kandidaten für vergangenes Leben.",
            planetType: "Gesteinsplanet",
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
            imageUrl: "/planets/jupiter/BG.png",
            iconUrl: "",
            description: "Der Jupiter ist der fünfte Planet von der Sonne aus gesehen und der größte im Sonnensystem. Er ist ein Riesenplanet mit einer Masse, die ein Tausendstel der Sonnenmasse beträgt, aber zweieinhalb Mal so groß ist wie die aller anderen Planeten im Sonnensystem zusammen.",
            planetType: "Gasriese",
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
            imageUrl: "/planets/saturn/BG.png",
            iconUrl: "",
            description: "Der Saturn ist der sechste Planet von der Sonne und bekannt für sein beeindruckendes Ringsystem. Er ist ein Gasriese mit geringer Dichte, sodass er theoretisch auf Wasser schwimmen könnte, und besitzt zahlreiche Monde, darunter einige mit unterirdischen Ozeanen.",
            planetType: "Gasriese",
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
            imageUrl: "/planets/uranus/BG.png",
            iconUrl: "",
            description: "Der Uranus ist der siebte Planet von der Sonne aus gesehen und ein Eisriese mit bläulich-grüner Färbung. Seine Besonderheit ist die stark geneigte Rotationsachse, wodurch er gewissermaßen \"auf der Seite\" rotiert und extreme Jahreszeiten erlebt.",
            planetType: "Eisriese",
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
            imageUrl: "/planets/neptun/BG.png",
            iconUrl: "",
            description: "Der Neptun ist der achte und äußerste bekannte Planet unseres Sonnensystems. Er ist ein tiefblauer Eisriese mit den stärksten Winden im Sonnensystem und benötigt mehr als 160 Jahre für einen einzigen Umlauf um die Sonne.",
            planetType: "Eisriese",
        },
    ]

    const [planetId, selectPlanetId] = useState<number>(1)
    const selectedPlanet = planets.find(p => p.id === planetId)

    return (
        <div className={`text-white min-h-screen bg-[url("/planets/BG.png")] bg-center bg-cover`}>
            <section className={`min-h-screen bg-center bg-cover flex flex-col justify-center items-center`} style={{ backgroundImage: `url("${selectedPlanet?.imageUrl}")` }}>
                {selectedPlanet && (
                    <div key={selectedPlanet.id} className="flex flex-col gap-40 max-w-4/5 mt-40 p-8">
                        <div className="flex justify-center items-center">
                            <div>
                                <h1 className="text-[11rem] font-extrabold uppercase tracking-widest">{selectedPlanet.name}</h1>
                                <h2 className="text-2xl max-w-3/4">{selectedPlanet.description}</h2>
                            </div>
                        </div>
                        <div className="flex gap-32">
                            <div>
                                <h3 className="font-bold uppercase">Tageslänge</h3>
                                <h4 className="text-4xl font-light">{selectedPlanet.lengthOfDay.toLocaleString("de")} Stunden</h4>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">Durchmesser</h3>
                                <h4 className="text-4xl font-light">{selectedPlanet.diameter.toLocaleString("de")} km</h4>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">Monde</h3>
                                <h4 className="text-4xl font-light">{selectedPlanet.numberOfMoons} bestätigte</h4>
                            </div>
                            <div>
                                <h3 className="font-bold uppercase">Planet Typ</h3>
                                <h4 className="text-4xl font-light">{selectedPlanet.planetType}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <section>

            </section>
        </div>
    )
}