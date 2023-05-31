import React from 'react'
import { TopBar } from 'components'
import { History } from 'pages/history'
import { ContainerStyled, PageWrapperStyled } from 'pages/main/main.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, SignUpPage, SignInPage } from './pages'
import { CalendarPage } from 'pages/calendar/calendar-page'

const App = () => {

  return (
    <BrowserRouter>
      <ContainerStyled>
        <TopBar
          name={'Пользователь П'}
          total={{
            "expenses": 213546,
            "incomes": 123546,
            "balance": 123456
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
