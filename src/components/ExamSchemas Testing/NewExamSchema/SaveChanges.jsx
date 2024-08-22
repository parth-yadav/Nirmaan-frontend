
import React from "react";

function SaveChanges() {
  return (
    <button className="flex gap-2 justify-center items-center self-start px-4 py-2 mt-11 text-sm font-medium leading-6 text-white rounded-md bg-slate-500 max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e1dfd44ce00d294d749dc330a99681dc425962904dd74dcc7ec7dc811bf4bf?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">Save changes</span>
    </button>
  );
}

export default SaveChanges;
