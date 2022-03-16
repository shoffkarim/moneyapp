import React, { useState } from 'react'
import './card.sass'
import { BiRuble } from 'react-icons/bi'
import { GrFormEdit } from "react-icons/gr"
import { formatMoney } from 'components/utils/format';
import { themeColor } from 'components/utils/color';
import { icons } from 'components/utils/icons';
import { EditPopup } from 'components/editPopup';

export interface ICard {
  id: number,
  name: string,
  icon: string,
  color: string,
  value: number
}

export interface IMainIcon {
  size: string,
  color: string,
}

const iconProps = {
  size: "50px",
  color: "white"
}

export const Card: React.FC<ICard> = ({
  id, name, icon, color, value
}) => {

  const [editVisible, setEditVisible] = useState(false)

  const money: string = formatMoney(value);
  const theme: string = themeColor(color)
  const MainIcon: React.FC<IMainIcon> = icons(icon)

  return (
    <div
      className='card'
      onMouseEnter={() => setEditVisible(!editVisible)}
      onMouseLeave={()=> setEditVisible(!editVisible)}
    >
      <div className='card-wrapper'>
        <p className='card-name'>{name}</p>
        <div className='card-icon' style={{"backgroundColor": theme}}>
          <MainIcon {...iconProps}/>
        </div>
        <div className='card-value'>
          <span>{money}</span>
          <BiRuble/>
        </div>
      </div>
      { editVisible ?
        (<div className="edit-container">
          <GrFormEdit size="25px"/>
        </div>)
        : null
      }
      <EditPopup
        Icon={MainIcon}
        iconProps={iconProps}
        color={theme}
        name={name}
        value={value}
      />
    </div>
  )
}
