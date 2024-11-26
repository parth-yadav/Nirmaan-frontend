import * as React from "react";

export function WalletBalance({ balance }) {
  return (
    <section className="flex flex-wrap gap-5 justify-between px-5 py-3 mt-8 text-lg font-semibold leading-loose text-black bg-gray-100 rounded-xl max-md:max-w-full">
      <h2>Wallet Balance</h2>
      <p>₹ {balance.toLocaleString()}</p>
    </section>
  );
}
