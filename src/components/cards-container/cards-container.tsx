import React from "react";
import { Income, Accounts, Expenses } from "components";
import { useDispatch } from "react-redux";
import { openPopupTransaction, setTransaction } from "__data__/actions/transaction";

export interface CardsContainerProps {
  accounts?: any
  expenses?: any
  incomes?: any
}
export const CardsContainer: React.FC<CardsContainerProps> = ({ accounts, expenses, incomes }) => {

  const dispatch = useDispatch();
  const transactionHandler = (
    open: boolean,
    idFrom: number,
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => {
   dispatch(setTransaction({idFrom, typeFrom, idWhere, typeWhere}))
   dispatch(openPopupTransaction(open))
  };

  return (
    <>
      <Income transactionOpen={transactionHandler} items={incomes} />
      <Accounts transactionOpen={transactionHandler} items={accounts} />
      <Expenses transactionOpen={transactionHandler} items={expenses} />
    </>
  );
};
