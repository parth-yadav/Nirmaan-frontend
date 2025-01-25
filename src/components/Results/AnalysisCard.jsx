
import React from "react";

function AnalysisCard({ title, value }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow justify-center font-bold max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-start py-7 pr-20 pl-8 bg-sky-100 rounded-lg max-md:px-5 max-md:max-w-full">
          <div className="text-xl tracking-wider uppercase text-neutral-600">
            {title}
          </div>
          <div className="mt-6 text-6xl text-black max-md:text-4xl">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisCard;
