import React from "react";
import "./expenses.sass";
// import { Card } from "../../card";
import { useDispatch, useSelector } from "react-redux";
import { fetchExpenses } from "__data__/actions/expenses";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { NewCard } from "components/cardsContainer/newCard";
import { CardDropWrapper } from "components/card/cardDropWrapper";

interface IExpenses {
  transactionOpen: Function
}

export const Expenses: React.FC<IExpenses> = ({transactionOpen}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const items = useSelector((state: RootState) => state.Expenses.items);
  const isLoaded = useSelector((state: RootState) => state.Expenses.isLoaded);

  return (
    <div className="expenses-container">
      <div className="expenses-wrapper">
        {isLoaded &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={item.id}
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
