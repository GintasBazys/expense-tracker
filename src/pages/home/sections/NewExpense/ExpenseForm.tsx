import {
  NewExpenseActions,
  NewExpenseControl,
  NewExpenseControls,
} from "pages/home/elements/ExpenseFormStyles";
import React, { useState } from "react";

interface Props {
  onExpenseDataSave: (enteredData: {
    title: string;
    amount: number;
    date: Date;
  }) => void;
}

const ExpenseForm: React.FC<Props> = ({ onExpenseDataSave }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //showForm
  const [isFormShown, setIsFormShown] = useState(false);

  const handleTitleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount: +amount,
      date: new Date(date),
    };
    onExpenseDataSave(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setIsFormShown(!isFormShown); //hiding the form
  };

  return (
    <div>
      {" "}
      {!isFormShown && (
        <div>
          <button onClick={() => setIsFormShown(!isFormShown)}>
            Add New Expense
          </button>
        </div>
      )}
      {isFormShown && (
        <form onSubmit={handleSubmit}>
          <NewExpenseControls>
            <NewExpenseControl>
              <label>Title</label>
              <input type="text" value={title} onChange={handleTitleChange} />
            </NewExpenseControl>
            <NewExpenseControl>
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={amount}
                onChange={handleAmountChange}
              />
            </NewExpenseControl>
            <NewExpenseControl>
              <label>Date</label>
              <input
                type="date"
                min="201-01-01"
                max="20200-12-31"
                value={date}
                onChange={handleDateChange}
              />
            </NewExpenseControl>
          </NewExpenseControls>
          <NewExpenseActions>
            <button onClick={() => setIsFormShown(!isFormShown)}>Cancel</button>
            <button type="submit">Add expenses</button>
          </NewExpenseActions>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;
