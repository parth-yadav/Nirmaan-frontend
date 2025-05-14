import * as React from "react";
import { ActionButton } from "./ActionButton";
import TimelineToggleButton from "@/components/QuestionPool/Timeline/EventTimelineButton";

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
];

export const ActionButtonGroup: React.FC = () => {
  return (
    <div className="flex flex-wrap mt-6 gap-10 text-sm font-medium leading-6 text-white rounded-lg">
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
      <TimelineToggleButton />
    </div>
  );
};
