import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { Box } from '@mui/material'
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
  gap: 0px 20px;
`)

export type SwiperStyled = {
  paddingBottom?: boolean | 0
}

export const SwiperStyled = styled(Swiper, {
  shouldForwardProp: prop => prop !== 'paddingBottom'
})<SwiperStyled>(({ paddingBottom }) => css`
  padding: ${paddingBottom ? '10px 0px 40px 25px' : '10px 0px 10px 25px'};
  width: 100%;
`)

export const CardsSkeletonStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 20px;
  padding: 10px 0px 10px 25px;
`)

export const SwiperSlideExpensesStyled = styled(SwiperSlide)(() => css`
  display: flex;
  height: calc((100% - 30px) / 2) !important;
  gap: 40px 20px;
  flex-wrap: wrap;
`)