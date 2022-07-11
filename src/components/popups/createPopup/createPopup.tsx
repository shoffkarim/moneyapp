import { IMainIcon, IMainIconObj } from "components/interfaces";
import { colorsArray } from "components/constants";
import React, { useState } from "react";
import { BiRuble } from "react-icons/bi";
import classNames from "classnames";
import { icons } from "components/utils/icons";
import axios from "axios";
import { IconsPopup } from "components/popups/iconsPopup";


interface ICreatePopup {
  iconProps: IMainIcon;
  type: string;
  handlerClose: Function
}

export const CreatePopup: React.FC<ICreatePopup> = ({
  iconProps,
  type,
  handlerClose
}) => {

  const [activeName, setActiveName] = useState("");
  const [activeMoney, setActiveMoney] = useState(0);
  const [activeColor, setActiveColor] = useState("black");
  const [activeIcon, setActiveIcon] = useState("bank");
  const [visibleIcons, setVisibleIcons] = useState(false);
  const MainIcon: IMainIconObj = icons(activeIcon);

  const handleChangeMoney = (str: string) => {
    setActiveMoney(parseInt(str));
  };

  const handleSubmit = () => {
    const item = JSON.stringify({
      "id": Math.random(),
      "name": activeName,
      "icon": activeIcon,
      "color": activeColor,
      "value": activeMoney
    });
    axios.post(`http://localhost:3001/${type}`, JSON.parse(item))
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
          <button onClick={() => handleSubmit()}>Создать</button>
        </div>
        <div className="btn-close" onClick={() => handlerClose(false)}></div>
      </div>
      {visibleIcons && (
        <IconsPopup iconProps={iconProps} activeIcon={activeIcon} changeIcon={setActiveIcon}/>
      )}
    </div>
  );
};
