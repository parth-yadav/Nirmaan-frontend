
import React from "react";

function Header() {
  return (
    <header className="flex flex-col px-8 pb-2 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between w-full text-sm font-medium leading-none text-yellow-800 whitespace-nowrap max-md:max-w-full">
        <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-yellow-200 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff664a03fd301942be935c5a3f6a087796bed09ab76f59433feca2175435e8a?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">Draft</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="object-contain shrink-0 w-6 aspect-square"
          alt=""
        />
      </div>
      
      <nav className="flex flex-wrap items-center p-1.5 mt-8 w-full text-sm font-medium leading-none rounded-md bg-slate-100 max-md:mr-1.5 max-md:max-w-full">
  <button className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5 bg-white rounded text-slate-900">
    Exam schema
  </button>
  <button className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5 rounded text-slate-700">
    Marketplace info
  </button>
</nav>

    </header>
  );
}

export default Header;
