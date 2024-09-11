
import React from "react";

function OptionInput({ label, id }) {
  return (
    <div className="flex flex-col mt-5 w-full leading-none max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <label
          htmlFor={id}
          className="self-stretch my-auto font-medium text-black w-[84px]"
        >
          {label}
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400 max-md:max-w-full">
          <input
            type="text"
            id={id}
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            placeholder="Add value"
          />
        </div>
      </div>
    </div>
  );
}

export default OptionInput;
