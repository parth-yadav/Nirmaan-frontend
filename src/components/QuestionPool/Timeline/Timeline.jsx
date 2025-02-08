import React from "react";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";

function TimelineItem({ author, action, details, comment, status, timestamp }) {
  return (
    <article className="flex gap-2.5 mb-5 relative">
      <div className="relative flex-shrink-0 w-5">
        <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-zinc-300" />
        {details && (
          <div className="absolute top-5 bottom-0 left-1/2 w-px bg-gray-300 -translate-x-1/2" />
        )}
      </div>
      <div className="flex flex-col items-start text-base leading-7 text-black flex-grow min-w-0">
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
      <time className="text-xs font-medium leading-loose text-gray-500 ml-auto whitespace-nowrap">
        {timestamp}
      </time>
    </article>
  );
}

function TimelineComment({ comment }) {
  return (
    <div className="self-end px-2.5 pt-3 pb-5 mt-2.5 max-w-full text-xs leading-4 text-gray-700 bg-gray-100 rounded-md w-[510px] max-md:pr-5 max-md:max-w-full">
      {comment}
    </div>
  );
}

function MessageInput() {
  return (
    <form className="flex flex-wrap gap-1 mt-5 mr-8 ml-8 text-sm max-md:mr-2.5">
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full rounded-md max-md:max-w-full">
            <label
              htmlFor="timelineMessage"
              className="self-start font-medium leading-none text-black mb-1"
            >
              Send a message to timeline
            </label>
            <div className="flex items-center">
              <input
                id="timelineMessage"
                type="text"
                className="flex-1 px-3 py-2 leading-none bg-white rounded-md border border-solid border-slate-300 text-slate-400"
                placeholder="Type your message here"
              />
              <Button type="submit" size="icon" className=" bg-blue-300 ml-2">
                <SendHorizonal className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const timelineData = [
  {
    author: "Prajjawal",
    action: "created this question",
    timestamp: "8:47 pm, 16 Jun 2023",
  },
  {
    author: "Prajjawal",
    action: "updated this question",
    details: ["Updated question type", "Added options", "Changed answer"],
    timestamp: "8:47 pm, 25 Jun 2023",
  },
  {
    author: "Shubham",
    action: "requested changes",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Venenatis non volutpat amet lorem risus facilisis non varius. Sed suscipit risus tortor pharetra vitae velit. Nunc nunc fames diam quam non tortor. Mattis amet ullamcorper metus ut congue malesuada feugiat nunc. Arcu eu.",
    timestamp: "8:47 pm, 25 Jun 2023",
  },
  {
    author: "Prajjawal",
    action: "updated this question",
    details: ["Updated question type", "Added options", "Changed answer"],
    timestamp: "8:47 pm, 25 Jun 2023",
  },
  {
    author: "Shubham",
    action: "approved the changes",
    timestamp: "8:47 pm, 16 Jun 2023",
  },
  {
    author: "Prajjawal",
    action: "published the changes",
    timestamp: "8:47 pm, 25 Jun 2023",
  },
  {
    author: "Prajjawal",
    action: "updated this question",
    details: ["Updated question type", "Added options", "Changed answer"],
    status: "Waiting for approval",
    timestamp: "8:47 pm, 25 Jun 2023",
  },
  {
    author: "Shubham",
    action: "commented in timeline",
    comment:
      "Lorem ipsum dolor sit amet consectetur. Venenatis non volutpat amet lorem risus facilisis non varius. Sed suscipit risus tortor pharetra vitae velit. Nunc nunc fames diam quam non tortor. Mattis amet ullamcorper metus ut congue malesuada feugiat nunc. Arcu eu.",
    timestamp: "8:47 pm, 25 Jun 2023",
  },
];

export default function Timeline({ close }) {
  return (
    <div className="flex flex-col bg-white w-[35vw] fixed inset-y-0 right-0 z-50  h-screen shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:max-w-full">
      {/* Header - Fixed at Top */}
      <header className="sticky top-0 bg-white z-10 flex flex-col px-8 py-4 shadow-md max-md:px-5">
        <div className="flex gap-2.5 text-xl font-semibold items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/135bc6ba1cac0e6fdde6dbb6e19fb3bf2510b32037a56d2d12202bb1953acdba?apiKey=8a82faa9db93454483a68c973b38c7b0"
            className="object-contain w-6 aspect-square"
            alt=""
          />
          <h1 className="text-black">Timeline</h1>
          <Button
            onClick={close}
            size="icon"
            variant="ghost"
            className="ml-auto"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="h-4 w-4"
              alt="Close"
            />
          </Button>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-auto px-8 mt-7 max-md:px-5">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </main>

      {/* Footer - Fixed at Bottom */}
      <footer className="sticky pb-4 bottom-0 bg-white z-10 flex flex-col w-full shadow-md">
        <div className="w-full bg-gray-300 border border-gray-300 min-h-[1px]" />
        <MessageInput />
      </footer>
    </div>
  );
}
