import React from 'react'
import './accounts.sass'
import { Card } from '../card'

export const Accounts: React.FC = () => {
  return (
    <div className='accounts-container'>
      <div className='accounts-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
