import React from "react";
import { Transaction } from "components/transaction";
import { useSelector } from "react-redux";
import { RootState } from "data/store";

export const TransactionContainer: React.FC = () => {
  const transaction = useSelector((state: RootState) => state.Transaction);
  const item = transaction.item;

  return (
    <>
      {transaction.open && (
        <Transaction
          cardFrom={item.idFrom}
          cardWhere={item.idWhere}
          cardFromType={item.typeFrom}
          cardWhereType={item.typeWhere}
        />
      )}
    </>
  );
};
