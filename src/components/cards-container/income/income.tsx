import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "__data__/store"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { BoxLabelStyled, BoxStyled, IncomeContainerStyled, IncomeWrapperStyled } from "./income.styled"
import { Typography } from "@mui/material"

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

  // const isLoaded = useSelector((state: RootState) => state.Incomes.isLoaded)

  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Incomes</Typography>
      </BoxLabelStyled>
      <IncomeContainerStyled>
        <IncomeWrapperStyled>
          {/* {!isLoaded && items && */}
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
          <CardNew type={"incomes"} text="Add" />
        </IncomeWrapperStyled>
      </IncomeContainerStyled>
    </BoxStyled>
  )
}
