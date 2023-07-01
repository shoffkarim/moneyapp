import React from "react"
import { useAppDispatch } from "hooks"

import { ICard } from "types"
import { setTransactionStart } from "__data__/reducers/transaction"
import { sampleCards } from "./sampleCards"
import { CardsWrapper } from "./cardsWrapper"
import { ACCOUNTS, EXPENSES, INCOMES } from "components/constants"

export interface CardsContainerProps {
  accounts?: Array<ICard>
  expenses?: Array<ICard>
  incomes?: Array<ICard>
  handleTransactionOpen: (value: boolean) => void
}
export const CardsContainer: React.FC<CardsContainerProps> = ({
  accounts,
  expenses,
  incomes,
  handleTransactionOpen,
}) => {

  const dispatch = useAppDispatch()

  const transactionHandler = (
    open: boolean,
    idFrom: number | string,
    idTo: number | string,
    typeFrom: string,
    typeTo: string
  ) => {
    dispatch(setTransactionStart({ idFrom, typeFrom, idTo, typeTo }))
    handleTransactionOpen(open)
  }

  return (
    <>
      <CardsWrapper
        type={INCOMES}
        title={INCOMES}
        transactionOpen={transactionHandler}
        items={incomes}
      />
      <CardsWrapper
        type={ACCOUNTS}
        title={ACCOUNTS}
        transactionOpen={transactionHandler}
        items={accounts}
      />
      <CardsWrapper
        type={EXPENSES}
        title={EXPENSES}
        transactionOpen={transactionHandler}
        items={expenses}
      />
    </>
  )
}
