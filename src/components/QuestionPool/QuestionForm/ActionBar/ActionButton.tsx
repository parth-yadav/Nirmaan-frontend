import * as React from "react";

interface ActionButtonProps {
  icon: string;
  label: string;
  variant?: string;
}

export function ActionButton({ icon, label, variant }: ActionButtonProps) {
  const buttonClass = `flex gap-2 justify-center items-center px-3 py-2 rounded-lg ${
    variant === "danger"
      ? "bg-red-500 hover:bg-red-600"
      : "bg-black hover:bg-gray-600"
  }`;

  return (
    <button className={buttonClass}>
      <img src={icon} alt="" className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
