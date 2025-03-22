import React from "react";

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="flex gap-1.5 items-center px-2 py-1.5 text-sm font-medium text-blue-800 bg-blue-200 rounded-md">
      <div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
        >
          <g clipPath="url(#clip0_2901_2257)">
            <path
              d="M6.99984 12.8334C10.2215 12.8334 12.8332 10.2217 12.8332 7.00008C12.8332 3.77842 10.2215 1.16675 6.99984 1.16675C3.77818 1.16675 1.1665 3.77842 1.1665 7.00008C1.1665 10.2217 3.77818 12.8334 6.99984 12.8334Z"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.99984 7.58342C7.322 7.58342 7.58317 7.32225 7.58317 7.00008C7.58317 6.67792 7.322 6.41675 6.99984 6.41675C6.67767 6.41675 6.4165 6.67792 6.4165 7.00008C6.4165 7.32225 6.67767 7.58342 6.99984 7.58342Z"
              stroke="#1E40AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2901_2257">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
};


export default Badge;
