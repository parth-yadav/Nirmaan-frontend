import React from "react";
import TextInput from "./TextInput";

const TagInput = ({ label, placeholder, helperText }) => {
  return (
    <div className="flex flex-col self-stretch w-full min-h-[183px] max-md:max-w-full">
      <TextInput label={label} placeholder={placeholder} />
      <p className="mt-1.5 leading-none text-slate-500">{helperText}</p>
      <div className="flex z-10 gap-1.5 justify-center items-center px-2 py-1.5 mt-0 leading-none text-blue-800 bg-blue-200 rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/57a98b0fa8c3c04ad0d81374d7146e3b8689df53645124308c2bba1e0b435642?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        />
        <span className="self-stretch my-auto">Tag1 X</span>
      </div>
      <div className="flex z-10 gap-1.5 justify-center items-center px-2 py-1.5 -mt-6 ml-24 leading-none text-blue-800 bg-blue-200 rounded-lg max-md:ml-2.5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ad190a37d35e3ed8d730f21da78f775566ee442188e351a8b0b3422f94dc33?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
        />
        <span className="self-stretch my-auto">Some other tag X</span>
      </div>
    </div>
  );
};

export default TagInput;
