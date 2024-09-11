
import React from "react";

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

export default QuestionContent;
