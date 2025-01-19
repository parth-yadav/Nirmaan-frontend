import * as React from "react";

export const OptionChip = ({ text }) => {
  return (
    <div
      className="gap-1.5 self-stretch px-1.5 bg-gray-200 rounded-md"
      role="button"
      tabIndex={0}
    >
      {text} 
      <button>
        X
      </button>
    </div>
  );
};
