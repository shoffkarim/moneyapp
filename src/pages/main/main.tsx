import React from "react";
import { Menu } from "components";
import "./main.sass";

import { CardsContainer } from "components/cardsContainer";
import { TransactionContainer } from "components/transactionContainer";
import { HistoryContainer } from "components/history";


export const Main: React.FC = () => {

  return (
    <div className="container">
      <main className="main">
        <div className="wrapper">
          <CardsContainer/>
        </div>
        <TransactionContainer/>
        <HistoryContainer/>
      </main>
      <Menu />
    </div>
  );
};
