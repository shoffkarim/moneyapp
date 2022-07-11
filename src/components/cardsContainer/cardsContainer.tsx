import React from "react";
import { Income, Accounts, Expenses } from "components";
import { useDispatch } from "react-redux";
import { openPopupTransaction, setTransaction } from "data/actions/transaction";


export const CardsContainer: React.FC = () => {
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
      <Income transactionOpen={transactionHandler} />
      <Accounts transactionOpen={transactionHandler} />
      <Expenses transactionOpen={transactionHandler} />
    </>
  );
};
