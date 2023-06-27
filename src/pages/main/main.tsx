import React, { useState } from "react"
import { CardsContainer } from "components/cardsContainer"
import { TransactionContainer } from "components/transactionContainer"
import { MainStyled, WrapperStyled } from "./main.styled"
import { useQuery } from "@apollo/client"
import { GET_USER_CARDS } from "__data__/queries/cards"
import 'swiper/css'
import "swiper/css/grid"
import "swiper/css/pagination"
import { CreatePopup } from "components/popups/createPopup"
import { EditPopup } from "components/popups/editPopup"
import { AlertContainer } from "components/alerts/alertContainer"
import { MainButton } from "components/mainButton/mainButton"

export const Main: React.FC = () => {

  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )
  // TODO: 3 first render

  const [transactionOpen, setTransactionOpen] = useState<boolean>(false)


  return (
    <MainStyled>
      <WrapperStyled>
        <CardsContainer
          accounts={data?.user.accounts}
          expenses={data?.user.expenses}
          incomes={data?.user.incomes}
          handleTransactionOpen={setTransactionOpen}
        />
      </WrapperStyled>
      <TransactionContainer transactionOpen={transactionOpen} handleTransactionOpen={setTransactionOpen}/>
      <MainButton action={setTransactionOpen}/>
      <CreatePopup/>
      <EditPopup/>
      <AlertContainer/>
    </MainStyled>
  )
}
