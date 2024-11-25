import React from "react";

export function UserStats() {
  const stats = {
    targetGroups: "NDA, AFCAT, CDS",
    walletBalance: "2",
    examsPurchased: "5",
    lastLogin: "23 Dec 2023, 11:28 AM",
  };

  return (
    <div className="flex gap-5 justify-between text-base">
      <div className="flex flex-col items-start text-gray-700">
        <div>Target groups</div>
        <div className="mt-2.5">Wallet balance</div>
        <div className="self-stretch mt-2.5">Exams purchased</div>
        <div className="mt-2.5">Last login</div>
      </div>
      <div className="flex flex-col items-start text-black">
        <div>{stats.targetGroups}</div>
        <div className="mt-2.5">{stats.walletBalance}</div>
        <div className="mt-2.5">{stats.examsPurchased}</div>
        <div className="self-stretch mt-2.5">{stats.lastLogin}</div>
      </div>
    </div>
  );
}
