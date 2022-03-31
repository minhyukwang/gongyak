import { NextPage } from 'next';
import Layout from "../components/layout";

const Write: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="mt-4 ml-3">
            <div className="flex flex-row">
        <div className="w-14 h-14 ml-4 bg-slate-400 rounded-full" />

        <div className="flex flex-col mt-2 -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">연이</span>
            <span className="ml-4 text-xs text-slate-400">@yunny</span>
        </div>
        </div>
        <div className="mt-8">
        <span className="ml-4 font-medium text-lg">매일 밤 독서</span>
        <span className="ml-1 text-sm text-slate-600">를 제안하였습니다</span>
        </div>
        <div className="mt-8">
        <span className="ml-4 mr-2 font-medium text-lg">시작일</span>
        <span className="text-slate-600">2022년 04월 01일</span>
        </div>
        <div>
        <span className="ml-4 mr-2 font-medium text-lg">종료일</span>
        <span className="text-slate-600">2022년 05월 01일</span>
        </div>
        <div className="flex flex-row justify-around mt-10">
        <div className="flew flew-col">
        <span className="text-sm ml-2 mt-2 font-medium text-slate-400">
                수락
            </span>
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>              
            </div>
            <div className="flew flew-col">
        <span className="text-sm ml-2 mt-2 font-medium text-slate-400">
                거절
            </span>
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"></path></svg>
            </div>
        </div>
        </div>
    </Layout>
    )
};

export default Write;
