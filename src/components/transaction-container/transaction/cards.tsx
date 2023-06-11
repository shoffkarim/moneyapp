import React from "react"
import { TransactionCard } from "components/transaction-container/transaction-card"
import { TransactionCardProps } from "components/transaction-container/transaction-card/transaction-card"
import { useDispatch } from "react-redux"
import { setCardIdFrom, setCardIdWhere } from "__data__/actions/transaction"
import { TransactionCardWrapperStyled, TransactionTitleStyled, TransactionWrapperStyled } from "./transaction.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"

export const Cards: React.FC = () => {

  const { loading, error, data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )



  const dispatch = useDispatch()
  const handlerCardIdFrom = (id: number) => {
    dispatch(setCardIdFrom(id))
  }
  const handlerCardIdWhere = (id: number) => {
    dispatch(setCardIdWhere(id))
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
                check={0}
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
                check={0}
                handlerClick={handlerCardIdWhere}
              />
            ))
          }
        </TransactionCardWrapperStyled>
      </TransactionWrapperStyled>
    </>
  )
}
