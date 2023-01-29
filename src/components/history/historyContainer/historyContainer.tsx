import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchHistory } from '__data__/actions/history'
import { HistoryTransaction } from '../historyTransaction'
import { mapStateToProps } from '../utils'

import './historyContainer.sass'

interface HistoryContainerProps {
  data?: string
}

const HistoryContainer: React.FC<HistoryContainerProps> = ({data}) => {
  console.log("data", data)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHistory())
  }, [dispatch])


  return (
    <div className="history-popup">
      <div className="history-popup__overlay"></div>
      <div className="history-popup__container">
        <HistoryTransaction/>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(HistoryContainer)
