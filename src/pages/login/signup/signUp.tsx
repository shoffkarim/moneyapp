import React from 'react'
import { Button, Typography } from '@mui/material'
import { FormButtonSubmitStyled, SignUpContainer, SignUpForm } from '../login.style'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormValues } from '../types'
import { ControlTextField } from '../ControlTextField'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_USER } from '__data__/mutations/user'

export const SignUpPage: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>()

  const [addUser] = useMutation(ADD_USER)

  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    addUser({ variables: {
      name: data.name,
      email: data.email,
      password: data.password
    } })
  }

  return (
    <SignUpContainer>
      <Typography variant="h1">Sign Up</Typography>
      <SignUpForm onSubmit={handleSubmit(handleOnSubmit)}>
        <ControlTextField
          name='name'
          control={control}
          label='Name'
          errors={errors}
        />
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
        <FormButtonSubmitStyled variant="contained" type="submit">Sign Up</FormButtonSubmitStyled>
        <Button component={Link} to={'/signin'} variant="outlined">Sign In</Button>
      </SignUpForm>
    </SignUpContainer>
  )
}
