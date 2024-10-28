import React from "react";
import TimelineComment from "./TimelineComment";

function TimelineItem({ author, action, details, comment, status, timestamp }) {
  return (
    <article className="flex gap-2.5 mb-5">
      <div className="flex flex-col">
        <div className="flex shrink-0 w-5 h-5 rounded-full bg-zinc-300" />
        {details && (
          <div className="shrink-0 self-center w-px bg-gray-300 border border-gray-300 border-solid h-[82px]" />
        )}
      </div>
      <div className="flex flex-col items-start text-base leading-7 text-black">
        <p>
          <strong>{author}</strong> {action}
        </p>
        {details && (
          <ul className="mt-2.5 text-xs font-medium leading-5 text-gray-500">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {status && <p className="mt-2">{status}</p>}
        {comment && <TimelineComment comment={comment} />}
      </div>
      <time className="self-end text-xs font-medium leading-loose text-gray-500">
        {timestamp}
      </time>
    </article>
  );
}

export default TimelineItem;
