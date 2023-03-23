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
    <div className="container">
      {/* <button onClick={() => handleRequest()}>{"Create new user"}</button> */}
      <main className="main">
        <div className="wrapper">
          <CardsContainer accounts={data?.accounts} expenses={data?.expenses} incomes={data?.incomes}/>
        </div>
        <TransactionContainer/>
        {historyOpen && <History handleOpen={handleOpenHistory}/>}
       </main>
       <Menu handleOpenHistory={handleOpenHistory} name={data?.user?.name} total={data?.total}/>
    </div>
  );
};
