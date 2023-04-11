import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "__data__/store";
import { ICard } from "components/interfaces";
import { CardNew } from "components/card/card-new";
import { CardDropWrapper } from "components/card/card-drop-wrapper";
import { IncomeContainerStyled, IncomeWrapperStyled } from "./income.styled";

interface IncomeProps {
  transactionOpen: Function
  items?: any
}

export const Income: React.FC<IncomeProps> = ({transactionOpen, items}) => {

  const isLoaded = useSelector((state: RootState) => state.Incomes.isLoaded);

  return (
    <IncomeContainerStyled>
      <IncomeWrapperStyled>
        {!isLoaded && items &&
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
        <CardNew type={"incomes"} />
      </IncomeWrapperStyled>
    </IncomeContainerStyled>
  );
};
