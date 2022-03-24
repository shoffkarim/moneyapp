import React from "react";
import { Transaction } from "components/transaction";
import { useSelector } from "react-redux";
import { RootState } from "data/store";

export const TransactionContainer: React.FC = () => {

  const open = useSelector((state: RootState) => state.Transaction.open);
  const item = useSelector((state: RootState) => state.Transaction.item);

  return (
    <>
      {open && (
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
