import React from "react"
import { Transaction } from "components/transaction-container/transaction"

interface TransactionContainerProps {
  transactionOpen: boolean
  handleTransactionOpen: (value: boolean) => void
}

export const TransactionContainer: React.FC<TransactionContainerProps> = ({ transactionOpen, handleTransactionOpen }) => {

  return (
    <>
      {transactionOpen && (
        <Transaction handleTransactionOpen={handleTransactionOpen}/>
      )}
    </>
  )
}
