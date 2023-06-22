import { TextField } from '@mui/material'
import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { PopupElementWrapperStyled } from './popup.styled'
import { SetCard, PopupFormElementName } from './utils'

type PopupInputProps = {
  control: Control<SetCard, PopupFormElementName>
  name: PopupFormElementName
  label: string
  defaultValue?: string | number
}

export const PopupInput: React.FC<PopupInputProps> = ({
  control,
  name,
  label,
  defaultValue
}) => {
  return (
    <PopupElementWrapperStyled>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue ? String(defaultValue) : ''}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            color="primary"
            fullWidth
            label={label}
            placeholder={label}
            type="text"
          />
        )}
      />
    </PopupElementWrapperStyled>
  )
}
