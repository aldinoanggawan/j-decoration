import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './styles/globalStyle'

import Homepage from './pages/Homepage'
import LunchPage from './pages/LunchPage'
import LunchPackage1 from './pages/LunchPackage1Page'
import LunchPackage2 from './pages/LunchPackage2Page'
import BirthdayPage from './pages/BirthdayPage'
import BirthdayPackage1Page from './pages/BirthdayPackage1Page'
import BirthdayPackage2Page from './pages/BirthdayPackage2Page'
import BridalPage from './pages/BridalPage'
import TablePage from './pages/TablePage'
import HotelPage from './pages/HotelPage'
import HotelPackage1Page from './pages/HotelPackage1Page'
import HotelPackage2Page from './pages/HotelPackage2Page'
import HotelPackage3Page from './pages/HotelPackage3Page'

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
        <Route exact path='/category/lunch-dinner/package-1'>
          <LunchPackage1 />
        </Route>
        <Route exact path='/category/lunch-dinner/package-2'>
          <LunchPackage2 />
        </Route>
        <Route exact path='/category/birthday-dessert'>
          <BirthdayPage />
        </Route>
        <Route exact path='/category/birthday-dessert/package-1'>
          <BirthdayPackage1Page />
        </Route>
        <Route exact path='/category/birthday-dessert/package-2'>
          <BirthdayPackage2Page />
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
        <Route exact path='/category/hotel-room/package-1'>
          <HotelPackage1Page />
        </Route>
        <Route exact path='/category/hotel-room/package-2'>
          <HotelPackage2Page />
        </Route>
        <Route exact path='/category/hotel-room/package-3'>
          <HotelPackage3Page />
        </Route>
      </Switch>
    </>
  )
}

export default App
