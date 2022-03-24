import React from "react";
import "./income.sass";
import { Card } from "../card";
import { useDispatch, useSelector } from "react-redux";
import { fetchIncomes } from "data/actions/incomes";
import { RootState } from "data/store";
import { ICard } from "components/card/card";
import { NewCard } from "components/newCard";

interface IIncome {
  operationOpen: Function
}

export const Income: React.FC<IIncome> = ({operationOpen}) => {
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
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"income"}
              operOpen={operationOpen}
            />
          ))}
        <NewCard type={"income"} />
      </div>
    </div>
  );
};
