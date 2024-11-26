import React from "react";

function PrivilegeCategory({ name, permissions, allPermissions }) {
  return (
    <>
      <div className="shrink-0 self-stretch mt-5 h-px bg-gray-300 border border-gray-300 border-solid max-md:max-w-full" />
      <div className="mt-5 text-base font-medium text-black">{name}</div>
      <div className="flex gap-2.5 mt-2.5 max-w-full text-sm leading-none text-black whitespace-nowrap w-[341px]">
        {allPermissions.map((permission, index) => (
          <div
            key={index}
            className={`gap-1.5 self-stretch px-1.5 py-1.5 rounded-lg ${
              permissions.includes(permission) ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {permission}
          </div>
        ))}
      </div>
    </>
  );
}

export default PrivilegeCategory;
