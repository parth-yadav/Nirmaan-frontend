import React from "react";

function InputField({ label }) {
  return (
    <div className="flex items-center gap-4 w-full mt-3">
      <label
        htmlFor={label.replace(/\s+/g, "-").toLowerCase()}
        className="w-40  text-left font-medium text-black"
      >
        {label}
      </label>
      <input
        type="text"
        id={label.replace(/\s+/g, "-").toLowerCase()}
        placeholder="Add value"
        className="flex-1 py-2 px-3 w-full bg-white rounded-lg border border-solid border-slate-300 min-w-[240px] text-slate-900"
      />
    </div>
  );
}

export default InputField;
