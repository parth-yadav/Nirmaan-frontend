
import React from "react";

function TargetGroups() {
  return (
    <section className="flex mt-8 max-md:mr-1.5">
      <div className="flex flex-col grow shrink-0 mr-0 basis-0 w-fit max-md:max-w-full">
        <h3 className="font-medium leading-none text-slate-900">
          Target Groups
        </h3>
        <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <input
              type="text"
              placeholder="Search groups here"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            />
          </div>
        </div>
        <p className="mt-1.5 leading-5 text-slate-500 max-md:max-w-full">
          This is helpful for marketing purposes. The app will try to show
          results to users which belogns to their exam type.
        </p>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8988ea73df35aa9c44e98950a30bc9b6fffb531f774793d7683180296f34dbf6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        alt=""
        className="object-contain shrink-0 self-start mt-9 w-6 aspect-square"
      />
    </section>
  );
}

export default TargetGroups;
