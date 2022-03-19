import { IMainIcon, IMainIconObj } from "components/card/card";
import { colorsArray } from "components/constants";
import React, { useState } from "react";
import { BiRuble } from "react-icons/bi";
import classNames from "classnames";
import "./editPopup.sass";
import { iconsPack } from "components/iconsPack";
import { icons } from "components/utils/icons";
import axios from "axios";

interface IEditPopup {
  id: number;
  iconName: string;
  iconProps: IMainIcon;
  color: string;
  name: string;
  value: number;
}

export const EditPopup: React.FC<IEditPopup> = ({
  id,
  iconName,
  iconProps,
  color,
  name,
  value,
}) => {

  const [activeName, setActiveName] = useState(name);
  const [activeMoney, setActiveMoney] = useState(value);
  const [activeColor, setActiveColor] = useState(color);
  const [activeIcon, setActiveIcon] = useState(iconName);
  const [visibleIcons, setVisibleIcons] = useState(false);
  const MainIcon: IMainIconObj = icons(activeIcon);

  const handleChangeMoney = (str: string) => {
    setActiveMoney(parseInt(str));
  };

  const handleSubmit = () => {
    const item = JSON.stringify({
      "id": 157,
      "name": activeName,
      "icon": activeIcon,
      "color": activeColor,
      "value": activeMoney
    });
    axios.post(`http://localhost:3001/incomes`, JSON.parse(item))
      .then(res => {
        console.log("success")
      })
      .catch(error => {console.error('There was an error!', error)
      });
  }

  return (
    <div className="edit-popup">
      <div className="edit-popup__overlay"></div>
      <div className="edit-popup__container">
        <div className="edit-popup__inner">
          <div
            className="edit-popup__icon"
            style={{ backgroundColor: activeColor }}
            onClick={() => setVisibleIcons(!visibleIcons)}
          >
            <MainIcon.Icon {...iconProps} />
          </div>
          <div className="edit-popup__wrapper">
            <div className="edit-popup__name">
              <input
                value={activeName}
                onChange={(e) => setActiveName(e.target.value)}
                autoFocus
              />
            </div>
            <div className="edit-popup__value">
              <input
                value={activeMoney}
                onChange={(e) => handleChangeMoney(e.target.value)}
                autoFocus
              />
              <BiRuble fontSize={"26px"} />
            </div>
            <div className="edit-popup__color">
              {colorsArray.map((item) => {
                return (
                  <div
                    className={classNames(
                      "color-item",
                      activeColor === item ? "active" : ""
                    )}
                    key={item}
                    style={{ backgroundColor: item }}
                    onClick={() => setActiveColor(item)}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="edit-popup__button">
          <button onClick={() => handleSubmit()}>Изменить</button>
        </div>
      </div>
      {visibleIcons && (
        <div className="icon-selector__container">
          {iconsPack.map((ItemIcon) => {
            const newIconProps = {
              ...iconProps,
              color: activeIcon === ItemIcon.iconName ? "white" : "black",
            };
            return (
              <div
                className="icon-selector__item"
                key={ItemIcon.iconName}
                onClick={() => setActiveIcon(ItemIcon.iconName)}
              >
                <ItemIcon.Icon {...newIconProps} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
