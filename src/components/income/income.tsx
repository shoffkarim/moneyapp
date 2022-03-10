import React from 'react'
import './income.sass'
import { Card } from '../card'

export const Income: React.FC = () => {
  return (
    <div className='income-container'>
      <div className='income-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
