import * as React from "react";
import { ActionButton } from "./ActionButton";
import { QuestionOption } from "./QuestionOption";
import { ApprovalNotification } from "./ApprovalNotification";

const options = [
  { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
  { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: true },
  { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
  { text: "Lorem ipsum dolor sit amet consectetur.", isCorrect: false },
];

const actions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/86ab2821677ed62b75b4e6aa8b73d916c91ded6f142e82d84f1df34a84764f11?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Discard changes",
    variant: "red" as const,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f92d108f3ecac7a2ef15b29d2b7bbba38cae03c6e4ef8bfaf5a63744ab88a475?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Publish",
    variant: "green" as const,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aec4742d59cb244c9d82d001c7f3fc017393a97f66719a8f3b9a69ac0ac3b0d4?apiKey=8a82faa9db93454483a68c973b38c7b0&",
    label: "Add more changes",
    variant: "dark" as const,
  },
];

export const ProposedChanges: React.FC = () => {
  return (
    <div className="flex flex-col text-base font-medium text-black">
      <div className="w-full min-h-0 bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
      <div className="flex flex-wrap gap-5 justify-between mt-7 w-full text-xl font-semibold tracking-normal leading-snug max-md:max-w-full">
        <div>Proposed changes</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a84928880ecd0644ba5bac5eb24b926839241252d72cb44465a04c82b70056b?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt=""
          className="object-contain shrink-0 aspect-square w-[30px]"
        />
      </div>
      <div className="self-start mt-8 font-semibold leading-7 text-black">
        Multiple choice question
      </div>
      <div className="mt-4 w-full leading-6 text-justify max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Dignissim in cras morbi risus.
        Et ac vitae neque in. Pellentesque ultrices amet purus risus placerat
        arcu. Lectus mi sed condimentum at et felis sit morbi nisl. Porttitor in
        eget in ornare aliquam. Elementum condimentum suscipit purus dignissim.
        Aliquam volutpat quis enim fermentum odio vitae neque sed. Vitae auctor
        et nisl adipiscing lacus eget. Turpis neque placerat imperdiet eget.
      </div>

      {options.map((option, index) => (
        <QuestionOption key={index} {...option} />
      ))}

      <div className="flex flex-wrap gap-5 justify-between mt-12 w-full text-sm leading-6 text-white max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:max-w-full">
          {actions.map((action, index) => (
            <ActionButton key={index} {...action} />
          ))}
        </div>
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7a5ab5f726d0cebeb4ce5aab76f94fea660c889a844003bc17938312ab010430?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          label="Event Timeline"
          variant="dark"
        />
      </div>

      <ApprovalNotification
        name="Shubham"
        message="approved your changes. Any more changes will dismiss the approval."
      />
    </div>
  );
};
