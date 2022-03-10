import React from 'react'
import { Income } from 'components'
import './main.sass'
import { Accounts } from 'components/accounts'

export const Main: React.FC = () => {
  return (
    <main className='main'>
      <div className='wrapper'>
        <Income/>
        <Accounts/>
      </div>
    </main>
  )
}