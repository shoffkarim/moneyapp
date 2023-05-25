import React, { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { SignUpContainer, SignUpForm, SignUpTextField } from './singup.style'

export const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <SignUpContainer>
      <Typography variant="h1">Sign Up</Typography>
      <SignUpForm>
        <Stack spacing={2} direction="row">
          <SignUpTextField
            type="text"
            variant="outlined"
            color="primary"
            label="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            fullWidth
            required
          />
          <SignUpTextField
            type="text"
            variant="outlined"
            color="primary"
            label="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            fullWidth
            required
          />
        </Stack>
        <SignUpTextField
          type="email"
          variant="outlined"
          color="primary"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          required
        />
        <SignUpTextField
          type="password"
          variant="outlined"
          color="primary"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          required
        />
        <Button variant="contained" type="submit">Sign Up</Button>
      </SignUpForm>
    </SignUpContainer>
  )
}
