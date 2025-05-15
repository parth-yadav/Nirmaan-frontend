
import React from "react";
import Actions from "./Actions";
import { Search } from "lucide-react";

function Tags({data}) {
  // const tagData = [
  //   {
  //     text: "Tag1",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa1467aacec4f8a93a0eb65459334b3fa178ec1bcb18be65120c7647d9ee58a1?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
  //   },
  //   {
  //     text: "Some other tag",
  //     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d012d0bbf476191001345cc76dfa8cb97dcb82d68348c03ec89eeb42a2de95ed?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
  //   },
  // ];

  return (
    <div className="flex z-10 flex-col items-start mt-5   w-full  max-md:max-w-full">
      <div className="flex flex-col self-stretch  w-full max-md:max-w-full">
        <label
          htmlFor="tagSearch"
          className="text-sm mb-2 font-medium leading-none text-slate-900"
        >
          Tags
        </label>
        <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
          <div className="relative w-full min-w-[240px] max-md:flex-wrap">
            <input
              type="text"
              id="tagSearch"
              className="py-2 pr-12 pl-3 w-full bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="Search for tags here"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>
        <div className="flex mt-2 flex-wrap gap-3">
          {data.tags.map((tag, index) => (
            <div
              key={index}
              className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm font-medium leading-none text-blue-800 bg-blue-200 rounded-lg"
            >
              <div className="self-stretch my-auto">{tag} X</div>
            </div>
          ))}
        </div>
      </div>
      <button className=" z-10 gap-2.5  px-4 py-2 mt-8 text-sm font-medium leading-6 text-white rounded-lg bg-slate-900">
        Save changes
      </button>
      <hr className="w-full bg-gray-300 mt-8 mb-8 border-0 h-px max-md:max-w-full" />

      <Actions />
    </div>
  );
}

export default Tags;
