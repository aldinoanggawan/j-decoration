import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Switch, Route } from 'react-router-dom'
import LunchPage from './pages/LunchPage'
import GlobalStyle from './styles/globalStyle'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/category/lunch-dinner'>
          <LunchPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
