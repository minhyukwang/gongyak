import React from "react";
import Link from "next/link";
import { cls } from "../libs/client/utils";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Button from "./button";

interface LayoutProps {
  hasTitle?: boolean;
  hasTabBar?: boolean;
  hasHeader?: boolean;
  hasShare?: boolean;
  canGoBack?: boolean;
  children: React.ReactNode;
  seoTitle?: string;
}

export default function Layout({
  hasTitle,
  hasTabBar,
  hasHeader,
  hasShare,
  canGoBack,
  children,
  seoTitle,
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

      {/*
       ************************************HEADER************************************
       */}
      <div
        className={cls(
          !hasHeader && !canGoBack ? "hidden" : "",
          "fixed flex h-12 w-full max-w-xl items-center bg-white px-2 text-lg font-medium text-gray-800"
        )}
      >
        {/*
         ************************************채팅, 글쓰기 이미지 ************************************
         */}
        {!canGoBack ? (
          <div className="-mt-7 ">
            <Link href="/timelines/write">
              <button className="absolute right-14">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
            </Link>
            <Link href="/chats">
              <button className="absolute right-4 ">
                <svg
                  transform="rotate(45)"
                  className="h-6 w-6"
                  fill="none"
                  stroke="navy"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        ) : null}
        {canGoBack ? (
          <div>
            <button onClick={onClick} className="absolute left-4">
              <svg
                className="h-6 w-6"
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
            {hasShare ? (
              <div className="float-right ml-96 w-20">
                <Button text="공유" />
              </div>
            ) : null}
          </div>
        ) : null}

        {/*
         ************************************LOGO************************************
         */}
        {hasTitle ? (
          <span className={cls(canGoBack ? "mx-auto" : "", "")}>
            <div className="mt-2">
              <Image
                src="/pledge.png"
                alt="Picture of the author"
                width={90}
                height={40}
              />
            </div>
          </span>
        ) : null}
      </div>

      {/*
       ************************************TAB BAR************************************
       */}
      <div className={cls("", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="fixed bottom-0 flex w-full max-w-xl justify-between border-t bg-white px-10 pb-5 pt-3 text-xs text-gray-700">
          <Link href="/">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/"
                  ? "text-slate-900"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              <svg
                className="h-7 w-7"
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
            </a>
          </Link>
          <Link href="/search">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/search"
                  ? "text-slate-900"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              {/* <span>검색</span> */}
            </a>
          </Link>
          <Link href="/list">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/list"
                  ? "text-slate-900"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                ></path>
              </svg>
              {/*  <span>공약리스트</span> */}
            </a>
          </Link>
          <Link href="/profile">
            <a
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/profile"
                  ? "text-slate-900"
                  : "transition-colors hover:text-gray-500"
              )}
            >
              <svg
                className="h-7 w-7"
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
