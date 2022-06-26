import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@components/layout";
import SearchBar from "@components/search-bar";

const Search: NextPage = () => {
  return (
    <Layout hasTabBar>
      <div className="pt-6">
        <SearchBar to="/search/search" />
        <div className="-mt-3 ml-1 -space-y-4 pt-12 text-lg">
          {[1, 2, 3, 4].map((_, i) => (
            <Link key={i} href="/search/tag">
              <a className="flex cursor-pointer flex-col items-start pt-4">
                <div className="mt-2 flex flex-row px-4 text-slate-800">
                  <span className="mt-1 ml-1.5 font-medium">
                    일주일 동안 새벽 6시에 일어나기
                  </span>
                  <span className="mt-2.5 ml-1 text-xs text-slate-400">
                    hot 🔥
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div className="ml-7 mr-7 mt-4 columns-2">
          {[1, 2, 3, 4].map((_, i) => (
            <Link key={i} href={`/search/${i}`}>
              <a className="flex cursor-pointer pt-3">
                <div className="h-52 w-52 bg-slate-400"></div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
