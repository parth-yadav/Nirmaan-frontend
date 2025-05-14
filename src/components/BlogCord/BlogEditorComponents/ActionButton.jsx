import React from "react";

const ActionButton = ({ text, icon, bgColor, textColor }) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 text-${textColor} rounded-lg ${bgColor}`}
  >
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      alt=""
    />
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

export default ActionButton;
