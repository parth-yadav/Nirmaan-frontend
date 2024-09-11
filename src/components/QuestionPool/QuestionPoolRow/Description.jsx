
import React from "react";

function Description() {
  return (
    <div className="flex flex-col mt-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full rounded-md max-md:max-w-full">
          <label
            htmlFor="description"
            className="self-start font-medium leading-none text-black"
          >
            Description
          </label>
          <textarea
            id="description"
            className="gap-2.5 px-3 pt-2 pb-14 mt-1.5 leading-none bg-white rounded-md border border-solid border-slate-300 min-h-[80px] text-slate-400 w-[506px] max-md:max-w-full"
            placeholder="Blog description goes here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Description;
