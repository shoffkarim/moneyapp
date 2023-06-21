import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Button, TextField } from '@mui/material'

export const SignUpContainer = styled.div(() => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`)


export const SignUpForm = styled.form(() => css`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 500px;
`)

export const SignUpTextField = styled(TextField)(() => css`
  margin-bottom: 20px;
`)

export const FormButtonSubmitStyled = styled(Button)(() => css`
  margin-bottom: 20px;
`)