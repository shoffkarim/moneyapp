import React from "react"
import { TextField } from "@mui/material"
import { Control, Controller } from "react-hook-form"
import { TransactionWrapperStyled } from "./transaction.styled"
import { TransactionValues } from "./utils"

interface ValueProps {
  // vendor library
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<TransactionValues, any>
}

export const Value: React.FC<ValueProps> = ({ control }) => {

  return (
    <TransactionWrapperStyled>
      <Controller
        name="value"
        control={control}
        defaultValue=""
        // TODO: regexp for numbers
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            color="primary"
            fullWidth
            label="value"
            placeholder="0"
            type="text"
          />
        )}
      />
    </TransactionWrapperStyled>
  )
}
