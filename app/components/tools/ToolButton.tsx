import Link from "next/link";

type ToolButtonProps = {
  href: string;
  name: string;
};

export default function ToolButton({ href, name }: ToolButtonProps) {
  return (
    <Link
      href={`/tools/${href}`}
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 active:-translate-y-1 active:border-white/20 active:bg-white/10"
    >
      <span className="text-sm font-medium uppercase tracking-widest text-white/80 transition-colors group-hover:text-white group-active:text-white">
        {name}
      </span>
      <span
        aria-hidden
        className="text-white/50 transition-all group-hover:translate-x-0.5 group-hover:text-white group-active:translate-x-0.5 group-active:text-white"
      >
        →
      </span>
    </Link>
  );
}
