import React from "react"
import { TransactionCard } from "components/transaction-container/transaction-card"
import { TransactionCardProps } from "components/transaction-container/transaction-card/transaction-card"
import { RootState } from "__data__/store"
import { useDispatch, useSelector } from "react-redux"
import { setCardIdFrom, setCardIdWhere } from "__data__/actions/transaction"
import { ACCOUNTS, INCOMES } from "components/constants"
import { TransactionCardWrapperStyled, TransactionTitleStyled, TransactionWrapperStyled } from "./transaction.styled"
// TODO: fix cards in transaction
export const Cards: React.FC = () => {
  const dispatch = useDispatch()
  const handlerCardIdFrom = (id: number) => {
    dispatch(setCardIdFrom(id))
  }
  const handlerCardIdWhere = (id: number) => {
    dispatch(setCardIdWhere(id))
  }

  const transaction = useSelector((state: RootState) => state.Transaction)

  const itemsFrom = useSelector((state: RootState) => {
    if (transaction.typeFrom === INCOMES) {
      return state.Incomes
    } else return state.Accounts
  })

  const itemsWhere = useSelector((state: RootState) => {
    if (transaction.typeWhere === ACCOUNTS) {
      return state.Accounts
    } else return state.Expenses
  })

  return (
    <>
      <TransactionWrapperStyled>
        <TransactionTitleStyled>Откуда</TransactionTitleStyled>
        <TransactionCardWrapperStyled>
          {itemsFrom.isLoaded &&
            itemsFrom.items.map((item: TransactionCardProps) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={transaction.idFrom}
                handlerClick={handlerCardIdFrom}
              />
            ))}
        </TransactionCardWrapperStyled>
      </TransactionWrapperStyled>
      <TransactionWrapperStyled>
        <TransactionTitleStyled>Куда</TransactionTitleStyled>
        <TransactionCardWrapperStyled>
          {itemsWhere.isLoaded &&
            itemsWhere.items.map((item: TransactionCardProps) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={transaction.idWhere}
                handlerClick={handlerCardIdWhere}
              />
            ))}
        </TransactionCardWrapperStyled>
      </TransactionWrapperStyled>
    </>
  )
}
