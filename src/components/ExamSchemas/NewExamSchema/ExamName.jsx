import React, { useState, useEffect } from "react";

function ExamName({ data }) {
  const [title, setTitle] = useState(data.title);

  // Update the input value when `data.title` changes
  useEffect(() => {
    setTitle(data.title);
  }, [data.title]);

  return (
    <div className="mt-4 flex flex-col w-full text-sm max-md:mr-1.5 max-md:max-w-full">
      <label
        htmlFor="examName"
        className="font-medium leading-none text-slate-900"
      >
        {title}
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-base text-black max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <input
            id="examName"
            type="text"
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
      </div>
      <div className="mt-1.5 leading-none text-slate-500">
        This name will be used for SEO purposes as well.
      </div>
    </div>
  );
}

export default ExamName;
