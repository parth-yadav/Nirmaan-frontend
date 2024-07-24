
import React from "react";
import InputField from "./InputField";
import CareerPathSelect from "./CareerPathSelect";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  const inputFields = [
    { label: "Email", type: "email", placeholder: "panditprajjawal@gmail.com" },
    { label: "Full name", type: "text", placeholder: "Prajjawal Pandit" },
    { label: "Phone number", type: "tel", placeholder: "9876543210" },
    { label: "Password", type: "password", placeholder: "******************" },
    {
      label: "Confirm password",
      type: "password",
      placeholder: "******************",
    },
  ];

  return (
    <form className="flex flex-col mt-7 text-sm leading-5 max-md:max-w-full">
      {inputFields.map((field, index) => (
        <InputField key={index} {...field} />
      ))}
      <div className="shrink-0 mt-7 h-px border border-solid bg-slate-100 border-slate-100 max-md:max-w-full" />
      <CareerPathSelect />
      <div className="flex gap-2 self-start mt-6 text-sm font-medium leading-4 text-black">
        <div className="shrink-0 w-3.5 h-3.5 bg-white rounded-sm border  border-solid" />
        <div className="underline">
          Accept <span className="underline">terms and condition</span>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default SignUpForm;
