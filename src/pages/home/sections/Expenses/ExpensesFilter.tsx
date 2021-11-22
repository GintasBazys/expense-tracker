import {
  ExpensesFilterControl,
  ExpensesFilterWrapper,
} from "pages/home/elements/ExpensesFilterStyles";
import React from "react";

interface Props {
  handleExpenseYear: (year: string) => void;
  currentYear: string;
}

const ExpensesFilter: React.FC<Props> = ({
  handleExpenseYear,
  currentYear,
}) => {
  const handleYearChange = (event: { target: { value: string } }) => {
    handleExpenseYear(event.target.value);
  };
  return (
    <ExpensesFilterWrapper>
      <ExpensesFilterControl>
        <label>Filter by year</label>
        <select value={currentYear} onChange={handleYearChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </ExpensesFilterControl>
    </ExpensesFilterWrapper>
  );
};

export default ExpensesFilter;
