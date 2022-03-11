import React from 'react'
import './card.sass'

export interface ICard {
  id: number,
  name: string,
  icon: string,
  color: string,
  value: number
}

export const Card: React.FC<ICard> = ({id, name, icon, color, value}) => {
  return (
    <div className='card'>
      <div className='card-wrapper'>
        <p className='card-name'>{name}</p>
        <div className='card-icon'>
          <img src="" alt="" />
        </div>
        <p className='card-value'>{value}</p>
      </div>
    </div>
  )
}
