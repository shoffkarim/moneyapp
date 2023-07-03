import React, { useState } from "react"
import { Transaction } from "components/transactionContainer/transaction"
import { TransactionAlert } from "./transactionAlert"
import { useAppSelector } from "hooks"
import { RootState } from "__data__/store"


export const TransactionContainer: React.FC = () => {
  const [transactionAlert, setTransactionAlert] = useState<boolean>(false)
  const { open } = useAppSelector((state: RootState) => state.transaction)

  return (
    <>
      {open && (
        <Transaction handleAlert={setTransactionAlert}/>
      )}
      {/* TODO: change to alert */}
      <TransactionAlert handleAlert={setTransactionAlert} transactionAlert={transactionAlert}/>
    </>
  )
}

