import * as React from "react";

export default function AnswerBadge({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick} // Pass the click handler to the parent
      className="flex gap-2 justify-center items-center self-start px-4 py-2 font-medium text-black bg-gray-300 rounded-lg cursor-pointer"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67780b15f327e409d60ce48aa25b1e7643442e3925beb62c391feb610d70b2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 self-stretch w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch">Correct option</span>
    </button>
  );
}
