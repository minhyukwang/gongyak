import { cls } from "../libs/client/utils";
import Link from "next/link";

interface SearchBarProps {
  [key: string]: any;
  to: string;
}

export default function SearchBar({ to, ...rest }: SearchBarProps) {
  return (
    <Link href={to === undefined ? "" : to}>
      <div className="flex">
        <div className="ml-6 w-4/5">
          <div className="h-10 w-full cursor-pointer rounded-md border-2 border-slate-500 hover:border-slate-800"></div>
        </div>
        <button className="ml-2">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </Link>
  );
}
