import React from "react";

const InputField = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col mt-4 text-sm leading-5 max-md:max-w-full">
      <label className="font-medium text-slate-900 max-md:max-w-full">
        {label}
      </label>
      <div className="flex flex-col justify-center mt-1.5 text-slate-900 max-md:max-w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
          <input
            type={type}
            placeholder={placeholder}
            className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            aria-label={label}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
