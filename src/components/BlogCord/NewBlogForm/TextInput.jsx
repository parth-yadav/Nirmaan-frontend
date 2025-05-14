import React from "react";

const TextInput = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
      <label
        htmlFor={label.toLowerCase()}
        className="font-medium text-slate-900"
      >
        {label}
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-slate-400 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <input
            type="text"
            id={label.toLowerCase()}
            placeholder={placeholder}
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
