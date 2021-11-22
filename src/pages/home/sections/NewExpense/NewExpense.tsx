import { NewExpenseWrapper } from "pages/home/elements/NewExpenseStyles";
import React from "react";

import ExpenseForm from "./ExpenseForm";

interface Props {
  handleExpenses: (expense: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }) => void;
}

const NewExpense: React.FC<Props> = ({ handleExpenses }) => {
  const handleExpenseDataSave = (enteredData: {
    title: string;
    amount: number;
    date: Date;
  }) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    handleExpenses(expenseData);
  };

  return (
    <NewExpenseWrapper>
      <ExpenseForm onExpenseDataSave={handleExpenseDataSave} />
    </NewExpenseWrapper>
  );
};

export default NewExpense;
