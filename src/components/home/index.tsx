import {} from "react";
import { MagnifyingGlassIcon, CameraIcon } from "@heroicons/react/24/outline";

export const HomePage = () => {
  return (
    <div className="h-full flex flex-col w-full">
      <div className="w-full p-1.5 flex items-center h-[60px] shrink-0 bg-base-200 justify-between p-4 md:px-6">
        <div></div>
        <div className="flex items-center">
          <div className="hidden lg:inline-block ml-6">
            <a href="/login" className="px-5 py-3 text-sm text-white dark:text-white font-medium dark:bg-zinc-700 bg-zinc-800 rounded-md flex items-center hover:bg-indigo-600 transition-colors cursor-pointer">
              Sign up
            </a>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[92px] max-h-[290px] h-[calc(100%-560px)] flex shrink-0 justify-center">
        <div className="max-h-[92px] mt-auto relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto font-bold">
            GPT Search
          </h1>
        </div>
      </div>
      <div className="w-full p-5 min-h-[160px] shrink-0">
        <form action="/search" autoComplete="off" method="GET" role="search">
          <div className="w-full max-w-[584px] mx-auto rounded-3xl border border-[#dfe1e5] min-h-[44px] flex">
            <div className="flex-1 flex pl-3.5 pr-3.5">
              <div className="w-auto h-full flex items-center">
                <MagnifyingGlassIcon className="w-6 h-6 text-[#9aa0a6]" />
              </div>
              <input
                type="text"
                className="input outline-none border-0 flex-1 focus:outline-none"
              />
              <div className="w-auto h-full flex items-center">
                <CameraIcon className="w-6 h-6 text-[#9aa0a6]" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-grow shrink-0"></div>
      <div className="bg-base-200 w-full shrink-0 px-5 flex items-center justify-between">
        <div></div>
        <div className="flex items-center justify-center">
          <a href="/privacy" className="p-[15px] text-sm text-base-content">
            隐私
          </a>
          <a href="/terms" className="p-[15px] text-sm text-base-content">
            条款
          </a>
        </div>
      </div>
    </div>
  );
};
