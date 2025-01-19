import * as React from "react";
import { ApprovalNotificationProps } from "./types";

export const ApprovalNotification: React.FC<ApprovalNotificationProps> = ({
  name,
  message,
}) => {
  return (
    <div className="flex flex-wrap gap-2.5 self-start mt-2.5 text-sm leading-6">
      <div className="flex shrink-0 my-auto w-5 h-5 rounded-full bg-zinc-300" />
      <div className="flex-auto max-md:max-w-full">
        <span className="font-bold">{name}</span> {message}
      </div>
    </div>
  );
};
