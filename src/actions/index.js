import * as actionTypes from './actionTypes'
import Axios from 'axios'

const API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY
const config = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
}

const fetchHomepageCarouselRequest = () => ({
  type: actionTypes.FETCH_HOMEPAGE_CAROUSEL_REQUEST,
})

const fetchHomepageCarouselSuccess = data => ({
  type: actionTypes.FETCH_HOMEPAGE_CAROUSEL_SUCCESS,
  payload: data,
})

const fetchHomepageCarouselFailure = error => ({
  type: actionTypes.FETCH_HOMEPAGE_CAROUSEL_FAILURE,
  payload: error,
})

export const fetchHomepageCarousel = () => {
  return async dispatch => {
    dispatch(fetchHomepageCarouselRequest())
    // const homepageUri = process.env.REACT_APP_HOMEPAGE_CAROUSEL_URI
    const homepageUri =
      'https://api.airtable.com/v0/apppvjKNuyzJcjxmH/Home-Carousel/recODBCRZU6HS2FJu'
    try {
      const response = await Axios.get(homepageUri, config)
      const data = response.data
      dispatch(fetchHomepageCarouselSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHomepageCarouselFailure(errorMsg))
    }
  }
}

const fetchLunchPackagesRequest = () => ({
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
    const lunchPackagesUri = process.env.REACT_APP_LUNCH_PACKAGES_URI
    try {
      const response = await Axios.get(lunchPackagesUri, config)
      const data = await response.data.records
      dispatch(fetchLunchPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackagesFailure(errorMsg))
    }
  }
}

const fetchLunchPackage1Request = () => ({
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
    const lunchPackage1Uri = process.env.REACT_APP_LUNCH_PACKAGE1_URI
    try {
      const response = await Axios.get(lunchPackage1Uri, config)
      const data = await response.data
      dispatch(fetchLunchPackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackage1Failure(errorMsg))
    }
  }
}

const fetchLunchPackage2Request = () => ({
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
    const lunchPackage2Uri = process.env.REACT_APP_LUNCH_PACKAGE2_URI
    try {
      const response = await Axios.get(lunchPackage2Uri, config)
      const data = await response.data
      dispatch(fetchLunchPackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchLunchPackage2Failure(errorMsg))
    }
  }
}

const fetchBirthdayPackagesRequest = () => ({
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
    const birthdayPackagesUri = process.env.REACT_APP_BIRTHDAY_PACKAGES_URI
    try {
      const response = await Axios.get(birthdayPackagesUri, config)
      const data = await response.data.records
      dispatch(fetchBirthdayPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBirthdayPackagesFailure(errorMsg))
    }
  }
}

const fetchBirthdayPackage1Request = () => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE1_REQUEST,
})

const fetchBirthdayPackage1Success = data => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE1_SUCCESS,
  payload: data,
})

const fetchBirthdayPackage1Failure = error => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE1_FAILURE,
  payload: error,
})

export const fetchBirthdayPackage1 = () => {
  return async dispatch => {
    dispatch(fetchBirthdayPackage1Request())
    const birthdayPackage1Uri = process.env.REACT_APP_BIRTHDAY_PACKAGE1_URI
    try {
      const response = await Axios.get(birthdayPackage1Uri, config)
      const data = await response.data
      dispatch(fetchBirthdayPackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBirthdayPackage1Failure(errorMsg))
    }
  }
}

const fetchBirthdayPackage2Request = () => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE2_REQUEST,
})

const fetchBirthdayPackage2Success = data => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE2_SUCCESS,
  payload: data,
})

const fetchBirthdayPackage2Failure = error => ({
  type: actionTypes.FETCH_BIRTHDAY_PACKAGE2_FAILURE,
  payload: error,
})

export const fetchBirthdayPackage2 = () => {
  return async dispatch => {
    dispatch(fetchBirthdayPackage2Request())
    const birthdayPackage2Uri = process.env.REACT_APP_BIRTHDAY_PACKAGE2_URI
    try {
      const response = await Axios.get(birthdayPackage2Uri, config)
      const data = await response.data
      dispatch(fetchBirthdayPackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBirthdayPackage2Failure(errorMsg))
    }
  }
}

const fetchBirthdayCustomPackageRequest = () => ({
  type: actionTypes.FETCH_BIRTHDAY_CUSTOM_PACKAGE_REQUEST,
})

const fetchBirthdayCustomPackageSuccess = data => ({
  type: actionTypes.FETCH_BIRTHDAY_CUSTOM_PACKAGE_SUCCESS,
  payload: data,
})

const fetchBirthdayCustomPackageFailure = error => ({
  type: actionTypes.FETCH_BIRTHDAY_CUSTOM_PACKAGE_FAILURE,
  payload: error,
})

export const fetchBirthdayCustomPackage = () => {
  return async dispatch => {
    dispatch(fetchBirthdayCustomPackageRequest())
    const birthdayCustomPackageUri =
      process.env.REACT_APP_BIRTHDAY_CUSTOM_PACKAGE_URI
    try {
      const response = await Axios.get(birthdayCustomPackageUri, config)
      const data = await response.data
      dispatch(fetchBirthdayCustomPackageSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchBirthdayCustomPackageFailure(errorMsg))
    }
  }
}

