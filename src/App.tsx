import React from 'react';
import { Menu } from 'components';
import { History } from 'pages/history';
import { ContainerStyled } from 'pages/main/main.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <ContainerStyled>
      <Routes>
        <Route path='/' Component={Main}/>
        <Route path='history' Component={History}/>
      </Routes>
      <Menu
       name={'Пользователь П'}
       total={{
          "expenses": 213546,
          "incomes": 123546,
          "balance": 123456
        }
      }/>
      </ContainerStyled>
    </BrowserRouter>
  );
}

export default App;
