
import React from "react";

function Tags() {
  const tagData = [
    {
      text: "Tag1",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa1467aacec4f8a93a0eb65459334b3fa178ec1bcb18be65120c7647d9ee58a1?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    },
    {
      text: "Some other tag",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d012d0bbf476191001345cc76dfa8cb97dcb82d68348c03ec89eeb42a2de95ed?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    },
  ];

  return (
    <div className="flex z-10 flex-col items-start px-8 pt-20 pb-3.5 mt-0 w-full max-md:px-5 max-md:max-w-full">
      {tagData.map((tag, index) => (
        <div
          key={index}
          className={`flex gap-1.5 justify-center items-center px-2 py-1.5 ${
            index === 1 ? "-mt-6 ml-24 max-md:ml-2.5" : "mt-20 max-md:mt-10"
          } text-sm font-medium leading-none text-blue-800 bg-blue-200 rounded-md`}
        >
          <img
            loading="lazy"
            src={tag.icon}
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
          <div className="self-stretch my-auto">{tag.text} X</div>
        </div>
      ))}
      <div className="flex flex-col self-stretch mt-0 w-full min-h-[183px] max-md:max-w-full">
        <label
          htmlFor="tagSearch"
          className="text-sm font-medium leading-none text-slate-900"
        >
          Tags
        </label>
        <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <input
              type="text"
              id="tagSearch"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="Search for tags here"
            />
          </div>
        </div>
      </div>
      <button className="z-10 gap-2.5 self-stretch px-4 py-2 mt-0 text-sm font-medium leading-6 text-white rounded-md bg-slate-900">
        Save changes
      </button>
    </div>
  );
}

export default Tags;
