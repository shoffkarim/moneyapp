import styled from '@emotion/styled';
import { css } from "@emotion/react";

export const ExpensesContainerStyled = styled.div(() => css`
  padding: 10px 20px;
  background-color: #c4c4c4;
`)

export const ExpensesWrapperStyled = styled.div(() => css`
  display: grid;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 30px 20px;
`)