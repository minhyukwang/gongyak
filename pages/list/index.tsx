import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../components/floating-button";
import Layout from "../components/layout";
import { useState } from "react";
import { cls } from "../libs/utils";

const List: NextPage = () => {
    const [method, setMethod] = useState<"doing" | "done">("doing");
    const onDoingClick = () => setMethod("doing");
    const onDoneClick = () => setMethod("done");
    return (
    <Layout hasTabBar title="">
        <div className="grid w-full mt-8 grid-cols-2">
            <button
            className={cls(
                "pb-4 font-medium text-sm border-b-2",
                method === "doing"
                ? " border-slate-500 text-slate-800"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={onDoingClick}
            >
            진행중인 공약
            </button>
            <button
            className={cls(
                "pb-4 font-medium text-sm border-b-2",
                method === "done"
                ? " border-slate-500 text-slate-800"
                : "border-transparent hover:text-gray-400 text-gray-500"
            )}
            onClick={onDoneClick}
            >
            완료된 공약
            </button>   
            </div>     
        <div>
        {method === "doing" ? (
        <div className="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
        <Link key={i} href={`/community/${i}`}>
            <a className="flex cursor-pointer flex-col pt-4 items-start">
{/*               <span className="flex ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                동네질문
              </span> */}
              <div className="mt-2 px-4 flex flex-row text-slate-800">
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
                <span className="mt-1 ml-2 font-bold text-slate-800">인영</span>                    
                <span className="mt-2.5 ml-1 text-xs text-slate-400">님 과의</span>
                <span className="mt-1 ml-1.5 font-medium">약속에 늦지 않기</span>
              </div>
{/*               <div className="mt-5 px-4 flex items-center justify-between w-full text-gray-500 font-medium text-xs">
                <span>니꼬</span>
                <span>18시간 전</span>
              </div> */}
            </a>
          </Link>
        ))}
      </div>
          ) : null}
          {method === "done" ? (
        <div className="space-y-4">
        {[1, 2, 3, 4].map((_, i) => (
        <Link key={i} href={`/community/${i}`}>
            <a className="flex cursor-pointer flex-col pt-4 items-start">
              <div className="mt-2 px-4 flex flex-row text-slate-800">
                <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
                <span className="mt-1 ml-2 font-bold text-slate-800">미내기</span>                    
                <span className="mt-2.5 ml-1 text-xs text-slate-400">님 과의</span>
                <span className="mt-1 ml-1.5 font-medium">약속에 늦지 않기</span>
                <svg className="w-7 h-7 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
            </a>
          </Link>
        ))}
      </div>
          ) : null}
{/*           {method === "doing" ? <p>doing</p> : null}
          {method === "done" ? (<p>done</p>) : null} */}
        </div>
      <FloatingButton href="/community/write">
      <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
    </Layout>
  );
};

export default List;


