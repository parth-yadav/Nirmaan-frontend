
import React from "react";

function Duration() {
  return (
    <div className="flex flex-col mt-5 w-full text-sm leading-none whitespace-nowrap max-md:mr-1.5 max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <label
          htmlFor="duration"
          className="self-stretch my-auto font-medium text-black w-[84px]"
        >
          Duration
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-900 max-md:max-w-full">
          <input
            id="duration"
            type="number"
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            defaultValue="180"
          />
        </div>
      </div>
    </div>
  );
}

export default Duration;
