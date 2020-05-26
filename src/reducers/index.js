import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import lunchPackage1 from './lunchPackage1'
import lunchPackage2 from './lunchPackage2'
import birthdayPackages from './birthdayPackages'
import bridalPackages from './bridalPackages'
import tablePackages from './tablePackages'
import hotelPackages from './hotelPackages'

const rootReducer = combineReducers({
  lunchPackages,
  lunchPackage1,
  lunchPackage2,
  birthdayPackages,
  bridalPackages,
  tablePackages,
  hotelPackages,
})

export default rootReducer
