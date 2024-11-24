
import React from "react";

function InputField({ label, value }) {
  return (
    <div className="flex flex-col mt-2 w-full max-md:max-w-full">
      <label className="text-sm font-medium leading-none text-slate-900">
        {label}
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-900 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <input
            type="text"
            value={value}
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            aria-label={label}
          />
        </div>
      </div>
    </div>
  );
}

export default InputField;
