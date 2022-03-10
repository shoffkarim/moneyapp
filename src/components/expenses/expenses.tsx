import React from 'react'
import './expenses.sass'
import { Card } from '../card'

export const Expenses: React.FC = () => {
  return (
    <div className='expenses-container'>
      <div className='expenses-wrapper'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
