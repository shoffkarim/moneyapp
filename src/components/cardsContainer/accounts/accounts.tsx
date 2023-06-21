import React from "react"
import { ICard } from "components/interfaces"
import { CardNew } from "components/card/cardNew"
import { CardDropWrapper } from "components/card/cardDropWrapper"
import { AccountsContainerStyled, AccountsWrapperStyled } from "./accounts.styled"
import { Typography } from "@mui/material"
import { CardSkeletonContainer } from "components/cardSkeleton/cardSkeletonContainer"
import { CardSkeleton } from "components/cardSkeleton/cardSkeleton"
import { Grid, Pagination } from "swiper"
import { BoxLabelStyled, BoxStyled, SwiperStyled, SwiperSlideStyled  } from '../cardContainers.style'

interface AccountsProps {
  transactionOpen: (
    open: boolean,
    idFrom: number,
    idTo: number,
    typeFrom: string,
    typeTo: string
  ) => void
  items?: Array<ICard>
}

export const Accounts: React.FC<AccountsProps> = ({ transactionOpen, items }) => {

  return (
    <BoxStyled sx={{ backgroundColor: 'primary.dark' }}>
      <BoxLabelStyled>
        <Typography color="white">Accounts</Typography>
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
      {/* <AccountsContainerStyled>
        <AccountsWrapperStyled>
          { items &&
            items.map((item: ICard) => (
              <CardDropWrapper
                key={`${item.id} - ${Math.random()}`}
                id={item.id}
                name={item.name}
                icon={item.icon}
                color={item.color}
                value={item.value}
                type={"accounts"}
                transactionOpen={transactionOpen}
              />
            ))}
          {!items && <CardSkeletonContainer/>}
          {items && <CardNew type={"expenses"} text="Add" />}
        </AccountsWrapperStyled>
      </AccountsContainerStyled> */}
    </BoxStyled>
  )
}
