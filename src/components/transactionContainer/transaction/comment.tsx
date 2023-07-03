import { TextField } from "@mui/material"
import React from "react"
import { Control, Controller } from "react-hook-form"
import { TransactionWrapperStyled } from "./transaction.styled"
import { TransactionValues } from "./utils"

interface CommentProps {
  // vendor library
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<TransactionValues, any>
  defaultValue: string
}

export const Comment: React.FC<CommentProps> = ({ control, defaultValue  }) => {
  return (
    <TransactionWrapperStyled>
      <Controller
        name="comment"
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            color="primary"
            fullWidth
            label="Comment"
            placeholder="Comment"
            type="text"
          />
        )}
      />
    </TransactionWrapperStyled>
  )
}
