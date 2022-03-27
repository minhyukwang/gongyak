import type { NextPage } from "next";
import FloatingButton from "./components/floating-button";
import Item from "./components/item";
import Layout from "./components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="pledge" hasTabBar>
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 bg-slate-500 rounded-full" />
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-80 h-24 bg-slate-800 rounded-md ">
        
        <div className="ml-[140px] -mt-2 w-2 h-2 border-t-[8px] border-t-transparent border-b-[6px] border-b-transparent border-r-[16px] border-r-slate-800">
          </div>
        <div className="flex flex-col -space-y-1 items-center justify-center">
        {[1, 1, 1, 1].map((_, i) => (
          <p className="font-['Helvetica'] text-m text-slate-200" key="i">
            한글 글씨체 적용되는걸로 해야 됨
          </p>
        ))}
        </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item
            id={i}
            key={i}
            title="iPhone 14"
            price={99}
            comments={1}
            hearts={1}
          />
        ))}
        <FloatingButton href="/items/upload">
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