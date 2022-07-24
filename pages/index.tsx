import type { NextPage } from "next";
import FloatingButton from "@components/floating-button";
import TimeLine from "@components/timeline";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import Head from "next/head";

const Home: NextPage = () => {
  const { user, isLoading } = useUser();

  console.log(user);
  return (
    <Layout hasTitle hasTabBar hasHeader>
      <Head>
        <title>Home</title>
      </Head>
      <div className="pt-12">
        <div className="mt-4 flex items-center justify-center ">
          <div className="h-10 w-10 rounded-full bg-slate-500 ring ring-slate-800 ring-offset-2 " />
        </div>
        <div className="mt-4 flex items-center justify-center">
          <div className="h-24 w-80 rounded-md bg-slate-800 ">
            <div className="ml-[140px] -mt-2 h-2 w-2 border-t-[8px] border-b-[6px] border-r-[16px] border-t-transparent border-b-transparent border-r-slate-800 "></div>
            {/* <div className="flex flex-col items-center justify-center -space-y-1">
              {[1, 2, 3, 4].map((_, i) => (
                <p className="text-m font-['Helvetica'] text-slate-200" key="i">
                  한글 글씨체 적용되는걸로 해야 됨
                </p>
              ))}
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col space-y-5 ">
          {[1, 2, 3, 4].map((_, i) => (
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
        </div> */}
        <FloatingButton href="/pledges/upload">
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
      </div>
    </Layout>
  );
};

export default Home;
