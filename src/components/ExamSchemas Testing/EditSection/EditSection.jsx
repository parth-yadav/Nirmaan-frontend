
import React from "react";
import InputField from "./InputField";
import MarkingScheme from "./MarkingScheme";
import ActionButton from "./ActionButton";

function EditSection() {
  return (
    <section className="flex overflow-hidden flex-col pt-7 pb-11 bg-white max-w-[600px] shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] ">
      <header className="flex flex-col px-8 pb-2 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between text-lg font-semibold leading-loose text-black max-md:max-w-full">
          <h1>Edit section</h1>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-start w-6 aspect-square"
            alt=""
          />
        </div>
        <InputField label="Name" value="Organic Chemistry" />
        <InputField label="Question pool" value="Chemistry-Question-Bank-005" />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ad414660e28ebff406a769763c8573762cdecf38d1f35601185cf69ee871365?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="object-contain z-10 self-end -mt-8 w-6 aspect-square max-md:mr-2.5"
          alt=""
        />
      </header>
      <main className="flex flex-col px-8 mt-3 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
        <MarkingScheme />
        <InputField label="Total Questions :" value="25" />
        <div className="flex gap-5 self-center  mt-7 w-full font-medium leading-6 text-white">
          <ActionButton type="delete" text="Delete section" />
          <ActionButton type="save" text="Save changes" />
        </div>
      </main>
      <main className="flex flex-col px-8 mt-3 w-full text-sm leading-none max-md:px-5 max-md:max-w-full">
  <MarkingScheme />
  <InputField label="Total Questions :" value="25" />
  <div className="flex justify-center gap-5 mt-7 w-full font-medium leading-6 text-white">
    <ActionButton type="delete" text="Delete section" />
    <ActionButton type="save" text="Save changes" />
  </div>
</main>

    </section>
  );
}

export default EditSection;
