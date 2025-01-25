
import React from "react";
import PerformanceChart from "./PerformanceChart";
import QuestionStatistics from "./QuestionStatistics";

function ResultAnalysis() {
  return (
    <section className="pt-5 pr-20 pb-16 pl-8 mt-28 bg-white rounded-lg shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10">
            <div className="flex gap-5 text-xl font-bold tracking-wider text-black uppercase">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5ea26c7b20260c4dfd44e072b52e54c507104fe323db3e292070afd8e8a555?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-auto my-auto">Result analysis</div>
            </div>
            <PerformanceBox title="Your performance" marks={178} rank={10534} />
            <PerformanceBox
              title="Best performance"
              marks={221}
              percentage="96.25%"
            />
          </div>
        </div>
        <PerformanceChart />
        <QuestionStatistics />
      </div>
    </section>
  );
}

function PerformanceBox({ title, marks, rank, percentage }) {
  return (
    <div className="flex flex-col items-start py-4 pr-14 pl-2.5 mt-8 w-full bg-sky-100 rounded-lg max-md:pr-5">
      <div className="text-base font-bold tracking-wider uppercase text-neutral-600">
        {title}
      </div>
      <div className="flex gap-5 justify-between px-px mt-6 whitespace-nowrap">
        <div className="flex flex-col">
          <div className="text-sm text-neutral-600">Marks</div>
          <div className="mt-2.5 text-3xl font-bold text-black">{marks}</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm text-neutral-600">
            {rank ? "Rank" : "Percentage"}
          </div>
          <div className="mt-2.5 text-3xl font-bold text-black">
            {rank || percentage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultAnalysis;
