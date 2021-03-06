import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: '',
}

const lunchPackage1 = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LUNCH_PACKAGE1_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_LUNCH_PACKAGE1_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_LUNCH_PACKAGE1_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default lunchPackage1
