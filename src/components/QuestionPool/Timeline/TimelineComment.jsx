import React from "react";

function TimelineComment({ comment }) {
  return (
    <div className="self-end px-2.5 pt-3 pb-5 mt-2.5 max-w-full text-xs leading-4 text-gray-700 bg-gray-100 rounded-md w-[510px] max-md:pr-5 max-md:max-w-full">
      {comment}
    </div>
  );
}

export default TimelineComment;
