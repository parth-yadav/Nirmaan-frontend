import React from "react";
import ExamSchemaTablex from "./ExamSchemasTable/new-estable";

function MainContent() {
  return (
    <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
      <h1 className="text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:text-white">
        Exam Schema
      </h1>
      <p className="mt-3 text-sm leading-5 text-black max-md:max-w-full dark:text-white">
        A schema is blueprint from which the exam papers are created.
      </p>
      <div className="flex gap-5 justify-between mt-10 w-full max-md:flex-wrap max-md:max-w-full">
        {/* <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 justify-center text-base leading-6 text-gray-500 basis-0 w-fit">
            <div className="flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <input
                  type="search"
                  placeholder="Search your exams here"
                  className="justify-center items-start px-3 py-2 bg-white rounded-lg border border-gray-300 border-solid max-md:pr-5"
                />
              </div>
            </div>
          </div>
          <button className="flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e476ace9a89a9c42af0559fc674c4e83b6b94c7a5c4773ed056a26a3d99af05?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <span>Filters</span>
          </button>
          <button className="flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-black whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56d97cbb4bedc75230dcea7b2c5a69e019203c7d6ee158a02b323809a9bbc3?apiKey=8a82faa9db93454483a68c973b38c7b0&"
              alt=""
              className="shrink-0 my-auto w-4 aspect-square"
            />
            <span>View</span>
          </button>
        </div> */}
        <button className="flex gap-2 justify-center px-4 py-2 text-sm font-medium leading-6 text-white whitespace-nowrap bg-black rounded-lg border border-gray-300 border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56d97cbb4bedc75230dcea7b2c5a69e019203c7d6ee158a02b323809a9bbc3?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt=""
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <span>New Exam Schemaaa</span>
        </button>
      </div>
      <ExamSchemaTablex />
    </div>
  );
}

export default MainContent;
