import React from "react";

function TagInput() {
  return (
    <div className="flex flex-col self-stretch w-full min-h-[183px] max-md:max-w-full">
      <label
        htmlFor="tagInput"
        className="font-medium leading-none text-slate-900"
      >
        Tags
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
        <input
          id="tagInput"
          type="text"
          className="flex-1 py-2 px-3 w-full bg-white rounded-lg border border-solid border-slate-300 max-md:max-w-full"
          placeholder="Search for tags here"
        />
      </div>
      <p className="mt-1.5 leading-none text-slate-500">
        Tags helps in SEO and works as keywords
      </p>
    </div>
  );
}

export default TagInput;
