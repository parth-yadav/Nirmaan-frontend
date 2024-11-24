
import React from "react";

function ActionButton({ type, text }) {
  const bgColor = type === "delete" ? "bg-red-700" : "bg-slate-900";
  const iconSrc =
    type === "delete"
      ? "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b962857205c41208cbbf87c6b3bd1e3e0c07e75c6b1373d79684eded13633e?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
      : "https://cdn.builder.io/api/v1/image/assets/TEMP/379f927a565248f2f8527fb79bc8b342ec6a43aaa241fabf84822afa7b661501?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0";

  return (
    <button
      className={`flex flex-1 gap-2 justify-center items-center px-4 py-2 rounded-md ${bgColor}`}
    >
      <img
        loading="lazy"
        src={iconSrc}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

export default ActionButton;
