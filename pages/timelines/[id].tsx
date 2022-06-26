import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import Link from "next/link";
import TextArea from "@components/textarea";
import { withRouter } from "next/router";

function TimeLineDetail({ router: { query } }) {
  return (
    //TODO: 진행중인 공약 , 완료된 공약, Route 처리
    <Layout canGoBack hasHeader="true">
      <div className="ml-8 flex pt-20">
        <Link href="/profile">
          <div className="h-10 w-10 cursor-pointer rounded-full bg-slate-500 ring ring-slate-800 ring-offset-2 " />
        </Link>
        <Link href="/profile">
          <div className="flex cursor-pointer flex-col -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">
              미내기
            </span>
            <span className="ml-4 text-xs text-slate-400">@minaek</span>
          </div>
        </Link>
        <div className="ml-[280px]">
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
      <div className="mt-4 ml-8 space-y-4">
        <p>
          <span className="text-md font-bold text-slate-800">
            일주일 동안 중식 안먹기
          </span>{" "}
          <span className="text-sm text-slate-400">를 달성했습니다 🎉</span>
        </p>
      </div>
      <div className="ml-8 mt-3">
        <p>
          <span className="text-md font-bold text-slate-800">시작일</span>{" "}
          <span className="text-xs text-slate-400">2022년 03월 19일</span>
        </p>
        <p>
          <span className="text-md font-bold text-slate-800">종료일</span>{" "}
          <span className="text-xs text-slate-400">2022년 03월 25일</span>
        </p>
      </div>
      <div className="ml-7 mr-7 mt-4 mb-16 columns-2">
        {[1, 2, 3, 4].map((_, i) => (
          <Link key={i} href={`/pictures/${i}`}>
            <a className="flex cursor-pointer pt-3">
              <div className="h-56 w-56 bg-slate-400"></div>
            </a>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-0 flex h-12 w-full max-w-xl items-center  justify-center bg-white px-2 pt-5 pb-10  text-lg font-medium text-gray-800">
        <div className="w-12">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </div>
        <div className="w-12">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <Link href={`/timelines/comment`}>
          <div className="w-12 cursor-pointer">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </div>
        </Link>
        <Link href={`/timelines/write`}>
          <div className="flex h-10 w-52 cursor-pointer items-center  justify-center rounded-md bg-slate-800">
            <span className="text-sm text-slate-200">이 공약 &nbsp;</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <form className="space-y-4 p-4"></form>
    </Layout>
  );
}
export default withRouter(TimeLineDetail);
