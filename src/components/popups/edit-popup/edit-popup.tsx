import { IMainIcon, IMainIconObj } from "components/interfaces";
import { colorsArray } from "components/constants";
import React, { useState } from "react";
import { BiRuble } from "react-icons/bi";
import { icons } from "components/utils/icons";
import axios from "axios";
import { IconsPopup } from "components/popups/icons-popup";
import { ColorItemStyled, EditPopupButtonStyled, EditPopupColorStyled, EditPopupContainerStyled, EditPopupIconStyled, EditPopupInnerStyled, EditPopupNameStyled, EditPopupOverlayStyled, EditPopupStyled, EditPopupValueStyled, EditPopupWrapperStyled } from "./edit-popup.styled";
import { BtnCloseStyled } from "pages/main/main.styled";


interface EditPopupProps {
  id: number;
  iconName: string;
  iconProps: IMainIcon;
  color: string;
  name: string;
  value: number;
  type: string;
  handlerClose: Function
}

export const EditPopup: React.FC<EditPopupProps> = ({
  id,
  iconName,
  iconProps,
  color,
  name,
  value,
  type,
  handlerClose
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
      "id": id,
      "name": activeName,
      "icon": activeIcon,
      "color": activeColor,
      "value": activeMoney
    });
    axios.put(`http://localhost:3001/${type}/${id}`, JSON.parse(item))
      .then(res => {
        console.log("success")
      })
      .catch(error => {console.error('There was an error!', error)
      });
  }

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/${type}/${id}`)
      .then(res => {
        console.log("success")
      })
      .catch(error => {console.error('There was an error!', error)
      });
  }

  return (
    <EditPopupStyled>
      <EditPopupOverlayStyled/>
      <EditPopupContainerStyled>
        <EditPopupInnerStyled>
          <EditPopupIconStyled
            style={{ backgroundColor: activeColor }}
            onClick={() => setVisibleIcons(!visibleIcons)}
          >
            <MainIcon.Icon {...iconProps} />
          </EditPopupIconStyled>
          <EditPopupWrapperStyled>
            <EditPopupNameStyled>
              <input
                value={activeName}
                onChange={(e) => setActiveName(e.target.value)}
                autoFocus
              />
            </EditPopupNameStyled>
            <EditPopupValueStyled>
              <input
                value={activeMoney}
                onChange={(e) => handleChangeMoney(e.target.value)}
              />
              <BiRuble fontSize={"26px"} />
            </EditPopupValueStyled>
            <EditPopupColorStyled>
              {colorsArray.map((item) => {
                return (
                  <ColorItemStyled
                    activeColor={activeColor === item}
                    key={item}
                    style={{ backgroundColor: item }}
                    onClick={() => setActiveColor(item)}
                  />
                );
              })}
            </EditPopupColorStyled>
          </EditPopupWrapperStyled>
        </EditPopupInnerStyled>
        <EditPopupButtonStyled>
          <button onClick={() => handleSubmit()}>Изменить</button>
          <button onClick={() => handleDelete()}>Удалить</button>
        </EditPopupButtonStyled>
        <BtnCloseStyled onClick={() => handlerClose(false)}></BtnCloseStyled>
      </EditPopupContainerStyled>
      {visibleIcons && (
        <IconsPopup iconProps={iconProps} activeIcon={activeIcon} changeIcon={setActiveIcon}/>
      )}
    </EditPopupStyled>
  );
};
