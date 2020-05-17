import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: [],
  error: '',
}

const birthdayPackages = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BIRTHDAY_PACKAGES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_BIRTHDAY_PACKAGES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_BIRTHDAY_PACKAGES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default birthdayPackages
