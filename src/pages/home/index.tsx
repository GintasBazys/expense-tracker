import React, { useState } from "react";
import { DUMMY_EXPENSES } from "utils/expenseData";

import NewExpense from "./sections/NewExpense/NewExpense";
import Expenses from "./sections/Expenses/Expenses";

const Landing = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleExpenses = (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense handleExpenses={handleExpenses} />
      <div className="expenses">
        <Expenses expenses={expenses} />
      </div>
    </div>
  );
};

export default Landing;
