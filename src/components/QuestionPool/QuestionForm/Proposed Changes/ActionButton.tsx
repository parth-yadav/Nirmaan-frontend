import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  variant,
  onClick,
}) => {
  const bgColor = {
    red: "bg-red-800",
    green: "bg-green-700",
    dark: "bg-slate-900",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`flex gap-2 justify-center items-center px-4 py-2 ${bgColor} rounded-lg text-white`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
      />
      <span className="self-stretch my-auto">{label}</span>
    </button>
  );
};
