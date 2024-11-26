import React from "react";

export function UserHeader({ data, close }) {
  const statusStyles = {
    pending: "bg-yellow-200 text-yellow-800",
    processing: "bg-blue-200 text-blue-800",
    success: "bg-green-200 text-green-800",
    failed: "bg-red-200 text-red-800",
  };
  return (
    <div className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
        <div className="flex flex-col">
          <div
            className={`flex gap-1.5 justify-center items-center self-start px-2 py-1.5 text-sm font-medium leading-none whitespace-nowrap rounded-md ${
              statusStyles[data.status] || "bg-gray-200 text-gray-800"
            }`}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/af822267294a81cc2eccca02fac71c318e4c603ec61a9fc6debbd6662ed45c7c?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
              alt="Status indicator"
            />
            <div className="self-stretch my-auto">{data.status}</div>
          </div>
          <div className="mt-4 text-3xl font-semibold tracking-tight leading-tight text-black">
            {data.name}
          </div>
        </div>
        <button onClick={close}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain shrink-0 self-start w-6 aspect-square"
            alt="User avatar"
          />
        </button>
      </div>
    </div>
  );
}
