import Link from "next/link";

export default function ToolBackButton() {
  return (
    <Link
      href={"/tools"}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white active:border-white/20 active:bg-white/10 active:text-white"
    >
      <span
        aria-hidden
        className="transition-transform group-hover:-translate-x-0.5 group-active:-translate-x-0.5"
      >
        ←
      </span>
      Zurück zu Tools
    </Link>
  );
}
