"use client";

import { useState } from "react";

interface Expense {
  name: string;
  expense: number | null;
}

interface Balance {
  name: string;
  balance: number;
}

export default function External() {
  const [zakaryaExpense, setZakaryaExpense] = useState<number | null>(null);
  const [anzokExpense, setAnzokExpense] = useState<number | null>(null);
  const [reshadExpense, setReshadExpense] = useState<number | null>(null);
  const [settlements, setSettlements] = useState<string[]>([]);

  const calculateSettlements = () => {
    const expenses: Expense[] = [
      { name: "Zakarya", expense: zakaryaExpense || 0 },
      { name: "Anzok", expense: anzokExpense || 0 },
      { name: "Reshad", expense: reshadExpense || 0 },
    ];

    const totalExpense = expenses.reduce(
      (sum, person) => sum + (person.expense || 0),
      0
    );
    const equalShare = totalExpense / expenses.length;

    // Calculate how much each person is owed or owes
    const balances: Balance[] = expenses.map((person) => ({
      name: person.name,
      balance: (person.expense || 0) - equalShare,
    }));

    const settlementsArray: string[] = [];
    let creditors = balances.filter((person) => person.balance > 0);
    let debtors = balances.filter((person) => person.balance < 0);

    creditors.sort((a, b) => b.balance - a.balance);
    debtors.sort((a, b) => a.balance - b.balance);

    while (creditors.length > 0 && debtors.length > 0) {
      const creditor = creditors[0];
      const debtor = debtors[0];
      const amount = Math.min(creditor.balance, -debtor.balance);

      settlementsArray.push(
        `${debtor.name} owes ${creditor.name} $${amount.toFixed(2)}`
      );

      creditor.balance -= amount;
      debtor.balance += amount;

      if (creditor.balance === 0) creditors.shift();
      if (debtor.balance === 0) debtors.shift();
    }

    setSettlements(settlementsArray);
  };

  return (
    <div className="p-6 bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Expense Splitter</h1>
      <div className="space-y-4 w-full max-w-md">
        <div>
          <label className="block font-medium mb-1">Zakarya's Expense:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={zakaryaExpense ?? ""}
            onChange={(e) =>
              setZakaryaExpense(
                e.target.value ? parseFloat(e.target.value) : null
              )
            }
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Anzok's Expense:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={anzokExpense ?? ""}
            onChange={(e) =>
              setAnzokExpense(
                e.target.value ? parseFloat(e.target.value) : null
              )
            }
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Reshad's Expense:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={reshadExpense ?? ""}
            onChange={(e) =>
              setReshadExpense(
                e.target.value ? parseFloat(e.target.value) : null
              )
            }
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          onClick={calculateSettlements}
        >
          Calculate Settlements
        </button>
      </div>
      <h2 className="text-xl font-semibold mt-6">Settlements</h2>
      <ul className="mt-4 space-y-2">
        {settlements.map((settlement, index) => (
          <li key={index} className="bg-white p-3 rounded shadow">
            {settlement}
          </li>
        ))}
      </ul>
    </div>
  );
}
