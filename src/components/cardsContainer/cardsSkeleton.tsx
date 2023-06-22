import React from 'react'
import { CardSkeleton } from 'components/card/cardSkeleton/cardSkeleton'
import { CardsSkeletonStyled } from './cardContainers.style'

export const CardsSkeleton = () => {
  return (
    <CardsSkeletonStyled>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
      <CardSkeleton/>
    </CardsSkeletonStyled>
  )
}
