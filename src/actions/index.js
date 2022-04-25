import getCurrentRatios from '../services/CurrenciesAPI';
import {
  ADD_WALLET,
  DEL_WALLET,
  EDIT_WALLET,
  UPDATE_WALLET,
  RECEIVE_CURR_FAILURE,
  RECEIVE_RATIOS_FAILURE,
  RECEIVE_CURR_SUCCESS,
  RECEIVE_RATIOS_SUCCESS,
  REQUEST_CURRENCIES,
  REQUEST_CURRENT_RATIOS,
  LOGIN,
} from './actionTypes';

export const addExpense = (value) => ({ type: ADD_WALLET, value });

export const delExpense = (value) => ({ type: DEL_WALLET, value });

export const editExpense = (value) => ({ type: EDIT_WALLET, value });

export const updateExpense = (value, value2) => ({ type: UPDATE_WALLET, value, value2 });

export const login = (value) => ({ type: LOGIN, value });

// Lógica para o thunk

// export const getCurrencies = (value) => ({ type: , value });

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
});

export const receiveCurrenciesSuccess = (data) => {
  const currenciesKeys = Object.keys(data);
  return {
    type: RECEIVE_CURR_SUCCESS,
    currencies: currenciesKeys.filter((eachNew) => eachNew !== 'USDT'),
  };
};

export const receiveCurrenciesFailure = (error) => ({
  type: RECEIVE_CURR_FAILURE,
  error,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    dispatch(requestCurrencies());
    try {
      // console.log('State Inicial', getState());
      const data = await getCurrentRatios();
      dispatch(receiveCurrenciesSuccess(data));
      // console.log('State Atualizado', getState());
    } catch (error) {
      dispatch(receiveCurrenciesFailure(error));
    }
  };
}

export const requestCurrentRatios = () => ({
  type: REQUEST_CURRENT_RATIOS,
});

export const receiveRatiosSuccess = (data) => ({
  type: RECEIVE_RATIOS_SUCCESS,
  ratios: data,
});

export const receiveRatiosFailure = (error) => ({
  type: RECEIVE_RATIOS_FAILURE,
  error,
});

export function fetchRatios() {
  return async (dispatch) => {
    dispatch(requestCurrentRatios());
    try {
      // console.log('State Inicial', getState());
      const data = await getCurrentRatios();
      dispatch(receiveRatiosSuccess(data));
      // console.log('State Atualizado', getState());
    } catch (error) {
      dispatch(receiveRatiosFailure(error));
    }
  };
}
