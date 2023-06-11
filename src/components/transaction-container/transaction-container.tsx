import React, { useState } from "react"
import { Transaction } from "components/transaction-container/transaction"
import { TransactionAlert } from "./transaction-alert"


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
      <TransactionAlert handleAlert={setTransactionAlert} transactionAlert={transactionAlert}/>
    </>
  )
}

