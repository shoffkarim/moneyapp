import styled from '@emotion/styled'
import { css } from "@emotion/react"

export const TransactionStyled = styled.div(() => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`)

export const TransactionOverlayStyled = styled.div(() => css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.6);
  z-index: 11;
`)

export const TransactionContainerStyled = styled.div(() => css`
  width: 50%;
  height: auto;
  background-color: #fff;
  z-index: 12;
  padding: 30px 30px;
`)

export const TransactionWrapperStyled = styled.div(() => css`
  margin-bottom: 20px;
`)

export const TransactionTitleStyled = styled.div(() => css`
  font-size: 24px;
  background-color: #fff;
`)

export const TransactionCardWrapperStyled = styled.div(() => css`
  display: flex;
  flex-wrap: wrap;
`)

export const TransactionTagsStyled = styled.div(() => css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`)

export const TransactionTagsItemStyled = styled.input(() => css`
  display: none;
`)

type TransactionsTagsLabelStyledProps = {
  active: boolean
}

export const TransactionsTagsLabelStyled = styled.label<TransactionsTagsLabelStyledProps>(({ active }) => css`
  padding: 5px 10px;
  background-color: ${active ? "#1976d2": "#fff"};
  color: ${active ? "#fff": "#000"};
  border-radius: 25px;
  margin-right: 5px;
  border: 1px solid;
  border-color: ${active ? "transparent" : "rgba(0, 0, 0, 0.23)"};
  cursor: pointer;
  transition: 0.4s linear;
  &:last-child {
    margin-right: 0px;
  };
`)

export const CheckContainerStyled = styled.div(() => css`
  position: absolute;
  top: 40px;
  right: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`)