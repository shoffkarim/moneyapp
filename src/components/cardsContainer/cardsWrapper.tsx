import React from "react"
import { ICard } from "types"
import { CardNew } from "components/card/cardNew"
import { CardDropWrapper } from "components/card/cardDropWrapper"
import { Typography } from "@mui/material"
import { Pagination } from "swiper"
import { BoxLabelStyled, BoxStyled, SwiperStyled, SwiperSlideStyled, SwiperSlideExpensesStyled  } from './cardContainers.style'
import { CardsSkeleton } from "./cardsSkeleton"
import { separateItems } from "./separateItems"
import { EXPENSES, SIZE_OF_CARDS, SIZE_OF_EXPENSES_CARDS } from "components/constants"

interface CardsWrapperProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  handleCreatePopupOpen: (value: boolean) => void
  handleCreatePopupType: (value: string) => void
  items?: Array<ICard>
  type: string
  title: string
}

export const CardsWrapper: React.FC<CardsWrapperProps> = ({
  transactionOpen,
  handleCreatePopupOpen,
  handleCreatePopupType,
  items,
  type,
  title,
}) => {
  const size = type === EXPENSES ? SIZE_OF_EXPENSES_CARDS : SIZE_OF_CARDS
  const handledArray = items && separateItems(items, size)

  const SlideComponent = type == EXPENSES ? SwiperSlideExpensesStyled : SwiperSlideStyled

  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white" fontSize="14px">{title.toLocaleUpperCase()}</Typography>
      </BoxLabelStyled>
      {items ?
        <SwiperStyled
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[ Pagination ]}
          className="mySwiper"
          paddingBottom={items?.length && items?.length > 12}
        >
          {handledArray && handledArray.length > 0 &&
          handledArray.map((subArray: Array<ICard>, index: number) => {

            return (
              <SlideComponent key={`${'11111'} - ${Math.random()}`}>
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
                {index === handledArray.length - 1 &&
                  <CardNew
                    type={type}
                    text="Add"
                    handleCreatePopupOpen={handleCreatePopupOpen}
                    handleCreatePopupType={handleCreatePopupType}
                  />
                }
              </SlideComponent>
            )
          })}
        </SwiperStyled>
        : <CardsSkeleton/>
      }
    </BoxStyled>
  )
}
