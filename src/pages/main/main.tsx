import React, { useState, useEffect } from "react";
import { Menu } from "components";
import "./main.sass";

import { CardsContainer } from "components/cardsContainer";
import { TransactionContainer } from "components/transactionContainer";
import { History } from "components/history/historyContainer";
import { handleRequest } from "./sendData";
import Axios from "axios";

export const Main: React.FC = () => {
  const [data, setData] = useState<{
    name?: string
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

      Axios.post('/api/data', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'Access-Control-Allow-Credentials': 'true'
        }
      })
      .then(({data}) => {
        console.log(data)
        setData(data)})

    } catch (error) {
      console.log("Request Error", error)
    }
  }

  useEffect(() => {
    handleData()
  }, [])


  return (
    <div className="container">
      <button onClick={() => handleRequest()}>{"Create new user"}</button>
      <main className="main">
        <div className="wrapper">
          <CardsContainer accounts={data?.accounts} expenses={data?.expenses} incomes={data?.incomes}/>
        </div>
        <TransactionContainer/>
        {historyOpen && <History handleOpen={handleOpenHistory}/>}
       </main>
       <Menu handleOpenHistory={handleOpenHistory} name={data?.name} total={data?.total}/>
    </div>
  );
};
