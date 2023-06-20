import React from "react"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { BoxLabelStyled, BoxStyled, ExpensesContainerStyled, ExpensesWrapperStyled } from "./expenses.styled"
import { Typography } from "@mui/material"
import { CardSkeletonContainer } from "components/cardSkeleton/cardSkeletonContainer"

interface ExpensesProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  items?: Array<ICard>
}

export const Expenses: React.FC<ExpensesProps> = ({ transactionOpen, items }) => {
  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Expenses</Typography>
      </BoxLabelStyled>
      <ExpensesContainerStyled>
        <ExpensesWrapperStyled>
          {items &&
            items.map((item: ICard) => (
              <CardDropWrapper
                key={`${item.id} - ${Math.random()}`}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                type={"expenses"}
                transactionOpen={transactionOpen}
              />
            ))}
          {!items && <CardSkeletonContainer/>}
          <CardNew type={"expenses"} text="Add" />
        </ExpensesWrapperStyled>
      </ExpensesContainerStyled>
    </BoxStyled>
  )
}
