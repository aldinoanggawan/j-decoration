import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyle'

import Homepage from './pages/Homepage'
import LunchPage from './pages/LunchPage'
import BirthdayPage from './pages/BirthdayPage'

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
      </Switch>
    </>
  )
}

export default App
