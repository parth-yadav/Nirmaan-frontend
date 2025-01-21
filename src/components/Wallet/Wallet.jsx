
import React from "react";

import WalletTable from "./wallet-table/wallet-table"
function Wallet() {
  return (
    <div className=" bg-white max-md:pr-5 dark:bg-black dark:text-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">

        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <main className="flex flex-col mt-14 text-base text-black max-md:mt-10 max-md:max-w-full">
            <h1 className="text-3xl font-semibold tracking-tight leading-9 max-md:max-w-full dark:text-white">
              Wallet
            </h1>
            <section className="mt-11 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-xl font-semibold tracking-normal leading-7 text-black dark:bg-black dark:text-white">
                Current Balance
              </h2>
              <p className="mt-3 text-3xl font-semibold tracking-tight leading-9 text-black max-md:max-w-full dark:bg-black dark:text-white">
                ₹ 2500
              </p>
              <button  className="px-4 rounded-xl py-2 mt-8 text-sm font-medium leading-6 text-white rounded-md bg-slate-900 dark:text-black dark:bg-white">
                Add Money
              </button>
            </section>
            < WalletTable/>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
