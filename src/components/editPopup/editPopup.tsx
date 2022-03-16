import { IMainIcon } from 'components/card/card'
import { colorsArray } from 'components/constants'
import React, { useState } from 'react'
import { BiRuble } from 'react-icons/bi'
import "./editPopup.sass"

interface IEditPopup {
  Icon: React.FC<IMainIcon>
  iconProps: IMainIcon
  color: string,
  name: string,
  value: number
}

export const EditPopup: React.FC<IEditPopup> = ({
  Icon, iconProps, color, name, value
}) => {
  const [activeName, setActiveName] = useState(name)
  const [activeMoney, setActiveMoney] = useState(value)

  const handleChangeMoney = (str: string) => {
    setActiveMoney(parseInt(str))
  }

  return (
    <div className="edit-popup">
        <div className="edit-popup__overlay"></div>
        <div className="edit-popup__container">
          <div className="edit-popup__icon" style={{"backgroundColor": color}}>
            <Icon {...iconProps}/>
          </div>
          <div className="edit-popup__wrapper">
            <div className="edit-popup__name">
              <input
                value={activeName}
                onChange={(e) => setActiveName(e.target.value)}
                autoFocus/>
            </div>
            <div className="edit-popup__value">
              <input
                value={activeMoney}
                onChange={(e) => handleChangeMoney(e.target.value)}
                autoFocus/>
              <BiRuble fontSize={"26px"}/>
            </div>
            <div className="edit-popup__color">
              {colorsArray.map((item) =>
                <div className="color-item" style={{"backgroundColor": item}}/>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}
