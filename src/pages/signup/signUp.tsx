import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { SignUpContainer, SignUpForm } from './singup.style'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormValues } from './types'
import { ControlTextField } from './ControlTextField'

export const SignUpPage: React.FC = () => {

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>()
  console.log(errors)
  const handleOnSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <SignUpContainer>
      <Typography variant="h1">Sign Up</Typography>
      <SignUpForm onSubmit={handleSubmit(handleOnSubmit)}>
        <Stack spacing={2} direction="row">
          <ControlTextField
            name='firstName'
            control={control}
            label='First Name'
            errors={errors}
          />
          <ControlTextField
            name='lastName'
            control={control}
            label='Last Name'
            errors={errors}
          />
        </Stack>
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
        <Button variant="contained" type="submit">Sign Up</Button>
      </SignUpForm>
    </SignUpContainer>
  )
}
