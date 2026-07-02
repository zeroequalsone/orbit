export const googleMapsUrl = (coordinates: string) => {
  const url = new URL("https://www.google.com/maps");
  url.searchParams.set("q", coordinates);
  return url.toString();
};
