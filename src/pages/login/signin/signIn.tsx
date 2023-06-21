import React from 'react'
import { Button, Typography } from '@mui/material'
import { FormButtonSubmitStyled, SignUpContainer, SignUpForm } from '../login.style'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormValues } from '../types'
import { ControlTextField } from '../controlTextField'
import { Link } from 'react-router-dom'


export const SignInPage: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <SignUpContainer>
      <Typography variant="h1">Sign In</Typography>
      <SignUpForm onSubmit={handleSubmit(handleOnSubmit)}>
        <ControlTextField
          name='email'
          control={control}
          label='Email'
          pattern={/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}
          errors={errors}
        />
        <ControlTextField
          name='password'
          control={control}
          label='Password'
          errors={errors}
        />
        <FormButtonSubmitStyled variant="contained" type="submit">Sign In</FormButtonSubmitStyled>
        <Button component={Link} to={'/signup'} variant="outlined">Sign Up</Button>
      </SignUpForm>
    </SignUpContainer>
  )
}
