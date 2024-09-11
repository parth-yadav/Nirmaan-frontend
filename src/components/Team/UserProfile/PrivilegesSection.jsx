
import React from "react";
import PrivilegeCategory from "./PrivilegeCategory";

function PrivilegesSection() {
  const privilegeCategories = [
    {
      name: "Exam schema",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
    {
      name: "Question Pools",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
    {
      name: "Individual Questions",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
    {
      name: "Students",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
    {
      name: "Team members",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
    {
      name: "Blogs",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
  ];

  return (
    <section className="flex flex-col items-start px-8 mt-6 w-full max-md:px-5 max-md:max-w-full">
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
            <h2 className="self-start text-xl font-semibold tracking-normal leading-snug text-black">
              Privileges
            </h2>
            {privilegeCategories.map((category, index) => (
              <PrivilegeCategory
                key={index}
                name={category.name}
                permissions={category.permissions}
              />
            ))}
          </div>
          <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 w-full text-sm font-medium leading-6 text-white whitespace-nowrap max-md:mt-10">
              <button className="flex gap-2 justify-center items-center px-4 py-2 rounded-md bg-slate-900">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6e1dfd44ce00d294d749dc330a99681dc425962904dd74dcc7ec7dc811bf4bf?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                  alt=""
                />
                <span className="self-stretch my-auto">Save</span>
              </button>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b9edbb738221fd23c94d15ee11cb63b0f3828e32a7b34ee44db960ecf9445a9?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
                className="object-contain shrink-0 w-10 rounded-lg border border-gray-300 border-solid aspect-square"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivilegesSection;
