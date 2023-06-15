import { IMainIcon, IMainIconObj } from "components/interfaces"
import { colorsArray } from "components/constants"
import React, { useState } from "react"
import { icons } from "components/utils/icons"
import { IconsPopup } from "components/popups/icons-popup"
import { TextField } from "@mui/material"
import { ColorInputStyled, ColorLabelStyled, PopupButtonStyled, PopupCloseButtonStyled, PopupColorsWrapperStyled, PopupContainerStyled, PopupElementWrapperStyled, PopupFormContainerStyled, PopupFormStyled, PopupIconStyled, PopupOverlayStyled, PopupStyled, PopupWrapperStyled } from "../popup.styled"
import CloseIcon from '@mui/icons-material/Close'
import { Controller, ControllerRenderProps, SubmitHandler, useForm } from "react-hook-form"
import { CreateCard } from "../utils"



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

  const { control, handleSubmit, formState: { errors } } = useForm<CreateCard>()

  const [activeColor, setActiveColor] = useState(colorsArray[0])
  const [activeIcon, setActiveIcon] = useState("bank")
  const [visibleIcons, setVisibleIcons] = useState(false)
  const MainIcon: IMainIconObj = icons(activeIcon)


  const handleActiveColor = (item: string, field: ControllerRenderProps<CreateCard, "color">) => {
    setActiveColor(item)
    field.onChange(item)
  }
  const handleOnSubmit: SubmitHandler<CreateCard> = (data) => {
    console.log(data)

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
              <PopupElementWrapperStyled>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      label="name"
                      placeholder="0"
                      type="text"
                    />
                  )}
                />
              </PopupElementWrapperStyled>
              <PopupElementWrapperStyled>
                <Controller
                  name="value"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      color="primary"
                      fullWidth
                      label="value"
                      placeholder="name"
                      type="text"
                    />
                  )}
                />
              </PopupElementWrapperStyled>
              <PopupElementWrapperStyled>
                <Controller
                  name="color"
                  control={control}
                  defaultValue={colorsArray[0]}
                  render={({ field }) => (
                    <PopupColorsWrapperStyled>
                      {colorsArray.map((item) => {
                        return (
                          <ColorLabelStyled
                            active={item === activeColor}
                            color={item}
                            key={item}
                            htmlFor={item}
                          >
                            <ColorInputStyled
                              {...field}
                              type="radio"
                              name="create-popup-colors"
                              value={item}
                              id={item}
                              onChange={() => {
                                handleActiveColor(item, field)
                              }}
                            />
                          </ColorLabelStyled>
                        )
                      })}
                    </PopupColorsWrapperStyled>
                  )}
                />
              </PopupElementWrapperStyled>
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
      />
    </PopupStyled>
  )
}
