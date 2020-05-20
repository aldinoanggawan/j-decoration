import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyle'

import Homepage from './pages/Homepage'
import LunchPage from './pages/LunchPage'
import BirthdayPage from './pages/BirthdayPage'
import BridalPage from './pages/BridalPage'
import TablePage from './pages/TablePage'
import HotelPage from './pages/HotelPage'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/category/lunch-dinner'>
          <LunchPage />
        </Route>
        <Route exact path='/category/birthday'>
          <BirthdayPage />
        </Route>
        <Route exact path='/category/bridal-shower'>
          <BridalPage />
        </Route>
        <Route exact path='/category/table-setting'>
          <TablePage />
        </Route>
        <Route exact path='/category/hotel-room'>
          <HotelPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
