"use client";

import React, { useState } from "react";
import Timeline from "./Timeline";
import { Button } from "@/components/ui/button";

export default function TimelineToggleButton() {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  const toggleTimeline = () => {
    setIsTimelineVisible(!isTimelineVisible);
  };

  const closeTimeline = () => {
    setIsTimelineVisible(false);
  };

  return (
    <div className="relative">
      <Button onClick={toggleTimeline} className="bg-black hover:bg-gray-700 ">
        {isTimelineVisible ? "Hide Timeline" : "Event Timeline"}
      </Button>
      {isTimelineVisible && (
        <div className="fixed inset-y-0 right-0 z-50">
          <Timeline close={closeTimeline} />
        </div>
      )}
    </div>
  );
}
