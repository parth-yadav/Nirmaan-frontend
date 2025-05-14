import React from "react";

function Tag({ text }) {
  return (
    <div className="flex z-10 gap-1.5 justify-center items-center px-2 py-1.5 leading-none text-blue-800 bg-blue-200 rounded-lg">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d296924b09a098a1c349c94567b5969de635bf12f507e6b27f747ad3379c0c3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">{text} X</span>
    </div>
  );
}

export default Tag;
