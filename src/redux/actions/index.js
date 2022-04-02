import getCurrentRatios from '../../services/CurrenciesAPI';
import {
  ADD_WALLET,
  DEL_WALLET,
  REQUEST_CURRENCIES,
  RECEIVE_CURR_SUCCESS,
  RECEIVE_CURR_FAILURE,
  LOGIN,
} from './actionTypes';

export const addExpense = (value) => ({ type: ADD_WALLET, value });

export const delExpense = (value) => ({ type: DEL_WALLET, value });

export const login = (value) => ({ type: LOGIN, value });

// Lógica para o thunk

// export const getCurrencies = (value) => ({ type: , value });

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrenciesSuccess = (data) => ({
  type: RECEIVE_CURR_SUCCESS,
  currencies: data.filter((eachNew) => eachNew !== 'USDT'),
});

export const receiveCurrenciesFailure = (error) => ({
  type: RECEIVE_CURR_FAILURE,
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      const currencies = await getCurrentRatios();
      const data = Object.keys(currencies);
      dispatch(receiveCurrenciesSuccess(data));
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}
