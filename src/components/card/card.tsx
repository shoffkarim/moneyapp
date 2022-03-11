import React from 'react'
import './card.sass'
import { BiRuble } from 'react-icons/bi'
import { formatMoney } from 'components/utils/format';

export interface ICard {
  id: number,
  name: string,
  icon: string,
  color: string,
  value: number
}


export const Card: React.FC<ICard> = ({id, name, icon, color, value}) => {
  const money: string = formatMoney(value);

  return (
    <div className='card'>
      <div className='card-wrapper'>
        <p className='card-name'>{name}</p>
        <div className='card-icon'>
          <img src="" alt="" />
        </div>
        <div className='card-value'>
          <span>{money}</span>
          <BiRuble/>
        </div>
      </div>
    </div>
  )
}
