import React from "react";
import "./expenses.sass";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { NewCard } from "components/cardsContainer/newCard";
import { CardDropWrapper } from "components/card/cardDropWrapper";

interface IExpenses {
  transactionOpen: Function
  items?: any
}

export const Expenses: React.FC<IExpenses> = ({transactionOpen, items}) => {

  const isLoaded = useSelector((state: RootState) => state.Expenses.isLoaded);

  return (
    <div className="expenses-container">
      <div className="expenses-wrapper">
        {!isLoaded && items &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={`${item.id} - ${Math.random()}`}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"expenses"}
              operOpen={transactionOpen}
            />
          ))}
        <NewCard type={"expenses"} />
      </div>
    </div>
  );
};
