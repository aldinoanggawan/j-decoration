import { combineReducers } from 'redux'
import lunchPackages from './lunchPackages'
import birthdayPackages from './birthdayPackages'

const rootReducer = combineReducers({
  lunchPackages,
  birthdayPackages,
})

export default rootReducer
