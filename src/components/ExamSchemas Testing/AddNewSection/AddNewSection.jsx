
import React from "react";
import InputField from "./InputField";
import MarkingScheme from "./MarkingScheme";
import ActionButton from "./ActionButton";

function AddNewSection() {
  return (
    <section className="flex overflow-hidden flex-col py-9 bg-white rounded-3xl max-w-[600px] shadow-[-5px_0px_20px_rgba(0,0,0,0.25)]">
      <header className="flex flex-col px-8 pb-2 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between text-xl font-semibold tracking-normal leading-snug text-black max-md:max-w-full">
          <h1>Add new section</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-start w-6 aspect-square"
            alt=""
          />
        </div>
        <InputField label="Name" placeholder="Section Name" />
        <InputField
          label="Question pool"
          placeholder="Select a Question Pool"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad414660e28ebff406a769763c8573762cdecf38d1f35601185cf69ee871365?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="object-contain z-10 self-end -mt-8 w-6 aspect-square max-md:mr-2.5"
          alt=""
        />
      </header>
     
      <main className="flex flex-col px-8 mt-5 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
  <MarkingScheme />
  <InputField
    label="Total Questions :"
    placeholder="Total Number of Questions"
  />
  <div className="flex gap-5 mt-8 justify-center font-medium leading-6 text-white">
    <ActionButton
      width="w-32"
      text="Save changes"
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/379f927a565248f2f8527fb79bc8b342ec6a43aaa241fabf84822afa7b661501?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
      bgColor="bg-slate-900"
    />
    <ActionButton
      width="w-52"
      text="Discard changes"
      iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3dbd45e6e7ee33e5fe9ed4f7974be29a7958689bc09f380978c683278d84ea3?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
      bgColor="bg-red-700"
    />
  </div>
</main>

    </section>
  );
}

export default AddNewSection;
