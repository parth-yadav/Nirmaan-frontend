// import React from "react";
// import TimelineItem from "./TimelineItem";
// import TimelineComment from "./TimelineComment";
// import MessageInput from "./MessageInput";

// const timelineData = [
//   {
//     author: "Prajjawal",
//     action: "created this question",
//     timestamp: "8:47 pm, 16 Jun 2023",
//   },
//   {
//     author: "Prajjawal",
//     action: "updated this question",
//     details: ["Updated question type", "Added options", "Changed answer"],
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
//   {
//     author: "Shubham",
//     action: "requested changes",
//     comment:
//       "Lorem ipsum dolor sit amet consectetur. Venenatis non volutpat amet lorem risus facilisis non varius. Sed suscipit risus tortor pharetra vitae velit. Nunc nunc fames diam quam non tortor. Mattis amet ullamcorper metus ut congue malesuada feugiat nunc. Arcu eu.",
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
//   {
//     author: "Prajjawal",
//     action: "updated this question",
//     details: ["Updated question type", "Added options", "Changed answer"],
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
//   {
//     author: "Shubham",
//     action: "approved the changes",
//     timestamp: "8:47 pm, 16 Jun 2023",
//   },
//   {
//     author: "Prajjawal",
//     action: "published the changes",
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
//   {
//     author: "Prajjawal",
//     action: "updated this question",
//     details: ["Updated question type", "Added options", "Changed answer"],
//     status: "Waiting for approval",
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
//   {
//     author: "Shubham",
//     action: "commented in timeline",
//     comment:
//       "Lorem ipsum dolor sit amet consectetur. Venenatis non volutpat amet lorem risus facilisis non varius. Sed suscipit risus tortor pharetra vitae velit. Nunc nunc fames diam quam non tortor. Mattis amet ullamcorper metus ut congue malesuada feugiat nunc. Arcu eu.",
//     timestamp: "8:47 pm, 25 Jun 2023",
//   },
// ];

// function Timeline() {
//   return (
//     <section className="flex flex-col rounded-none max-w-[700px]">
//       <div className="flex flex-col py-8 w-full bg-white shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:max-w-full">
//         <header className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
//           <div className="flex gap-2.5 self-start text-xl font-semibold tracking-normal leading-snug whitespace-nowrap">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/135bc6ba1cac0e6fdde6dbb6e19fb3bf2510b32037a56d2d12202bb1953acdba?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
//               className="object-contain shrink-0 my-auto w-6 aspect-square"
//               alt=""
//             />
//             <h1>Timeline</h1>
//           </div>
//         </header>
//         <main className="flex flex-col px-8 mt-7 w-full max-md:px-5 max-md:max-w-full">
//           {timelineData.map((item, index) => (
//             <TimelineItem key={index} {...item} />
//           ))}
//         </main>
//         <footer className="flex flex-col w-full max-md:max-w-full">
//           <div className="w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
//           <MessageInput />
//         </footer>
//       </div>
//       <style jsx>{`
//         builder-component {
//           max-width: none !important;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Timeline;

import React from "react";
import { SendHorizonal } from "lucide-react";

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
              <button
                type="submit"
                className="ml-2 w-9 h-9 bg-blue-300 rounded-md flex items-center justify-center"
                aria-label="Send message"
              >
                <SendHorizonal className="text-white w-5 h-5" />
                <span className="sr-only">Send</span>
              </button>
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

export default function Timeline() {
  return (
    <section className="flex flex-col rounded-none max-w-[700px]">
      <div className="flex flex-col py-8 w-full bg-white shadow-[-5px_0px_20px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <header className="flex flex-col px-8 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2.5 self-start text-xl font-semibold tracking-normal leading-snug whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/135bc6ba1cac0e6fdde6dbb6e19fb3bf2510b32037a56d2d12202bb1953acdba?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
              className="object-contain shrink-0 my-auto w-6 aspect-square"
              alt=""
            />
            <h1>Timeline</h1>
          </div>
        </header>
        <main className="flex flex-col px-8 mt-7 w-full max-md:px-5 max-md:max-w-full">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </main>
        <footer className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full bg-gray-300 border border-gray-300 border-solid min-h-[1px] max-md:max-w-full" />
          <MessageInput />
        </footer>
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </section>
  );
}
