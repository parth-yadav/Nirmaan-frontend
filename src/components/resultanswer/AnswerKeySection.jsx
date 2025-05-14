import React from "react";

const questions = [
  {
    number: 1,
    status: "Right Answer : +4",
    statusClass: "bg-green-400",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis at ornare sed odio lectus. Diam et scelerisque ut consectetur sit purus sit facilisi. Eu consequat, convallis elit erat ipsum eu, a. Volutpat, consequat pulvinar facilisi urna vestibulum. Justo, massa dictumst quis pretium egestas tristique neque odio. Dolor porttitor sapien porttitor natoque placerat risus ut egestas id.",
    options: [
      { text: "Options 1", class: "bg-white text-neutral-600" },
      { text: "Options 2", class: "bg-green-400 text-black" },
      { text: "Options 3", class: "bg-white text-neutral-600" },
      { text: "Options 4", class: "bg-white text-neutral-600" },
    ],
  },
  {
    number: 2,
    status: "Wrong Answer : -1",
    statusClass: "bg-red-300",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis at ornare sed odio lectus. Diam et scelerisque ut consectetur sit purus sit facilisi. Eu consequat, convallis elit erat ipsum eu, a. Volutpat, consequat pulvinar facilisi urna vestibulum. Justo, massa dictumst quis pretium egestas tristique neque odio. Dolor porttitor sapien porttitor natoque placerat risus ut egestas id.",
    options: [
      { text: "Options 1", class: "bg-white text-neutral-600" },
      { text: "Options 2", class: "bg-green-400 text-black" },
      { text: "Options 3", class: "bg-white text-neutral-600" },
      { text: "Options 4", class: "bg-red-300 text-black" },
    ],
  },
  {
    number: 3,
    status: "Question not attepted : 0",
    statusClass: "bg-sky-100",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis at ornare sed odio lectus. Diam et scelerisque ut consectetur sit purus sit facilisi. Eu consequat, convallis elit erat ipsum eu, a. Volutpat, consequat pulvinar facilisi urna vestibulum. Justo, massa dictumst quis pretium egestas tristique neque odio. Dolor porttitor sapien porttitor natoque placerat risus ut egestas id.",
    options: [
      { text: "Options 1", class: "bg-white text-neutral-600" },
      { text: "Options 2", class: "bg-white text-neutral-600" },
      {
        text: "Options 3",
        class: "bg-white text-black border-2 border-green-400",
      },
      { text: "Options 4", class: "bg-white text-neutral-600" },
    ],
  },
];

function AnswerKeySection() {
  return (
    <section className="flex flex-col px-8 pt-5 pb-16 mt-24 bg-white rounded-lg shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 w-full font-bold max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h2 className="flex-auto text-3xl text-black">
          Answer key & your responses
        </h2>
        <button className="flex gap-4 px-4 py-1.5 text-xl text-white bg-blue-600 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1b8f976c1628463845867374a447625dc63ef68d36f4bf1391c4d684bf28aa8?apiKey=8a82faa9db93454483a68c973b38c7b0&"
            alt=""
            className="shrink-0 aspect-square w-[23px]"
          />
          <span>Answer Key</span>
        </button>
      </div>
      {questions.map((question, index) => (
        <QuestionBlock key={index} {...question} />
      ))}
    </section>
  );
}

function QuestionBlock({ number, status, statusClass, content, options }) {
  return (
    <div>
      <div className="flex gap-5 justify-between mt-14 text-black max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start mt-2.5 text-base font-bold tracking-wider uppercase">
          Question {number}
        </div>
        <div
          className={`justify-center px-2 py-1.5 text-sm font-medium ${statusClass} rounded-lg shadow-sm`}
        >
          {status}
        </div>
      </div>
      <p className="mt-3 text-base text-black max-md:max-w-full">{content}</p>
      {options.map((option, index) => (
        <div
          key={index}
          className={`justify-center items-start px-3 py-2.5 mt-${
            index === 0 ? "4" : "1.5"
          } text-sm ${
            option.class
          } rounded-lg border border-solid border-zinc-300 max-md:pr-5 max-md:max-w-full`}
        >
          {option.text}
        </div>
      ))}
    </div>
  );
}

export default AnswerKeySection;
