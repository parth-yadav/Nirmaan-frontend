
import React from "react";

function ResultsHeader() {
  return (
    <header className="flex gap-5 items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <h1 className="flex-auto mt-3 text-6xl font-bold text-black max-md:text-4xl">
        Results
      </h1>
      <div className="flex gap-5 text-2xl font-medium text-neutral-600 max-md:flex-wrap">
        <div className="grow justify-center px-4 py-3 bg-white rounded-lg shadow-sm w-fit">
          MOCK TESTS ATTEMPTED : 2
        </div>
        <div className="justify-center px-4 py-3 bg-white rounded-lg shadow-sm">
          22 JAN 2022
        </div>
      </div>
    </header>
  );
}

export default ResultsHeader;
