import React from "react"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { AccountsContainerStyled, AccountsWrapperStyled, BoxLabelStyled, BoxStyled } from "./accounts.styled"
import { Typography } from "@mui/material"

interface AccountsProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idWhere: number,
    typeFrom: string,
    typeWhere: string
  ) => void
  items?: Array<ICard>
}

export const Accounts: React.FC<AccountsProps> = ({ transactionOpen, items }) => {

  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Accounts</Typography>
      </BoxLabelStyled>
      <AccountsContainerStyled>
        <AccountsWrapperStyled>
          {/* {!isLoaded && items && */}
          { items &&
            items.map((item: ICard) => (
              <CardDropWrapper
                key={`${item.id} - ${Math.random()}`}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                type={"accounts"}
                transactionOpen={transactionOpen}
              />
            ))}
          <CardNew type={"accounts"} text="Add"/>
        </AccountsWrapperStyled>
      </AccountsContainerStyled>
    </BoxStyled>
  )
}
