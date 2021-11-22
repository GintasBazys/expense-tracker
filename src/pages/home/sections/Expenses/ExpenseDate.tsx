import {
  ExpenseDataDay,
  ExpenseDataMonth,
  ExpenseDataYear,
  ExpenseDateWrapper,
} from "pages/home/elements";
import React from "react";

interface Props {
  date: Date;
}

const ExpenseDate: React.FC<Props> = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <ExpenseDateWrapper>
      <ExpenseDataMonth>{month}</ExpenseDataMonth>
      <ExpenseDataYear>{year}</ExpenseDataYear>
      <ExpenseDataDay>{day}</ExpenseDataDay>
    </ExpenseDateWrapper>
  );
};

export default ExpenseDate;
