
import React from "react";

function PrivilegeCategory({ name, permissions }) {
  return (
    <>
      <div className="shrink-0 self-stretch mt-5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
      <div className="mt-5 text-base font-medium text-black">{name}</div>
      <div className="flex gap-2.5 mt-2.5 max-w-full text-sm leading-none text-black whitespace-nowrap w-[341px]">
        {permissions.map((permission, index) => (
          <div
            key={index}
            className={`gap-1.5 self-stretch px-1.5 ${
              permission === "Read" ? "bg-green-200" : "bg-red-200"
            } rounded-md`}
          >
            {permission}
          </div>
        ))}
      </div>
    </>
  );
}

export default PrivilegeCategory;
