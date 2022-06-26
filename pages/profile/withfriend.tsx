import { NextPage } from "next";
import Layout from "@components/layout";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="mt-4 ml-3">
        <div className="flex flex-row">
          <div className="ml-4 h-14 w-14 rounded-full bg-slate-400" />

          <div className="mt-2 flex flex-col -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">연이</span>
            <span className="ml-4 text-xs text-slate-400">@yunny</span>
          </div>
        </div>
        <div className="mt-8">
          <span className="ml-4 text-lg font-medium">매일 밤 독서</span>
          <span className="ml-1 text-sm text-slate-600">를 제안하였습니다</span>
        </div>
        <div className="mt-8">
          <span className="ml-4 mr-2 text-lg font-medium">시작일</span>
          <span className="text-slate-600">2022년 04월 01일</span>
        </div>
        <div>
          <span className="ml-4 mr-2 text-lg font-medium">종료일</span>
          <span className="text-slate-600">2022년 05월 01일</span>
        </div>
        <div className="mt-10 flex flex-row justify-around">
          <div className="flew flew-col">
            <span className="ml-2 mt-2 text-sm font-medium text-slate-400">
              수락
            </span>
            <svg
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="flew flew-col">
            <span className="ml-2 mt-2 text-sm font-medium text-slate-400">
              거절
            </span>
            <svg
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Write;
