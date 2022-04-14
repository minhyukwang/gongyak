import type { NextPage } from "next";
import Link from "next/link";
import FloatingButton from "../components/floating-button";
import Layout from "../components/layout";
import { useState } from "react";
import { cls } from "../libs/utils";
import TimeLine from "../components/timeline";

const List: NextPage = () => {
  const [status, setStatus] = useState<"doing" | "done">("doing");
  const onDoingClick = () => setStatus("doing");
  const onDoneClick = () => setStatus("done");
  return (
    <Layout hasTabBar title="">
      <div className="mt-8 grid w-full grid-cols-2">
        <button
          className={cls(
            "border-b-2 pb-4 text-sm font-medium",
            status === "doing"
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
            status === "done"
              ? " border-slate-500 text-slate-800"
              : "border-transparent text-gray-500 hover:text-gray-400"
          )}
          onClick={onDoneClick}
        >
          완료된 공약
        </button>
      </div>
      <div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((_, i) => (
            <TimeLine
              id={i}
              key={i}
              title="뿌뿌"
              content={"일주일 동안 매일 물 400ml 마시기"}
              userId={"@bboo.oodd"}
              comment={"new🎉"}
              hearts={1}
              status={status}
            />
          ))}
        </div>
      </div>
      <FloatingButton href="/timelines/write">
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
