import * as React from "react";
import { TransactionTypeToggle } from "./TransactionTypeToggle";

export function TransactionForm() {
  const [transactionType, setTransactionType] = React.useState("credit");

  return (
    <form className="flex flex-col px-5 py-6 mt-5 w-full rounded-xl border border-gray-300 border-solid max-md:max-w-full">
      <TransactionTypeToggle
        selectedType={transactionType}
        onTypeChange={setTransactionType}
      />

      <div className="flex flex-col mt-4 w-full max-md:max-w-full">
        <label
          htmlFor="amount"
          className="text-sm font-medium leading-none text-slate-900"
        >
          Amount
        </label>
        <div className="flex gap-2 items-start mt-1.5 w-full text-base text-slate-400 max-md:max-w-full">
          <input
            type="number"
            id="amount"
            placeholder="Amount to add to the wallet"
            className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] py-2 pr-14 pl-3 bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
          />
        </div>
      </div>

      <div className="flex flex-col mt-5 w-full text-sm min-h-[97px] max-md:max-w-full">
        <label
          htmlFor="reason"
          className="font-medium leading-none text-slate-900"
        >
          Reason
        </label>
        <textarea
          id="reason"
          placeholder="Amount to add to the wallet"
          className="flex flex-1 gap-2 items-start mt-1.5 py-2 pr-14 pl-3 w-full bg-white rounded-md border border-solid border-slate-300 max-md:pr-5 max-md:max-w-full"
        />
        <p className="mt-1.5 leading-none text-slate-500">
          The reason will also be visible to student in transaction history.
        </p>
      </div>

      <button
        type="submit"
        className="flex gap-2 justify-center items-center self-start px-4 py-2 mt-5 text-sm font-medium leading-6 text-white whitespace-nowrap rounded-md bg-slate-900"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab315ab1999cfcb31df705adfa41ad63b9e2926632aee96a0fd5862b58629841?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
        />
        <span className="self-stretch my-auto">Submit</span>
      </button>
    </form>
  );
}
