import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: '',
}

const hotelPackage3 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOTEL_PACKAGE3_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_HOTEL_PACKAGE3_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_HOTEL_PACKAGE3_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    default:
      return state
  }
}

export default hotelPackage3
