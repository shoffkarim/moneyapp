import React, { useEffect } from 'react'
import { Alert } from '@mui/material'
import { AlertWrapperStyled } from "./alerts.styled"
import { useAppDispatch } from 'hooks'
import { closeSuccessAlert } from '__data__/reducers/alerts'


type AlertWrapperProps = {
  text: string
  type: 'success' | 'error'
}
export const AlertWrapper: React.FC<AlertWrapperProps> = ({ text, type }) => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeSuccessAlert())
    }, 3000)
  }, [])

  return (
    <AlertWrapperStyled visible={true}>
      <Alert severity={type}>{text}</Alert>
    </AlertWrapperStyled>
  )
}
