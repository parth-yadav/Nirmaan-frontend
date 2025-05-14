import React from "react";

function Button({ text, icon }) {
  return (
    <button className="flex gap-2 justify-center items-center px-4 py-2 mt-10 leading-6 text-white whitespace-nowrap rounded-lg bg-slate-900">
      <img
        loading="lazy"
        src={icon}
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
}

export default Button;
