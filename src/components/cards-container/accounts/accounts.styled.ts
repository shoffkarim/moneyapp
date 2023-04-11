import styled from '@emotion/styled';
import { css } from "@emotion/react";

export const AccountsContainerStyled = styled.div(() => css`
  padding: 10px 20px;
  background-color: #c4c4c4;
`)

export const AccountsWrapperStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 20px;
`)