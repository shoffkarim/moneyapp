import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Box, Button } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

export const BoxStyled = styled(Box)(() => css`
  position: relative;
  border-radius: 0px 10px 10px 10px;
  width: 100%;
  display: flex;
  max-width: 1480px;
`)

export const BoxLabelStyled = styled.div(() => css`
  position: absolute;
  top: -31px;
  background-color: #1565c0;
  padding: 5px 10px;
  border-radius: 5px 5px 0px 0px;
`)

export const SwiperSlideStyled = styled(SwiperSlide)(() => css`
  display: flex;
  gap: 0px 27px;
`)

export type SwiperStyled = {
  paddingBottom?: boolean | 0
}

export const SwiperStyled = styled(Swiper, {
  shouldForwardProp: prop => prop !== 'paddingBottom'
})<SwiperStyled>(({ paddingBottom }) => css`
  padding: ${paddingBottom ? '10px 0px 40px 50px' : '10px 0px 10px 25px'};
  width: 100%;
`)

export const CardsSkeletonStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 27px;
  padding: 10px 0px 10px 25px;
`)

export const SwiperSlideExpensesStyled = styled(SwiperSlide)(() => css`
  display: flex;
  height: calc((100% - 30px) / 2) !important;
  gap: 40px 27px;
  flex-wrap: wrap;
`)

export const SwiperButtonPrevStyled = styled(Button)(() => css`
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% - 26px);
  min-width: 30px;
  z-index: 50;
`)

export const SwiperButtonNextStyled = styled(Button)(() => css`
  position: absolute;
  top: 0;
  right: 0;
  height: calc(100% - 26px);
  min-width: 30px;
  z-index: 50;
`)
