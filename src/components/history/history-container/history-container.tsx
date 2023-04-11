import { BtnCloseStyled } from 'pages/main/main.styled'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchHistory } from '__data__/actions/history'
import { HistoryTransaction } from '../history-transaction'
import { mapStateToProps } from '../utils'
import { HistoryPopupContainerStyled, HistoryPopupOverlayStyled, HistoryPopupStyled, HistoryPopupWrapperStyled } from './history-container.styled'

interface HistoryContainerProps {
  data?: string
  handleOpen: () => void
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({data, handleOpen}) => {
  console.log("data", data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory())
  }, [dispatch])


  return (
    <HistoryPopupStyled>
      <HistoryPopupOverlayStyled/>
      <HistoryPopupContainerStyled>
        <HistoryPopupWrapperStyled>
          <HistoryTransaction/>
        </HistoryPopupWrapperStyled>
        <BtnCloseStyled onClick={() => handleOpen()}/>
      </HistoryPopupContainerStyled>
    </HistoryPopupStyled>
  )
}

export default connect(mapStateToProps)(HistoryContainer)
