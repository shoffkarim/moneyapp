import React from "react"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { BoxLabelStyled, BoxStyled, IncomeContainerStyled, IncomeWrapperStyled } from "./income.styled"
import { Typography } from "@mui/material"
import { CardSkeletonContainer } from "components/cardSkeleton/cardSkeletonContainer"

interface IncomeProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  items?: Array<ICard>
}

export const Income: React.FC<IncomeProps> = ({ transactionOpen, items }) => {
  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Incomes</Typography>
      </BoxLabelStyled>
      <IncomeContainerStyled>
        <IncomeWrapperStyled>
          {items &&
            items.map((item: ICard) => (
              <CardDropWrapper
                key={`${item.id} - ${Math.random()}`}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                type={"incomes"}
                transactionOpen={transactionOpen}
              />
            ))}
          {!items && <CardSkeletonContainer/>}
          {items && <CardNew type={"expenses"} text="Add" />}
        </IncomeWrapperStyled>
      </IncomeContainerStyled>
    </BoxStyled>
  )
}
