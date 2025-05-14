import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
  const navItems = [
    {
      text: "My tests",
      to: "/quiz/Blogs",
    },
    {
      text: "Discover",
      to: "/quiz/Discover",
    },
  ];

  return (
    <nav className="flex gap-5 mt-1 leading-[143%] text-slate-900">
      {navItems.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="flex gap-2 px-4 py-2 mt-2.5 text-sm font-medium leading-6 text-black whitespace-nowrap rounded-lg"
        >
          <button className="flex flex-col justify-center px-4 py-2 bg-white">
            <div className="justify-center">{item.text}</div>
          </button>
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
