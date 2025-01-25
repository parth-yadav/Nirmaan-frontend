import type React from "react";

interface ActionButtonProps {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  bgColor,
  onClick,
}) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 rounded-md ${bgColor}`}
    onClick={onClick}
  >
    {icon}
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

export default ActionButton;
