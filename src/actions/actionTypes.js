export const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
    isLoading: false,
  },
};

export const ADD_WALLET = 'ADD_WALLET';

export const DEL_WALLET = 'DEL_WALLET';

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const RECEIVE_CURR_SUCCESS = 'RECEIVE_CURR_SUCCESS';

export const RECEIVE_CURR_FAILURE = 'RECEIVE_CURR_FAILURE';

export const LOGIN = 'LOGIN';
