import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import birthdayPackages from './birthdayPackages'
import tablePackages from './tablePackages'

const rootReducer = combineReducers({
  lunchPackages,
  birthdayPackages,
  tablePackages,
})

export default rootReducer
