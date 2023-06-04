import React, { useState, useEffect } from "react"
import { CardsContainer } from "components/cards-container"
import { TransactionContainer } from "components/transaction-container"
// import Axios from "axios";
import { MainStyled, WrapperStyled } from "./main.styled"
import { handleRequest } from "./sendData"
import { ICard } from "components/interfaces"
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

  const { loading, error, data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '6474446d56a2116018550d1c'
    } })

  console.log(data)


  useEffect(() => {
    // handleData()
  }, [])
  // <button onClick={() => handleRequest()}>{"Create new user"}</button>


  return (
    <MainStyled>
      <button onClick={() => handleRequest()}>{"Create new user"}</button>
      <WrapperStyled>
        <CardsContainer accounts={data?.user.accounts} expenses={data?.user.expenses} incomes={data?.user.incomes}/>
      </WrapperStyled>
      <TransactionContainer/>
    </MainStyled>
  )
}
