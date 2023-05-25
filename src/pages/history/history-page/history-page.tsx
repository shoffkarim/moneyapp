import React from 'react'
import { connect } from 'react-redux'
import { HistoryTransaction } from '../history-transaction'
import { mapStateToProps } from '../utils'
import { HistoryContainerStyled, HistoryWrapperStyled } from './history-page.styled'

interface HistoryPageProps {
  data?: string
}

const HistoryPage: React.FC<HistoryPageProps> = () => {
  return (
    <HistoryContainerStyled>
      <HistoryWrapperStyled>
        <HistoryTransaction/>
      </HistoryWrapperStyled>
    </HistoryContainerStyled>

  )
}

export default connect(mapStateToProps)(HistoryPage)
