import React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { SignUpTextField } from './login.style'
import { FormValues } from './types'
import { getErrorMessage } from './utils'

interface ControlTextFieldProps {
  name: keyof FormValues
  // vendor library
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FormValues, any>
  pattern?: RegExp
  label: string
  errors: FieldErrors<FormValues>
}

export const ControlTextField: React.FC<ControlTextFieldProps> = ({
  name,
  control,
  pattern,
  label,
  errors
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{
        required: true,
        pattern
      }}
      render={({ field, fieldState: { error } }) => (
        <SignUpTextField
          {...field}
          type="text"
          variant="outlined"
          color="primary"
          label={label}
          fullWidth
          error={error !== undefined}
          helperText={error && getErrorMessage(name, errors[name]?.type)}
        />
      )}
    />
  )
}
