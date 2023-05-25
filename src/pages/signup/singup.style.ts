import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { TextField } from '@mui/material'

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
`)

export const SignUpTextField = styled(TextField)(() => css`
  margin-bottom: 20px;
`)
