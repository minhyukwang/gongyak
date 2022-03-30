import { NextPage } from 'next';
import Button from "../components/button";
import Layout from "../components/layout";

const Write: NextPage = () => {
    return (
        <Layout canGoBack>
            <div className="space-y-4">
        <div className="w-20 float-right mr-4">
        <Button text="완료" />
        </div>
        <div>
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full" />
        </div>
        <div>
        <span className="ml-4 font-medium text-lg">일주일 동안 중식 안 먹기</span>
        <span className="ml-1 text-sm text-slate-600">를 도전합니다!</span>
        </div>
        <div>
        <span className="ml-4 mr-2 font-medium text-lg">시작일</span>
        <span className="text-slate-600">2022년 03월 24일</span>
        </div>
        <div>
        <span className="ml-4 mr-2 font-medium text-lg">종료일</span>
        <span className="text-slate-600">2022년 03월 30일</span>
        </div>
        <div className="flew flew-col">
        <span className="text-sm ml-4 mt-2 font-medium text-slate-400">
                함께 할 사람
              </span>
        <div className="mt-2 flex flex-row">
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full">+</div>
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full" />
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full" />
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full" />
        <div className="w-14 h-14 ml-4 bg-slate-500 rounded-full" />
        </div>
        </div>
        </div>
{/*       <form className="p-4 space-y-4">
        <TextArea required placeholder="Ask a question!" />
      </form> */}
    </Layout>
    )
};

export default Write;
