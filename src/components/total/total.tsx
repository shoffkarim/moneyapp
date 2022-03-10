import React from 'react'
import './total.sass'

export const Total: React.FC = () => {
  return (
    <div className='total'>
      <div className='total-item'>
        <p className='total-item__text'>Расходы</p>
        <div className='total-item__wrapper'>
          <p className="total-item__value">989213 Р</p>
        </div>
      </div>
      <div className='total-item'>
        <p className='total-item__text'>Доходы</p>
        <div className='total-item__wrapper'>
          <p className="total-item__value">432536 Р</p>
        </div>
      </div>
      <div className='total-item'>
        <p className='total-item__text'>Баланс</p>
        <div className='total-item__wrapper'>
          <p className="total-item__value">901258 Р</p>
        </div>
      </div>
    </div>
  )
}
