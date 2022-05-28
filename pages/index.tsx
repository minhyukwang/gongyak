import type { NextPage } from "next";
import FloatingButton from "./components/floating-button";
import TimeLine from "./components/timeline";
import Layout from "./components/layout";

const Home: NextPage = () => {
  return (
    <Layout hasTitle hasTabBar hasHeader>
      <div className="pt-12">
        <div className="mt-4 flex items-center justify-center ">
          <div className="h-10 w-10 rounded-full bg-slate-500 ring ring-slate-800 ring-offset-2 " />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <div className="h-24 w-80 rounded-md bg-slate-800 ">
            <div className="ml-[140px] -mt-2 h-2 w-2 border-t-[8px] border-b-[6px] border-r-[16px] border-t-transparent border-b-transparent border-r-slate-800 "></div>
            <div className="flex flex-col items-center justify-center -space-y-1">
              {[1, 1, 1, 1].map((_, i) => (
                <p className="text-m font-['Helvetica'] text-slate-200" key="i">
                  한글 글씨체 적용되는걸로 해야 됨
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 ">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <TimeLine
              id={i}
              key={i}
              title="뿌뿌"
              content={"일주일 동안 매일 물 400ml 마시기"}
              userId={"@bboo.oodd"}
              comment={"new🎉"}
              hearts={1}
              path={"timelines"}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
