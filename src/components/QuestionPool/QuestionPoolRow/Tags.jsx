
import React from "react";
import Actions from "./Actions";

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
    <div className="flex z-10 flex-col items-start px-8  mt-0 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col self-stretch mt-0 w-full max-md:max-w-full">
        <label
          htmlFor="tagSearch"
          className="text-sm font-medium leading-none text-slate-900"
        >
          Tags
        </label>
        <div className="flex gap-2 items-start mt-1.5 w-full mb-8 text-base text-slate-400 max-md:max-w-full">
          <div className="flex items-center w-full min-w-[240px] max-md:flex-wrap">
            <input
              type="text"
              id="tagSearch"
              className="flex-1 py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="Search for tags here"
            />
            <button className="ml-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56360435dd7935ebb8ca7fd5ed71e5a0935b982303611a0d709ca7d4c88099e9?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                alt=""
                className="object-contain w-8 h-8 rounded-full"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.tags.map((tag, index) => (
            <div
              key={index}
              className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm font-medium leading-none text-blue-800 bg-blue-200 rounded-md"
            >
              <div className="self-stretch my-auto">{tag} X</div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full mt-8 bg-gray-300 border-0 h-px max-md:max-w-full" />
      <Actions />
      <hr className="w-full bg-gray-300 mt-8 mb-8 border-0 h-px max-md:max-w-full" />
      <button className="z-10 gap-2.5 self-stretch px-4 py-2 mt-0 text-sm font-medium leading-6 text-white rounded-md bg-slate-900">
        Save changes
      </button>
    </div>
  );
}

export default Tags;
