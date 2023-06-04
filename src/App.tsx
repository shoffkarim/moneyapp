import React, { useEffect }  from 'react'
import { TopBar } from 'components'
import { History } from 'pages/history'
import { ContainerStyled, PageWrapperStyled } from 'pages/main/main.styled'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main, SignUpPage, SignInPage } from './pages'
import { CalendarPage } from 'pages/calendar/calendar-page'
import { useMutation, useQuery } from '@apollo/client'
import { GET_USERS, GET_USER_BY_ID } from '__data__/queries/user'
import { GET_USER_CARDS } from '__data__/queries/cards'
import { GET_USER_TOTAL } from '__data__/queries/total'
import { SET_ACCOUNT, SET_EXPENSE, SET_INCOME } from '__data__/mutations/cards'
import { SET_TOTAL } from '__data__/mutations/total'


const App = () => {
  // const { loading, error, data } = useQuery(GET_USERS)
  //const { loading, error, data } = useQuery(GET_USER_BY_ID, { variables: { id: '6474446d56a2116018550d1c'}})

  // console.log(loading, error, data)


  // const [setIncome] = useMutation(SET_INCOME, {
  //   variables: {
  //     id: "6474446d56a2116018550d1c",
  //     name: "cashback",
  //     icon: "money",
  //     color: "grey",
  //     value: 100
  //   }
  // })

  // const [setAccount] = useMutation(SET_ACCOUNT, {
  //   variables: {
  //     id: "6474446d56a2116018550d1c",
  //     name: "tinkoff",
  //     icon: "bank",
  //     color: "yellow",
  //     value: 10000
  //   }
  // })

  // const [setExpense] = useMutation(SET_EXPENSE, {
  //   variables: {
  //     id: "6474446d56a2116018550d1c",
  //     name: "services",
  //     icon: "utils",
  //     color: "blue",
  //     value: 60
  //   }
  // })

  //  const [setTotal] = useMutation(SET_TOTAL, {
  //   variables: {
  //     id: "6474446d56a2116018550d1c",
  //     incomes: 50,
  //     accounts: 10000,
  //     expenses: 30,
  //   }
  // })

  useEffect(() => {
    // addUser()
    //setIncome()
    // setAccount()
    //setExpense()
    //setTotal()
  }, [])

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
