import React from "react"
import { CardsContainer } from "components/cardsContainer"
import { TransactionContainer } from "components/transactionContainer"
import { MainStyled, WrapperStyled } from "./main.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import { CreatePopup } from "components/popups"
import { EditPopup } from "components/popups"
import { AlertContainer } from "components/alerts"
import { MainButton } from "components/mainButton"
import 'swiper/css'
import "swiper/css/grid"
import "swiper/css/pagination"
import "swiper/css/navigation"

export const Main: React.FC = () => {

  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )
  // TODO: 3 first render


  return (
    <MainStyled>
      <WrapperStyled>
        <CardsContainer
          accounts={data?.user.accounts}
          expenses={data?.user.expenses}
          incomes={data?.user.incomes}
        />
      </WrapperStyled>
      <MainButton />
      <CreatePopup/>
      <EditPopup/>
      <AlertContainer/>
    </MainStyled>
  )
}
