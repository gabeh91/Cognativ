import Helper from '../Helpers/Helper';
import { APP_ACTIONS } from '../Helpers/Constants';

/**
 * Gets a list of products from the API endpoint
 * @return {void} void
 */
export const getProductList = page => {
  return dispatch => {

    dispatch(setAppLoadingState(true));

    Helper.makeRequest(page,
      json => {
        dispatch({
          type: APP_ACTIONS.GET_PRODUCT_LIST_SUCCESS,
          payload: json
        });
      },
      text => {
        dispatch({
          type: APP_ACTIONS.GET_PRODUCT_LIST_FAIL,
          payload: text
        });
      },
      () => dispatch(setAppLoadingState(false))
    );

  }
}

/**
 * Sets the loading state of the app
 * @return {void} void
 */
const setAppLoadingState = isLoading => ({
  type: APP_ACTIONS.SET_LOADING_STATE,
  payload: isLoading
})