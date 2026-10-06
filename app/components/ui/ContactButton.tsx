"use client";
import Link from "next/link";
import { useState } from "react";

export default function CopyEmailLink() {
  const email = "goetze.seb@gmail.com";
  const [copied, setCopied] = useState(false);

  function handleClick() {
    if (copied) return;
    navigator.clipboard?.writeText(email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Link
      href={`mailto:${email}`}
      onClick={handleClick}
      aria-live="polite"
      className="text-sm text-white/80 transition-colors hover:text-white"
    >
      {copied ? "goetze.seb@gmail.com (kopiert)!" : "goetze.seb@gmail.com"}
    </Link>
  );
}
