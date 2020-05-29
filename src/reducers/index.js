import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import lunchPackage1 from './lunchPackage1'
import lunchPackage2 from './lunchPackage2'
import birthdayPackages from './birthdayPackages'
import birthdayPackage1 from './birthdayPackage1'
import birthdayPackage2 from './birthdayPackage2'
import bridalPackages from './bridalPackages'
import tablePackages from './tablePackages'
import hotelPackages from './hotelPackages'
import hotelPackage1 from './hotelPackage1'
import hotelPackage2 from './hotelPackage2'
import hotelPackage3 from './hotelPackage3'

const rootReducer = combineReducers({
  lunchPackages,
  lunchPackage1,
  lunchPackage2,
  birthdayPackages,
  birthdayPackage1,
  birthdayPackage2,
  bridalPackages,
  tablePackages,
  hotelPackages,
  hotelPackage1,
  hotelPackage2,
  hotelPackage3,
})

export default rootReducer
