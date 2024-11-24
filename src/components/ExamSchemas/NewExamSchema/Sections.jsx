import React from "react";
function Sections({ data }) {
  return (
    <section className="mt-10 max-md:mt-10">
      <div className="flex flex-wrap gap-5 justify-between mx-5 w-full max-w-[500px] max-md:mr-2.5 max-md:max-w-full">
        <div className="flex flex-col text-black whitespace-nowrap">
          <h2 className="text-lg font-semibold leading-loose">Sections</h2>
          <div className="self-start mt-4 text-sm font-medium leading-none">
            Name
          </div>
        </div>
        <div className="flex flex-col self-start text-sm font-medium">
          <div className="flex gap-5 self-end max-w-full w-[165px]">
            <div className="leading-6 text-black">
              Total: {data.sections.length}
            </div>
            <button className="flex gap-1.5 justify-center items-center px-2 py-1.5 leading-none text-black bg-gray-200 rounded-md">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09c59797db0ddeec2a41a16db34aa1a3060f3aaf4fdd529728b052e77bc5cb9f?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt=""
              />
              <span className="self-stretch my-auto">Add new</span>
            </button>
          </div>
          <div className="flex gap-5 mt-4 leading-none text-black">
            <div className="grow">Questions</div>
            <div>Marking</div>
            <div>Max Marks</div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-1 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />

      {data.sections.map((section, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-wrap gap-5 justify-between mt-1.5 mr-5 ml-5 w-full text-sm leading-6 text-black max-w-[499px] max-md:mr-2.5 max-md:max-w-full">
            <div>{section.name}</div>
            <div className="flex gap-10 whitespace-nowrap">
              <div>{section.questions}</div>
              <div>{section.marking}</div>
              <div>{section.max_marks}</div>
            </div>
          </div>
          <div className="shrink-0 mt-1.5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
        </React.Fragment>
      ))}

      <div className="flex flex-wrap gap-5 justify-between mt-3.5 mr-5 ml-5 w-full text-sm font-medium leading-6 text-black max-w-[501px] max-md:mr-2.5 max-md:max-w-full">
        <div>Total Questions: {data.total_question}</div>
        <div>Maximum Marks: {data.total_max_marks}</div>
      </div>
    </section>
  );
}

export default Sections;
