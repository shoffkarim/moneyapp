import React, { useState } from "react";
import { TransactionWrapperStyled } from "./transaction.styled";

interface TransactionDateProps {
  handlerTransaction: (date: string) => void
}

export const TransactionDate: React.FC<TransactionDateProps> = ({handlerTransaction}) => {
  const [date, setDate] = useState('')

  const handlerDate = (date: string) => {
    setDate(date)
    handlerTransaction(date)
  }

  return (
    <TransactionWrapperStyled>
        <input value={date} onChange={(e) => handlerDate(e.target.value)} type="date" name="" id="" />
    </TransactionWrapperStyled>
  );
};
