
import React from "react";

function ExamItem({ title, questionCount, duration, attempts, status }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/78e7d098dc5378b61b04b06865462c6f12982af4e648b9a56e6f848aeba6966d?apiKey=8a82faa9db93454483a68c973b38c7b0&";
      case "Completed":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/0a131581fe54fed59bdea33bb6bded2a59fb784c910cb2c24f7c2356e075c02e?apiKey=8a82faa9db93454483a68c973b38c7b0&";
      case "Attempted":
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/d6d912e518b76ce38c6d6181604eb56aa1e72b43cb3037de2c7f3b3c2c430c2b?apiKey=8a82faa9db93454483a68c973b38c7b0&";
      default:
        return "https://cdn.builder.io/api/v1/image/assets/TEMP/1659faf0a3970fee07ce04dc85655d5792a78d001fc45398ec67bec8da4ba642?apiKey=8a82faa9db93454483a68c973b38c7b0&";
    }
  };

  return (
    <div className="flex gap-5 items-center self-center mt-2.5 w-full text-base leading-8 text-black max-w-[1039px] max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto self-stretch my-auto font-medium">{title}</div>
      <div className="self-stretch my-auto">{questionCount}</div>
      <div className="flex gap-5 justify-between items-center self-stretch">
        <div className="self-stretch my-auto">{duration}</div>
        <div className="self-stretch my-auto">{attempts}</div>
        <div className="flex gap-1.5 justify-center self-stretch leading-8 whitespace-nowrap">
          <img
            loading="lazy"
            src={getStatusIcon(status)}
            alt=""
            className="shrink-0 my-auto w-5 aspect-square"
          />
          <div>{status}</div>
        </div>
      </div>
    </div>
  );
}

export default ExamItem;
