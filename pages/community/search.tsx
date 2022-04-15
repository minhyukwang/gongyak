import type { NextPage } from "next";
import Link from "next/link";
import TextArea from "../components/textarea";
import Layout from "../components/layout";

const Search: NextPage = () => {
  return (
    <Layout canGoBack hasHeader="false">
      <div className="flex">
        <div className="ml-6 w-4/5">
          <TextArea name="search" placeholder="" required />
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
      <div className="flew flew-col  mt-3">
        <span className="ml-6 text-sm font-medium text-slate-400">
          최근 검색
        </span>
      </div>
      <div className="mt-2 flex flex-row">
        <div className="ml-6 h-14 w-14 rounded-full bg-slate-400" />
        <div className="ml-6 h-14 w-14 rounded-full bg-slate-400" />
        <div className="ml-6 h-14 w-14 rounded-full bg-slate-400" />
      </div>
      <div className="-mt-3 ml-1 -space-y-4 text-lg">
        {[1, 2].map((_, i) => (
          <Link key={i} href={`/community/${i}`}>
            <a className="flex cursor-pointer flex-col items-start pt-4">
              <div className="mt-2 flex flex-row px-4 text-slate-800">
                <span className="mt-1 ml-1.5 font-medium">매일 러닝 하기</span>
                <span className="mt-2.5 ml-1 text-xs text-slate-400"></span>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="ml-7 mr-7 mt-4 columns-2">
        {[1, 2, 3, 4].map((_, i) => (
          <Link key={i} href={`/community/${i}`}>
            <a className="flex cursor-pointer pt-3">
              <div className="h-52 w-52 bg-slate-400"></div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Search;
