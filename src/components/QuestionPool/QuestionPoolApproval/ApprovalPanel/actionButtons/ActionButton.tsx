import * as React from "react";
import { ActionButtonProps } from "./types";

export const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  variant = "secondary",
  onClick,
}) => {
  const baseClasses =
    "flex gap-2 justify-center items-center px-4 py-2 whitespace-nowrap rounded-md";
  const variantClasses =
    variant === "primary" ? "bg-green-700" : "bg-slate-900";

  return (
    <button
      className={`${baseClasses} ${variantClasses}`}
      tabIndex={0}
      role="button"
      onClick={onClick}
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
