import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Tag } from 'components/interfaces'

export const TransactionStyled = styled.div(() => css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
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
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #c4c4c4;
  z-index: 12;
  padding: 15px;
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
type TransactionTagsItemStyledProps = {
  active?: Tag
}
export const TransactionTagsItemStyled = styled.div<TransactionTagsItemStyledProps>(({ active }) => css`
  padding: 3px 5px;
  background-color: #fff;
  color: black;
  border-radius: 25px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.4s linear;
  &:last-child
    margin-right: 0px;
  ${active ? 'background-color: blue; color: white;': ''}
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