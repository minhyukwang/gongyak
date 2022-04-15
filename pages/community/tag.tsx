import type { NextPage } from "next";
import Link from "next/link";
import TextArea from "../components/textarea";
import Layout from "../components/layout";
import { useState } from "react";
import { cls } from "../libs/utils";

const Community: NextPage = () => {
  const [method, setMethod] = useState<"doing" | "done">("doing");
  const onDoingClick = () => setMethod("doing");
  const onDoneClick = () => setMethod("done");
  return (
    <Layout canGoBack>
      <div className="flex">
        <div className="ml-6 w-4/5">
          <TextArea
            name="search"
            placeholder="일주일 동안 새벽 6시에 일어나기"
            required
          />
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
      <div className="mt-3 grid w-full grid-cols-2">
        <button
          className={cls(
            "border-b-2 pb-4 text-sm font-medium",
            method === "doing"
              ? " border-slate-500 text-slate-800"
              : "border-transparent text-gray-500 hover:text-gray-400"
          )}
          onClick={onDoingClick}
        >
          진행중인 공약
        </button>
        <button
          className={cls(
            "border-b-2 pb-4 text-sm font-medium",
            method === "done"
              ? " border-slate-500 text-slate-800"
              : "border-transparent text-gray-500 hover:text-gray-400"
          )}
          onClick={onDoneClick}
        >
          완료된 공약
        </button>
      </div>
      <div>
        {method === "doing" ? (
          <div className="-mt-2 -space-y-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Link key={i} href={`/community/${i}`}>
                <a className="flex cursor-pointer flex-col items-start pt-4">
                  <div className="mt-2 flex flex-row px-4 text-slate-800">
                    <span className="mt-1 ml-1.5 font-medium">
                      새벽 6시에 일어나기
                    </span>
                    <span className="mt-2.5 ml-1 text-xs text-slate-400"></span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        ) : null}
        {method === "done" ? (
          <div className="-mt-2 -space-y-2">
            {[1, 2, 3, 4].map((_, i) => (
              <Link key={i} href={`/community/${i}`}>
                <a className="flex cursor-pointer flex-col items-start pt-4">
                  <div className="mt-2 flex flex-row px-4 text-slate-800">
                    <span className="mt-1 ml-1.5 font-medium">
                      일주일에 한번 새벽 6시에 일어나기
                    </span>
                    <span className="mt-2.5 ml-1 text-xs text-slate-400"></span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      <div className="ml-7 mr-7 mt-3 columns-2">
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

export default Community;
