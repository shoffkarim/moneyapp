import React from "react";
import "./accounts.sass";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { NewCard } from "components/cardsContainer/newCard";
import { CardDropWrapper } from "components/card/cardDropWrapper";

interface IAccounts {
  transactionOpen: Function,
  items: any
}

export const Accounts: React.FC<IAccounts> = ({transactionOpen, items}) => {

  const isLoaded = useSelector((state: RootState) => state.Accounts.isLoaded);

  return (
    <div className="accounts-container">
      <div className="accounts-wrapper">
        {!isLoaded && items &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"accounts"}
              operOpen={transactionOpen}
            />
          ))}
        <NewCard type={"accounts"}/>
      </div>
    </div>
  );
};
