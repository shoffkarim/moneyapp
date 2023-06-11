import React from "react"
import { Income, Accounts, Expenses } from "components"
import { useDispatch } from "react-redux"

import { ICard } from "components/interfaces"
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
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => {
    console.log(idFrom, typeFrom, idWhere, typeWhere)
    dispatch(setTransactionStart({ idFrom, typeFrom, idWhere, typeWhere }))
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
