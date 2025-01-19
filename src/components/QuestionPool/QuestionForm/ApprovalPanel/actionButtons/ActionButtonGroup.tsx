import * as React from "react";
import { ActionButton } from "./ActionButton";

const actionData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b3f2af772c831d032bf0a06bed85c4bfefdc19160a8d678d4a429aa31cf71673?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Approve",
    variant: "primary" as const,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f53bcb2598674b31e86819e89b22a89a99c17c1f03edd5c1bc9af2ae8bc6b841?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Request changes",
    variant: "secondary" as const,
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7076f310f05fa0055bac9e78b71bc3422fa9c17f33fe1c36965cd3df486131bf?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0",
    label: "Event Timeline",
    variant: "secondary" as const,
  },
];

export const ActionButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 text-sm font-medium leading-6 text-white rounded-md">
      <div className="flex gap-5">
        {actionData.slice(0, 2).map((action, index) => (
          <ActionButton
            key={index}
            icon={action.icon}
            label={action.label}
            variant={action.variant}
          />
        ))}
      </div>
      <ActionButton
        icon={actionData[2].icon}
        label={actionData[2].label}
        variant={actionData[2].variant}
      />
    </div>
  );
};
