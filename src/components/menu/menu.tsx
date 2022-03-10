import React from 'react'
import { Account, Total } from 'components'
import './menu.sass'
export const Menu: React.FC = () => {
  return (
    <aside className='menu'>
      <div className='menu-container'>
        <Account/>
        <Total/>
      </div>
    </aside>
  )
}
