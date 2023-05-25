import React from "react"
import { iconsPack } from "components/iconsPack"
import { IMainIcon } from "components/interfaces"
import { black, white } from "components/constants"
import { IconSelectorContainerStyled, IconSelectorItemStyled } from "./icons-popup.styled"

interface IconsPopupProps {
  iconProps: IMainIcon,
  activeIcon: string,
  changeIcon: (name: string) => void
}

export const IconsPopup: React.FC<IconsPopupProps> = ({
  iconProps, activeIcon, changeIcon
}) => {
  return (
    <IconSelectorContainerStyled>
      {iconsPack.map((ItemIcon) => {
        const newIconProps = {
          ...iconProps,
          color: activeIcon === ItemIcon.iconName ? white : black,
        }
        return (
          <IconSelectorItemStyled
            key={ItemIcon.iconName}
            onClick={() => changeIcon(ItemIcon.iconName)}
          >
            <ItemIcon.Icon {...newIconProps} />
          </IconSelectorItemStyled>
        )
      })}
    </IconSelectorContainerStyled>
  )
}
