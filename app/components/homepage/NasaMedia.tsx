import { NasaData } from "@/lib/nasaData";
import { getYoutubeEmbedUrl } from "@/lib/nasaEmbedUrl";
import Image from "next/image";

export default function NasaMedia({ data }: { data: NasaData }) {
  const isDirectVideo =
    data.media_type === "video" && data.url.endsWith(".mp4");

  if (data.media_type === "image") {
    return (
      <Image
        src={data.url}
        alt={data.title}
        className="object-cover"
        fill
        loading="eager"
      />
    );
  }

  if (isDirectVideo) {
    return (
      <video
        src={data.url}
        width={500}
        height={500}
        className="object-cover pointer-events-none select-none"
        muted
        autoPlay
        loop
      />
    );
  }

  return (
    <iframe
      src={getYoutubeEmbedUrl(data.url)}
      width={500}
      height={500}
      className="object-cover pointer-events-none select-none"
      allow="autoplay"
    />
  );
}
