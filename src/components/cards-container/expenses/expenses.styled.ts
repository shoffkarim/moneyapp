import styled from '@emotion/styled'
import { css } from "@emotion/react"
import { SwiperSlide } from 'swiper/react'
export const ExpensesContainerStyled = styled.div(() => css`
  padding: 10px 20px;
`)

export const ExpensesWrapperStyled = styled.div(() => css`
  display: grid;
  grid-auto-flow: column;
  justify-items: start;
  grid-template-columns: repeat(auto-fill, 100px);
  gap: 0px 20px;
`)


export const SwiperSlideExpensesStyled = styled(SwiperSlide)(() => css`
  display: flex;
  height: calc((100% - 30px) / 2) !important;
  gap: 40px 20px;
  flex-wrap: wrap;
`)