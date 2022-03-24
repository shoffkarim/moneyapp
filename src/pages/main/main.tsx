import React, { useState } from 'react'
import { Income, Accounts, Expenses, Menu } from 'components'
import './main.sass'
import { Operation } from 'components/operation'

export const Main: React.FC = () => {

  const [visibleOperation, setVisibleOperation] = useState(false)
  const [operationCardFrom, setOperationCardFrom] = useState(0)
  const [operationCardWhere, setOperationCardWhere] = useState(0)
  const [operationCardFromType, setOperationCardFromType] = useState("")
  const [operationCardWhereType, setOperationCardWhereType] = useState("")


  const transactionHandler = (open: boolean, idFrom: number, idWhere: number, typeFrom: string, typeWhere: string) => {
    setOperationCardFrom(idFrom)
    setOperationCardWhere(idWhere)
    setOperationCardFromType(typeFrom)
    setOperationCardWhereType(typeWhere)
    setVisibleOperation(open)
  }

  return (
    <div className='container'>
      <main className='main'>
        <div className='wrapper'>
          <Income operationOpen={transactionHandler}/>
          <Accounts operationOpen={transactionHandler}/>
          <Expenses operationOpen={transactionHandler}/>
        </div>
        {visibleOperation && <Operation cardFrom={operationCardFrom} cardWhere={operationCardWhere} cardFromType={operationCardFromType} cardWhereType={operationCardWhereType}/>}
      </main>
      <Menu/>
    </div>
  )
}