import React from 'react'
import { HistoryTransaction } from '../history-transaction'
import { HistoryContainerStyled, HistoryWrapperStyled } from './history-page.styled'
import { useQuery } from '@apollo/client'
import { GET_USER_TRANSACTIONS } from '__data__/queries/transactions'

export const HistoryPage: React.FC = () => {

  const { loading, data } = useQuery(GET_USER_TRANSACTIONS,
    { variables:
      {
        id: '647db351529d7960cb8ce476'
      }
    })

  return (
    <HistoryContainerStyled>
      <HistoryWrapperStyled>
        {!loading && <HistoryTransaction items={data?.user.transactions}/>}
      </HistoryWrapperStyled>
    </HistoryContainerStyled>

  )
}

