import React from "react";

function Statistics({ data }) {
  const stats = data.statistics[0]; // Access the first object in the array

  return (
    <section className="flex flex-col px-8 mt-5 w-full max-md:px-5 max-md:max-w-full">
      <h2 className="self-start text-lg font-semibold leading-loose text-black">
        Statistics
      </h2>
      <div className="flex flex-wrap gap-5 mt-4">
        {Object.entries(stats).map(([key, value], index) => (
          <div
            key={index}
            className="flex flex-col flex-1 justify-center p-2.5 bg-gray-100 rounded-md"
          >
            <div className="text-sm font-medium leading-none text-gray-700 uppercase">
              {key.replace("_", " ")} {/* Format label */}
            </div>
            <div className="mt-2.5 text-3xl font-semibold tracking-tight leading-tight text-black">
              {value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
