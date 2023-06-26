import { colorsArray } from 'components/constants'
import React from 'react'
import { Control, Controller, ControllerRenderProps } from 'react-hook-form'
import { ColorInputStyled, ColorLabelStyled, PopupColorsWrapperStyled, PopupElementWrapperStyled } from './popup.styled'
import { SetCard, PopupFormElementName } from './utils'

type PopupColorsProps = {
  setActiveColor: (item: string) => void
  control: Control<SetCard, PopupFormElementName>
  activeColor: string
  name: PopupFormElementName,
  groupName: string
}

export const PopupColors: React.FC<PopupColorsProps> = ({
  setActiveColor,
  control,
  activeColor,
  name,
  groupName
}) => {

  const handleActiveColor = (item: string, field: ControllerRenderProps<SetCard, PopupFormElementName>) => {
    setActiveColor(item)
    field.onChange(item)
  }
  return (
    <PopupElementWrapperStyled>
      <Controller
        name={name}
        control={control}
        defaultValue={activeColor}
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
                    name={groupName}
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
  )
}
