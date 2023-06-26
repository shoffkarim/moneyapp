import React from 'react'
import {  useAppSelector } from 'hooks'
import { RootState } from '__data__/store'
import { SuccessAlert } from './successAlert'

export const AlertContainer: React.FC = () => {

  const { open, text } = useAppSelector((state: RootState) => state.successAlert)

  return (
    open ? <SuccessAlert text={text}/> : null
  )
}
