import React, { useState, useEffect } from "react";
import { Menu } from "components";

import { CardsContainer } from "components/cards-container";
import { TransactionContainer } from "components/transaction-container";
import { History } from "components/history/history-container";
import { handleRequest } from "./sendData";
import Axios from "axios";
import { ContainerStyled, MainStyled, WrapperStyled } from "./main.styled";

export const Main: React.FC = () => {
  const [data, setData] = useState<{
    user?: {
      id: string
      name: string
      image: string
    }
    accounts?: any
    incomes?: any
    expenses?: any
    total?: {
      expenses?:number
      incomes?: number
      balance?: number
    }
  }>()
  const [historyOpen, setHistoryOpen] = useState<boolean>(false)
  const handleOpenHistory = () => {
    setHistoryOpen(!historyOpen)
  }

  const handleData = () => {
    try {

      Axios.get('http://localhost:3001/db')
      .then(({data}) => {
        console.log(data)
        setData(data.db)}
        )

    } catch (error) {
      console.log("Request Error", error)
    }
  }

  useEffect(() => {
    handleData()
  }, [])


  return (
    <ContainerStyled>
      {/* <button onClick={() => handleRequest()}>{"Create new user"}</button> */}
      <MainStyled>
        <WrapperStyled>
          <CardsContainer accounts={data?.accounts} expenses={data?.expenses} incomes={data?.incomes}/>
        </WrapperStyled>
        <TransactionContainer/>
        {historyOpen && <History handleOpen={handleOpenHistory}/>}
       </MainStyled>
       <Menu handleOpenHistory={handleOpenHistory} name={data?.user?.name} total={data?.total}/>
    </ContainerStyled>
  );
};
