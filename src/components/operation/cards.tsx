import React from "react";
import { OperationCard } from "components/operationCard";
import { IOperationCard } from "components/operationCard/operationCard";
import { RootState } from "data/store";
import { useSelector } from "react-redux";

interface ICards {
  cardFrom: number;
  cardWhere: number;
  cardFromType: string;
  cardWhereType: string;
}

export const Cards: React.FC<ICards> = ({
  cardFrom,
  cardWhere,
  cardFromType,
  cardWhereType,
}) => {

  const itemsFrom = useSelector((state: RootState) => {
    if (cardFromType === "incomes") {
      return state.Incomes.items;
    } else return state.Accounts.items;
  });
  const FromIsLoaded = useSelector((state: RootState) => {
    if (cardFromType === "incomes") {
      return state.Incomes.isLoaded;
    } else return state.Accounts.isLoaded;
  });
  const itemsWhere = useSelector((state: RootState) => {
    if (cardWhereType === "accounts") {
      return state.Accounts.items;
    } else return state.Expenses.items;
  });
  const WhereIsLoaded = useSelector((state: RootState) => {
    if (cardWhereType === "accounts") {
      return state.Accounts.isLoaded;
    } else return state.Expenses.isLoaded;
  });

  return (
    <>
      <div className="operation-wrapper">
        <p className="operation-title">Откуда</p>
        <div className="operation-card-wrapper">
          {FromIsLoaded &&
            itemsFrom.map((item: IOperationCard) => (
              <OperationCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={item.id === cardFrom ? true : false}
              />
            ))}
        </div>
      </div>
      <div className="operation-wrapper">
        <p className="operation-title">Куда</p>
        <div className="operation-card-wrapper">
          {WhereIsLoaded &&
            itemsWhere.map((item: IOperationCard) => (
              <OperationCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={item.id === cardWhere ? true : false}
              />
            ))}
        </div>
      </div>
    </>
  );
};
