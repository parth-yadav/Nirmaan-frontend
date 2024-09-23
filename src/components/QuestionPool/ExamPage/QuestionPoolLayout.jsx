import React from "react";
import { Calendar } from "lucide-react";

const ActionButton = ({ icon, text, bgColor }) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 rounded-md ${bgColor}`}
  >
    {icon}
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-8 w-full text-sm leading-6 text-white">
      <div className="flex gap-5">
        <ActionButton
          icon={<Calendar className="w-4 h-4" />}
          text="Propose changes"
          bgColor="bg-slate-900"
        />
        <ActionButton
          icon={<Calendar className="w-4 h-4" />}
          text="Delete Question"
          bgColor="bg-red-800"
        />
      </div>
      <ActionButton
        icon={<Calendar className="w-4 h-4" />}
        text="Event Timeline"
        bgColor="bg-slate-900"
      />
    </div>
  );
};

const QuestionTileComponent = () => {
  const Questions = Array.from({ length: 60 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col px-5 pt-6 pb-24 w-full text-lg font-semibold leading-loose text-black whitespace-nowrap bg-gray-100">
      <div className="flex gap-1 self-start">
        <Calendar className="w-[30px] h-[30px]" />
        <div className="my-auto">Nirmaan</div>
      </div>
      <div className="flex flex-wrap gap-4 mt-9 text-center">
        {Questions.map((question, index) => (
          <div
            key={index}
            className={`px-4 w-10 h-10 ${
              index === 2
                ? "bg-red-300"
                : index === 3
                ? "text-black bg-blue-300 rounded-3xl"
                : "bg-white"
            } rounded-md`}
          >
            {question}
          </div>
        ))}
      </div>
    </div>
  );
};

const QuestionContent = () => {
  const options = [
    { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
    { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: true },
    { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
    { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
  ];

  return (
    <section>
      <h2 className="self-start mt-8 text-base font-semibold leading-7 text-black">
        Multiple choice question
      </h2>
      <p className="mt-4 text-base leading-6 text-justify text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Dignissim in cras morbi risus.
        Et ac vitae neque in. Pellentesque ultrices amet purus risus placerat
        arcu. Lectus mi sed condimentum at et felis sit morbi nisl. Porttitor in
        eget in ornare aliquam. Elementum condimentum suscipit purus dignissim.
        Aliquam volutpat quis enim fermentum odio vitae neque sed. Vitae auctor
        et nisl adipiscing lacus eget. Turpis neque placerat imperdiet eget.
      </p>
      {options.map((option, index) => (
        <div
          key={index}
          className={`px-5 py-5 mt-${index === 0 ? "9" : "2.5"} text-base ${
            option.isCorrect
              ? "text-green-900 bg-green-100"
              : "text-black bg-gray-100"
          } rounded-md max-md:max-w-full`}
        >
          {option.text}
        </div>
      ))}
    </section>
  );
};

const QuestionPool = () => {
  return (
    <div className="flex flex-col font-medium max-md:max-w-full">
      <header className="flex shrink-0 bg-gray-50 h-[50px] max-md:max-w-full" />
      <main className="flex flex-col px-12 mt-8 w-full max-md:px-5 max-md:max-w-full">
        <h1 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
          Some Question pool name
        </h1>
        <div className="flex gap-5 max-w-full w-[223px]">
          <div className="grow text-base text-black">Question 12 / 100</div>
          <div className="flex gap-1.5 justify-center items-center px-2 py-1.5 text-sm leading-none text-yellow-700 whitespace-nowrap bg-yellow-200 rounded-md">
            <Calendar className="w-3.5 h-3.5" />
            <div className="self-stretch my-auto">Draft</div>
          </div>
        </div>
        <QuestionContent />
        <ActionButtons />
      </main>
    </div>
  );
};

const QuestionPoolLayout = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex gap-5 max-md:flex-col">
        <aside className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
          <QuestionTileComponent />
        </aside>
        <main className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
          <QuestionPool />
        </main>
      </div>
    </div>
  );
};

export default QuestionPoolLayout;
