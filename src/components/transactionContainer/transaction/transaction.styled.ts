import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

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
  padding: 30px 0px;
  position: relative;
  max-width: 1000px;
`)

export const TransactionWrapperStyled = styled.div(() => css`
  margin-bottom: 20px;
  padding: 0 30px;
`)

export const TransactionTitleStyled = styled.div(() => css`
  font-size: 24px;
  background-color: #fff;
  margin-right: 25px;
`)

export const TransactionCardWrapperStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 20px;
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
  border-radius: 50%;
  background-color: #1976d2;
`)

export const CloseButtonStyled = styled(IconButton)(() => css`
  position: absolute;
  top: -15px;
  right: -85px;
  z-index: 50;
`)

export const TransactionCardsTopStyled = styled.div(() => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 30px;
`)

export type SwiperStyledProps = {
  paddingBottom?: boolean | 0
}

export const SwiperTransactionStyled = styled(Swiper, {
  shouldForwardProp: prop => prop !== 'paddingBottom'
})<SwiperStyledProps>(({ paddingBottom }) => css`
  padding: ${paddingBottom ? '10px 0px 40px 0px' : '10px 0px 10px 0px'};
  width: 100%;
`)

export const SwiperSlideTransactionStyled = styled(SwiperSlide)(() => css`

`)

export const SwiperSlideTransactionWrapper = styled.div(() => css`
  display: flex;
  gap: 0px 27px;
  padding: 0px 45px;
`)