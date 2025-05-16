"use client";

import React, { useState } from "react";


function PrivilegeCategory({
  name,
  initialPermissions,
  allPermissions,
  onPermissionChange,
}) {
  const [permissions, setPermissions] = useState(initialPermissions);

  const togglePermission = (permission) => {
    const newPermissions = permissions.includes(permission)
      ? permissions.filter((p) => p !== permission)
      : [...permissions, permission];
    setPermissions(newPermissions);
    onPermissionChange(name, newPermissions);
  };

  return (
    <div className="mt-5 pb-5 border-b border-gray-300">
      <div className="text-base font-medium text-black mb-2.5">{name}</div>
      <div className="flex flex-wrap gap-2.5 text-sm leading-none text-black">
        {allPermissions.map((permission, index) => (
          <button
            key={index}
           
            onClick={() => togglePermission(permission)}
            className={`px-2 py-1   rounded-lg ${
              permissions.includes(permission) ? "bg-green-200" : "bg-red-200"
            }`}
          >
            {permission}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PrivilegeCategory;
