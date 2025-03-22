import React from "react";

interface ActionButtonProps {
  text: string;
  iconSrc: string;
  iconPosition: "left" | "right";
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  iconSrc,
  iconPosition,
  onClick,
}) => {
  return (
    <button
      className="flex gap-2 justify-center items-center px-4 py-2 rounded-lg bg-slate-900"
      onClick={onClick}
    >
      {iconPosition === "left" && (
        <img
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      )}
      <span className="self-stretch my-auto">{text}</span>
      {iconPosition === "right" && (
        <img
          src={iconSrc}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
      )}
    </button>
  );
};
export default ActionButton;
