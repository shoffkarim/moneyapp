import React, { useState } from "react";
import { Menu } from "components";
import "./main.sass";

import { CardsContainer } from "components/cardsContainer";
import { TransactionContainer } from "components/transactionContainer";
import { History } from "components/history/historyContainer";


export const Main: React.FC = () => {
  const [historyOpen, setHistoryOpen] = useState<boolean>(false)
  const handleOpenHistory = () => {
    setHistoryOpen(!historyOpen)
  }
  // const handleRequest = async () => {
  //   try {

  //     const response = await fetch('/api/start', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         name: "Karim",
  //         incomes: [
  //           {
  //             "id": 213214,
  //             "name": "Зарплата",
  //             "icon": "cash",
  //             "color": "#000000",
  //             "value": "343342"
  //           },
  //           {
  //             "id": 1673942953633,
  //             "name": "1232",
  //             "icon": "bank",
  //             "color": "#000000",
  //             "value": 231
  //           }
  //         ],
  //         accounts: [
  //           {
  //             "id": 13241234,
  //             "name": "Тинькофф",
  //             "icon": "bank",
  //             "color": "#FFFF00",
  //             "value": 234054
  //           },
  //           {
  //             "id": 31334,
  //             "name": "Наличные",
  //             "icon": "cash",
  //             "color": "#FF00FF",
  //             "value": 213
  //           }
  //         ],
  //         expenses: [
  //           {
  //             "id": 1213,
  //             "name": "Продукты",
  //             "icon": "cash",
  //             "color": "#000000",
  //             "value": 909435
  //           },
  //           {
  //             "id": 154,
  //             "name": "werwe",
  //             "icon": "bank",
  //             "color": "black",
  //             "value": 0
  //           }
  //         ]
  //       }),
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
