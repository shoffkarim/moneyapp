import { IMainIconObj } from "types"
import React, { useState } from "react"
import { icons } from "components/utils/icons"
import { useAppDispatch, useAppSelector } from "hooks"
import { RootState } from "__data__/store"
import { changeColor, changeIcon, closeEditPopup } from "__data__/reducers/editPopup"
import { PopupButtonStyled, PopupCloseButtonStyled, PopupContainerStyled, PopupFormContainerStyled, PopupFormStyled, PopupIconStyled, PopupOverlayStyled, PopupStyled, PopupWrapperStyled } from "../popup.styled"
import { Typography } from "@mui/material"
import { PopupInput } from "../popupInput"
import { PopupColors } from "../popupColors"
import { IconsPopup } from "../iconsPopup"
import CloseIcon from '@mui/icons-material/Close'
import { getPopupTitle, EditCard } from "../utils"
import { SubmitHandler, useForm } from "react-hook-form"

export const EditPopup: React.FC = () => {

  const dispatch = useAppDispatch()

  const { open, id, iconName, color, name, value, type } = useAppSelector((state: RootState) => state.editPopup)


  const title = getPopupTitle('edit', type)
  const { control, handleSubmit, formState: { errors } } = useForm<EditCard>()

  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(iconName)

  const handleChangeIcon = (icon: string) => {
    dispatch(changeIcon(icon))
  }

  const handleChangeColor = (color: string) => {
    dispatch(changeColor(color))
  }

  const handleOnSubmit: SubmitHandler<EditCard> = (data) => {
    // TODO: create submiting and deleting
    console.log(data)
  }

  const handleClose = () => {
    dispatch(closeEditPopup())
  }

  return (
    open ?
      <PopupStyled onSubmit={handleSubmit(handleOnSubmit)}>
        <PopupOverlayStyled/>
        <PopupContainerStyled>
          <PopupCloseButtonStyled
            aria-label="close"
            onClick={() => handleClose()}
          >
            <CloseIcon htmlColor="#fff" fontSize='large' />
          </PopupCloseButtonStyled>
          <PopupFormStyled>
            {title &&
              <Typography
                variant="h5"
                component="h2"
                textAlign="center"
                marginBottom="20px"
              >{title}</Typography>
            }
            <PopupFormContainerStyled>
              <PopupIconStyled
                style={{ backgroundColor: color }}
                onClick={() => setVisibleIcons(!visibleIcons)}
              >
                <MainIcon.Icon
                  size="50px"
                  color="white"
                />
              </PopupIconStyled>
              <PopupWrapperStyled>
                <PopupInput
                  control={control}
                  name="name"
                  label="Name"
                  defaultValue={name}
                />
                <PopupInput
                  control={control}
                  name="value"
                  label="Value"
                  defaultValue={value}
                />
                <PopupColors
                  setActiveColor={handleChangeColor}
                  control={control}
                  activeColor={color}
                  name="color"
                  groupName="create-popup-colors"
                />
              </PopupWrapperStyled>
            </PopupFormContainerStyled>
            <PopupButtonStyled variant="contained" type="submit">Create</PopupButtonStyled>
          </PopupFormStyled>

        </PopupContainerStyled>
        <IconsPopup
          visible={visibleIcons}
          activeIcon={iconName}
          changeIcon={handleChangeIcon}
          control={control}
          groupName="create-popup-icons"
        />
      </PopupStyled>
      : null
  )
}
