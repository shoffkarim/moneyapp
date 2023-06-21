import React from "react"
import { iconsPack } from "components/iconsPack"
import { IconPopupWrapperStyled, IconPoupContainerStyled, IconSelectorInputStyled, IconSelectorItemStyled } from "./iconsPopup.styled"
import { Control, Controller, ControllerRenderProps } from "react-hook-form"
import { PopupFormElementName, SetCard } from "../utils"

interface IconsPopupProps {
  activeIcon: string,
  changeIcon: (name: string) => void
  control: Control<SetCard, PopupFormElementName>
  visible: boolean
  groupName: string
}

export const IconsPopup: React.FC<IconsPopupProps> = ({
  activeIcon,
  changeIcon,
  control,
  visible,
  groupName
}) => {

  const handleActiveIcon = (name: string, field: ControllerRenderProps<SetCard, 'icon'>) => {
    changeIcon(name)
    field.onChange(name)
  }
  return (
    <IconPoupContainerStyled visible={visible}>
      <Controller
        name="icon"
        control={control}
        defaultValue="bank"
        render={({ field }) => (
          <IconPopupWrapperStyled>
            {iconsPack.map((ItemIcon) => {
              return (
                <IconSelectorItemStyled
                  key={ItemIcon.iconName}
                  htmlFor={ItemIcon.iconName}
                >
                  <ItemIcon.Icon
                    size="30px"
                    color={activeIcon === ItemIcon.iconName ? "white" : "black"}/>
                  <IconSelectorInputStyled
                    {...field}
                    type="radio"
                    id={ItemIcon.iconName}
                    name={groupName}
                    value={ItemIcon.iconName}
                    onChange={() => {
                      handleActiveIcon(ItemIcon.iconName, field)}
                    } />
                </IconSelectorItemStyled>
              )
            })}
          </IconPopupWrapperStyled>
        )}/>
    </IconPoupContainerStyled>
  )
}
