import React from "react";
import { OperationCard } from "components/operationCard";
import { IOperationCard } from "components/operationCard/operationCard";
import { RootState } from "data/store";
import { useSelector } from "react-redux";

export const Cards = () => {

  const IncomeItems = useSelector((state: RootState) => state.Incomes.items);
  const IncomeIsLoaded = useSelector(
    (state: RootState) => state.Incomes.isLoaded
  );
  const AccountsItems = useSelector((state: RootState) => state.Accounts.items);
  const AccountsIsLoaded = useSelector(
    (state: RootState) => state.Accounts.isLoaded
  );

  return (
    <>
      <div className="operation-wrapper">
        <p className="operation-title">Откуда</p>
        <div className="operation-card-wrapper">
          {IncomeIsLoaded &&
            IncomeItems.map((item: IOperationCard) => (
              <OperationCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={true}
              />
            ))}
        </div>
      </div>
      <div className="operation-wrapper">
        <p className="operation-title">Куда</p>
        <div className="operation-card-wrapper">
          {AccountsIsLoaded &&
            AccountsItems.map((item: IOperationCard) => (
              <OperationCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={true}
              />
            ))}
        </div>
      </div>
    </>
  );
};
