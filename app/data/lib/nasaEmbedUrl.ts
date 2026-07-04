export function getYoutubeEmbedUrl(url: string) {
  const videoId = url.split("/").pop()?.split("?")[0];
  return `${url}&autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}`;
}
