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

export const fetchLunchPackage1Request = () => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE1_REQUEST,
})

const fetchLunchPackage1Success = data => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE1_SUCCESS,
  payload: data,
})

const fetchLunchPackage1Failure = error => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE1_FAILURE,
  payload: error,
})

export const fetchLunchPackage1 = () => {
  return async dispatch => {
    dispatch(fetchLunchPackage1Request())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Lunch-Dinner-Detail/recwHTflc7Ecax4XE',
        config
      )
      const data = await response.data
      dispatch(fetchLunchPackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackage1Failure(errorMsg))
    }
  }
}

export const fetchLunchPackage2Request = () => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE2_REQUEST,
})

const fetchLunchPackage2Success = data => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE2_SUCCESS,
  payload: data,
})

const fetchLunchPackage2Failure = error => ({
  type: actionTypes.FETCH_LUNCH_PACKAGE2_FAILURE,
  payload: error,
})

export const fetchLunchPackage2 = () => {
  return async dispatch => {
    dispatch(fetchLunchPackage2Request())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Lunch-Dinner-Detail/recfkO7oZzMCAE9X3',
        config
      )
      const data = await response.data
      dispatch(fetchLunchPackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackage2Failure(errorMsg))
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

export const fetchBridalPackagesRequest = () => ({
  type: actionTypes.FETCH_BRIDAL_PACKAGES_REQUEST,
})

const fetchBridalPackagesSuccess = data => ({
  type: actionTypes.FETCH_BRIDAL_PACKAGES_SUCCESS,
  payload: data,
})

const fetchBridalPackagesFailure = error => ({
  type: actionTypes.FETCH_BRIDAL_PACKAGES_FAILURE,
  payload: error,
})

export const fetchBridalPackages = () => {
  return async dispatch => {
    dispatch(fetchBridalPackagesRequest())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Bridal-Shower-Packages',
        config
      )
      const data = await response.data.records
      dispatch(fetchBridalPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBridalPackagesFailure(errorMsg))
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

export const fetchHotelPackagesRequest = () => ({
  type: actionTypes.FETCH_HOTEL_PACKAGES_REQUEST,
})

const fetchHotelPackagesSuccess = data => ({
  type: actionTypes.FETCH_HOTEL_PACKAGES_SUCCESS,
  payload: data,
})

const fetchHotelPackagesFailure = error => ({
  type: actionTypes.FETCH_HOTEL_PACKAGES_FAILURE,
  payload: error,
})

export const fetchHotelPackages = () => {
  return async dispatch => {
    dispatch(fetchHotelPackagesRequest())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Hotel-Room-Packages',
        config
      )
      const data = await response.data.records
      dispatch(fetchHotelPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackagesFailure(errorMsg))
    }
  }
}

export const fetchHotelPackage1Request = () => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE1_REQUEST,
})

const fetchHotelPackage1Success = data => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE1_SUCCESS,
  payload: data,
})

const fetchHotelPackage1Failure = error => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE1_FAILURE,
  payload: error,
})

export const fetchHotelPackage1 = () => {
  return async dispatch => {
    dispatch(fetchHotelPackage1Request())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Hotel-Room-Detail/recb7H3CkWDINIG15',
        config
      )
      const data = await response.data
      dispatch(fetchHotelPackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage1Failure(errorMsg))
    }
  }
}

export const fetchHotelPackage2Request = () => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE2_REQUEST,
})

const fetchHotelPackage2Success = data => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE2_SUCCESS,
  payload: data,
})

const fetchHotelPackage2Failure = error => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE2_FAILURE,
  payload: error,
})

export const fetchHotelPackage2 = () => {
  return async dispatch => {
    dispatch(fetchHotelPackage2Request())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Hotel-Room-Detail/recqTs18ICChf5HuM',
        config
      )
      const data = await response.data
      dispatch(fetchHotelPackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage2Failure(errorMsg))
    }
  }
}

export const fetchHotelPackage3Request = () => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE3_REQUEST,
})

const fetchHotelPackage3Success = data => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE3_SUCCESS,
  payload: data,
})

const fetchHotelPackage3Failure = error => ({
  type: actionTypes.FETCH_HOTEL_PACKAGE3_FAILURE,
  payload: error,
})

export const fetchHotelPackage3 = () => {
  return async dispatch => {
    dispatch(fetchHotelPackage3Request())
    const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
    const config = {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
    try {
      const response = await Axios.get(
        'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Hotel-Room-Detail/recrvF2CwQzhhquRA',
        config
      )
      const data = await response.data
      dispatch(fetchHotelPackage3Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage3Failure(errorMsg))
    }
  }
}
