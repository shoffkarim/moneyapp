import React from 'react'
import { useSwiper } from 'swiper/react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { SwiperButtonNextStyled, SwiperButtonPrevStyled } from './cardContainers.style'

export const SwiperNavigation = () => {
  const swiper = useSwiper()
  const handleMouseOnPrev = () => {
    setTimeout(() => {
      swiper.slidePrev()
    }, 1000)
  }
  const handleMouseOnNext = () => {
    setTimeout(() => {
      swiper.slideNext()
    }, 1000)
  }
  return (
    <>
      <SwiperButtonPrevStyled
        onClick={() => swiper.slidePrev()}
        onDragOver={handleMouseOnPrev}
      >
        <ArrowBackIosNewIcon htmlColor="#fff"/>
      </SwiperButtonPrevStyled>
      <SwiperButtonNextStyled
        onClick={() => swiper.slideNext()}
        onDragOver={handleMouseOnNext}
      >
        <ArrowForwardIosIcon htmlColor="#fff"/>
      </SwiperButtonNextStyled>
    </>
  )
}
