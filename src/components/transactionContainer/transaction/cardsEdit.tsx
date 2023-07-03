import React from "react"
import { CardTransaction } from "components/card/cardTransaction"
import { CardTransactionProps } from "components/card/cardTransaction/cardTransaction"
import { useAppSelector } from "hooks"
import { CardsEditContainer, CardsEditWrapper, TransactionCardsTopStyled, TransactionTitleStyled } from "./transaction.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { RootState } from "__data__/store"

import { ACCOUNTS, INCOMES } from "components/constants"

import { ICard } from "types"


export const CardsEdit: React.FC = () => {

  const { loading, error, data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  const { idFrom, idTo, typeFrom, typeTo } = useAppSelector((state: RootState) => state.transaction)


  const itemsFrom = typeFrom === INCOMES ? data.user.incomes : data.user.accounts
  const itemsTo = typeTo === ACCOUNTS ? data.user.accounts : data.user.expenses


  const handledItemFrom = itemsFrom && itemsFrom.find((item: ICard | CardTransactionProps) => item.id === idFrom)
  const handledItemTo = itemsTo && itemsTo.find((item:  ICard | CardTransactionProps) => item.id === idTo)

  return (
    <>
      <CardsEditContainer>
        <CardsEditWrapper>
          <TransactionCardsTopStyled>
            <TransactionTitleStyled>From:</TransactionTitleStyled>
          </TransactionCardsTopStyled>

          {!loading && !error &&
          <CardTransaction
            id={handledItemFrom.id}
            name={handledItemFrom.name}
            icon={handledItemFrom.icon}
            color={handledItemFrom.color}
            value={handledItemFrom.value}
            check={false}
          />

          }
        </CardsEditWrapper>
        <CardsEditWrapper>
          <TransactionCardsTopStyled>
            <TransactionTitleStyled>To:</TransactionTitleStyled>
          </TransactionCardsTopStyled>
          {!loading && !error &&
            <CardTransaction
              id={handledItemTo.id}
              name={handledItemTo.name}
              icon={handledItemTo.icon}
              color={handledItemTo.color}
              value={handledItemTo.value}
              check={false}
            />
          }
        </CardsEditWrapper>
      </CardsEditContainer>
    </>
  )
}
