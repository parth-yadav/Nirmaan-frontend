
import React from "react";

function Actions() {
  return (
    <div className="flex flex-col mt-8 ml-8 max-w-full w-[323px] max-md:ml-2.5">
      <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
        Actions
      </h2>
      <div className="flex gap-5 mt-5 w-full text-sm font-medium leading-6">
        <button className="flex gap-2 justify-center items-center px-4 py-2 text-white rounded-md bg-slate-900">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/156e568fe0e624dd3ca89c462c7f4398c5c5ad383be25d62249bbf994fbab5c7?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <span className="self-stretch my-auto">Edit question pool</span>
        </button>
        <button className="flex gap-2 justify-center items-center px-4 py-2 text-black whitespace-nowrap bg-red-300 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b6fb29210f458a1fce6a0bc2163cecac130e294d2885c2fa93d5fab250ef141?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          />
          <span className="self-stretch my-auto">Deprecate</span>
        </button>
      </div>
    </div>
  );
}

export default Actions;
