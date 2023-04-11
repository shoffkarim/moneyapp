import React from "react";
import { Transaction } from "components/transaction-container/transaction";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";

export const TransactionContainer: React.FC = () => {
  const transaction = useSelector((state: RootState) => state.Transaction);
  return (
    <>
      {transaction.open && (
        <Transaction/>
      )}
    </>
  );
};
