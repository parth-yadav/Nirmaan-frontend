import React from "react";
import { Search } from "lucide-react";

function TargetGroups() {
  return (
    <section className="flex mt-8 max-md:mr-1.5">
      <div className="flex flex-col grow shrink-0 mr-0 basis-0 w-fit max-md:max-w-full">
        <h3 className="font-medium leading-none text-slate-900">
          Target Groups
        </h3>
        <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
          <div className="relative flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
            <Search
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={18}
            />
            <input
              type="text"
              placeholder="Search groups here"
              className="pl-4 py-2 pr-14 w-full bg-white rounded-lg border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            />
          </div>
        </div>
        <p className="mt-1.5 leading-5 text-slate-500 max-md:max-w-full">
          This is helpful for marketing purposes. The app will try to show
          results to users which belogns to their exam type.
        </p>
      </div>
    </section>
  );
}

export default TargetGroups;
