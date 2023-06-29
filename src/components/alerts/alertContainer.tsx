import React from 'react'
import {  useAppSelector } from 'hooks'
import { RootState } from '__data__/store'
import { AlertWrapper } from './alertWrapper'

export const AlertContainer: React.FC = () => {

  const { open, text, type } = useAppSelector((state: RootState) => state.alerts)

  return (
    open ? <AlertWrapper text={text} type={type as 'success' | 'error'}/> : null
  )
}
