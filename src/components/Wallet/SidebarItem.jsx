
import React from "react";

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex gap-2 px-4 py-2 mt-2.5 text-sm font-medium leading-6 text-black whitespace-nowrap rounded-xl  ${
        active ? "bg-gray-300" : "bg-white"
      }`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="shrink-0 my-auto w-4 aspect-square"
      />
      <div>{text}</div>
    </div>
  );
}

export default SidebarItem;
