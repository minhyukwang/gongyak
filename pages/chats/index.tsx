import type {NextPage} from "next";
import Layout from "../components/layout";
import Link from "next/link";
import FloatingButton from "../components/floating-button";

const Chats: NextPage = () => {
    return (
      <Layout hasTabBar title="채팅">
      <div className="divide-y-[1px] ">
            {[1,1,1,1,1,1,1].map((_, i) => (
                    <Link href={`/chats/${i}`} key={i}>
                    <a className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-green-100" />
                      <div>
                        <p className="text-gray-700">Steve Jebs</p>
                        <p className="text-sm  text-gray-500">
                          See you tomorrow in the corner at 2pm!
                        </p>
                      </div>
                    </a>
                  </Link>
            ))}
        </div>;
        <FloatingButton href="/community/write">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </FloatingButton>
        </Layout>
    )
};

export default Chats;