import React from 'react'
import { HistoryTransaction } from '../../components/historyTransaction'
import { HistoryContainerStyled, HistoryWrapperStyled } from './historyPage.styled'
import { useQuery } from '@apollo/client'
import { GET_USER_TRANSACTIONS } from '__data__/queries/transactions'
import { HistoryTransactionSkeleton } from '../../components/historyTransaction/historyTransactionSkeleton'

export const HistoryPage: React.FC = () => {

  const { loading, data, error } = useQuery(GET_USER_TRANSACTIONS,
    { variables:
      {
        id: '647db351529d7960cb8ce476'
      }
    })

  return (
    <HistoryContainerStyled>
      <HistoryWrapperStyled>
        <HistoryTransaction items={[]}/>
        {!loading && !error ?
          <HistoryTransaction items={data?.user.transactions}/>
          : <HistoryTransactionSkeleton/>
        }

      </HistoryWrapperStyled>
    </HistoryContainerStyled>

  )
}

