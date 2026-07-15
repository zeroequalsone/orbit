import Link from "next/link";

type ToolButtonProps = {
  href: string;
  name: string;
};

export default function ToolButton({ href, name }: ToolButtonProps) {
  return (
    <Link
      href={`/tools/${href}`}
      className="hover:drop-shadow-sm hover:drop-shadow-white border-2 border-white rounded-full px-8 py-4 text-xl font-light"
    >
      {name}
    </Link>
  );
}
