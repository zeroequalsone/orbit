export type NasaData = {
  title: string;
  explanation: string;
  media_type: string;
  url: string;
};

const APOD_URL = "https://science.nasa.gov/wp-json/wp/v2/apod-basic";

export async function getNasaData(): Promise<NasaData> {
  const res = await fetch(APOD_URL, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(
      `Das Bild des Tages konnte nicht geladen werden (Status ${res.status}).`,
    );
  }

  const data = await res.json();
  const apod = data?.[0];

  if (!apod) {
    throw new Error("NASA hat kein Bild des Tages geliefert.");
  }

  return {
    title: apod.title,
    explanation: apod.explanation,
    media_type: apod.media_type,
    url: apod.hdurl,
  };
}
