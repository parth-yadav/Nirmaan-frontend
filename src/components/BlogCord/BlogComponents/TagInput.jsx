
import React from "react";

const TagInput = () => (
  <div className="flex flex-col self-stretch w-full min-h-[183px] max-md:max-w-full">
    <label
      htmlFor="tagSearch"
      className="font-medium leading-none text-slate-900"
    >
      Tags
    </label>
    <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <input
          id="tagSearch"
          type="text"
          className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
          placeholder="Search for tags here"
        />
      </div>
    </div>
    <div className="mt-1.5 leading-none text-slate-500">
      Tags helps in SEO and works as keywords
    </div>
  </div>
);

export default TagInput;
