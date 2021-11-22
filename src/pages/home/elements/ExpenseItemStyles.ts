import styled from "styled-components";

export const ExpenseItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
  @media (min-width: 580px) {
    &.h2 {
      font-size: 1.25rem;
    }
  }
`;

export const ExpenseItemH2 = styled.div`
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
`;

export const ExpenseItemPrice = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;

  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`;
