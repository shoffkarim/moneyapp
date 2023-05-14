import React from "react";
import "./income.sass";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { NewCard } from "components/cardsContainer/newCard";
import { CardDropWrapper } from "components/card/cardDropWrapper";

interface IIncome {
  transactionOpen: Function
  items?: any
}

export const Income: React.FC<IIncome> = ({transactionOpen, items}) => {

  const isLoaded = useSelector((state: RootState) => state.Incomes.isLoaded);

  return (
    <div className="income-container">
      <div className="income-wrapper">
        {!isLoaded && items &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={`${item.id} - ${Math.random()}`}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"incomes"}
              operOpen={transactionOpen}
            />
          ))}
        <NewCard type={"incomes"} />
      </div>
    </div>
  );
};
