import React from 'react'
import { Account, Total } from 'components'
import './menu.sass'
import { MenuHistory } from './history'

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
    <aside className='menu'>
      <div className='menu-container'>
        <Account name={name}/>
        <Total total={total}/>
        <MenuHistory handleOpenHistory={handleOpenHistory}/>
      </div>
    </aside>
  )
}