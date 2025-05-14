import React from "react";

const Tag = ({ text }) => (
  <div className="flex z-10  gap-1.5 justify-center items-center px-2 my-1 py-1.5 leading-none text-blue-800 bg-blue-200 rounded-lg">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c1719c9429145814a47468ba4b4d639b81c13c719be84ad134e3fc1c64d9fe3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
      className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
      alt=""
    />
    <div className="self-stretch my-auto">{text} X</div>
  </div>
);

export default Tag;
