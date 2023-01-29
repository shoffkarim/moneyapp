import React from "react";
import { Menu } from "components";
import "./main.sass";

import { CardsContainer } from "components/cardsContainer";
import { TransactionContainer } from "components/transactionContainer";
import { History } from "components/history/historyContainer";


export const Main: React.FC = () => {

  return (
    <div className="container">
      <main className="main">
        <div className="wrapper">
          <CardsContainer/>
        </div>
        <TransactionContainer/>
        <History/>
      </main>
      <Menu />
    </div>
  );
};
