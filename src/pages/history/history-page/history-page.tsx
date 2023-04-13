import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchHistory } from '__data__/actions/history'
import { HistoryTransaction } from '../history-transaction'
import { mapStateToProps } from '../utils'
import { HistoryContainerStyled, HistoryWrapperStyled } from './history-page.styled'

interface HistoryPageProps {
  data?: string
}

const HistoryPage: React.FC<HistoryPageProps> = ({data}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory())
  }, [dispatch])


  return (
      <HistoryContainerStyled>
        <HistoryWrapperStyled>
          <HistoryTransaction/>
        </HistoryWrapperStyled>
      </HistoryContainerStyled>

  )
}

export default connect(mapStateToProps)(HistoryPage)
