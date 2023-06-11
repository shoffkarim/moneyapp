import React, { useState } from "react"
import { CardsContainer } from "components/cards-container"
import { TransactionContainer } from "components/transaction-container"
import { MainStyled, WrapperStyled } from "./main.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"

export const Main: React.FC = () => {
  // const [data, setData] = useState<{
  //   user?: {
  //     id: string
  //     name: string
  //     image: string
  //   }
  //   accounts?: Array<ICard>
  //   incomes?: Array<ICard>
  //   expenses?: Array<ICard>
  //   total?: {
  //     expenses?:number
  //     incomes?: number
  //     balance?: number
  //   }
  // }>()

  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } })

  const [transactionOpen, setTransactionOpen] = useState<boolean>(false)

  return (
    <MainStyled>
      <WrapperStyled>
        <CardsContainer accounts={data?.user.accounts} expenses={data?.user.expenses} incomes={data?.user.incomes} handleTransactionOpen={setTransactionOpen}/>
      </WrapperStyled>
      <TransactionContainer transactionOpen={transactionOpen} handleTransactionOpen={setTransactionOpen}/>
    </MainStyled>
  )
}
