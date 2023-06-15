import React from 'react'
import { TopBar } from 'components'
import { HistoryPage } from 'pages/history'
import { ContainerStyled, PageWrapperStyled } from 'pages/main/main.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, SignUpPage, SignInPage } from './pages'
import { CalendarPage } from 'pages/calendar/calendar-page'
import { useQuery } from '@apollo/client'
import { GET_USER_TOTAL } from '__data__/queries/total'


const App: React.FC = () => {
  const { data } = useQuery(GET_USER_TOTAL,
    { variables:
      {
        id: '647db351529d7960cb8ce476'
      }
    })

  return (
    <BrowserRouter>
      <ContainerStyled>
        <TopBar
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
            <Route path='calendar' Component={CalendarPage}/>
            <Route path='signup' Component={SignUpPage}/>
            <Route path='signin' Component={SignInPage}/>
          </Routes>
        </PageWrapperStyled>
      </ContainerStyled>
    </BrowserRouter>
  )
}

export default App
