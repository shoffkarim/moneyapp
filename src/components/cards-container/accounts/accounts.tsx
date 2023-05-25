import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "__data__/store"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/card-new"
import { CardDropWrapper } from "components/card/card-drop-wrapper"
import { AccountsContainerStyled, AccountsWrapperStyled } from "./accounts.styled"

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

  const isLoaded = useSelector((state: RootState) => state.Accounts.isLoaded)

  return (
    <AccountsContainerStyled>
      <AccountsWrapperStyled>
        {!isLoaded && items &&
          items.map((item: ICard) => (
            <CardDropWrapper
              key={`${item.id} - ${Math.random()}`}
              id={item.id}
              name={item.name}
              icon={item.icon}
              color={item.color}
              value={item.value}
              type={"accounts"}
              operOpen={transactionOpen}
            />
          ))}
        <CardNew type={"accounts"}/>
      </AccountsWrapperStyled>
    </AccountsContainerStyled>
  )
}
