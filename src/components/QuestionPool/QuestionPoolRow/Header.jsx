
import React from "react";

function Header() {
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-green-800 whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-green-200 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9c1cc3b66bd19b889ba519adbf6c43b9bfedcb94be73665e7e9974978281d19?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
          />
          <div className="self-stretch my-auto">Active</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="flex flex-col mt-8 w-full leading-none max-md:max-w-full">
        <label
          htmlFor="questionPoolName"
          className="font-medium text-slate-900"
        >
          Question pool name
        </label>
        <div className="flex gap-2 items-start mt-1.5 w-full text-slate-400 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <input
              type="text"
              id="questionPoolName"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
              placeholder="Blog Title"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
