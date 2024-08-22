
import React from "react";

function InputField({ label }) {
  return (
    <div className="flex flex-col mt-5 w-full leading-none max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <label
          htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
          className="self-stretch my-auto font-medium text-black"
        >
          {label}
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400">
          <input
            type="text"
            id={label.replace(/\s+/g, "-").toLowerCase()}
            placeholder="Add value"
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5"
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;
