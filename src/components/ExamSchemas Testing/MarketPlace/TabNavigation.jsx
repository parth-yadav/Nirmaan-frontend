import React from "react";

function TabNavigation() {
  return (
    <nav className="flex flex-wrap items-center p-1.5 mt-8 w-full text-sm font-medium leading-none rounded-md bg-slate-100 max-md:mr-1.5 max-md:max-w-full">
      <button className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5  rounded text-slate-900">
        Exam schema
      </button>
      <button className="flex-1 flex items-center justify-center gap-2.5 px-3 py-1.5 bg-white rounded text-slate-700">
        Marketplace info
      </button>
    </nav>
  );
}

export default TabNavigation;
