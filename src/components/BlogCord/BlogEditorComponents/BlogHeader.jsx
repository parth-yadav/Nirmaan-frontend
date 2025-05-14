import React from "react";
import { useDispatch } from "react-redux";

import { hideEditor } from "../../../store/blogEditorSlice";

const isPublished = true;

function BlogHeader() {
  const dispatch = useDispatch();

  const handleCrossClick = () => {
    dispatch(hideEditor());
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between w-full font-medium leading-none text-green-800 whitespace-nowrap max-md:max-w-full">
      {isPublished && (
        <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 bg-green-200 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64db57426044057a7d6922522ad27ca6bf8269a91714fe31bf7f38da2c1c7b20?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">Published</div>
        </div>
      )}
      <button onClick={handleCrossClick}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="object-contain shrink-0 w-6 aspect-square"
          alt="Settings icon"
        />
      </button>
    </div>
  );
}
export default BlogHeader;
