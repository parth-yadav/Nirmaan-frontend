import React from "react";
import FormSection from "./FormSection";

function SelectField({ label, options }) {
  return (
    <FormSection label={label}>
      <div className="flex gap-5 justify-between py-3 pr-12 pl-2.5 mt-1.5 text-xl text-black rounded-lg bg-neutral-100 max-md:pr-5">
        <select className="flex-auto bg-transparent">
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/44d56064bb2f44461f4ee5fb121152f2aa9b70b09fa569073805043c9ba752b1?apiKey=8a82faa9db93454483a68c973b38c7b0&"
          alt="Dropdown arrow"
          className="shrink-0 w-4 aspect-square"
        />
      </div>
    </FormSection>
  );
}

export default SelectField;
