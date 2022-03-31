import { NextPage } from 'next';
import Layout from "../components/layout";
import Link from "next/link";

const Write: NextPage = () => {
    return (
        <Layout canGoBack>
        <div className="space-y-1">
        {[1, 2, 3, 4].map((_, i) => (
        <Link key={i} href={`/community/${i}`}>
            <a className="flex cursor-pointer flex-col pt-4 pl-2 items-start">
              <div className="mt-2 px-4 flex flex-row text-slate-800">
                <div className="w-9 h-9 bg-slate-400 rounded-full border-2 border-dashed border-slate-700"></div>
                <span className="mt-1 ml-2 font-bold text-slate-800">Jazzer</span>                    
                <span className="mt-2.5 ml-1 text-xs text-slate-400">님 의</span>
                <span className="mt-1 ml-1.5 font-medium">매일 피아노 연습하기</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
    )
};

export default Write;

