import {
    GET_PRICES_CLINIC_LIST,
    GET_PRICES_CLINIC_LIST_SUCCESS,
    GET_PRICES_CLINIC_LIST_FAILED
} from "../actions/price.list.action";
  
const initialState = {
    prices: {},
    loading: false,
    failed: false
};

export function pricesReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRICES_CLINIC_LIST:
        return Object.assign({}, state, {
          loading: true,
          failed: false
        });
      case GET_PRICES_CLINIC_LIST_SUCCESS:
        return Object.assign({}, state, {
          prices: action.payload,
          loading: false,
          failed: false
        });
      case GET_PRICES_CLINIC_LIST_FAILED:
        return Object.assign({}, state, {
          loading: false,
          failed: true
        });
      default:
        return state;
    }
}
  