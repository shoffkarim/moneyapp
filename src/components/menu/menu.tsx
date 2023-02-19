import React from 'react'
import { Account, Total } from 'components'
import './menu.sass'
import { MenuHistory } from './history'

type MenuProps = {
  handleOpenHistory: () => void
}
export const Menu: React.FC<MenuProps> = ({handleOpenHistory}) => {
  return (
    <aside className='menu'>
      <div className='menu-container'>
        <Account/>
        <Total/>
        <MenuHistory handleOpenHistory={handleOpenHistory}/>
      </div>
    </aside>
  )
}