import { Card } from "components/card";
import { ICard } from "components/card/card";
import { RootState } from "data/store";
import React from "react";
import { useSelector } from "react-redux";
import './operation.sass'

export const Operation = () => {
  const items = useSelector((state: RootState) => state.Incomes.items);
  const isLoaded = useSelector((state: RootState) => state.Incomes.isLoaded);
  return (
    <div className="operation">
      <div className="operation-overlay"></div>
      <div className="operation-container">
        <p className="operation-title">Откуда</p>
        <div className="operation-card-wrapper">
          {isLoaded &&
            items.map((item: ICard) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