const fetchTablePackagesRequest = () => ({
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
    const tablePackagesUri = process.env.REACT_APP_TABLE_PACKAGES_URI
    try {
      const response = await Axios.get(tablePackagesUri, config)
      const data = await response.data.records
      dispatch(fetchTablePackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchTablePackagesFailure(errorMsg))
    }
  }
}

const fetchTablePackage1Request = () => ({
  type: actionTypes.FETCH_TABLE_PACKAGE1_REQUEST,
})

const fetchTablePackage1Success = data => ({
  type: actionTypes.FETCH_TABLE_PACKAGE1_SUCCESS,
  payload: data,
})

const fetchTablePackage1Failure = error => ({
  type: actionTypes.FETCH_TABLE_PACKAGE1_FAILURE,
  payload: error,
})

export const fetchTablePackage1 = () => {
  return async dispatch => {
    dispatch(fetchTablePackage1Request())
    const tablePackage1Uri = process.env.REACT_APP_TABLE_PACKAGE1_URI
    try {
      const response = await Axios.get(tablePackage1Uri, config)
      const data = await response.data
      dispatch(fetchTablePackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchTablePackage1Failure(errorMsg))
    }
  }
}

const fetchTablePackage2Request = () => ({
  type: actionTypes.FETCH_TABLE_PACKAGE2_REQUEST,
})

const fetchTablePackage2Success = data => ({
  type: actionTypes.FETCH_TABLE_PACKAGE2_SUCCESS,
  payload: data,
})

const fetchTablePackage2Failure = error => ({
  type: actionTypes.FETCH_TABLE_PACKAGE2_FAILURE,
  payload: error,
})

export const fetchTablePackage2 = () => {
  return async dispatch => {
    dispatch(fetchTablePackage2Request())
    const tablePackage2Uri = process.env.REACT_APP_TABLE_PACKAGE2_URI
    try {
      const response = await Axios.get(tablePackage2Uri, config)
      const data = await response.data
      dispatch(fetchTablePackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchTablePackage2Failure(errorMsg))
    }
  }
}

const fetchTableCustomPackageRequest = () => ({
  type: actionTypes.FETCH_TABLE_CUSTOM_PACKAGE_REQUEST,
})

const fetchTableCustomPackageSuccess = data => ({
  type: actionTypes.FETCH_TABLE_CUSTOM_PACKAGE_SUCCESS,
  payload: data,
})

const fetchTableCustomPackageFailure = error => ({
  type: actionTypes.FETCH_TABLE_CUSTOM_PACKAGE_FAILURE,
  payload: error,
})

export const fetchTableCustomPackage = () => {
  return async dispatch => {
    dispatch(fetchTableCustomPackageRequest())
    const tableCustomPackageUri = process.env.REACT_APP_TABLE_CUSTOM_PACKAGE_URI
    try {
      const response = await Axios.get(tableCustomPackageUri, config)
      const data = await response.data
      dispatch(fetchTableCustomPackageSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchTableCustomPackageFailure(errorMsg))
    }
  }
}

const fetchHotelPackagesRequest = () => ({
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
    const hotelPackagesUri = process.env.REACT_APP_HOTEL_PACKAGES_URI
    try {
      const response = await Axios.get(hotelPackagesUri, config)
      const data = await response.data.records
      dispatch(fetchHotelPackagesSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackagesFailure(errorMsg))
    }
  }
}

const fetchHotelPackage1Request = () => ({
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
    const hotelPackage1Uri = process.env.REACT_APP_HOTEL_PACKAGE1_URI
    try {
      const response = await Axios.get(hotelPackage1Uri, config)
      const data = await response.data
      dispatch(fetchHotelPackage1Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage1Failure(errorMsg))
    }
  }
}

const fetchHotelPackage2Request = () => ({
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
    const hotelPackage2Uri = process.env.REACT_APP_HOTEL_PACKAGE2_URI
    try {
      const response = await Axios.get(hotelPackage2Uri, config)
      const data = await response.data
      dispatch(fetchHotelPackage2Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage2Failure(errorMsg))
    }
  }
}

const fetchHotelPackage3Request = () => ({
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
    const hotelPackage3Uri = process.env.REACT_APP_HOTEL_PACKAGE3_URI
    try {
      const response = await Axios.get(hotelPackage3Uri, config)
      const data = await response.data
      dispatch(fetchHotelPackage3Success(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchHotelPackage3Failure(errorMsg))
    }
  }
}

const fetchPhotoPackageRequest = () => ({
  type: actionTypes.FETCH_PHOTO_PACKAGE_REQUEST,
})

const fetchPhotoPackageSuccess = data => ({
  type: actionTypes.FETCH_PHOTO_PACKAGE_SUCCESS,
  payload: data,
})

const fetchPhotoPackageFailure = error => ({
  type: actionTypes.FETCH_PHOTO_PACKAGE_FAILURE,
  payload: error,
})

export const fetchPhotoPackage = () => {
  return async dispatch => {
    dispatch(fetchPhotoPackageRequest())
    const photoPackageUri = process.env.REACT_APP_PHOTO_PACKAGE_URI
    try {
      const response = await Axios.get(photoPackageUri, config)
      const data = await response.data
      dispatch(fetchPhotoPackageSuccess(data))
    } catch (error) {
      const errorMsg = error.message
      dispatch(fetchPhotoPackageFailure(errorMsg))
    }
  }
}
