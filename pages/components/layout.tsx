import React from "react";
import Link from "next/link";
import { cls } from '../libs/utils';
import { useRouter } from "next/router";
import Head from "next/head";
import Image from 'next/image'

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
  seoTitle?:string;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
  seoTitle
}: LayoutProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <Head>
        <title>{seoTitle} | Pledge </title>
      </Head>
      {/* 상단 왼쪽 image 넣기 
          오르쪽 상단 글쓰기 버튼 image 넣기 
          오른쪽 채팅 버튼 image 넣기 
      */}
      <div className={cls(
          !canGoBack ? "" : "",
          "bg-white w-full h-12 max-w-xl text-lg px-2 font-medium fixed text-gray-800  flex items-center")}>
        {!canGoBack ? (
          <div className="-mt-7">
          <button onClick={onClick} className="absolute right-14">
          <svg className="w-7 h-7" 
          fill="none" 
          stroke="currentColor"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round"
             strokeLinejoin="round" 
             strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </button>
          <button onClick={onClick} className="absolute right-4">
            <svg 
            transform="rotate(45)"
            className="w-6 h-6" 
            fill="none" 
            stroke="navy" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg">
              <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8">
                </path>
                </svg>
          </button>
          </div>
        ) : null}    
        {canGoBack ? (
          <button onClick={onClick} className="absolute left-4">
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
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
        ) : null}
        {title ? (
          <span className={cls(canGoBack ? "mx-auto" : "", "")}>{title === "pledge"? (
          <div className="mt-2"><Image
          src="/pledge.png"
          alt="Picture of the author"
          width={90}
          height={40}
        /></div>) : title}</span>
        ) : null}
      </div>
      <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white max-w-xl text-gray-700 border-t fixed bottom-0 w-full px-10 pb-5 pt-3 flex justify-between text-xs">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/"
                  ? "text-green-600"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              {/* <span>홈</span> */}
            </a>
          </Link>
          <Link href="/community">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/community"
                  ? "text-green-600"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
             <svg 
             className="w-6 h-6" 
             fill="none" 
             stroke="currentColor" 
             viewBox="0 0 24 24" 
             xmlns="http://www.w3.org/2000/svg">
               <path 
               strokeLinecap="round" 
               strokeLinejoin="round" 
               strokeWidth="2" 
               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                 </path>
                 </svg>
              {/* <span>검색</span> */}
            </a>
          </Link>
          <Link href="/chats">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/chats"
                  ? "text-green-600"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
              <svg
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                  </path>
                  </svg>
             {/*  <span>공약리스트</span> */}
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile"
                  ? "text-green-600"
                  : "hover:text-gray-500 transition-colors"
              )}
            >
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
             {/*  <span>나의 모종</span> */}
            </a>
          </Link>
        </nav>
      ) : null}
    </div>
  );
}