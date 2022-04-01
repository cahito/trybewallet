import { ADD_WALLET, DEL_WALLET, LOADING, LOGIN } from './actionTypes';

export const loading = (boolean) => ({ type: LOADING, boolean });

export const login = (value) => ({ type: LOGIN, value });

export const addExpense = (value) => ({ type: ADD_WALLET, value });

export const delExpense = (value) => ({ type: DEL_WALLET, value });
