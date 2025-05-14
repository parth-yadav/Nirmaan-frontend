import React from "react";

const BlogDescription = ({ description }) => (
  <div className="flex flex-col mt-5 max-md:max-w-full">
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-col items-start w-full rounded-lg max-md:max-w-full">
        <label
          htmlFor="blogDescription"
          className="font-medium leading-none text-black"
        >
          Description
        </label>
        <textarea
          id="blogDescription"
          className="gap-2.5 self-stretch px-3 pt-2 pb-14 mt-1.5 bg-white rounded-lg border border-solid border-slate-300 min-h-[80px] text-slate-400  max-md:max-w-full"
          placeholder="Blog description goes here"
          value={description}
        ></textarea>
        <div className="mt-1.5 text-slate-500">
          The title and description will be used for SEO purposes.
        </div>
      </div>
    </div>
  </div>
);

export default BlogDescription;
