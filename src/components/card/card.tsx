import React from 'react'
import './card.sass'
export const Card: React.FC = () => {
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <p className='card-name'>Зарплата</p>
        <div className='card-icon'>
          <img src="" alt="" />
        </div>
        <p className='card-value'>989 345 Р</p>
      </div>
    </div>
  )
}
