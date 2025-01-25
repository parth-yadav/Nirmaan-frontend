
import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AnalysisCard from "./AnalysisCard";
import PerformanceGraph from "./PerformanceGraph";
import PreviousPerformances from "./PreviousPerformances";

function ResultsAnalysis() {
  return (
    <div className="flex gap-5 items-start pb-20 bg-neutral-100 max-md:flex-wrap">
      <Sidebar />
      <main className="flex flex-col grow shrink-0 self-end mt-10 basis-0 w-fit max-md:max-w-full">
        <Header />
        <section className="flex flex-col px-14 pt-8 pb-12 mt-28 bg-white rounded-3xl shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <h2 className="flex-auto text-3xl font-bold text-black">
              Result Analysis
            </h2>
            <div className="flex gap-5 px-2.5 py-2 text-base rounded-lg border border-solid border-stone-300 text-neutral-600">
              <span>Last 10 Exams</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bcbf07cce6c3c134aa89cfe2c2c905d9566ddcc567c29a640293a6aca5f95c07?apiKey=8a82faa9db93454483a68c973b38c7b0&"
                alt=""
                className="shrink-0 aspect-square w-[19px]"
              />
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <AnalysisCard title="average marks" value="182" />
              <AnalysisCard title="marks of best performance" value="224" />
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <AnalysisCard title="Average percentile" value="97.88" />
              <AnalysisCard
                title="percentile of best performance"
                value="99.22"
              />
            </div>
          </div>
          <PerformanceGraph />
        </section>
        <PreviousPerformances />
      </main>
    </div>
  );
}

export default ResultsAnalysis;
