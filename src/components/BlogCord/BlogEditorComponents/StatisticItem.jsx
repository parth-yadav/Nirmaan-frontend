
import React from "react";

const StatisticItem = ({ icon, text }) => (
  <div className="flex gap-1.5 mt-2.5">
    <img
      loading="lazy"
      src={icon}
      className="object-contain shrink-0 aspect-square w-[18px]"
      alt=""
    />
    <div className="my-auto">{text}</div>
  </div>
);

export default StatisticItem;
