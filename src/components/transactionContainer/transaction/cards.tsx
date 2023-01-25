import React from "react";
import { TransactionCard } from "components/transactionContainer/transactionCard";
import { ITransactionCard } from "components/transactionContainer/transactionCard/transactionCard";
import { RootState } from "__data__/store";
import { useDispatch, useSelector } from "react-redux";
import { setCardIdFrom, setCardIdWhere } from "__data__/actions/transaction";
import { ACCOUNTS, INCOMES } from "components/constants";

export const Cards: React.FC = () => {
  const dispatch = useDispatch();
  const handlerCardIdFrom = (id: number) => {
    dispatch(setCardIdFrom(id));
  };
  const handlerCardIdWhere = (id: number) => {
    dispatch(setCardIdWhere(id));
  };

  const transaction = useSelector((state: RootState) => state.Transaction);

  const itemsFrom = useSelector((state: RootState) => {
    if (transaction.typeFrom === INCOMES) {
      return state.Incomes;
    } else return state.Accounts;
  });

  const itemsWhere = useSelector((state: RootState) => {
    if (transaction.typeWhere === ACCOUNTS) {
      return state.Accounts;
    } else return state.Expenses;
  });

  return (
    <>
      <div className="transaction-wrapper">
        <p className="transaction-title">Откуда</p>
        <div className="transaction-card-wrapper">
          {itemsFrom.isLoaded &&
            itemsFrom.items.map((item: ITransactionCard) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={transaction.idFrom}
                handlerClick={handlerCardIdFrom}
              />
            ))}
        </div>
      </div>
      <div className="transaction-wrapper">
        <p className="transaction-title">Куда</p>
        <div className="transaction-card-wrapper">
          {itemsWhere.isLoaded &&
            itemsWhere.items.map((item: ITransactionCard) => (
              <TransactionCard
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                check={transaction.idWhere}
                handlerClick={handlerCardIdWhere}
              />
            ))}
        </div>
      </div>
    </>
  );
};
