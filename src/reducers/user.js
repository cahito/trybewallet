import { LOGIN } from '../actions/actionTypes';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: 'teste@testeStore.com',
};

function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return action.value;
  default:
    return state;
  }
}

export default user;
