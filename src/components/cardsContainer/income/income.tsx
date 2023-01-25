import React from "react";
import "./income.sass";
// import { Card } from "../../card";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomes } from "__data__/actions/incomes";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { NewCard } from "components/cardsContainer/newCard";
import { CardDropWrapper } from "components/card/cardDropWrapper";

interface IIncome {
  transactionOpen: Function
}

export const Income: React.FC<IIncome> = ({transactionOpen}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIncomes());
  }, [dispatch]);



  const items = useSelector((state: RootState) => state.Incomes.items);
  const isLoaded = useSelector((state: RootState) => state.Incomes.isLoaded);
  return (
    <div className="income-container">
      <div className="income-wrapper">
        {isLoaded &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={item.id}
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
