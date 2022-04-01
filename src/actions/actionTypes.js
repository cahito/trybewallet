export const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isLoading: false,
};

export const LOGIN = 'LOGIN';

export const ADD_WALLET = 'ADD_WALLET';

export const DEL_WALLET = 'DEL_WALLET';

export const LOADING = 'LOADING';
