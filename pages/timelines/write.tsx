import type { NextPage } from "next";
import Button from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import TextArea from "../components/textarea";
import Link from "next/link";

const Write: NextPage = () => {
  return (
    <Layout canGoBack hasShare>
      <div className="mt-4 ml-8 flex">
        <div className="h-10 w-10 rounded-full bg-slate-500 ring ring-slate-800 ring-offset-2 " />
        <div className="flex flex-col -space-y-1">
          <span className="ml-4 text-lg font-bold text-slate-800">미내기</span>
          <span className="ml-4 text-xs text-slate-400">@minaek</span>
        </div>
      </div>
      <div className="mt-4 ml-8 space-y-4">
        <p>
          <span className="text-md font-bold text-slate-800">일주일 동안</span>{" "}
          <span className="text-md font-bold text-slate-800">중식 안먹기</span>
          <span className="text-sm text-slate-400">를 도전합니다!</span>
        </p>
      </div>
      <div className="ml-8 mt-3 w-5/6 rounded-xl border-4 border-dashed p-3">
        <p>
          <span className="text-md font-bold text-slate-800">시작일</span>{" "}
          <span className="text-xs text-slate-400">2022년 03월 19일</span>
        </p>
        <p>
          <span className="text-md font-bold text-slate-800">종료일</span>{" "}
          <span className="text-xs text-slate-400">2022년 03월 25일</span>
        </p>
      </div>
      <div className="ml-8 mt-3">
        <span className="text-xs text-slate-400">함께할 사람</span>{" "}
      </div>
      <div className="ml-7 mt-3 flex">
        <Link href={`/pictures/${1}`}>
          <div className="ml-1 mt-1 h-8 w-8 cursor-pointer rounded-full bg-slate-400">
            <div className="ml-2 mt-2 h-4 w-4 bg-slate-200">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="4 4 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
          </div>
        </Link>
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
      </div>
    </Layout>
  );
};

export default Write;
