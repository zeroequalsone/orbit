export type NasaData = {
  title: string;
  explanation: string;
  media_type: string;
  url: string;
};

export async function getNasaData(): Promise<NasaData> {
  const res = await fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic", {
    next: { revalidate: 3600 },
  });

  // ERROR HANDLING
  if (!res.ok) {
    switch (res.status) {
      case 400:
        throw new Error(
          "Ungültige Anfrage (400) - diese Koordinaten existieren (noch) nicht im Universum.",
        );
      case 401:
        throw new Error(
          "Zugriff verweigert (401) - ohne gültige Berechtigung kein Zugang zum Kontrollzentrum.",
        );
      case 403:
        throw new Error(
          "Keine Berechtigung (403) - diese Sternenregion ist für deine Mission nicht freigegeben.",
        );
      case 404:
        throw new Error(
          "Nicht gefunden (404) - dieses Himmelsobjekt konnte im kosmischen Netz nicht lokalisiert werden.",
        );
      case 500:
        throw new Error(
          "Bordcomputer-Fehler (500) - ein unerwarteter Störimpuls hat das System beeinträchtigt.",
        );
      default:
        throw new Error(
          "Unbekannter Fehler - das Signal wurde von einem schwarzen Loch verschluckt.",
        );
    }
  }

  const data = await res.json();

  return {
    title: data[0].title,
    explanation: data[0].explanation,
    media_type: data[0].media_type,
    url: data[0].hdurl,
  };
}
