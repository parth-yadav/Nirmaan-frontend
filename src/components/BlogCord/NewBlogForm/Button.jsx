import React from "react";

const Button = ({ text, icon, className }) => {
  return (
    <button
      className={`flex gap-2 justify-center items-center px-4 py-2 font-medium leading-6 text-white rounded-lg bg-slate-900 ${className}`}
    >
      {icon && (
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      )}
      <span className="self-stretch my-auto">{text}</span>
    </button>
  );
};

export default Button;
