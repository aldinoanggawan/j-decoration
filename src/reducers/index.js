import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import birthdayPackages from './birthdayPackages'
import bridalPackages from './bridalPackages'
import tablePackages from './tablePackages'

const rootReducer = combineReducers({
  lunchPackages,
  birthdayPackages,
  bridalPackages,
  tablePackages,
})

export default rootReducer
