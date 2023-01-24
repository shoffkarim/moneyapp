import React, { useState } from "react";

interface ValueProps {
  handlerTransaction: (val: number) => void
}

export const Value: React.FC<ValueProps> = ({handlerTransaction}) => {
  const [value, setValue] = useState(0)

  const handlerValue = (val: string) => {
    let value = Number(val)
    setValue(value)
    handlerTransaction(value)
  }

  return (
    <div className="transaction-wrapper">
      <div className="transaction-value">
        <input value={value} onChange={(e) => handlerValue(e.target.value)} autoFocus placeholder="Сумма" />
      </div>
    </div>
  );
};
