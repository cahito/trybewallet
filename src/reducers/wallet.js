import { ADD_WALLET, DEL_WALLET } from '../actions/actionTypes';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {};

function wallet(state = initialState, action) {
  switch (action.type) {
  case ADD_WALLET:
    return action.value;
  case DEL_WALLET:
    return action.value;
  default:
    return state;
  }
}

export default wallet;
