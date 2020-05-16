import * as actionTypes from './actionTypes'
import Axios from 'axios'

export const fetchDinnerPackagesRequest = () => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_REQUEST,
})

const fetchDinnerPackagesSuccess = data => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_SUCCESS,
  payload: data,
})

const fetchDinnerPackagesFailure = error => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_FAILURE,
  payload: error,
})

export const fetchDinnerPackages = () => {
  return async dispatch => {
    dispatch(fetchDinnerPackagesRequest())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Lunch-Dinner-Packages',
        config
      )
      const data = await response.data.records
      dispatch(fetchDinnerPackagesSuccess(data))
    } catch (error) {
      dispatch(fetchDinnerPackagesFailure(error))
    }
  }
}
