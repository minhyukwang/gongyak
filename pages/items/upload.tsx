import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
          <label className="w-full cursor-pointer text-green-400 hover:border-green-500 hover:text-green-500 flex items-center justify-center border-dashed border-green-700 py-6 h-48 rounded-md">
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
      <div className="my-5">
      <label 
        htmlFor="name" className="mb-1 block text-sm font-medium text-green-700">Name</label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">

          </div>
          <input 
          id="name" 
          className="appearance-none w-full px-3 py-2 border border-green-400 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-700" 
          type="text" />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
 
          </div>
        </div>

        <label 
        htmlFor="price" className="mt-4 mb-1 block text-sm font-medium text-green-700">Price</label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
            <span className="text-green-700 text-sm">$</span>
          </div>
          <input 
          id="price" 
          className="appearance-none pl-7 w-full px-3 py-2 border border-green-400 rounded-md shadow-sm placeholder-green-400 focus:outline-none focus:ring-green-500 focus:border-green-700" 
          type="text" placeholder="0.00" />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-green-700">Description</label>
          <textarea className="mt-1 shadow-sm w-full focus:ring-green-500 rounded-md border-green-400 focus:border-green-700" rows={4} />
      </div>
      <button className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-green-900 focus:outline-none">Upload product</button>
    </div>
  );
};

export default Upload;