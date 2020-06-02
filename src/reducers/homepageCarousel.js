import * as actionTypes from '../actions/actionTypes'

const initialState = {
  isLoading: false,
  data: {},
  error: '',
}

const homepageCarousel = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HOMEPAGE_CAROUSEL_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actionTypes.FETCH_HOMEPAGE_CAROUSEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actionTypes.FETCH_HOMEPAGE_CAROUSEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default homepageCarousel
