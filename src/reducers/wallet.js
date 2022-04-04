import {
  ADD_WALLET,
  DEL_WALLET,
  REQUEST_CURRENCIES,
  RECEIVE_CURR_SUCCESS,
  RECEIVE_CURR_FAILURE,
} from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

function wallet(state = initialState, action) {
  switch (action.type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: true,
    };
  case RECEIVE_CURR_SUCCESS:
    return {
      ...state,
      isFetching: false,
      currencies: action.currencies,
    };
  case RECEIVE_CURR_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
    };
  case ADD_WALLET:
    return action.value;
  case DEL_WALLET:
    return action.value;
  default:
    return state;
  }
}

export default wallet;
