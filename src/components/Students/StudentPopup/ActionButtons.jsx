import React from "react";

export function ActionButtons() {
  return (
    <div className="flex gap-5 justify-between mt-16 max-w-full text-sm leading-6 text-white w-[247px] max-md:mt-10">
      <button
        className="gap-2.5 self-stretch px-4 py-2 rounded-md bg-slate-900 hover:bg-slate-800 focus:ring-2 focus:ring-slate-400"
        aria-label="Manage wallet"
      >
        Manage Wallet
      </button>
      <button
        className="gap-2.5 self-stretch px-4 py-2 bg-red-800 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-400"
        aria-label="Ban user"
      >
        Ban User
      </button>
    </div>
  );
}
