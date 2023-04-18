import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { CardNew } from "components/card/card-new";
import { CardDropWrapper } from "components/card/card-drop-wrapper";
import { ExpensesContainerStyled, ExpensesWrapperStyled } from "./expenses.styled";

interface ExpensesProps {
  transactionOpen: Function
  items?: any
}

export const Expenses: React.FC<ExpensesProps> = ({transactionOpen, items}) => {

  const isLoaded = useSelector((state: RootState) => state.Expenses.isLoaded);

  return (
    <ExpensesContainerStyled>
      <ExpensesWrapperStyled>
        {!isLoaded && items &&
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
        <CardNew type={"expenses"} />
      </ExpensesWrapperStyled>
    </ExpensesContainerStyled>
  );
};