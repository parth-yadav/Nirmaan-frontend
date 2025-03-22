import * as React from "react";

export const OptionChip = ({ text }) => {
  return (
    <div
      className="mr-2 px-4 py-2 bg-gray-200 rounded-lg "
      role="button"
      tabIndex={0}
    >
      {text} 
      <button className="ml-2">
        X
      </button>
    </div>
  );
};
