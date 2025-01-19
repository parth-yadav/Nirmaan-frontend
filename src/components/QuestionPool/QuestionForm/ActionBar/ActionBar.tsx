import * as React from "react";
import { ActionButton } from "./ActionButton";
import { StatusIndicator } from "./StatusIndicator";
import TimelineToggleButton from "../../Timeline/EventTimelineButton";

const actions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3f2af772c831d032bf0a06bed85c4bfefdc19160a8d678d4a429aa31cf71673?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Request approval",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/42b5df677abf4c530c6c6cccac27518efe02d64df0f65807bf1d86561681d1bc?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Discard changes",
    variant: "danger",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/379f927a565248f2f8527fb79bc8b342ec6a43aaa241fabf84822afa7b661501?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Save draft",
  },
];

export function ActionBar() {
  return (
    <div className="flex flex-wrap gap-10 text-sm rounded-none">
      <div className="flex flex-wrap gap-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-5 font-medium leading-6 text-white max-md:max-w-full">
          {actions.map((action, index) => (
            <ActionButton key={index} icon={action.icon} label={action.label} />
          ))}
        </div>
        <StatusIndicator />
      </div>
      <div className="text-white">
        <TimelineToggleButton />
      </div>
    </div>
  );
}

