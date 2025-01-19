import * as React from "react";

export function StatusIndicator() {
  return (
    <div className="flex gap-1 my-auto leading-none text-gray-500">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2d2ff087c0d9818b11b865dd8cc6e6aed5d72ad563267153a9a3d42626974df?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        alt=""
        className="object-contain shrink-0 w-5 aspect-square"
      />
      <div className="basis-auto">Some changes are not saved</div>
    </div>
  );
}
