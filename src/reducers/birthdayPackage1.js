import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: '',
}

const birthdayPackage1 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BIRTHDAY_PACKAGE1_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_BIRTHDAY_PACKAGE1_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_BIRTHDAY_PACKAGE1_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    default:
      return state
  }
}

export default birthdayPackage1
