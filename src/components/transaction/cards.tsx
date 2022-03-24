import React from "react";
import { TransactionCard } from "components/transactionCard";
import { ITransactionCard } from "components/transactionCard/transactionCard";
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
      <div className="transaction-wrapper">
        <p className="transaction-title">Откуда</p>
        <div className="transaction-card-wrapper">
          {FromIsLoaded &&
            itemsFrom.map((item: ITransactionCard) => (
              <TransactionCard
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
      <div className="transaction-wrapper">
        <p className="transaction-title">Куда</p>
        <div className="transaction-card-wrapper">
          {WhereIsLoaded &&
            itemsWhere.map((item: ITransactionCard) => (
              <TransactionCard
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
