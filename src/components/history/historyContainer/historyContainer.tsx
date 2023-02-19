import classNames from 'classnames'
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { fetchHistory } from '__data__/actions/history'
import { HistoryTransaction } from '../historyTransaction'
import { mapStateToProps } from '../utils'

import './historyContainer.sass'

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
    <div className={"history-popup"}>
      <div className="history-popup__overlay"></div>
      <div className="history-popup__container">
        <HistoryTransaction/>
      </div>
      <button className="history-popup__btn-close" onClick={() => handleOpen()}>Close History</button>
    </div>
  )
}

export default connect(mapStateToProps)(HistoryContainer)
