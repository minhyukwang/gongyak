import type { NextPage } from "next";
import Button from "../components/button";
import Input from "../components/input";
import Layout from "../components/layout";
import TextArea from "../components/textarea";

const Upload: NextPage = () => {
  return (
    <Layout canGoBack title="">
    <div className="mt-4 ml-8 flex">
        <div className="w-10 h-10 bg-slate-500 rounded-full ring ring-slate-800 ring-offset-2 " />
        <div className="flex flex-col -space-y-1">
            <span className="ml-4 text-lg font-bold text-slate-800">미내기</span>
            <span className="ml-4 text-xs text-slate-400">@minaek</span>
        </div>
        <div className="ml-[280px]">
        <svg className="w-10 h-10" 
             fill="none" 
             stroke="currentColor" 
             viewBox="0 0 24 24" 
             xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z">
        </path>
        <path strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth="2" 
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z">
        </path>
        </svg>
        </div>
    </div>
      <form className="p-4 space-y-4">
        <div>
          <label className="w-full cursor-pointer text-gray-600 hover:border-green-500 hover:text-green-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className="hidden" type="file" />
          </label>
        </div>
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="Description" />
        <Button text="Upload item" />
      </form>
    </Layout>
  );
};

export default Upload;