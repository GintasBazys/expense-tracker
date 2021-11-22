import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

interface Props {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  const [expenseYear, setExpenseYear] = useState(
    new Date().getFullYear().toString()
  );

  const handleExpenseYear = (year: string) => {
    setExpenseYear(year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expenseYear === expense.date.getFullYear().toString()
  );

  return (
    <div>
      <ExpensesFilter
        currentYear={expenseYear}
        handleExpenseYear={handleExpenseYear}
      />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </div>
  );
};

export default Expenses;
