import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link href={href}>
      <a className="fixed hover:bg-slate-800 border-0 aspect-square border-transparent transition-colors cursor-pointer  bottom-20 right-56 shadow-xl bg-slate-700 rounded-full w-12 flex items-center justify-center text-white">
        {children}
      </a>
    </Link>
  );
}