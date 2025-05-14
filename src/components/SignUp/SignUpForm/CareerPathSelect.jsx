import React from "react";

const CareerPathSelect = () => {
  return (
    <div className="flex flex-col mt-8 text-sm leading-5 max-md:max-w-full">
      <label
        htmlFor="careerPath"
        className="font-medium text-slate-900 max-md:max-w-full"
      >
        Your career path
      </label>
      <div className="flex flex-col justify-center mt-1.5 whitespace-nowrap text-slate-900 max-md:max-w-full">
        <div className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex gap-5 justify-between px-3 py-1.5 bg-white rounded-lg border border-solid border-slate-300 max-md:flex-wrap max-md:max-w-full">
            <select
              id="careerPath"
              className="w-full bg-transparent appearance-none"
              aria-label="Select your career path"
            >
              <option>AgniVeer</option>
            </select>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5454e9ab52c2713ce8063a1f04caafbf3d6212bc2bf23c229efa3460143a2b8f?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              className="shrink-0 w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-1.5 text-slate-500 max-md:max-w-full">
        You will be able to change path in future in your profile section
      </div>
    </div>
  );
};

export default CareerPathSelect;
