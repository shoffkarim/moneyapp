import React, { useState } from "react"
import { CardTransaction } from "components/card/cardTransaction"
import { CardTransactionProps } from "components/card/cardTransaction/cardTransaction"
import { useSelector } from "react-redux"
import { useAppDispatch } from 'hooks'
import { SwiperSlideTransactionStyled, SwiperSlideTransactionWrapper, SwiperTransactionStyled, TransactionCardsTopStyled, TransactionTitleStyled } from "./transaction.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { RootState } from "__data__/store"
import { setTransactionCardIDFrom, setTransactionCardIDTo } from "__data__/reducers/transaction"
import { ACCOUNTS, EXPENSES, INCOMES } from "components/constants"
import { Button, ButtonGroup } from "@mui/material"
import { separateItems } from "components/utils/separateItems"

import { Pagination } from "swiper"
import { ICard } from "types"
import { SwiperNavigation } from "components/cardsContainer/swiperNavigation"

export const Cards: React.FC = () => {

  const { loading, error, data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  // TODO: change selector
  const { idFrom, idTo, typeFrom, typeTo } = useSelector((state: RootState) => state.transaction)

  const [typeFromState, setTypeFromState] = useState(typeFrom)
  const [typeToState, setTypeToState] = useState(typeTo)

  const itemsFrom = typeFromState === INCOMES ? data.user.incomes : data.user.accounts
  const itemsTo = typeToState === ACCOUNTS ? data.user.accounts : data.user.expenses

  const dispatch = useAppDispatch()
  const handlerCardIdFrom = (id: number) => {
    dispatch(setTransactionCardIDFrom(id))
  }
  const handlerCardIdTo = (id: number) => {
    dispatch(setTransactionCardIDTo(id))
  }

  const handledArrayFrom = itemsFrom && separateItems(itemsFrom, 7)
  const handledArrayTo = itemsTo && separateItems(itemsTo, 7)

  return (
    <>
      <TransactionCardsTopStyled>
        <TransactionTitleStyled>From</TransactionTitleStyled>
        <ButtonGroup variant="contained">
          <Button
            variant={typeFromState === INCOMES ? "contained" : "outlined"}
            onClick={() => {
              setTypeFromState(INCOMES)
              setTypeToState(ACCOUNTS)
            }}>Incomes</Button>
          <Button
            variant={typeFromState === ACCOUNTS ? "contained" : "outlined"}
            onClick={() => setTypeFromState(ACCOUNTS)}>Accounts</Button>
        </ButtonGroup>
      </TransactionCardsTopStyled>

      {!loading && !error &&
        <SwiperTransactionStyled
          allowTouchMove={false}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[ Pagination ]}
          className="mySwiper"
          paddingBottom={((itemsFrom?.length && itemsFrom?.length > 7) || itemsFrom.length % 7 === 0)}
        >
          {handledArrayFrom && handledArrayFrom.length > 0 &&
            handledArrayFrom.map((subArray: Array<ICard | CardTransactionProps>) => {
              return (
                <SwiperSlideTransactionStyled key={`${subArray[0].id} - ${Math.random()}`}>
                  <SwiperSlideTransactionWrapper>
                    {subArray && subArray.map((item: ICard | CardTransactionProps) => {
                      return (
                        <CardTransaction
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          icon={item.icon}
                          color={item.color}
                          value={item.value}
                          check={idFrom === item.id}
                          handlerClick={handlerCardIdFrom}
                        />

                      )
                    })
                    }
                  </SwiperSlideTransactionWrapper>
                </SwiperSlideTransactionStyled>
              )
            })
          }
          { (itemsFrom.length > 7 || (itemsFrom.length === 7 && itemsFrom.length % 7 === 0)) && <SwiperNavigation color="#1976d2"/> }
        </SwiperTransactionStyled>
      }

      <TransactionCardsTopStyled>
        <TransactionTitleStyled>To</TransactionTitleStyled>
        <ButtonGroup variant="contained">
          <Button
            variant={typeToState === ACCOUNTS ? "contained" : "outlined"}
            onClick={() => setTypeToState(ACCOUNTS)}>Accounts</Button>
          <Button
            variant={typeToState === EXPENSES ? "contained" : "outlined"}
            onClick={() => {
              setTypeToState(EXPENSES)
              setTypeFromState(ACCOUNTS)
            }}>Expenses</Button>
        </ButtonGroup>
      </TransactionCardsTopStyled>
      {!loading && !error &&
        <SwiperTransactionStyled
          allowTouchMove={false}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[ Pagination ]}
          className="mySwiper"
          paddingBottom={((itemsTo?.length && itemsTo?.length > 7) || itemsTo.length % 7 === 0)}
        >
          {handledArrayTo && handledArrayTo.length > 0 &&
            handledArrayTo.map((subArray: Array<ICard | CardTransactionProps>) => {
              return (
                <SwiperSlideTransactionStyled key={`${subArray[0].id} - ${Math.random()}`}>
                  <SwiperSlideTransactionWrapper>
                    {subArray && subArray.map((item: ICard | CardTransactionProps) => {
                      return (
                        <CardTransaction
                          key={item.id}
                          id={item.id}
                          name={item.name}
                          icon={item.icon}
                          color={item.color}
                          value={item.value}
                          check={idTo === item.id}
                          handlerClick={handlerCardIdTo}
                        />

                      )
                    })
                    }
                  </SwiperSlideTransactionWrapper>
                </SwiperSlideTransactionStyled>
              )
            })
          }
          { (itemsTo.length > 7 || (itemsTo.length === 7 && itemsTo.length % 7 === 0)) && <SwiperNavigation color="#1976d2"/> }
        </SwiperTransactionStyled>
      }

    </>
  )
}
