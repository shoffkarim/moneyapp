import { OperationCard } from "components/operationCard";
import { IOperationCard } from "components/operationCard/operationCard";
import { RootState } from "data/store";
import React from "react";
import { useSelector } from "react-redux";
import "./operation.sass";

export const Operation = () => {
  const IncomeItems = useSelector((state: RootState) => state.Incomes.items);
  const IncomeIsLoaded = useSelector(
    (state: RootState) => state.Incomes.isLoaded
  );
  const AccountsItems = useSelector((state: RootState) => state.Accounts.items);
  const AccountsIsLoaded = useSelector(
    (state: RootState) => state.Accounts.isLoaded
  );
  return (
    <div className="operation">
      <div className="operation-overlay"></div>
      <div className="operation-container">
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
        <div className="operation-wrapper">
          <div className="operation-value">
            <input
              autoFocus
              placeholder="Сумма"
            />
          </div>
        </div>
        <div className="operation-wrapper">
          <div className="operation-date">
            <input type="date" name="" id="" />
          </div>
        </div>
        <div className="operation-wrapper">
          <div className="operation-comment">
            <input
              placeholder="Комментарий"
            />
          </div>
        </div>
        <div className="operation-wrapper">
          <ul className="operation-tags">
            <li className="operation-tags__item">
              <span>Бизнес-ланч</span>
            </li>
            <li className="operation-tags__item">
              <span>Банк</span>
            </li>
            <li className="operation-tags__item">
              <span>Кофе</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
