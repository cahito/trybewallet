import {
  ADD_WALLET,
  DEL_WALLET,
  EDIT_WALLET,
  RECEIVE_CURR_FAILURE,
  RECEIVE_RATIOS_FAILURE,
  RECEIVE_CURR_SUCCESS,
  RECEIVE_RATIOS_SUCCESS,
  REQUEST_CURRENCIES,
  REQUEST_CURRENT_RATIOS,
} from '../actions/actionTypes';

/* const data = [{
  id: 0,
  value: '3',
  description: 'Hot Dog',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {
    USD: {
      code: 'USD',
      name: 'Dólar Comercial',
      ask: '5.6208',
    },
    CAD: {
      code: 'CAD',
      name: 'Dólar Canadense',
      ask: '4.2313',
    },
    EUR: {
      code: 'EUR',
      name: 'Euro',
      ask: '6.6112',
    },
    GBP: {
      code: 'GBP',
      name: 'Libra Esterlina',
      ask: '7.2498',
    },
    ARS: {
      code: 'ARS',
      name: 'Peso Argentino',
      ask: '0.0729',
    },
    BTC: {
      code: 'BTC',
      name: 'Bitcoin',
      ask: '60299',
    },
    LTC: {
      code: 'LTC',
      name: 'Litecoin',
      ask: '261.69',
    },
    JPY: {
      code: 'JPY',
      name: 'Iene Japonês',
      ask: '0.05301',
    },
    CHF: {
      code: 'CHF',
      name: 'Franco Suíço',
      ask: '6.1297',
    },
    AUD: {
      code: 'AUD',
      name: 'Dólar Australiano',
      ask: '4.0124',
    },
    CNY: {
      code: 'CNY',
      name: 'Yuan Chinês',
      ask: '0.8278',
    },
    ILS: {
      code: 'ILS',
      name: 'Novo Shekel Israelense',
      ask: '1.6514',
    },
    ETH: {
      code: 'ETH',
      name: 'Ethereum',
      ask: '5184',
    },
    XRP: {
      code: 'XRP',
      name: 'Ripple',
      ask: '1.4',
    },
  },
},
{
  id: 1,
  value: '1.5',
  description: 'A coke',
  currency: 'EUR',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {
    USD: {
      code: 'USD',
      name: 'Dólar Comercial',
      ask: '5.6208',
    },
    CAD: {
      code: 'CAD',
      name: 'Dólar Canadense',
      ask: '4.2313',
    },
    EUR: {
      code: 'EUR',
      name: 'Euro',
      ask: '6.6112',
    },
    GBP: {
      code: 'GBP',
      name: 'Libra Esterlina',
      ask: '7.2498',
    },
    ARS: {
      code: 'ARS',
      name: 'Peso Argentino',
      ask: '0.0729',
    },
    BTC: {
      code: 'BTC',
      name: 'Bitcoin',
      ask: '60299',
    },
    LTC: {
      code: 'LTC',
      name: 'Litecoin',
      ask: '261.69',
    },
    JPY: {
      code: 'JPY',
      name: 'Iene Japonês',
      ask: '0.05301',
    },
    CHF: {
      code: 'CHF',
      name: 'Franco Suíço',
      ask: '6.1297',
    },
    AUD: {
      code: 'AUD',
      name: 'Dólar Australiano',
      ask: '4.0124',
    },
    CNY: {
      code: 'CNY',
      name: 'Yuan Chinês',
      ask: '0.8278',
    },
    ILS: {
      code: 'ILS',
      name: 'Novo Shekel Israelense',
      ask: '1.6514',
    },
    ETH: {
      code: 'ETH',
      name: 'Ethereum',
      ask: '5184',
    },
    XRP: {
      code: 'XRP',
      name: 'Ripple',
      ask: '1.4',
    },
  },
},
]; */

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
  isFetching: false,
  ratios: [],
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
    return {
      ...state,
      expenses: [...state.expenses, action.value],
    };
  case DEL_WALLET:
    return action.value;
  case EDIT_WALLET:
    return action.value;
  case REQUEST_CURRENT_RATIOS:
    return {
      ...state,
    };
  case RECEIVE_RATIOS_SUCCESS:
    return {
      ...state,
      ratios: action.ratios,
    };
  case RECEIVE_RATIOS_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
}

export default wallet;
