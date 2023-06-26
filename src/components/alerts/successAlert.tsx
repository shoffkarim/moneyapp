import React, { useEffect } from 'react'
import { Alert } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { AlertWrapperStyled } from "./alerts.styled"
import { useAppDispatch } from 'hooks'
import { closeSuccessAlert } from '__data__/reducers/alerts'


type SuccessAlertProps = {
  text: string
}
export const SuccessAlert: React.FC<SuccessAlertProps> = ({ text }) => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeSuccessAlert())
    }, 3000)
  }, [])

  return (
    <AlertWrapperStyled visible={true}>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">{text}</Alert>
    </AlertWrapperStyled>
  )
}
