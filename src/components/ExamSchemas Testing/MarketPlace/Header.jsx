
import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-yellow-800 whitespace-nowrap max-md:max-w-full">
      <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-yellow-200 rounded-md">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d14e208933e2a3ce9eea5f10f7c00907f97b99166bf72df275044ec98ba08b8c?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        />
        <div className="self-stretch my-auto">Draft</div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        alt="x"
        className="object-contain shrink-0 w-6 aspect-square"
      />
    </header>
  );
}

export default Header;
