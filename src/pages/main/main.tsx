import React, { useState, useEffect } from "react"
import { CardsContainer } from "components/cards-container"
import { TransactionContainer } from "components/transaction-container"
// import Axios from "axios";
import { MainStyled, WrapperStyled } from "./main.styled"
import { handleRequest } from "./sendData"
import { ICard } from "components/interfaces"

export const Main: React.FC = () => {
  const [data, setData] = useState<{
    user?: {
      id: string
      name: string
      image: string
    }
    accounts?: Array<ICard>
    incomes?: Array<ICard>
    expenses?: Array<ICard>
    total?: {
      expenses?:number
      incomes?: number
      balance?: number
    }
  }>()


  // const handleData = () => {
  //   try {

  //     Axios.post('/api/data', {
  //       method: 'POST',
  //       body: JSON.stringify({}),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Access-Control-Allow-Origin': 'http://localhost:3000',
  //         'Access-Control-Allow-Credentials': 'true'
  //       }
  //     })
  //     .then(({data}) => {
  //       console.log(data)
  //       setData(data)})

  //   } catch (error) {
  //     console.log("Request Error", error)
  //   }
  // }

  useEffect(() => {
    // handleData()
  }, [])
  // <button onClick={() => handleRequest()}>{"Create new user"}</button>


  return (
    <MainStyled>
      <button onClick={() => handleRequest()}>{"Create new user"}</button>
    <WrapperStyled>
      <CardsContainer accounts={data?.accounts} expenses={data?.expenses} incomes={data?.incomes}/>
    </WrapperStyled>
    <TransactionContainer/>
   </MainStyled>
  )
}
