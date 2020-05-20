import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import birthdayPackages from './birthdayPackages'
import bridalPackages from './bridalPackages'
import tablePackages from './tablePackages'
import hotelPackages from './hotelPackages'

const rootReducer = combineReducers({
  lunchPackages,
  birthdayPackages,
  bridalPackages,
  tablePackages,
  hotelPackages,
})

export default rootReducer
