
import React from "react";

function ProfileHeader() {
  return (
    <header className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <div className="flex flex-col">
          <div className="flex gap-1.5 justify-center items-center self-start px-2 py-1.5 text-sm font-medium leading-none text-blue-800 whitespace-nowrap bg-blue-200 rounded-md">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/360d4c4204d0cba5e54773543339b27f6a5057e31932fb1f5631f7862fe6640a?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
              alt=""
            />
            <div className="self-stretch my-auto">Active</div>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight leading-tight text-black">
            Prajjawal Pandit
          </h1>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          className="object-contain shrink-0 self-start w-6 aspect-square"
          alt=""
        />
      </div>
    </header>
  );
}

export default ProfileHeader;
