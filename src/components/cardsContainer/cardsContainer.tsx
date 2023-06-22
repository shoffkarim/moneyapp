import React from "react"
import { useDispatch } from "react-redux"

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
  handleCreatePopupOpen: (value: boolean) => void
  handleCreatePopupType: (value: string) => void
}
export const CardsContainer: React.FC<CardsContainerProps> = ({
  accounts,
  expenses,
  incomes,
  handleTransactionOpen,
  handleCreatePopupOpen,
  handleCreatePopupType
}) => {

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
      <CardsWrapper
        type={INCOMES}
        title={INCOMES}
        transactionOpen={transactionHandler}
        items={sampleCards.incomes}
        handleCreatePopupOpen={handleCreatePopupOpen}
        handleCreatePopupType={handleCreatePopupType}
      />
      <CardsWrapper
        type={ACCOUNTS}
        title={ACCOUNTS}
        transactionOpen={transactionHandler}
        items={sampleCards.accounts}
        handleCreatePopupOpen={handleCreatePopupOpen}
        handleCreatePopupType={handleCreatePopupType}
      />
      <CardsWrapper
        type={EXPENSES}
        title={EXPENSES}
        transactionOpen={transactionHandler}
        items={sampleCards.expenses}
        handleCreatePopupOpen={handleCreatePopupOpen}
        handleCreatePopupType={handleCreatePopupType}
      />
    </>
  )
}
