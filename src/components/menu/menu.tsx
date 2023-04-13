import React from 'react'
import { Account, Total } from 'components'
import { MenuContainerStyled, MenuStyled } from './menu.styled'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

type MenuProps = {
  name?: string
  total?: {
    expenses?:number
    incomes?: number
    balance?: number
  }
}
export const Menu: React.FC<MenuProps> = ({ name, total }) => {
  return (
    <MenuStyled>
      <MenuContainerStyled>
        <Account name={name}/>
        <Total total={total}/>
        <Button component={Link} to={'/history'} variant="contained">History</Button>
        <Button component={Link} to={'/'} variant="contained">Main</Button>
      </MenuContainerStyled>
    </MenuStyled>
  )
}