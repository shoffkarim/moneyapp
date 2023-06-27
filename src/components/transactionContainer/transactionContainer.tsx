import React, { useState } from "react"
import { Transaction } from "components/transactionContainer/transaction"
import { TransactionAlert } from "./transactionAlert"


interface TransactionContainerProps {
  transactionOpen: boolean
  handleTransactionOpen: (value: boolean) => void
}

export const TransactionContainer: React.FC<TransactionContainerProps> = ({ transactionOpen, handleTransactionOpen }) => {
  const [transactionAlert, setTransactionAlert] = useState<boolean>(false)

  return (
    <>
      {transactionOpen && (
        <Transaction handleTransactionOpen={handleTransactionOpen} handleAlert={setTransactionAlert}/>
      )}
      {/* TODO: change to alert */}
      <TransactionAlert handleAlert={setTransactionAlert} transactionAlert={transactionAlert}/>
    </>
  )
}

