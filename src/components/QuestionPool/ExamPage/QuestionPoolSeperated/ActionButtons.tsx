import type React from "react";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import ActionButton from "./ActionButton";
import TimelineToggleButton from "../../Timeline/EventTimelineButton";
import Timeline from "../../Timeline/Timeline";

interface ActionButtonsProps {
  onProposeChanges: () => void;
  onDeleteQuestion: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onProposeChanges,
  onDeleteQuestion,
}) => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const displayEventTimeline = () => {
    setIsTimelineVisible((prev) => !prev);
    console.log("Toggling event timeline");
  };

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-between mt-8 w-full text-sm leading-6 text-white">
        <div className="flex gap-5">
          <ActionButton
            icon={<Edit className="w-4 h-4" />}
            text="Propose changes"
            bgColor="bg-slate-900"
            onClick={onProposeChanges}
          />
          <ActionButton
            icon={<Trash2 className="w-4 h-4" />}
            text="Deprecate"
            bgColor="bg-red-800"
            onClick={onDeleteQuestion}
          />
        </div>

        <div className="flex gap-5">
          <TimelineToggleButton  />
        </div>
      </div>
      {isTimelineVisible && (
        <div className="absolute inset-y-0 right-0 w-full max-w-xl overflow-auto z-50">
          <Timeline close={displayEventTimeline} />
        </div>
      )}
    </>
  );
};

export default ActionButtons;
