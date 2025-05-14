import React from "react";
import FormSection from "./FormSection";

function InputField({ label, placeholder }) {
  return (
    <FormSection label={label}>
      <input
        type="text"
        placeholder={placeholder}
        className="justify-center items-start px-2.5 py-3.5 mt-1.5 text-xl text-black rounded-lg bg-neutral-100 max-md:pr-5 max-md:max-w-full w-full"
      />
    </FormSection>
  );
}

export default InputField;
