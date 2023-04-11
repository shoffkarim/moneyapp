import React from 'react'
import { Account, Total } from 'components'
import { MenuHistory } from './menu-history'
import { MenuContainerStyled, MenuStyled } from './menu.styled'

type MenuProps = {
  handleOpenHistory: () => void
  name?: string
  total?: {
    expenses?:number
    incomes?: number
    balance?: number
  }
}
export const Menu: React.FC<MenuProps> = ({ handleOpenHistory, name, total }) => {
  return (
    <MenuStyled>
      <MenuContainerStyled>
        <Account name={name}/>
        <Total total={total}/>
        <MenuHistory handleOpenHistory={handleOpenHistory}/>
      </MenuContainerStyled>
    </MenuStyled>
  )
}