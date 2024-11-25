import * as React from "react";
import { WalletBalance } from "./WalletBalance";
import { TransactionForm } from "./TransactionForm";

function StudentWalletManager({close}) {
  return (
    <main className="flex  border overflow-hidden flex-col px-8 pt-8 pb-12 bg-white rounded-3xl max-w-[600px] max-md:px-5">
      <header className="flex flex-wrap gap-5 justify-between text-xl font-semibold tracking-normal leading-snug text-black max-md:max-w-full">
        <h1>Manage Student Wallet</h1>
        <button onClick={close}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75971904da857823c437cb2eb2c6ef1b8ab27ab6db876fa727bf66c43e016bc6?placeholderIfAbsent=true&apiKey=8a82faa9db93454483a68c973b38c7b0"
            alt=""
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
        </button>
      </header>
      <WalletBalance balance={5300} />
      <TransactionForm />
    </main>
  );
}

export default StudentWalletManager;
