
import React from "react";

function ActionButtons() {
  return (
    <div className="flex gap-5 mt-8 max-w-full w-[386px]">
      <button className="flex gap-2 justify-center items-center px-4 py-2 font-medium leading-6 text-white rounded-md bg-slate-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/379f927a565248f2f8527fb79bc8b342ec6a43aaa241fabf84822afa7b661501?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <span className="self-stretch my-auto">Save changes</span>
      </button>
      <div className="flex gap-1 my-auto leading-none text-gray-500">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d2ff087c0d9818b11b865dd8cc6e6aed5d72ad563267153a9a3d42626974df?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 w-5 aspect-square"
        />
        <div className="basis-auto">Some changes are not saved</div>
      </div>
    </div>
  );
}

export default ActionButtons;
