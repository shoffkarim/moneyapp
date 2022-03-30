import React from "react";
import { Transaction } from "components/transaction";
import { useSelector } from "react-redux";
import { RootState } from "data/store";

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
