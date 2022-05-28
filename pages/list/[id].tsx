import type { NextPage } from "next";
import Button from "../components/button";
import Layout from "../components/layout";
import Link from "next/link";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-row pt-20">
        <div className="mt-4 ml-8 flex">
          <div className="h-11 w-11 rounded-full bg-slate-400 ring ring-slate-800 ring-offset-2 " />
          <div className="flex flex-col -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">
              미내기
            </span>
            <span className="ml-4 text-xs text-slate-400">@minaek</span>
          </div>
          <div className="ml-4">
            <svg
              className="h-11 w-11"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="mt-4 ml-20 flex">
          <div className="h-12 w-12 rounded-full bg-slate-400 " />
          <div className="flex flex-col -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">인영</span>
            <span className="ml-4 text-xs text-slate-400">@inyoung</span>
          </div>
          <div className="ml-4">
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-7 ml-4">
        <span className="ml-4 text-lg font-medium">약속에 늦지 않기</span>
        <span className="ml-0.5 text-sm text-slate-600">를 도전합니다!</span>
      </div>
      <div className="mt-4 ml-4">
        <span className="ml-4 mr-2 text-lg font-medium">시작일</span>
        <span className="text-slate-600">2022년 04월 02일</span>
      </div>
      <div className="ml-4">
        <span className="ml-4 mr-2 text-lg font-medium">종료일</span>
        <span className="text-slate-600">2022년 04월 02일</span>
      </div>
      <form className="ml-8 mt-6 space-y-4">
        <div className="mt-2">
          <label className="flex h-48 w-1/2 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-slate-600 hover:border-slate-800 hover:text-slate-500">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>
      </form>
      <div className="fixed bottom-0 mt-8 flex w-full justify-center gap-x-3 pl-10 pr-10 pb-2">
        <button>
          <svg
            className="h-10 w-10"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link href="/chats/1">
          <button>
            <svg
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
        <div className="w-1/2">
          <Button text="뭐하지??내용미정" />
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
