import {
  ExpensesListFallback,
  ExpensesListWrapper,
} from "pages/home/elements/ExpenseListStyles";
import React from "react";

import ExpenseItem from "./ExpenseItem";

interface Props {
  filteredExpenses: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const ExpensesList: React.FC<Props> = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <ExpensesListFallback>Found no expenses.</ExpensesListFallback>;
  }

  return (
    <ExpensesListWrapper>
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ExpensesListWrapper>
  );
};

export default ExpensesList;
