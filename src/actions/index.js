import * as actionTypes from './actionTypes'
import Axios from 'axios'

export const fetchLunchPackagesRequest = () => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_REQUEST,
})

const fetchLunchPackagesSuccess = data => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_SUCCESS,
  payload: data,
})

const fetchLunchPackagesFailure = error => ({
  type: actionTypes.FETCH_LUNCH_PACKAGES_FAILURE,
  payload: error,
})

export const fetchLunchPackages = () => {
  return async dispatch => {
    dispatch(fetchLunchPackagesRequest())
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
      dispatch(fetchLunchPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackagesFailure(errorMsg))
    }
  }
}

export const fetchBirthdayPackagesRequest = () => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGES_REQUEST,
})

const fetchBirthdayPackagesSuccess = data => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGES_SUCCESS,
  payload: data,
})

const fetchBirthdayPackagesFailure = error => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGES_FAILURE,
  payload: error,
})

export const fetchBirthdayPackages = () => {
  return async dispatch => {
    dispatch(fetchBirthdayPackagesRequest())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Birthday-Packages',
        config
      )
      const data = await response.data.records
      dispatch(fetchBirthdayPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBirthdayPackagesFailure(errorMsg))
    }
  }
}

export const fetchTablePackagesRequest = () => ({
  type: actionTypes.FETCH_TABLE_PACKAGES_REQUEST,
})

const fetchTablePackagesSuccess = data => ({
  type: actionTypes.FETCH_TABLE_PACKAGES_SUCCESS,
  payload: data,
})

const fetchTablePackagesFailure = error => ({
  type: actionTypes.FETCH_TABLE_PACKAGES_FAILURE,
  payload: error,
})

export const fetchTablePackages = () => {
  return async dispatch => {
    dispatch(fetchTablePackagesRequest())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Table-Setting-Packages',
        config
      )
      const data = await response.data.records
      dispatch(fetchTablePackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchTablePackagesFailure(errorMsg))
    }
  }
}
