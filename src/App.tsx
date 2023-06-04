import React from 'react'
import { TopBar } from 'components'
import { History } from 'pages/history'
import { ContainerStyled, PageWrapperStyled } from 'pages/main/main.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, SignUpPage, SignInPage } from './pages'
import { CalendarPage } from 'pages/calendar/calendar-page'
import { useQuery } from '@apollo/client'
import { GET_USER_TOTAL } from '__data__/queries/total'


const App = () => {

  const { loading, error, data } = useQuery(GET_USER_TOTAL,
    { variables:
      {
        id: '6474446d56a2116018550d1c'
      }
    })

  return (
    <BrowserRouter>
      <ContainerStyled>
        <TopBar
          name={'Пользователь П'}
          total={{
            "expenses": data?.user.total.expenses,
            "incomes": data?.user.total.incomes,
            "balance": data?.user.total.accounts
          }}
        />
        <PageWrapperStyled>
          <Routes>
            <Route path='/' Component={Main}/>
            <Route path='history' Component={History}/>
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
