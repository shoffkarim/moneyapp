import React from "react"
import { ICard } from "types"
import { CardNew } from "components/card/cardNew"
import { CardDropWrapper } from "components/card/cardDropWrapper"
import { Typography } from "@mui/material"
import { Pagination } from "swiper"
import { BoxLabelStyled, BoxStyled, SwiperStyled, SwiperSlideStyled, SwiperSlideExpensesStyled } from './cardContainers.style'
import { CardsSkeleton } from "./cardsSkeleton"
import { separateItems } from "./separateItems"
import { EXPENSES, SIZE_OF_CARDS, SIZE_OF_EXPENSES_CARDS } from "components/constants"
import { SwiperNavigation } from "./swiperNavigation"

interface CardsWrapperProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  items?: Array<ICard>
  type: string
  title: string
}

export const CardsWrapper: React.FC<CardsWrapperProps> = ({
  transactionOpen,
  items,
  type,
  title,
}) => {
  const size = type === EXPENSES ? SIZE_OF_EXPENSES_CARDS : SIZE_OF_CARDS
  const handledArray = items && separateItems(items, size)

  const SlideComponent = type == EXPENSES ? SwiperSlideExpensesStyled : SwiperSlideStyled

  console.log(items?.length, size)
  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white" fontSize="14px">{title.toLocaleUpperCase()}</Typography>
      </BoxLabelStyled>
      {items ?
        <SwiperStyled
          allowTouchMove={false}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[ Pagination ]}
          className="mySwiper"
          paddingBottom={((items?.length && items?.length > size) || items.length % size === 0)}
        >
          {handledArray && handledArray.length > 0 &&
          handledArray.map((subArray: Array<ICard>, index: number) => {

            return (
              <SlideComponent key={`${subArray[0].id} - ${Math.random()}`}>
                {subArray && subArray.map((item: ICard) => {
                  return (
                    <CardDropWrapper
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      icon={item.icon}
                      color={item.color}
                      value={item.value}
                      type={type}
                      transactionOpen={transactionOpen}
                    />
                  )
                })}
                {index === handledArray.length - 1 && items.length % size !== 0 &&
                  <CardNew
                    type={type}
                  />
                }
              </SlideComponent>
            )
          })}
          {items.length % size === 0 &&
            <SlideComponent key={`${type}-add- ${Math.random()}`}>
              <CardNew
                type={type}
              />
            </SlideComponent>
          }
          { (items.length > size || (items.length === size && items.length % size === 0)) && <SwiperNavigation/> }
        </SwiperStyled>
        : <CardsSkeleton/>
      }
    </BoxStyled>
  )
}
