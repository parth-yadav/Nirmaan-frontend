"use client";

import React, { useState, useEffect } from "react";
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

  // Prevent body scrolling when Timeline is open
  useEffect(() => {
    if (isTimelineVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isTimelineVisible]);

  return (
    <div className="relative">
      <Button
        onClick={toggleTimeline}
        className="bg-black rounded-lg hover:bg-gray-700"
      >
        {isTimelineVisible ? "Hide Timeline" : "Event Timeline"}
      </Button>

      {isTimelineVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Timeline close={closeTimeline} />
        </div>
      )}
    </div>
  );
}
