"use client";

import React, { useState } from "react";
import PrivilegeCategory from "./PrivilegeCategory";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Save, MoreVertical } from "lucide-react";

function PrivilegesSection() {
  const [privilegeCategories, setPrivilegeCategories] = useState([
    {
      name: "Exam schema",
      permissions: ["Create", "Read", "Update"],
    },
    {
      name: "Question Pools",
      permissions: ["Read", "Update", "Manage"],
    },
    {
      name: "Individual Questions",
      permissions: ["Create", "Read", "Update", "Deprecate"],
    },
    {
      name: "Students",
      permissions: ["Read", "Update"],
    },
    {
      name: "Team members",
      permissions: ["Create", "Read", "Manage"],
    },
    {
      name: "Blogs",
      permissions: ["Create", "Read", "Update", "Deprecate", "Manage"],
    },
  ]);

  const allPermissions = ["Create", "Read", "Update", "Deprecate", "Manage"];
  const [isChanged, setIsChanged] = useState(false);

  const handlePermissionChange = (categoryName, newPermissions) => {
    setPrivilegeCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, permissions: newPermissions }
          : category
      )
    );
    setIsChanged(true);
  };

  const handleSave = () => {
    console.log("Saving changes:", privilegeCategories);
    setIsChanged(false);
  };

  const handleBulkAction = (action) => {
    let newCategories;
    switch (action) {
      case "addAll":
        newCategories = privilegeCategories.map((category) => ({
          ...category,
          permissions: allPermissions,
        }));
        break;
      case "removeAll":
        newCategories = privilegeCategories.map((category) => ({
          ...category,
          permissions: [],
        }));
        break;
      case "banUser":
        console.log("User banned");
        return;
      default:
        return;
    }
    setPrivilegeCategories(newCategories);
    setIsChanged(true);
  };

  return (
    <section className="px-4 md:px-8 mt-6 w-full">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full ">
          <div className="w-full  mt-5 md:mt-0">
            <div className="flex gap-5 text-sm font-medium leading-6 text-white whitespace-nowrap">
              <Button
                onClick={handleSave}
                disabled={!isChanged}
                className="flex gap-2 justify-center items-center px-4 py-2 rounded-xl hover:bg-gray-800 bg-black"
              >
                <Save className="w-4 h-4" />
                <span className="self-stretch my-auto">Save</span>
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-black w-10 h-10 p-0 rounded-xl hover:bg-gray-800"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-56 bg-white">
                  <div className="grid gap-4">
                    <Button onClick={() => handleBulkAction("addAll")}>
                      Add all privileges
                    </Button>
                    <Button onClick={() => handleBulkAction("removeAll")}>
                      Remove all privileges
                    </Button>
                    <Button onClick={() => handleBulkAction("banUser")}>
                      Ban user
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <h2 className="text-xl font-semibold tracking-normal leading-snug text-black mb-5">
            Privileges
          </h2>
          {privilegeCategories.map((category, index) => (
            <PrivilegeCategory
              key={index}
              name={category.name}
              initialPermissions={category.permissions}
              allPermissions={allPermissions}
              onPermissionChange={handlePermissionChange}
            />
          ))}
        </div>
        {/* <div className="w-full  mt-5 md:mt-0">
          <div className="flex gap-5 text-sm font-medium leading-6 text-white whitespace-nowrap">
            <Button
              onClick={handleSave}
              disabled={!isChanged}
              className="flex gap-2 justify-center items-center px-4 py-2 rounded-xl hover:bg-gray-800 bg-black"
            >
              <Save className="w-4 h-4" />
              <span className="self-stretch my-auto">Save</span>
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-black w-10 h-10 p-0 rounded-xl hover:bg-gray-800"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 bg-white">
                <div className="grid gap-4">
                  <Button onClick={() => handleBulkAction("addAll")}>
                    Add all privileges
                  </Button>
                  <Button onClick={() => handleBulkAction("removeAll")}>
                    Remove all privileges
                  </Button>
                  <Button onClick={() => handleBulkAction("banUser")}>
                    Ban user
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default PrivilegesSection;
