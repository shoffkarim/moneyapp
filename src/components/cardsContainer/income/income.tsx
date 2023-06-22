import React from "react"
import { ICard } from "types"
import { CardNew } from "components/card/cardNew"
import { CardDropWrapper } from "components/card/cardDropWrapper"
import { BoxLabelStyled, BoxStyled, SwiperStyled, SwiperSlideStyled  } from '../cardContainers.style'
import { Typography } from "@mui/material"
import { Pagination } from "swiper"
import { separateItems } from "../separateItems"
import { CardsSkeleton } from "../cardsSkeleton"
import { SIZE_OF_CARDS } from "components/constants"

interface IncomeProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  items?: Array<ICard>
}

export const Income: React.FC<IncomeProps> = ({ transactionOpen, items }) => {
  const handledArray = items && separateItems(items, SIZE_OF_CARDS)
  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Incomes</Typography>
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
              <SwiperSlideStyled key={`${'11111'} - ${Math.random()}`}>
                {subArray && subArray.map((item: ICard) => {
                  return (
                    <CardDropWrapper
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      icon={item.icon}
                      color={item.color}
                      value={item.value}
                      type={"incomes"}
                      transactionOpen={transactionOpen}
                    />
                  )
                })}
                {index === handledArray.length - 1 &&
                  <CardNew type={"incomes"} text="Add" />
                }
              </SwiperSlideStyled>
            )
          })}
        </SwiperStyled>
        : <CardsSkeleton/>
      }
    </BoxStyled>
  )
}
