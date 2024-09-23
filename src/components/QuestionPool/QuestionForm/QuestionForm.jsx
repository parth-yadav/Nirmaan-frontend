import React from "react";

function QuestionForm() {
  const options = [
    { label: "Option 1", id: "option1" },
    { label: "Option 2", id: "option2" },
    { label: "Option 3", id: "option3" },
    { label: "Option 4", id: "option4" },
  ];

  return (
    <form className=" ml -8  flex flex-col text-sm rounded-none">
      <div className="flex overflow-hidden flex-col pb-10 w-full bg-white max-md:max-w-full">
        <QuestionType />
        <QuestionInput />
        {options.map((option) => (
          <OptionInput key={option.id} label={option.label} id={option.id} />
        ))}
        <AddOptionButton />
      </div>
    </form>
  );
}

function QuestionType() {
  return (
    <>
      <div className="flex flex-col w-96 max-w-full leading-none">
        <div className="flex gap-4 items-center w-full">
          <label
            htmlFor="questionType"
            className="self-stretch my-auto font-medium text-black"
          >
            Question type
          </label>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400">
            <select
              id="questionType"
              className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5"
            >
              <option>Multi choice question</option>
            </select>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b64f45bafb1f79794b2c4adcec4df51251a683da8772bc3d8065330b08d0925?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain z-10 self-center -mt-7 w-5 aspect-square"
        alt=""
      />
    </>
  );
}

function QuestionInput() {
  return (
    <div className="flex flex-col mt-7 w-full min-h-[126px] max-md:max-w-full">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 w-full rounded-md max-md:max-w-full">
          <label
            htmlFor="questionInput"
            className="self-start font-medium leading-none text-black"
          >
            Question
          </label>
          <textarea
            id="questionInput"
            className="gap-2.5 px-3 pt-2 pb-20 mt-3 leading-none bg-white rounded-md border border-solid border-slate-300 min-h-[101px] text-slate-400 w-[506px] max-md:max-w-full"
            placeholder="Type your message here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

function OptionInput({ label, id }) {
  return (
    <div className="flex flex-col mt-5 w-full leading-none max-md:max-w-full">
      <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
        <label
          htmlFor={id}
          className="self-stretch my-auto font-medium text-black w-[84px]"
        >
          {label}
        </label>
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] text-slate-400 max-md:max-w-full">
          <input
            type="text"
            id={id}
            className="self-stretch py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
            placeholder="Add value"
          />
        </div>
      </div>
    </div>
  );
}

function AddOptionButton() {
  return (
    <button className="flex gap-2 justify-center items-center self-start px-4 py-2 mt-8 font-medium leading-6 text-black bg-gray-300 rounded-md">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67780b15f327e409d60ce48aa25b1e7643442e3925beb62c391feb610d70b2?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        alt=""
      />
      <span className="self-stretch my-auto">Add option</span>
    </button>
  );
}

export default QuestionForm;
