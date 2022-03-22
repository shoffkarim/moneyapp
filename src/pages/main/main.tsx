import React from 'react'
import { Income, Accounts, Expenses, Menu } from 'components'
import './main.sass'
import { Operation } from 'components/operation'

export const Main: React.FC = () => {

  return (
    <div className='container'>
      <main className='main'>
        <div className='wrapper'>
          <Income/>
          <Accounts/>
          <Expenses/>
        </div>
        <Operation/>
      </main>
      <Menu/>
    </div>
  )
}