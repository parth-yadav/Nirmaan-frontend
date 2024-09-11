
import React from "react";

const ActionButton = ({ icon, text, bgColor }) => (
  <button
    className={`flex gap-2 justify-center items-center px-4 py-2 rounded-md ${bgColor}`}
  >
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
    />
    <span className="self-stretch my-auto">{text}</span>
  </button>
);

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-96 w-full text-sm leading-6 text-white max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5">
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f1bdb97692f2c2ca9ffaf0fcbf32e21f3e86ef1540641533a6a5ee61bf939e0d?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          text="Propose changes"
          bgColor="bg-slate-900"
        />
        <ActionButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/84eccbce5f9bc9351256b28b237d49c5a1d7bd10362fed9b3071afa8269e2ccd?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          text="Delete Question"
          bgColor="bg-red-800"
        />
      </div>
      <ActionButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7076f310f05fa0055bac9e78b71bc3422fa9c17f33fe1c36965cd3df486131bf?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
        text="Event Timeline"
        bgColor="bg-slate-900"
      />
    </div>
  );
};

export default ActionButtons;
