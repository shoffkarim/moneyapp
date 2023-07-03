import React from 'react'
import { TopBar } from 'components'
// TODO: move to another file
import { ContainerStyled, PageWrapperStyled } from 'pages/main/main.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, SignUpPage, SignInPage, CalendarPage, HistoryPage } from './pages'
import { useQuery } from '@apollo/client'
import { GET_USER_TOTAL } from '__data__/queries/total'
import { CalendarWrapper } from 'pages/calendar'
import { TransactionContainer } from 'components/transactionContainer'


const App: React.FC = () => {
  const { data, loading, error } = useQuery(GET_USER_TOTAL,
    { variables:
      {
        id: '647db351529d7960cb8ce476'
      }
    })

  return (
    <BrowserRouter>
      <ContainerStyled>
        <TopBar
          loading={loading}
          error={error}
          total={{
            "expenses": data?.user.total.expenses,
            "incomes": data?.user.total.incomes,
            "balance": data?.user.total.accounts
          }}
        />
        <PageWrapperStyled>
          <Routes>
            <Route path='/' Component={Main}/>
            <Route path='history' Component={HistoryPage}/>
            <Route path='calendar' Component={CalendarWrapper}/>
            <Route path='signup' Component={SignUpPage}/>
            <Route path='signin' Component={SignInPage}/>
          </Routes>
        </PageWrapperStyled>
        <TransactionContainer />
      </ContainerStyled>
    </BrowserRouter>
  )
}

export default App
