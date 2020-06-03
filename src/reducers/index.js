import { combineReducers } from 'redux'
import homepageCarousel from './homepageCarousel'
import lunchPackages from './lunchPackages'
import lunchPackage1 from './lunchPackage1'
import lunchPackage2 from './lunchPackage2'
import birthdayPackages from './birthdayPackages'
import birthdayPackage1 from './birthdayPackage1'
import birthdayPackage2 from './birthdayPackage2'
import birthdayCustomPackage from './birthdayCustomPackage'
import tablePackages from './tablePackages'
import tablePackage1 from './tablePackage1'
import tablePackage2 from './tablePackage2'
import tableCustomPackage from './tableCustomPackage'
import hotelPackages from './hotelPackages'
import hotelPackage1 from './hotelPackage1'
import hotelPackage2 from './hotelPackage2'
import hotelPackage3 from './hotelPackage3'
import photoPackage from './photoPackage'

const rootReducer = combineReducers({
  homepageCarousel,
  lunchPackages,
  lunchPackage1,
  lunchPackage2,
  birthdayPackages,
  birthdayPackage1,
  birthdayPackage2,
  birthdayCustomPackage,
  tablePackages,
  tablePackage1,
  tablePackage2,
  tableCustomPackage,
  hotelPackages,
  hotelPackage1,
  hotelPackage2,
  hotelPackage3,
  photoPackage,
})

export default rootReducer
