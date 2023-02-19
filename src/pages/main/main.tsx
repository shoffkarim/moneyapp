import React, { useState } from "react";
import { Menu } from "components";
import "./main.sass";

import { CardsContainer } from "components/cardsContainer";
import { TransactionContainer } from "components/transactionContainer";
import { History } from "components/history/historyContainer";
import axios from "axios";


export const Main: React.FC = () => {
  const [historyOpen, setHistoryOpen] = useState<boolean>(false)
  const handleOpenHistory = () => {
    setHistoryOpen(!historyOpen)
  }
  // const handleRequest = async () => {
  //   try {

  //     const response = await fetch('/api/auth/register', {
  //       method: 'POST',
  //       body: JSON.stringify({email: "karimshoff@gmail.com", password: "1234"}),
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Access-Control-Allow-Origin': 'http://localhost:3000',
  //         'Access-Control-Allow-Credentials': 'true'
  //       }
  //     })
  //     const data = await response
  //     return data
  //   } catch (error) {
  //     console.log("Request Error", error)
  //   }
  // }
  return (
    <div className="container">
      {/* <button onClick={() => handleRequest()}>{"Create new user"}</button> */}
      <main className="main">
        <div className="wrapper">
          <CardsContainer/>
        </div>
        <TransactionContainer/>
        {historyOpen && <History handleOpen={handleOpenHistory}/>}
       </main>
       <Menu handleOpenHistory={handleOpenHistory}/>
    </div>
  );
};
