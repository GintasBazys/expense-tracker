import React, { useState } from "react";
import { DUMMY_EXPENSES } from "utils/expenseData";

import NewExpense from "./sections/NewExpense/NewExpense";
import Expenses from "./sections/Expenses/Expenses";
import { ExpensesWrapper } from "./elements/ExpensesStyles";

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
      <ExpensesWrapper>
        <Expenses expenses={expenses} />
      </ExpensesWrapper>
    </div>
  );
};

export default Landing;
