// import ru from 'date-fns/locale/ru';
import React from "react"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TransactionWrapperStyled } from "./transaction.styled"
import { Control, Controller } from "react-hook-form"
import { TransactionValues } from "./utils"

interface TransactionDateProps {
  // vendor library
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<TransactionValues, any>
}

export const TransactionDate: React.FC<TransactionDateProps> = ({ control }) => {

  return (
    <TransactionWrapperStyled>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          name="date"
          control={control}
          defaultValue={new Date()}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker {...field} label="Date"/>
          )}
        />

      </LocalizationProvider>
    </TransactionWrapperStyled>
  )
}
