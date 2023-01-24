import React, { useState } from "react";

interface DateProps {
  handlerTransaction: (date: string) => void
}

export const Date: React.FC<DateProps> = ({handlerTransaction}) => {
  const [date, setDate] = useState('')

  const handlerDate = (date: string) => {
    setDate(date)
    handlerTransaction(date)
  }

  return (
    <div className="transaction-wrapper">
      <div className="transaction-date">
        <input value={date} onChange={(e) => handlerDate(e.target.value)} type="date" name="" id="" />
      </div>
    </div>
  );
};
