import React from "react";

const TextArea = ({ label, placeholder, helperText }) => {
  return (
    <div className="flex flex-col mt-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col items-start w-full rounded-lg max-md:max-w-full">
          <label
            htmlFor={label.toLowerCase()}
            className="font-medium leading-none text-black"
          >
            {label}
          </label>
          <textarea
            id={label.toLowerCase()}
            placeholder={placeholder}
            className="gap-2.5 self-stretch px-3 pt-2 pb-14 mt-1.5 bg-white rounded-lg border border-solid border-slate-300 min-h-[80px] text-slate-400 w-[506px] max-md:max-w-full"
          ></textarea>
          <p className="mt-1.5 text-slate-500">{helperText}</p>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
