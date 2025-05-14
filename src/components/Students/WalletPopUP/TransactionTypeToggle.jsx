import * as React from "react";

export function TransactionTypeToggle({ selectedType, onTypeChange }) {
  return (
    <div className="flex flex-wrap items-start p-1.5 w-full text-sm font-medium leading-none whitespace-nowrap rounded-lg bg-slate-100 max-md:max-w-full">
      <button
        type="button"
        onClick={() => onTypeChange("credit")}
        className={`flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 text-center rounded min-w-[240px] ${
          selectedType === "credit"
            ? "bg-white text-slate-900"
            : "text-slate-700"
        }`}
      >
        Credit
      </button>
      <button
        type="button"
        onClick={() => onTypeChange("debit")}
        className={`flex-1 shrink gap-2.5 self-stretch px-3 py-1.5 text-center rounded min-w-[240px] ${
          selectedType === "debit"
            ? "bg-white text-slate-900"
            : "text-slate-700"
        }`}
      >
        Debit
      </button>
    </div>
  );
}
