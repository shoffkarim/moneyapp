import React from "react"
import { Transaction } from "components/transactionContainer/transaction"
import { useAppSelector } from "hooks"
import { RootState } from "__data__/store"


export const TransactionContainer: React.FC = () => {
  const { open } = useAppSelector((state: RootState) => state.transaction)

  return (
    <>
      {open && (
        <Transaction/>
      )}
    </>
  )
}

