import { NextPage } from "next";
import Layout from "../components/layout";
import Link from "next/link";

const Interested: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-1">
        {[1, 2, 3, 4].map((_, i) => (
          <Link key={i} href={`/search/${i}`}>
            <a className="flex cursor-pointer flex-col items-start pt-4 pl-2">
              <div className="mt-2 flex flex-row px-4 text-slate-800">
                <div className="h-9 w-9 rounded-full border-2 border-dashed border-slate-700 bg-slate-400"></div>
                <span className="mt-1 ml-2 font-bold text-slate-800">
                  Jazzer
                </span>
                <span className="mt-2.5 ml-1 text-xs text-slate-400">
                  님 의
                </span>
                <span className="mt-1 ml-1.5 font-medium">
                  매일 피아노 연습하기
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Interested;
