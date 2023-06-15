import { IMainIcon, IMainIconObj } from "components/interfaces"
import { colorsArray } from "components/constants"
import React, { useState } from "react"
import { icons } from "components/utils/icons"
import { IconsPopup } from "components/popups/icons-popup"
import { PopupButtonStyled, PopupCloseButtonStyled, PopupContainerStyled, PopupFormContainerStyled, PopupFormStyled, PopupIconStyled, PopupOverlayStyled, PopupStyled, PopupWrapperStyled } from "../popup.styled"
import CloseIcon from '@mui/icons-material/Close'
import { SubmitHandler, useForm } from "react-hook-form"
import { SetCard } from "../utils"
import { PopupInput } from "../popupInput"
import { PopupColors } from "../popupColors"


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

  const { control, handleSubmit, formState: { errors } } = useForm<SetCard>()

  const [activeColor, setActiveColor] = useState(colorsArray[0])
  const [activeIcon, setActiveIcon] = useState("bank")
  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(activeIcon)


  const handleOnSubmit: SubmitHandler<SetCard> = (data) => {
    console.log(data, type, errors)
    handlerClose(false)
  }

  return (
    <PopupStyled onSubmit={handleSubmit(handleOnSubmit)}>
      <PopupOverlayStyled/>
      <PopupContainerStyled>
        <PopupCloseButtonStyled aria-label="close" onClick={() => handlerClose(false)}>
          <CloseIcon htmlColor="#fff" fontSize='large' />
        </PopupCloseButtonStyled>
        <PopupFormStyled >
          <PopupFormContainerStyled>
            <PopupIconStyled
              style={{ backgroundColor: activeColor }}
              onClick={() => setVisibleIcons(!visibleIcons)}
            >
              <MainIcon.Icon {...iconProps} />
            </PopupIconStyled>
            <PopupWrapperStyled>
              <PopupInput
                control={control}
                name="name"
                label="Name"
              />
              <PopupInput
                control={control}
                name="value"
                label="Value"
              />
              <PopupColors
                setActiveColor={setActiveColor}
                control={control}
                activeColor={activeColor}
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
        activeIcon={activeIcon}
        changeIcon={setActiveIcon}
        control={control}
        groupName="create-popup-icons"
      />
    </PopupStyled>
  )
}
