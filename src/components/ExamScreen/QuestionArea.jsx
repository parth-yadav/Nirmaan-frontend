
import React from "react";

const Option = ({ number, isSelected }) => (
  <div
    className={`flex gap-5 px-5 py-3 mt-2.5 text-lg bg-white rounded-lg ${
      isSelected
        ? "border-2 border-blue-600"
        : "border border-solid border-zinc-300"
    } max-md:flex-wrap`}
  >
    <div
      className={`shrink-0 self-start ${
        isSelected
          ? "bg-blue-600"
          : "bg-white border border-solid border-neutral-600"
      } rounded-full h-[15px] stroke-[1px] w-[15px]`}
    />
    <div className="flex-auto max-md:max-w-full">Option {number}</div>
  </div>
);

const QuestionArea = () => {
  return (
    <section className="flex flex-col self-stretch px-5 my-auto text-black max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between text-neutral-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h2 className="justify-center my-auto text-2xl font-bold tracking-widest uppercase">
          Question 18 / 24
        </h2>
        <div className="justify-center px-4 py-3 text-2xl font-medium bg-white rounded-lg shadow-sm">
          Time Remaining - 127 : 34
        </div>
      </div>
      <p className="mt-12 text-xl leading-6 max-md:mt-10 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque
        feugiat tellus arcu. Elit fames sed commodo amet nulla turpis arcu. Nunc
        vulputate molestie laoreet mattis vitae tempor semper eu. Montes, risus
        interdum sem proin interdum massa eu, augue quisque. Vitae faucibus
        lorem enim pellentesque mauris. Proin varius ullamcorper in faucibus
        euismod tellus nibh sed enim.
      </p>
      <Option number={1} isSelected={false} />
      <Option number={2} isSelected={true} />
      <Option number={3} isSelected={false} />
      <Option number={4} isSelected={false} />
      <button className="flex gap-4 self-start py-1.5 pr-5 pl-4 mt-10 text-xl font-bold text-white bg-blue-600 rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0347294c7ca304f9d60b71747bffa1f675e1924aa6e8019103525bffcd652363?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          className="shrink-0 aspect-square w-[23px]"
          alt=""
        />
        <span>Remove Selection</span>
      </button>
      <div className="flex gap-5 self-start mt-96 text-2xl font-bold text-blue-600 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:mt-10">
        <button className="flex gap-5 justify-between px-6 py-2.5 rounded-lg border-2 border-blue-600 border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3545386c5f3628baf8bd9a7296723fac493e3781ed8048b18941d2482817ceb1?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            className="shrink-0 w-7 aspect-square"
            alt=""
          />
          <span>Previous</span>
        </button>
        <button className="flex gap-5 justify-between px-6 py-2.5 rounded-lg border-2 border-blue-600 border-solid max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ffcce404ca1f13b4d24b03adb1992e45db57be05822a186c65ed78d02e3b22ab?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            className="shrink-0 w-7 aspect-square"
            alt=""
          />
          <span>Flag</span>
        </button>
        <button className="flex gap-5 justify-between py-2.5 pr-6 pl-7 rounded-lg border-2 border-blue-600 border-solid max-md:px-5">
          <span>Next</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaef8eef9900c5de767a4727716b46658dc4f1c26ea8c35af67ace8d45a50f06?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            className="shrink-0 w-7 aspect-square"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default QuestionArea;
