import React from "react";
import "./accounts.sass";
import { Card } from "../card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts } from "data/actions/accounts";
import { RootState } from "data/store";
import { ICard } from "components/card/card";
import { NewCard } from "components/newCard";

export const Accounts: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchAccounts());
  }, [dispatch]);

  const items = useSelector((state: RootState) => state.Accounts.items);
  const isLoaded = useSelector((state: RootState) => state.Accounts.isLoaded);

  return (
    <div className="accounts-container">
      <div className="accounts-wrapper">
        {isLoaded &&
          items.map((item: ICard) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"accounts"}
            />
          ))}
        <NewCard type={"accounts"}/>
      </div>
    </div>
  );
};
