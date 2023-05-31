import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "__data__/store"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { BoxLabelStyled, BoxStyled, ExpensesContainerStyled, ExpensesWrapperStyled } from "./expenses.styled"
import { Typography } from "@mui/material"

interface ExpensesProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => void
  items?: Array<ICard>
}

export const Expenses: React.FC<ExpensesProps> = ({ transactionOpen, items }) => {

  const isLoaded = useSelector((state: RootState) => state.Expenses.isLoaded)

  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Expenses</Typography>
      </BoxLabelStyled>
      <ExpensesContainerStyled>
        <ExpensesWrapperStyled>
          {!isLoaded && items &&
            items.map((item: ICard) => (
              <CardDropWrapper
                key={`${item.id} - ${Math.random()}`}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                type={"expenses"}
                operOpen={transactionOpen}
              />
            ))}
          <CardNew type={"expenses"} text="Add" />
        </ExpensesWrapperStyled>
      </ExpensesContainerStyled>
    </BoxStyled>
  )
}
