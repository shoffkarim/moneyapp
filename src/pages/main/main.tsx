import React from 'react'
import { Income, Accounts, Expenses } from 'components'
import './main.sass'

export const Main: React.FC = () => {
  return (
    <main className='main'>
      <div className='wrapper'>
        <Income/>
        <Accounts/>
        <Expenses/>
      </div>
    </main>
  )
}