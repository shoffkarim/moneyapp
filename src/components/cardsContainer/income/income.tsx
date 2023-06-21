import React from "react"
import { ICard } from "types"
import { CardNew } from "components/card/cardNew"
import { CardDropWrapper } from "components/card/cardDropWrapper"
import { IncomeContainerStyled, IncomeWrapperStyled } from "./income.styled"
import { BoxLabelStyled, BoxStyled, SwiperStyled, SwiperSlideStyled  } from '../cardContainers.style'
import { Typography } from "@mui/material"
import { CardSkeletonContainer } from "components/card/cardSkeleton/cardSkeletonContainer"
import { CardSkeleton } from "components/card/cardSkeleton/cardSkeleton"
import { Pagination } from "swiper"

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
  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Incomes</Typography>
      </BoxLabelStyled>
      {!items &&
            <SwiperStyled
              slidesPerView={1}
              pagination={{ clickable: true }}
              modules={[ Pagination ]}
              className="mySwiper"
            >
              <SwiperSlideStyled>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
              </SwiperSlideStyled>
              <SwiperSlideStyled>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
                <CardSkeleton/>
              </SwiperSlideStyled>
            </SwiperStyled>
      }
      {/* <IncomeWrapperStyled> */}
      {/* <Swiper>
            {items &&
              items.map((item: ICard) => (
                <SwiperSlide key={`${item.id} - ${Math.random()}`}>
                  <CardDropWrapper
                    id={item.id}
                    name={item.name}
                    icon={item.icon}
                    color={item.color}
                    value={item.value}
                    type={"incomes"}
                    transactionOpen={transactionOpen}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper> */}


      {/* <CardSkeletonContainer/> */}
      {/* {items && <CardNew type={"expenses"} text="Add" />}
        </IncomeWrapperStyled> */}
      {/* </IncomeContainerStyled> */}
    </BoxStyled>
  )
}
