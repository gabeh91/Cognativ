import { APP_ACTIONS } from '../Helpers/Constants';

const initialState = {
  productData: null,

  errorMessage: null,

  isLoading: false,
  isError: false

}

const reducer = (state = initialState, action) => {

  const { payload, type } = action;
  
  switch (type) {
    case APP_ACTIONS.SET_LOADING_STATE:
      return {
        ...state,
        isLoading: payload
      }
    case APP_ACTIONS.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productData: payload,
        isError: false
      }
    case APP_ACTIONS.GET_PRODUCT_LIST_FAIL:
      return {
        ...state,
        errorMessage: payload,
        isError: true
      }
    default:
      return {
        ...state
      }
  }
  
}

export { reducer as appReducer };