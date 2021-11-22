import { Card } from "pages/home/elements/CardStyles";
import {
  ExpenseItemDescription,
  ExpenseItemH2,
  ExpenseItemPrice,
} from "pages/home/elements/ExpenseItemStyles";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import "../../../../utils/ExpenseItem.css";

interface Props {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<Props> = ({ title, amount, date }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <ExpenseItemDescription>
        <ExpenseItemH2>{title}</ExpenseItemH2>
        <ExpenseItemPrice>${amount}</ExpenseItemPrice>
      </ExpenseItemDescription>
    </Card>
  );
};

export default ExpenseItem;
