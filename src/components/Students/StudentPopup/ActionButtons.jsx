import React, { useState } from "react";
import StudentWalletManager from "../WalletPopUP/StudentWalletManager";

export function ActionButtons() {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-5 justify-between mt-16 max-w-full text-sm leading-6 w-[247px] max-md:mt-10">
        <div className="flex gap-5">
          <button
            className="gap-2.5 self-stretch px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-2 focus:ring-slate-400 text-white"
            aria-label="Manage wallet"
            onClick={() => setIsWalletOpen(true)}
          >
            Manage Wallet
          </button>
          <button
            className="gap-2.5 self-stretch px-4 py-2 bg-red-800 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400 text-white"
            aria-label="Ban user"
          >
            Ban User
          </button>
        </div>
      </div>

      {isWalletOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relativep-6 rounded-lg shadow-md">
            <StudentWalletManager close={() => setIsWalletOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
