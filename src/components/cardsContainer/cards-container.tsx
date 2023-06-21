import React from "react"
import { Income, Accounts, Expenses } from "components"
import { useDispatch } from "react-redux"

import { ICard } from "types"
import { setTransactionStart } from "__data__/reducers/transaction"

export interface CardsContainerProps {
  accounts?: Array<ICard>
  expenses?: Array<ICard>
  incomes?: Array<ICard>
  handleTransactionOpen: (value: boolean) => void
}
export const CardsContainer: React.FC<CardsContainerProps> = ({ accounts, expenses, incomes, handleTransactionOpen }) => {

  const dispatch = useDispatch()

  const transactionHandler = (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => {
    dispatch(setTransactionStart({ idFrom, typeFrom, idTo, typeTo }))
    handleTransactionOpen(open)
  }

  return (
    <>
      <Income transactionOpen={transactionHandler} items={incomes} />
      <Accounts transactionOpen={transactionHandler} items={accounts} />
      <Expenses transactionOpen={transactionHandler} items={expenses} />
    </>
  )
}
