import { IMainIcon, IMainIconObj } from "components/interfaces"
import { black, colorsArray } from "components/constants"
import React, { useState } from "react"
import { BiRuble } from "react-icons/bi"
import { icons } from "components/utils/icons"
import { IconsPopup } from "components/popups/icons-popup"
import { BtnCloseStyled } from "pages/main/main.styled"
import { ColorItemStyled, EditPopupButtonStyled, EditPopupColorStyled, EditPopupContainerStyled, EditPopupIconStyled, EditPopupInnerStyled, EditPopupNameStyled, EditPopupOverlayStyled, EditPopupStyled, EditPopupValueStyled, EditPopupWrapperStyled } from "../edit-popup/edit-popup.styled"


interface CreatePopupProps {
  iconProps: IMainIcon;
  type: string;
  handlerClose: (x: boolean) => void
}

export const CreatePopup: React.FC<CreatePopupProps> = ({
  iconProps,
  type,
  handlerClose
}) => {

  const [activeName, setActiveName] = useState("")
  const [activeMoney, setActiveMoney] = useState(0)
  const [activeColor, setActiveColor] = useState(black)
  const [activeIcon, setActiveIcon] = useState("bank")
  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(activeIcon)

  const handleChangeMoney = (str: string) => {
    setActiveMoney(parseInt(str))
  }

  const handleSubmit = () => {
    const item = JSON.stringify({
      "id": String(Date.now()),
      "name": activeName,
      "icon": activeIcon,
      "color": activeColor,
      "value": activeMoney
    })

    // addNewCard(type, item)
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
                )
              })}
            </EditPopupColorStyled>
          </EditPopupWrapperStyled>
        </EditPopupInnerStyled>
        <EditPopupButtonStyled>
          <button onClick={() => handleSubmit()}>Создать</button>
        </EditPopupButtonStyled>
        <BtnCloseStyled onClick={() => handlerClose(false)}></BtnCloseStyled>
      </EditPopupContainerStyled>
      {visibleIcons && (
        <IconsPopup iconProps={iconProps} activeIcon={activeIcon} changeIcon={setActiveIcon}/>
      )}
    </EditPopupStyled>
  )
}
