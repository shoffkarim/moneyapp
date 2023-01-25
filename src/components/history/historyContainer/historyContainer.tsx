import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchHistory } from '__data__/actions/history'
import { HistoryTransaction } from '../historyTransaction'

import './historyContainer.sass'

export const HistoryContainer: React.FC = () => {
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