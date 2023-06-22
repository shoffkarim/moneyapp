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

export const Main: React.FC = () => {

  const { data } = useQuery(GET_USER_CARDS,
    { variables: {
      id: '647db351529d7960cb8ce476'
    } }
  )

  const [transactionOpen, setTransactionOpen] = useState<boolean>(false)
  const [createPopupOpen, setCreatePopupOpen] = useState<boolean>(false)
  const [createPopupType, setCreatePopupType] = useState<string>('')
  console.log(1)
  return (
    <MainStyled>
      <WrapperStyled>
        <CardsContainer
          accounts={data?.user.accounts}
          expenses={data?.user.expenses}
          incomes={data?.user.incomes}
          handleTransactionOpen={setTransactionOpen}
          handleCreatePopupOpen={setCreatePopupOpen}
          handleCreatePopupType={setCreatePopupType}
        />
      </WrapperStyled>
      <TransactionContainer transactionOpen={transactionOpen} handleTransactionOpen={setTransactionOpen}/>
      {/* TODO: fix rerender of full page */}
      {createPopupOpen &&
        <CreatePopup
          type={createPopupType}
          handlerClose={setCreatePopupOpen}
        />
      }
    </MainStyled>
  )
}
