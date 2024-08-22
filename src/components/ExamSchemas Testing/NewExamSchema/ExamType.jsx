
import React from "react";

function ExamType() {
  return (
    <div className="flex flex-col mt-5 w-full max-md:mr-1.5 max-md:max-w-full">
      <label
        htmlFor="examType"
        className="text-sm font-medium leading-none text-slate-900"
      >
        Exam type
      </label>
      <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-900 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <select
            id="examType"
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
          >
            <option>Multiple choice questions</option>
          </select>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad414660e28ebff406a769763c8573762cdecf38d1f35601185cf69ee871365?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain z-10 self-end -mt-8 w-6 aspect-square max-md:mr-2.5"
        alt=""
      />
    </div>
  );
}

export default ExamType;
