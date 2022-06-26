import type { NextPage } from "next";
import TextArea from "@components/textarea";
import Layout from "@components/layout";

const Comment: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="ml-4 mt-3 flex">
        <svg
          className="h-10 w-10"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
        <div className="ml-1 mt-1 h-8 w-8 rounded-full bg-slate-400" />
      </div>
      <div className="mt-2 flex flex-col space-y-4">
        <div className="mt-4 flex">
          <div className="ml-6 h-11 w-11 rounded-full bg-slate-400" />
          <span className="mt-1.5 ml-2 text-lg font-bold text-slate-800">
            뿌뿌
          </span>
          <span className="mt-1 ml-2 text-lg font-medium">대단하다냥</span>
        </div>
        <div className="flex">
          <div className="ml-6 h-11 w-11 rounded-full bg-slate-400" />
          <span className="mt-1.5 ml-2 text-lg font-bold text-slate-800">
            윤이
          </span>
          <span className="mt-1 ml-2 text-lg font-medium">참~나</span>
        </div>
        <div className="mb-4 flex">
          <div className="ml-6 h-11 w-11 rounded-full bg-slate-400" />
          <span className="mt-1.5 ml-2 text-lg font-bold text-slate-800">
            인영
          </span>
          <span className="mt-1 ml-2 text-lg font-medium">홧팅!</span>
        </div>
      </div>
      <div className="fixed bottom-2 ml-4 flex">
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        <div className="ml-2 h-10 w-10 rounded-full bg-slate-400" />
        <div className="ml-2 w-80">
          <TextArea name="comment" placeholder="" required />
        </div>
        <svg
          className="mt-1.5 ml-2 h-9 w-9"
          transform="rotate (90)"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
        </svg>
      </div>
    </Layout>
  );
};

export default Comment;
