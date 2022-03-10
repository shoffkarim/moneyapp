import React from 'react'
import { Income } from 'components'
import './main.sass'

export const Main: React.FC = () => {
  return (
    <main className='main'>
      <div className='wrapper'>
        <Income/>
        </div>
    </main>
  )
}