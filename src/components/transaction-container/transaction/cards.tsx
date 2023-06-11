import React from "react"
import { TransactionCard } from "components/transaction-container/transaction-card"
import { TransactionCardProps } from "components/transaction-container/transaction-card/transaction-card"
import { useDispatch, useSelector } from "react-redux"
import { TransactionCardWrapperStyled, TransactionTitleStyled, TransactionWrapperStyled } from "./transaction.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { RootState } from "__data__/store"
import { setTransactionCardIDFrom, setTransactionCardIDTo } from "__data__/reducers/transaction"

export const Cards: React.FC = () => {

  const { loading, error, data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  const { idFrom, idTo } = useSelector((state: RootState) => state.transaction)

  const dispatch = useDispatch()
  const handlerCardIdFrom = (id: number) => {
    dispatch(setTransactionCardIDFrom(id))
  }
  const handlerCardIdTo = (id: number) => {
    dispatch(setTransactionCardIDTo(id))
  }


  return (
    <>
      <TransactionWrapperStyled>
        <TransactionTitleStyled>From</TransactionTitleStyled>
        <TransactionCardWrapperStyled>
          {!loading && !error && data.user.accounts &&
            data.user.accounts.map((item: TransactionCardProps) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={idFrom === item.id}
                handlerClick={handlerCardIdFrom}
              />
            ))
          }
        </TransactionCardWrapperStyled>
      </TransactionWrapperStyled>
      <TransactionWrapperStyled>
        <TransactionTitleStyled>To</TransactionTitleStyled>
        <TransactionCardWrapperStyled>
          {!loading && !error && data.user.expenses &&
            data.user.expenses.map((item: TransactionCardProps) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={idTo === item.id}
                handlerClick={handlerCardIdTo}
              />
            ))
          }
        </TransactionCardWrapperStyled>
      </TransactionWrapperStyled>
    </>
  )
}
